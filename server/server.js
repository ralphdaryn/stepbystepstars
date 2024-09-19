const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Temporary in-memory storage for bookings
let bookings = [];

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Route to get all bookings
app.get('/api/bookings', (req, res) => {
  res.json(bookings);  // Send all stored bookings
});

// Route to create a new booking
app.post('/api/bookings', (req, res) => {
  const booking = req.body;
  bookings.push(booking);  // Add new booking to in-memory array
  res.status(201).json({ message: 'Booking created successfully', booking });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
