import "./EventsButton.scss";

const EventsButton = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2024-12-31+14%3A54%3A22&id_class_tab=3&id_mode=1&k_class_tab=66298&s_id=OzPPUQ";
  };

  return (
    <button className="events-button" onClick={handleButtonClick}>
      Book Your Event
    </button>
  );
};

export default EventsButton;
