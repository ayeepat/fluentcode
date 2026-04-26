// supabase/functions/stripe-webhook/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, stripe-signature",
      },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.text();
    let event;

    try {
      event = JSON.parse(body);
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }

    console.log("Received Stripe event:", event.type);

    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") ?? "";

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const clerkUserId = session.metadata?.clerk_user_id || session.client_reference_id;
      const subscriptionId = session.subscription;
      const customerId = session.customer;

      console.log("checkout.session.completed for clerk user:", clerkUserId);

      if (clerkUserId && subscriptionId) {
        // Fetch subscription from Stripe directly
        const subRes = await fetch(
          `https://api.stripe.com/v1/subscriptions/${subscriptionId}`,
          {
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`,
            },
          }
        );
        const subscription = await subRes.json();
        console.log("Subscription fetched:", subscription.id, "period end:", subscription.current_period_end);

        const { error } = await supabase
          .from("user_progress")
          .update({
            is_pro: true,
            stripe_customer_id: customerId,
            stripe_subscription_id: subscriptionId,
            subscription_status: "active",
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("clerk_user_id", clerkUserId);

        if (error) {
          console.error("DB update error:", error);
        } else {
          console.log("User upgraded to Pro:", clerkUserId);
        }
      }
    }

    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object;
      const customerId = subscription.customer;
      const cancelAtPeriodEnd = subscription.cancel_at_period_end;
      const status = subscription.status;

      console.log("subscription.updated for customer:", customerId);

      const { error } = await supabase
        .from("user_progress")
        .update({
          subscription_status: cancelAtPeriodEnd ? "canceling" : status,
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_customer_id", customerId);

      if (error) {
        console.error("DB update error:", error);
      }
    }

    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object;
      const customerId = subscription.customer;

      console.log("subscription.deleted for customer:", customerId);

      const { error } = await supabase
        .from("user_progress")
        .update({
          is_pro: false,
          subscription_status: "canceled",
          stripe_subscription_id: null,
          current_period_end: null,
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_customer_id", customerId);

      if (error) {
        console.error("DB update error:", error);
      }
    }

    if (event.type === "invoice.payment_succeeded") {
      const invoice = event.data.object;
      const subscriptionId = invoice.subscription;
      const customerId = invoice.customer;

      if (subscriptionId) {
        const subRes = await fetch(
          `https://api.stripe.com/v1/subscriptions/${subscriptionId}`,
          {
            headers: {
              Authorization: `Bearer ${stripeSecretKey}`,
            },
          }
        );
        const subscription = await subRes.json();

        const { error } = await supabase
          .from("user_progress")
          .update({
            is_pro: true,
            subscription_status: "active",
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId);

        if (error) {
          console.error("DB update error:", error);
        }
      }
    }

    if (event.type === "invoice.payment_failed") {
      const invoice = event.data.object;
      const customerId = invoice.customer;

      const { error } = await supabase
        .from("user_progress")
        .update({
          subscription_status: "past_due",
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_customer_id", customerId);

      if (error) {
        console.error("DB update error:", error);
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: "Webhook handler failed" }),
      { status: 500 }
    );
  }
});