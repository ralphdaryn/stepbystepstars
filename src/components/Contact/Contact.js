import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">Name</label>
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
              <label htmlFor="email" className="contact__label">Email</label>
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
              <label htmlFor="phoneNumber" className="contact__label">Phone Number</label>
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
            <label htmlFor="message" className="contact__label">Message</label>
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
