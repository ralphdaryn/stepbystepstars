require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Parse the incoming data
    const { name, email, subscribe } = JSON.parse(event.body);

    if (!email || !email.includes("@")) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid email address." }),
      };
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email for the admin (you or your client)
    const adminMailOptions = {
      from: `"Mailing List Signup" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Mailing List Signup`,
      html: `
        <h1>New Subscriber</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed to Updates:</strong> ${
          subscribe ? "Yes" : "No"
        }</p>
      `,
    };

    const userMailOptions = {
      from: `"Step By Step Club" <${process.env.RECIPIENT_EMAIL}>`, // Email will appear as coming from RECIPIENT_EMAIL
      to: email,
      subject: `Welcome to Step By Step Club!`,
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
              <h1 style="font-size: 24px; color: #773e8d; margin-bottom: 5px;">Welcome to Step By Step Club!</h1>
              <p style="font-size: 16px; color: #555;">Thank you for subscribing to our mailing list.</p>
            </div>
            
            <hr style="border: none; border-top: 2px solid #dab6ff; margin: 20px 0;" />
            
            <p style="font-size: 16px; line-height: 1.6;">
              Dear <strong>${name}</strong>,
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              We're excited to have you join our community! You'll now receive updates, news, and special offers tailored just for you.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              If you have any questions or need assistance, feel free to reach out to us:
            </p>
            
            <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px; color: #555;">
              <li><strong>Email:</strong> <a href="mailto:${process.env.RECIPIENT_EMAIL}" style="color: #773e8d; text-decoration: none;">${process.env.RECIPIENT_EMAIL}</a></li>
              <li><strong>Phone:</strong> (647)-998-8074</li>
              <li><strong>Address:</strong> 1400 Bayly St. Unit 13B</li>
            </ul>
            
            <hr style="border: none; border-top: 2px solid #dab6ff; margin: 20px 0;" />
            
            <p style="font-size: 16px; text-align: center;">
              <a href="https://stepbystepclub.ca" target="_blank" style="text-decoration: none; color: #ffffff; background-color: #773e8d; padding: 10px 20px; border-radius: 5px; font-size: 16px; display: inline-block;">
                Visit Our Website
              </a>
            </p>
            
            <p style="font-size: 14px; text-align: center; color: #777;">
              You’re receiving this email because you subscribed to updates from Step By Step Club.<br />
              If this was a mistake or you no longer wish to receive updates, please <a href="mailto:${process.env.RECIPIENT_EMAIL}" style="color: #773e8d; text-decoration: none;">contact us</a> to unsubscribe.
            </p>
          </div>
        `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Subscription successful!" }),
    };
  } catch (error) {
    console.error("Error processing subscription:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to process subscription." }),
    };
  }
};
