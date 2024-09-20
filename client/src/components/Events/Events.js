import "./Events.scss";
import { useState, useEffect } from "react";
import BackButton from "../BackButton/BackButton";

const Events = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventName: "",
    eventAddress: "",
    dateOfEvent: "",
    timeOfEvent: "",
    ageRange: "",
    numberOfChildren: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert("Booking created successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          eventName: "",
          eventAddress: "",
          dateOfEvent: "",
          timeOfEvent: "",
          ageRange: "",
          numberOfChildren: "",
        });
      } else {
        alert("Failed to create booking.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while creating the booking.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="events">
      <div className="events__header">
        <BackButton />
        <h2 className="events__title">Book an event</h2>
      </div>
      <form className="events-form" onSubmit={handleSubmit}>
        <div className="events-form__field">
          <label className="events-form__label">First Name:</label>
          <input
            className="events-form__input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Last Name:</label>
          <input
            className="events-form__input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Email:</label>
          <input
            className="events-form__input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Phone Number:</label>
          <input
            className="events-form__input"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Event Name:</label>
          <input
            className="events-form__input"
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Event Address:</label>
          <input
            className="events-form__input"
            type="text"
            name="eventAddress"
            value={formData.eventAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Date of Event:</label>
          <input
            className="events-form__input"
            type="date"
            name="dateOfEvent"
            value={formData.dateOfEvent}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Time of Event:</label>
          <input
            className="events-form__input"
            type="time"
            name="timeOfEvent"
            value={formData.timeOfEvent}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">
            Age Range of Children/Attendees:
          </label>
          <input
            className="events-form__input"
            type="text"
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field">
          <label className="events-form__label">Number of Children:</label>
          <input
            className="events-form__input"
            type="number"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            required
          />
        </div>
        <div className="events-form__field events-form__field--submit">
          <button className="events-form__submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Events;
