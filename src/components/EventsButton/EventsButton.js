import "./EventsButton.scss";
import { useNavigate } from "react-router-dom";

const EventsButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/events");
  };

  return (
    <button className="events-button" onClick={handleButtonClick}>
      Book Your Event
    </button>
  );
};
export default EventsButton;
