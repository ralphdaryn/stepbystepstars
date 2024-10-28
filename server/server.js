require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Stripe setup

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

// Stripe Checkout Route
app.post("/api/create-checkout-session", async (req, res) => {
  const { eventName, tickets, price } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: eventName },
            unit_amount: price * 100, // Amount in cents
          },
          quantity: tickets,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Failed to create checkout session" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
