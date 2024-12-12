// require("dotenv").config();
// const nodemailer = require("nodemailer");

// exports.handler = async (event) => {
//   if (event.httpMethod !== "POST") {
//     return {
//       statusCode: 405,
//       body: JSON.stringify({ message: "Method Not Allowed" }),
//     };
//   }

//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       dateOfEvent,
//       timeOfEvent,
//       numberOfChildren,
//     } = JSON.parse(event.body);

//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `New Event Booking Request: ${firstName} ${lastName}`,
//       text: `
//         New Event Booking Request:
//         Name: ${firstName} ${lastName}
//         Email: ${email}
//         Phone: ${phoneNumber}
//         Date of Event: ${dateOfEvent}
//         Time of Event: ${timeOfEvent}
//         Number of Children: ${numberOfChildren}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Booking email sent successfully!" }),
//     };
//   } catch (error) {
//     console.error("Error sending booking email:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: "Failed to send booking email." }),
//     };
//   }
// };

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
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfEvent,
      timeOfEvent,
      numberOfChildren,
    } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for the recipient (Step By Step Club owner)
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Booking: ${firstName} ${lastName}`,
      html: `
        <h1>New Event Booking Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Date of Event:</strong> ${dateOfEvent}</p>
        <p><strong>Time of Event:</strong> ${timeOfEvent}</p>
        <p><strong>Number of Children:</strong> ${numberOfChildren}</p>
      `,
    };

    // Email content for the user (confirmation email)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank You for Booking with Step By Step Club!`,
      html: `
        <h1>Thank You for Booking with Step By Step Club!</h1>
        <p>Dear ${firstName} ${lastName},</p>
        <p>We’re excited to host your event! Here are the details of your booking:</p>
        <ul>
          <li><strong>Date of Event:</strong> ${dateOfEvent}</li>
          <li><strong>Time of Event:</strong> ${timeOfEvent}</li>
          <li><strong>Number of Children:</strong> ${numberOfChildren}</li>
        </ul>
        <p>If you have any questions or need to make changes to your booking, feel free to contact us at ${process.env.RECIPIENT_EMAIL}.</p>
        <p>Looking forward to making your event memorable!</p>
        <p>Best regards,</p>
        <p><strong>Step By Step Club</strong></p>
      `,
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Booking email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending booking email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send booking email." }),
    };
  }
};
