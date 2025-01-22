require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { name, email, phoneNumber, subject, message } = JSON.parse(
      event.body
    );

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Step By Step Club" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; color: #333; border: 1px solid #ddd; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 20px;">
                <img 
                  src="https://stepbystepclub.ca/static/media/logo.13e5776cc45d900a6775.png" 
                  alt="Step By Step Club Logo" 
                  style="width: 120px; height: auto;" 
                />
                <img 
                  src="https://stepbystepclub.ca/static/media/stown-purple.5d2b02d4745e0734dcae.jpeg" 
                  alt="Second Logo" 
                  style="width: 125px; height: auto;" 
                />
              </div>
              <h1 style="font-size: 24px; color: #773e8d; margin-bottom: 5px;">New Contact Form Submission</h1>
              <p style="font-size: 16px; color: #555;">You have a new message from your website's contact form.</p>
            </div>
            
            <hr style="border: none; border-top: 2px solid #dab6ff; margin: 20px 0;" />
            
            <p style="font-size: 16px; line-height: 1.6;">
              <strong>Details:</strong>
            </p>
            <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px; color: #555;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> <a href="mailto:${email}" style="color: #773e8d; text-decoration: none;">${email}</a></li>
              <li><strong>Phone:</strong> ${phoneNumber}</li>
              <li><strong>Subject:</strong> ${subject}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
            
            <hr style="border: none; border-top: 2px solid #dab6ff; margin: 20px 0;" />
            
            <p style="font-size: 14px; text-align: center; color: #777;">
              This email was sent automatically.
            </p>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send message." }),
    };
  }
};
