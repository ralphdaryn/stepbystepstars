import "./Events.scss";
import { useState, useEffect } from "react";

const Events = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfEvent: "",
    timeOfEvent: "",
    numberOfChildren: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert(
          "Thank you for booking with Step By Step Club! A confirmation email has been sent."
        );
        setFormData(initialFormState);
      } else {
        alert("Failed to send booking request.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending the booking request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="events">
      <div className="events__container">
        <div className="events__header">
          <p className="events__eyebrow">Step By Step Club</p>
          <h2 className="events__title">Plan an Event</h2>
          <p className="events__text">
            Tell us a little about your special day and we’ll help create a fun,
            memorable experience for your children.
          </p>
        </div>

        <form className="events-form" onSubmit={handleSubmit}>
          <div className="events-form__grid">
            <div className="events-form__field">
              <label className="events-form__label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="events-form__input"
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="events-form__field">
              <label className="events-form__label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="events-form__input"
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>

            <div className="events-form__field">
              <label className="events-form__label" htmlFor="email">
                Email
              </label>
              <input
                className="events-form__input"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="events-form__field">
              <label className="events-form__label" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="events-form__input"
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="events-form__field">
              <label className="events-form__label" htmlFor="dateOfEvent">
                Date of Event
              </label>
              <input
                className="events-form__input"
                id="dateOfEvent"
                type="date"
                name="dateOfEvent"
                value={formData.dateOfEvent}
                onChange={handleChange}
                required
              />
            </div>

            <div className="events-form__field">
              <label className="events-form__label" htmlFor="timeOfEvent">
                Time of Event
              </label>
              <input
                className="events-form__input"
                id="timeOfEvent"
                type="time"
                name="timeOfEvent"
                value={formData.timeOfEvent}
                onChange={handleChange}
                required
              />
            </div>

            <div className="events-form__field events-form__field--full">
              <label className="events-form__label" htmlFor="numberOfChildren">
                Number of Children
              </label>
              <input
                className="events-form__input"
                id="numberOfChildren"
                type="number"
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleChange}
                placeholder="Enter number of children"
                min="1"
                required
              />
            </div>
          </div>

          <div className="events-form__actions">
            <button
              className="events-form__submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Booking Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Events;