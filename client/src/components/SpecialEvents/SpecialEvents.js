import "./SpecialEvents.scss";
import { useState } from "react";
import specialEvents2 from "../../assets/images/soca.jpeg";
import specialEvents3 from "../../assets/images/valentine.jpeg";
import specialEvents4 from "../../assets/images/babydance.jpeg";
import specialEvents5 from "../../assets/images/smallgrouptrain.jpeg";
import specialEvents6 from "../../assets/images/mommyme.jpeg";
import specialEvents7 from "../../assets/images/music.jpeg";

const SpecialEvents = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => setSelectedMedia(mediaSrc);
  const closeMedia = () => setSelectedMedia(null);

  const linkToBuyTickets2 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=3&k_id=915599",
      "_blank",
    );
  };

  const linkToBuyTickets3 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=3&k_id=911145",
      "_blank",
    );
  };

  const linkToBuyTickets4 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=911163&k_class_tab=66299",
      "_blank",
    );
  };
  const linkToBuyTickets5 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877",
      "_blank",
    );
  };
  const linkToBuyTickets6 = () => {
    window.open(
      "  https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=3&k_id=916112",
      "_blank",
    );
  };

  return (
    <div className="special-events">
      <div className="special-events__header">
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
            src={specialEvents6}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents6)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets5}
          >
            Click Here to Register!
          </button>
        </div>
      </div>
      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents5}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents5)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets5}
          >
            Click Here to Register!
          </button>
        </div>
      </div>
      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents3}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents3)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets3}
          >
            Click Here to Register!
          </button>
        </div>
      </div>
      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents4}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents4)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets4}
          >
            Click Here to Register!
          </button>
        </div>
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
      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents2}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents2)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets2}
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
