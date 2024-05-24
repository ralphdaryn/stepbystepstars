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
        <h2 className="contact__title">Contact</h2>
        <form onSubmit={handleSubmit}>
          {["name", "email", "phoneNumber"].map((field) => (
            <div key={field} className="contact__form-group">
              <label htmlFor={field} className="contact__label">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="contact__input"
              />
            </div>
          ))}
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
