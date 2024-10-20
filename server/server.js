require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Console log stripe key
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json({ limit: "10mb" })); // Increase limit for large payloads
app.use(cors());

// Temporary in-memory storage
let bookings = [];
let contactSubmissions = [];
let waivers = [];

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Route to get all bookings
app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

// Route to create a new booking
app.post("/api/bookings", (req, res) => {
  const { eventName, date, time, customerName, customerEmail, tickets } = req.body;

  if (!eventName || !date || !time || !customerName || !customerEmail || !tickets) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const booking = { eventName, date, time, customerName, customerEmail, tickets };
  bookings.push(booking);

  res.status(201).json({ message: "Booking created successfully", booking });
});

// Route to handle contact form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  if (!name || !email || !phoneNumber || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  contactSubmissions.push({ name, email, phoneNumber, subject, message });

  res.status(201).json({ message: "Contact form submitted successfully", data: req.body });
});

// Route to handle waiver form submissions
app.post("/api/waiver", (req, res) => {
  const {
    participantName, date, address, phone, email, emergencyContact,
    emergencyPhone, childName, childAge, signature,
  } = req.body;

  if (
    !participantName || !date || !address || !phone || !email ||
    !emergencyContact || !emergencyPhone || !signature
  ) {
    return res.status(400).json({ message: "All fields are required, including the signature." });
  }

  waivers.push({
    participantName, date, address, phone, email, emergencyContact,
    emergencyPhone, childName, childAge, signature,
  });

  res.status(201).json({ message: "Waiver submitted successfully", waiverData: req.body });
});

// Stripe Checkout Session Route
app.post("/api/create-checkout-session", async (req, res) => {
  const { eventName, tickets, price } = req.body;

  if (!eventName || !tickets || !price) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: eventName },
            unit_amount: price * 100, // Stripe expects the amount in cents
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
  console.log(`Server running on port ${PORT}`);
});