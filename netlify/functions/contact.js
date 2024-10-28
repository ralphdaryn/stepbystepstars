const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  if (!name || !email || !phoneNumber || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  res.status(201).json({ message: "Contact form submitted successfully" });
});

module.exports.handler = serverless(app);
