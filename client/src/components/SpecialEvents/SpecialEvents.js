import { useState } from "react";
import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import specialEvents from "../../assets/images/sensory_play.jpeg";
import specialEvents2 from "../../assets/images/easter_egg.jpeg";

const SpecialEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  const linkToBuyTickets = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=783878&k_class_tab=66373",
      "_blank"
    );
  };

  const linkToBuyTickets2 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=784859&k_class_tab=66373",
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
          src={specialEvents}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openImage(specialEvents)}
        />
        <button className="special-events__button" onClick={linkToBuyTickets}>
          Click Here To Buy Tickets!
        </button>
      </div>

      <div className="special-events__image-container">
        <img
          src={specialEvents2}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openImage(specialEvents2)}
        />
        <button className="special-events__button" onClick={linkToBuyTickets2}>
          Click Here To Buy Tickets!
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="image-modal__close" onClick={closeImage}>
            &times;
          </span>
          <img
            className="image-modal__content"
            src={selectedImage}
            alt="Full View"
          />
        </div>
      )}
    </div>
  );
};

export default SpecialEvents;
