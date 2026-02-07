import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.scss";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    subject: "",
  });

  useEffect(() => {
    if (location.state?.scrollTo === "contact-section") {
      document
        .getElementById("contact-section")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message.");
      }

      const data = await response.json();
      alert(data.message || "Your message has been successfully submitted!");

      // ✅ GA4 event (fires only after successful submit)
      if (window.gtag) {
        window.gtag("event", "contact_submit", {
          subject: formData.subject || "unknown",
        });
      }

      setFormData({
        name: "",
        email: "",
        message: "",
        phoneNumber: "",
        subject: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div className="contact" id="contact-section">
      <h2 className="contact__title">Contact Us</h2>
      <div className="contact__wrapper">
        <div className="contact__container">
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
                required
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
                  required
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
                  required
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
                required
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
                required
              ></textarea>
            </div>

            <button className="contact__button" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="contact__map">
          <iframe
            src="https://storage.googleapis.com/maps-solutions-9o93soxjot/locator-plus/j8uo/locator-plus.html"
            className="contact__iframe"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;