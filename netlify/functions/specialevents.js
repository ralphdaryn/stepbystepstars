require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { eventName, tickets, price } = JSON.parse(event.body);

    // Validate inputs
    if (!eventName || !tickets || !price || tickets <= 0 || price <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid request data" }),
      };
    }

    // Calculate the total price in cents (Stripe requires amounts in cents)
    const totalAmount = price * 100; // Convert price to cents (e.g., $10 => 1000 cents)

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad", // Set currency to CAD
            product_data: { name: eventName },
            unit_amount: totalAmount,
          },
          quantity: tickets,
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
