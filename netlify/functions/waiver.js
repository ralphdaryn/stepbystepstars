require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const {
      participantName,
      date,
      address,
      phone,
      email,
      emergencyContact,
      emergencyPhone,
      signature,
    } = JSON.parse(event.body);

    // Validate required fields
    if (!participantName || !date || !address || !phone || !email || !signature) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All required fields must be filled" }),
      };
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Waiver Form Submission",
      text: `New waiver form submission:\n
             Participant Name: ${participantName}\n
             Date: ${date}\n
             Address: ${address}\n
             Phone: ${phone}\n
             Email: ${email}\n
             Emergency Contact: ${emergencyContact}\n
             Emergency Phone: ${emergencyPhone}\n`,
      attachments: [
        {
          filename: "signature.png",
          content: signature.split("base64,")[1],
          encoding: "base64",
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Waiver submitted successfully!" }),
    };
  } catch (error) {
    console.error("Error submitting waiver:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to submit waiver." }),
    };
  }
};