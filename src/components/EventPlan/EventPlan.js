import "./EventPlan.scss";
import { useNavigate } from "react-router-dom";

const EventPlan = () => {
  const navigate = useNavigate();
  const goToBookingForm = () => {
    window.scrollTo(0, 0);
    navigate("/events");
  };
  return (
    <div className="eventplan">
      <h2 className="eventplan__title">Plan Your Event</h2>
      <p className="eventplan__subtitle">
        Make every birthday a day to remember. Click below to start planning!
      </p>
      <button className="eventplan__button" onClick={goToBookingForm}>
        Start Planning
      </button>
    </div>
  );
};

export default EventPlan;
