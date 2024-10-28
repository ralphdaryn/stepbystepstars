// require('dotenv').config(); // For local testing with .env file
// const express = require("express");
// const serverless = require("serverless-http");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.EMAIL_USER,  // Loaded from .env
//     pass: process.env.EMAIL_PASS,
//   },
// });

// app.post("/contact", async (req, res) => {
//   const { name, email, phoneNumber, subject, message } = req.body;

//   if (!name || !email || !phoneNumber || !subject || !message) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.RECIPIENT_EMAIL,
//     subject: `New Contact Form Submission: ${subject}`,
//     text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(201).json({ message: "Your message has been sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send your message." });
//   }
// });

// module.exports.handler = serverless(app);

const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, phoneNumber, subject, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send message" }),
    };
  }
};
