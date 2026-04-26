// supabase/functions/create-checkout-session/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.25.0?target=denonext";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";
const stripePriceId = Deno.env.get("STRIPE_PRICE_ID") || "";
const appUrl = Deno.env.get("APP_URL") || "http://localhost:5173";

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
});

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

    if (!stripeSecretKey || !stripePriceId) {
      return new Response(
        JSON.stringify({ error: "Stripe is not configured on the server" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${appUrl}/subscription?success=true`,
      cancel_url: `${appUrl}/upgrade?canceled=true`,
      client_reference_id: clerkUserId,
      metadata: {
        clerk_user_id: clerkUserId,
        email: email,
      },
      allow_promotion_codes: true,
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("create-checkout-session error:", error);

    return new Response(
      JSON.stringify({ error: "Failed to create checkout session" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});