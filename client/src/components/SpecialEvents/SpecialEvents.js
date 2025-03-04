import { useState } from "react";
import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import specialEvents2 from "../../assets/images/glowparty.jpeg";
import specialEvents3 from "../../assets/images/singmusic.jpeg";
import specialEvents4 from "../../assets/images/sesamestreet.jpeg";
import specialEvents5 from "../../assets/images/marchbreakhours.jpeg";

const SpecialEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  const linkToBuyTickets2 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=776835&k_class_tab=66373",
      "_blank"
    );
  };
  const linkToBuyTickets3 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=3&k_id=776845",
      "_blank"
    );
  };
  const linkToBuyTickets4 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=776846&k_class_tab=66373",
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

      {/* Images with Modal Click */}
  

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

      <div className="special-events__image-container">
        <img
          src={specialEvents3}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openImage(specialEvents3)}
        />
        <button className="special-events__button" onClick={linkToBuyTickets3}>
          Click Here To Buy Tickets!
        </button>
      </div>

      <div className="special-events__image-container">
        <img
          src={specialEvents4}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openImage(specialEvents4)}
        />
        <button className="special-events__button" onClick={linkToBuyTickets4}>
          Click Here To Buy Tickets!
        </button>
      </div>

      <div className="special-events__image-container">
        <img
          src={specialEvents5}
          alt="Special Event"
          className="special-events__image"
          onClick={() => openImage(specialEvents5)}
        />
        <h2 className="special-events__subtext">
          Join our over March Break for drop-in play and fun activities!
        </h2>
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
