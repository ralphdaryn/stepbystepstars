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
          `Child ${index + 1}: Name: ${child.childName}, Age: ${child.childAge}`
      )
      .join("\n");

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Customize email content based on waiver type
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Kids Play Area Waiver Submission",
      text: `Kids Play Area Waiver Submission:\n
           Parent/Guardian Name: ${parentName}\n
           ${childrenInfo}\n
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
