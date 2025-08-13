import { useState } from "react";
import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import specialEvents from "../../assets/images/specialevents3.jpeg";
import specialEvents3 from "../../assets/images/specialevents2.jpeg";

const SpecialEvents = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => setSelectedMedia(mediaSrc);
  const closeMedia = () => setSelectedMedia(null);

  const linkToBuyTickets = () => {
    window.open(
      "    https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&is_filter=1&k_business=651877",
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
            src={specialEvents}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents)}
          />
          <button className="special-events__button" onClick={linkToBuyTickets}>
            Click Here to Register!
          </button>
        </div>
        <div className="special-events__image-container">
          <img
            src={specialEvents3}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents3)}
          />
          <a
            href="mailto:stepbystepstars@gmail.com"
            className="special-events__button"
          >
            Click to Register!
          </a>
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
