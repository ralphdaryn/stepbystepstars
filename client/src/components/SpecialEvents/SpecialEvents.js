import "./SpecialEvents.scss";
import { useState } from "react";
import BackButton from "../BackButton/BackButton";
import specialEvents7 from "../../assets/images/newyear.jpeg";


const SpecialEvents = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => setSelectedMedia(mediaSrc);
  const closeMedia = () => setSelectedMedia(null);





  const linkToBuyTickets6 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=893309&k_class_tab=66373",
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

      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents7}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents7)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets6}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

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
