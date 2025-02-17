import "./EventsButton.scss";

const EventsButton = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-01-14+02%3A10%3A44&id_class_tab=3&id_mode=1&k_class_tab=66372&k_service=267754&k_service_category=61287&s_id=ZLOW6a";
  };

  return (
    <button className="events-button" onClick={handleButtonClick}>
      Book Now
    </button>
  );
};

export default EventsButton;
