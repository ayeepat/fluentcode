// supabase/functions/cancel-subscription/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { clerkUserId } = await req.json();

    if (!clerkUserId) {
      return new Response(
        JSON.stringify({ error: "Missing clerkUserId" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const serviceRoleKey = Deno.env.get("SERVICE_ROLE_KEY") ?? "";
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") ?? "";

    const userRes = await fetch(
      `${supabaseUrl}/rest/v1/user_progress?clerk_user_id=eq.${encodeURIComponent(clerkUserId)}&select=*`,
      {
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
        },
      }
    );

    const users = await userRes.json();
    const userProgress = Array.isArray(users) ? users[0] : null;

    if (!userProgress?.stripe_subscription_id) {
      return new Response(
        JSON.stringify({ error: "No active subscription found" }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const stripeRes = await fetch(
      `https://api.stripe.com/v1/subscriptions/${userProgress.stripe_subscription_id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${stripeSecretKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          cancel_at_period_end: "true",
        }).toString(),
      }
    );

    const subscription = await stripeRes.json();

    if (!subscription?.id) {
      console.error("Stripe cancel failed:", subscription);
      return new Response(
        JSON.stringify({ error: "Failed to cancel subscription in Stripe" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const currentPeriodEnd = subscription.current_period_end
      ? new Date(subscription.current_period_end * 1000).toISOString()
      : null;

    await fetch(
      `${supabaseUrl}/rest/v1/user_progress?clerk_user_id=eq.${encodeURIComponent(clerkUserId)}`,
      {
        method: "PATCH",
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          subscription_status: "canceling",
          current_period_end: currentPeriodEnd,
          updated_at: new Date().toISOString(),
        }),
      }
    );

    return new Response(
      JSON.stringify({
        success: true,
        current_period_end: currentPeriodEnd,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Cancel subscription error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to cancel subscription" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});