// require("dotenv").config();
// const nodemailer = require("nodemailer");

// exports.handler = async (event) => {
//   try {
//     const {
//       waiverType,
//       parentName,
//       date,
//       address,
//       phone,
//       email,
//       emergencyContact,
//       emergencyPhone,
//       children, // Expecting array of child objects
//       signature,
//     } = JSON.parse(event.body);

//     // Validate required fields based on waiver type
//     if (
//       waiverType === "kidsPlayArea" &&
//       (!parentName ||
//         !children.length ||
//         !date ||
//         !address ||
//         !phone ||
//         !email ||
//         !signature)
//     ) {
//       return {
//         statusCode: 400,
//         body: JSON.stringify({
//           error: "All required fields must be filled for kids play area waiver",
//         }),
//       };
//     }

//     // Format children info for email
//     const childrenInfo = children
//       .map(
//         (child, index) =>
//           `Child ${index + 1}: Name: ${child.childName}, Age: ${child.childAge}`
//       )
//       .join("\n");

//     // Configure the email transporter
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Customize email content based on waiver type
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: "New Kids Play Area Waiver Submission",
//       text: `Kids Play Area Waiver Submission:\n
//            Parent/Guardian Name: ${parentName}\n
//            ${childrenInfo}\n
//            Date: ${date}\n
//            Address: ${address}\n
//            Phone: ${phone}\n
//            Email: ${email}\n
//            Emergency Contact: ${emergencyContact}\n
//            Emergency Phone: ${emergencyPhone}\n`,
//       attachments: [
//         {
//           filename: "signature.png",
//           content: signature.split("base64,")[1],
//           encoding: "base64",
//         },
//       ],
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: "Waiver submitted successfully!" }),
//     };
//   } catch (error) {
//     console.error("Error submitting waiver:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to submit waiver." }),
//     };
//   }
// };

require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const {
      waiverType,
      parentName,
      date,
      address,
      phone,
      email,
      emergencyContact,
      emergencyPhone,
      children, // Expecting array of child objects
      signature,
    } = JSON.parse(event.body);

    // Validate required fields based on waiver type
    if (
      waiverType === "kidsPlayArea" &&
      (!parentName ||
        !children.length ||
        !date ||
        !address ||
        !phone ||
        !email ||
        !signature)
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "All required fields must be filled for kids play area waiver",
        }),
      };
    }

    // Format children info for email
    const childrenInfo = children
      .map(
        (child, index) =>
          `Child ${index + 1}:\n  Name: ${child.childName}\n  Age: ${
            child.childAge
          }`
      )
      .join("\n\n");

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for the club
    const clubMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Kids Play Area Waiver Submission",
      text: `Kids Play Area Waiver Submission:

Parent/Guardian Name: ${parentName}

${childrenInfo}

Date: ${date}
Address: ${address}
Phone: ${phone}
Email: ${email}
Emergency Contact: ${emergencyContact}
Emergency Phone: ${emergencyPhone}
`,
      attachments: [
        {
          filename: "signature.png",
          content: signature.split("base64,")[1],
          encoding: "base64",
        },
      ],
    };

    // Email content for the parent
    const parentMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Parent's email address from the form
      subject: "Copy of Your Waiver Submission - Step By Step Club Inc.",
      text: `Dear ${parentName},

Thank you for submitting the Kids Play Area Waiver and Release of Liability. Below is a copy of your submission for your records:

Parent/Guardian Name: ${parentName}

${childrenInfo}

Date: ${date}
Address: ${address}
Phone: ${phone}
Email: ${email}
Emergency Contact: ${emergencyContact}
Emergency Phone: ${emergencyPhone}

If you have any questions or need further assistance, please feel free to contact us.

Best regards,
Step By Step Club Inc.
`,
      attachments: [
        {
          filename: "signature.png",
          content: signature.split("base64,")[1],
          encoding: "base64",
        },
      ],
    };

    // Send the email to the club
    await transporter.sendMail(clubMailOptions);

    // Send the email to the parent
    await transporter.sendMail(parentMailOptions);

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
