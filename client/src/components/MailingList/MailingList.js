import "./MailingList.scss";
import { useState } from "react";

const MailingList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subscribe: false,
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/mailingListSignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setFormData({ name: "", email: "", subscribe: false });
      } else {
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mailing-list" id="subscribe">
      <div className="mailing-list__container">
        <h2 className="mailing-list__heading">Be Part of the Journey!</h2>
        <p className="mailing-list__description">
          Sign up now to receive the latest news and offers!
        </p>

        <form className="mailing-list__form" onSubmit={handleSubmit}>
          <div className="mailing-list__form-group">
            <label htmlFor="name" className="mailing-list__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mailing-list__input"
            />
          </div>

          <div className="mailing-list__form-group">
            <label htmlFor="email" className="mailing-list__label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mailing-list__input"
            />
          </div>

          <div className="mailing-list__form-group mailing-list__checkbox-group">
            <label className="mailing-list__checkbox-label">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mailing-list__checkbox"
                aria-label="Subscribe to mailing list"
              />
              Subscribe for updates!
            </label>
          </div>

          <button
            type="submit"
            className="mailing-list__button"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Sign Up"}
          </button>
        </form>

        {message && (
          <p
            className={`mailing-list__message ${
              message.includes("Thank you") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default MailingList;