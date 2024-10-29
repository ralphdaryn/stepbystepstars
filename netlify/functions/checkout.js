const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
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
            currency: "cad", // Change to CAD
            product_data: {
              name: "Grand Opening Ribbon Cutting",
            },
            unit_amount: 1000, // Amount in cents ($10.00 CAD)
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

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
