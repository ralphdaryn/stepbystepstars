const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json({ limit: "10mb" })); // Increase the limit to handle large base64 images
app.use(cors());

// Temporary in-memory storage for bookings, contact submissions, and waivers
let bookings = [];
let contactSubmissions = [];
let waivers = [];

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

  // Server-side validation to check if any field is empty
  if (!name || !email || !phoneNumber || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Save the contact form submission
  contactSubmissions.push({ name, email, phoneNumber, subject, message });

  // Respond with a success message
  res
    .status(201)
    .json({ message: "Contact form submitted successfully", data: req.body });
});

// Route to handle waiver form submissions
app.post("/api/waiver", (req, res) => {
  const {
    participantName,
    date,
    address,
    phone,
    email,
    emergencyContact,
    emergencyPhone,
    childName,
    childAge,
    signature,
  } = req.body;

  // Server-side validation for the waiver form fields
  if (
    !participantName ||
    !date ||
    !address ||
    !phone ||
    !email ||
    !emergencyContact ||
    !emergencyPhone ||
    !signature
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required, including the signature." });
  }

  // Save the waiver form submission
  waivers.push({
    participantName,
    date,
    address,
    phone,
    email,
    emergencyContact,
    emergencyPhone,
    childName,
    childAge,
    signature,
  });

  // Respond with a success message
  res
    .status(201)
    .json({ message: "Waiver submitted successfully", waiverData: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
