require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const {
      waiverType,
      participantName,
      parentName,
      date,
      address,
      phone,
      email,
      emergencyContact,
      emergencyPhone,
      childName,
      childAge,
      signature,
    } = JSON.parse(event.body);

    // Validate required fields based on waiver type
    if (
      waiverType === "groupFitness" &&
      (!participantName || !date || !address || !phone || !email || !signature)
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "All required fields must be filled for group fitness waiver",
        }),
      };
    } else if (
      waiverType === "kidsPlayArea" &&
      (!parentName ||
        !childName ||
        !childAge ||
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
      subject:
        waiverType === "groupFitness"
          ? "New Group Fitness Waiver Submission"
          : "New Kids Play Area Waiver Submission",
      text:
        waiverType === "groupFitness"
          ? `Group Fitness Waiver Submission:\n
           Participant Name: ${participantName}\n
           Date: ${date}\n
           Address: ${address}\n
           Phone: ${phone}\n
           Email: ${email}\n
           Emergency Contact: ${emergencyContact}\n
           Emergency Phone: ${emergencyPhone}\n`
          : `Kids Play Area Waiver Submission:\n
           Parent/Guardian Name: ${parentName}\n
           Child’s Name: ${childName}\n
           Child’s Age: ${childAge}\n
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
