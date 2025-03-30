import { useState } from "react";
import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import specialEvents from "../../assets/images/sensory_play.jpeg";
import specialEvents2 from "../../assets/images/easter_egg.jpeg";
import specialEvents3 from "../../assets/images/soca.jpeg";

const SpecialEvents = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => {
    setSelectedMedia(mediaSrc);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
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

  const linkToBuyTickets3 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=773659&k_class_tab=66373",
      "_blank"
    );
  };

  const linkToBuyTickets4 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=787030&k_class_tab=68173",
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
          src={specialEvents3}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openMedia(specialEvents3)}
        />
        <button className="special-events__button" onClick={linkToBuyTickets3}>
          Click to Register Here!
        </button>
      </div>

      <div className="special-events__image-container">
        <img
          src={specialEvents}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openMedia(specialEvents)}
        />
        <button className="special-events__button" onClick={linkToBuyTickets}>
          Click to Register Here!
        </button>
      </div>

      <div className="special-events__image-container">
        <img
          src={specialEvents2}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openMedia(specialEvents2)}
        />
        <button className="special-events__button" onClick={linkToBuyTickets2}>
          Click to Register Here!
        </button>
      </div>

      <div className="special-events__image-container">
        <video
          className="special-events__image"
          autoPlay
          muted
          loop
          playsInline
          onClick={() => openMedia("/videos/boxing_poster.mp4")}
        >
          <source src="/videos/boxing_poster.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="special-events__button" onClick={linkToBuyTickets4}>
          Click to Register Here!
        </button>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="image-modal" onClick={closeMedia}>
          <span className="image-modal__close" onClick={closeMedia}>
            &times;
          </span>
          {selectedMedia.includes(".mp4") ? (
            <video className="image-modal__content" controls autoPlay>
              <source src={selectedMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="image-modal__content"
              src={selectedMedia}
              alt="Full View"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SpecialEvents;
