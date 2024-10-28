const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  console.log("Received event:", event.body); // Log incoming event for debugging

  try {
    const { quantity } = JSON.parse(event.body);

    if (!quantity || quantity <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid quantity" }),
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Grand Opening Ribbon Cutting" },
            unit_amount: 1000, // $10 per child
          },
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`, // Redirect to your domain on success
      cancel_url: `${process.env.CLIENT_URL}/cancel`,  // Redirect to your domain on cancel
    });

    console.log("Checkout session URL:", session.url); // Debugging log

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create Stripe checkout session" }),
    };
  }
};