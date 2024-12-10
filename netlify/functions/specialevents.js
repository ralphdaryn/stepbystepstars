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

    // Calculate the total price including 13% HST
    const baseAmount = price;
    const hstAmount = baseAmount * 0.13;
    const totalAmount = (baseAmount + hstAmount) * 100; // Stripe requires amount in cents

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad", // Set currency to CAD
            product_data: {
              name: eventName,
              description: `Base Price: $${baseAmount.toFixed(
                2
              )}, HST (13%): $${hstAmount.toFixed(2)}, Total: $${(
                baseAmount + hstAmount
              ).toFixed(
                2
              )}\n\n Includes 3 Cocktails or Mocktails (non-alcoholic) \n\n Cocktail #1: Christmas Mojito \n\n Cocktail #2: Mistletoe's Kiss (a vodka rosemary fizz) \n\n Cocktail #3: Gingerbread Martini \n\n Light refreshments will also be provided.`,
            },
            unit_amount: Math.round(totalAmount), // Convert to cents and round
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
      body: JSON.stringify({
        error: "Failed to create Stripe checkout session",
      }),
    };
  }
};
