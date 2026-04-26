// supabase/functions/sync-subscription/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { clerkUserId, email } = await req.json();

    if (!clerkUserId || !email) {
      return new Response(
        JSON.stringify({ error: "Missing clerkUserId or email" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SERVICE_ROLE_KEY") ?? ""
    );

    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") ?? "";

    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({ error: "Stripe is not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: existingRow, error: rowError } = await supabase
      .from("user_progress")
      .select("*")
      .eq("clerk_user_id", clerkUserId)
      .single();

    if (rowError || !existingRow) {
      return new Response(
        JSON.stringify({ error: "User progress row not found" }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    let customerId = existingRow.stripe_customer_id || null;

    // If we don't already know the Stripe customer, find it by email
    if (!customerId) {
      const query = encodeURIComponent(`email:'${email}'`);
      const customerRes = await fetch(
        `https://api.stripe.com/v1/customers/search?query=${query}&limit=1`,
        {
          headers: {
            Authorization: `Bearer ${stripeSecretKey}`,
          },
        }
      );

      const customerData = await customerRes.json();
      customerId = customerData?.data?.[0]?.id || null;
    }

    // No Stripe customer found = free user
    if (!customerId) {
      const { data: updatedRow, error: updateError } = await supabase
        .from("user_progress")
        .update({
          is_pro: false,
          stripe_customer_id: null,
          stripe_subscription_id: null,
          subscription_status: null,
          current_period_end: null,
          updated_at: new Date().toISOString(),
        })
        .eq("clerk_user_id", clerkUserId)
        .select()
        .single();

      if (updateError) {
        console.error("Failed to update free user:", updateError);
      }

      return new Response(
        JSON.stringify({
          success: true,
          progress: updatedRow,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const subscriptionsRes = await fetch(
      `https://api.stripe.com/v1/subscriptions?customer=${customerId}&status=all&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${stripeSecretKey}`,
        },
      }
    );

    const subscriptionsData = await subscriptionsRes.json();
    const subscriptions = Array.isArray(subscriptionsData?.data)
      ? subscriptionsData.data
      : [];

    // Find the most relevant subscription
    const subscription =
      subscriptions.find(
        (sub) =>
          ["active", "trialing", "past_due", "unpaid"].includes(sub.status) ||
          (sub.cancel_at_period_end && sub.status !== "canceled")
      ) || subscriptions[0] || null;

    if (!subscription) {
      const { data: updatedRow, error: updateError } = await supabase
        .from("user_progress")
        .update({
          is_pro: false,
          stripe_customer_id: customerId,
          stripe_subscription_id: null,
          subscription_status: null,
          current_period_end: null,
          updated_at: new Date().toISOString(),
        })
        .eq("clerk_user_id", clerkUserId)
        .select()
        .single();

      if (updateError) {
        console.error("Failed to clear subscription:", updateError);
      }

      return new Response(
        JSON.stringify({
          success: true,
          progress: updatedRow,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const currentPeriodEnd = subscription.current_period_end
      ? new Date(subscription.current_period_end * 1000).toISOString()
      : null;

    const isCanceled = subscription.status === "canceled";
    const isStillActiveThroughPeriod =
      subscription.cancel_at_period_end && currentPeriodEnd
        ? new Date(currentPeriodEnd).getTime() > Date.now()
        : false;

    const isPro =
      !isCanceled ||
      isStillActiveThroughPeriod;

    const subscriptionStatus = subscription.cancel_at_period_end
      ? "canceling"
      : subscription.status;

    const { data: updatedRow, error: updateError } = await supabase
      .from("user_progress")
      .update({
        is_pro: isPro,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscription.id,
        subscription_status: subscriptionStatus,
        current_period_end: currentPeriodEnd,
        updated_at: new Date().toISOString(),
      })
      .eq("clerk_user_id", clerkUserId)
      .select()
      .single();

    if (updateError) {
      console.error("Failed to sync subscription:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to update subscription in database" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        progress: updatedRow,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("sync-subscription error:", error);

    return new Response(
      JSON.stringify({ error: "Failed to sync subscription" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});