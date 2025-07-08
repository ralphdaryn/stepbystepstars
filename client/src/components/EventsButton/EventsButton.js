import "./EventsButton.scss";

const EventsButton = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-07-08+04%3A50%3A26&id_class_tab=3&id_mode=1&k_class_tab=66298&k_service=267220&k_service_category=61177&s_id=kHL0nX";
  };

  return (
    <button className="events-button" onClick={handleButtonClick}>
      Connect With Your Event Planner
    </button>
  );
};

export default EventsButton;
