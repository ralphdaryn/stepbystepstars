const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
