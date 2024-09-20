const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Temporary in-memory storage for bookings
let bookings = [];

// Temporary in-memory storage for contact form submissions
let contactSubmissions = [];

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Route to get all bookings
app.get("/api/bookings", (req, res) => {
  res.json(bookings); // Send all stored bookings
});

// Route to create a new booking
app.post("/api/bookings", (req, res) => {
  const booking = req.body;
  bookings.push(booking); // Add new booking to in-memory array
  res.status(201).json({ message: "Booking created successfully", booking });
});

// Route to handle contact form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  // Log raw request body for debugging
  console.log("Raw request body:", req.body);

  // Server-side validation to check if any field is empty
  if (!name || !email || !phoneNumber || !subject || !message) {
    console.log("Error: Missing fields");
    return res.status(400).json({ message: "All fields are required." });
  }

  // Save the contact form submission
  contactSubmissions.push({ name, email, phoneNumber, subject, message });

  // Log the received contact form data
  console.log("Received contact form submission:", { name, email, phoneNumber, subject, message });

  // Respond with a success message and return the data received
  res.status(201).json({ message: "Contact form submitted successfully", data: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
