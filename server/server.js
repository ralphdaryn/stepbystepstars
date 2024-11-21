// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(express.json());
// app.use(cors());

// app.post("/api/create-checkout-session", async (req, res) => {
//   const { eventName, tickets, price, description, image } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "cad", // Use Canadian dollars
//             product_data: {
//               name: eventName,
//               description: description, // Include description
//               images: [image], // Include image (must be a publicly accessible URL)
//             },
//             unit_amount: price * 100, // Stripe expects the amount in cents
//           },
//           quantity: tickets,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//     });

//     res.json({ url: session.url });
//   } catch (error) {
//     console.error("Error creating checkout session:", error);
//     res.status(500).json({ message: "Failed to create checkout session" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) => {
  const { eventName, tickets, price, description, image } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad", // Use Canadian dollars
            product_data: {
              name: `${eventName} - ${description}`, // Concatenate description with the name
              images: [image], // Include image (must be a publicly accessible URL)
            },
            unit_amount: price * 100, // Stripe expects the amount in cents
          },
          quantity: tickets,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      metadata: {
        eventDescription: description, // Store description as metadata
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Failed to create checkout session" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
