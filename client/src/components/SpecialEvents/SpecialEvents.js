import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import newYearImg from "../../assets/images/newyear.JPEG";

const SpecialEvents = () => {
  const linkToBuyTickets = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=751129&k_class_tab=66373",
      "_blank"
    );
  };

  return (
    <div className="special-events">
      <div className="special-events__header">
        <BackButton />
        <h2 className="special-events__title">Special Events</h2>
      </div>
      <div className="special-events__intro">
        <p className="special-events__intro-text">
          Welcome to our Special Events! <br />
          Check out the exclusive events below to grab your tickets today!
        </p>
      </div>
      <div className="special-events__image-container">
        <img
          src={newYearImg}
          alt="New Year Celebration"
          className="special-events__image"
        />
        <button
          className="special-events__button"
          onClick={linkToBuyTickets}
        >
          Click Here To Buy Tickets!
        </button>
      </div>
    </div>
  );
};

export default SpecialEvents;
