import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation check for empty fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return; // Stop the submission if any field is empty
    }

    try {
      // Log form data before sending to the server
      console.log("Form data sent to server:", formData);

      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      // Log the response from the server
      console.log("Response from server:", data);

      if (response.ok) {
        alert("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
          phoneNumber: "",
          subject: "",
        }); // Reset the form after submission
      } else {
        alert("Failed to send your message.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="contact__input"
            />
          </div>
          <div className="contact__form-group contact__form-group--row">
            <div className="contact__form-group contact__form-group--half">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact__input"
              />
            </div>
            <div className="contact__form-group contact__form-group--half">
              <label htmlFor="phoneNumber" className="contact__label">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="contact__input"
              />
            </div>
          </div>
          <div className="contact__form-group">
            <label htmlFor="subject" className="contact__label">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="contact__input"
            >
              <option value="">Select a Subject</option>
              <option value="general">General</option>
              <option value="parties">Birthday Parties</option>
              <option value="fitness">Fitness</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="contact__textarea-message"
            ></textarea>
          </div>
          <button className="contact__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
