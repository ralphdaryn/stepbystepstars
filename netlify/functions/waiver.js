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

    // Format children info for email (HTML format for better readability)
    const childrenInfoHtml = children
      .map(
        (child, index) =>
          `<p><strong>Child ${index + 1}:</strong> ${child.childName} (Age: ${
            child.childAge
          })</p>`
      )
      .join("");

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for the club (Sent to stepxstepcontracts@gmail.com)
    const clubMailOptions = {
      from: `"Step By Step Club" <${process.env.RECIPIENT_EMAIL}>`,
      to: "stepxstepcontracts@gmail.com",
      subject: "New Kids Play Area Waiver Submission",
      text: `Kids Play Area Waiver Submission:

Parent/Guardian Name: ${parentName}

${children
  .map(
    (child, index) =>
      `Child ${index + 1}: Name: ${child.childName}, Age: ${child.childAge}`
  )
  .join("\n")}

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

    // Email content for the parent (Formatted HTML for better user readability)
    const parentMailOptions = {
      from: `"Step By Step Club" <${process.env.RECIPIENT_EMAIL}>`,
      to: email, // Parent's email address from the form
      subject: "Copy of Your Waiver Submission - Step By Step Club Inc.",
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
                  alt="S Town" 
                  style="width: 125px; height: auto;" 
                />
              </div>
              <h1 style="font-size: 24px; color: #773e8d; margin-bottom: 5px;">Kids Play Area Waiver Submission</h1>
              <p style="font-size: 16px; color: #555;">Here is a copy of your waiver submission.</p>
            </div>
            
            <hr style="border: none; border-top: 2px solid #dab6ff; margin: 20px 0;" />
            
            <p style="font-size: 16px; line-height: 1.6;">
              <strong>Parent/Guardian Name:</strong> ${parentName}
            </p>
            ${childrenInfoHtml}
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #773e8d; text-decoration: none;">${email}</a></p>
            <p><strong>Emergency Contact:</strong> ${emergencyContact}</p>
            <p><strong>Emergency Phone:</strong> ${emergencyPhone}</p>

            <hr style="border: none; border-top: 2px solid #dab6ff; margin: 20px 0;" />

            <p style="font-size: 16px; text-align: center;">
              <a href="https://stepbystepclub.ca" target="_blank" style="text-decoration: none; color: #ffffff; background-color: #773e8d; padding: 10px 20px; border-radius: 5px; font-size: 16px; display: inline-block;">
                Visit Our Website
              </a>
            </p>

            <p style="font-size: 14px; text-align: center; color: #777;">
              This email was sent automatically for your records.<br />
              If you need assistance, please <a href="mailto:${process.env.RECIPIENT_EMAIL}" style="color: #773e8d; text-decoration: none;">contact us</a>.
            </p>
          </div>
        `,
      attachments: [
        {
          filename: "signature.png",
          content: signature.split("base64,")[1],
          encoding: "base64",
        },
      ],
    };

    // Send the waiver email to stepxstepcontracts@gmail.com
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
