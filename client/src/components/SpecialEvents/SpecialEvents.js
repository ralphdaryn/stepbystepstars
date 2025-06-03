import { useState } from "react";
import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import specialEvents from "../../assets/images/french_camp.jpeg";
import specialEvents1 from "../../assets/images/summer_camp.jpeg";
import specialEvents2 from "../../assets/images/soca-june.jpeg";

const SpecialEvents = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => setSelectedMedia(mediaSrc);
  const closeMedia = () => setSelectedMedia(null);

  const linkToBuyTickets = () => {
    window.open(
      "https://www.wellnessliving.com/rs/book-process.html?id_book_process_back=8&id_class_tab=2&id_place=1&k_class_tab=66373&uid=56221530&dt_date=2025-07-07+13%3A00%3A00&k_class_period=15060258&k_business=651877&id_mode=1",
      "_blank"
    );
  };

  const linkToBuyTickets1 = () => {
    window.open(
      "  https://www.wellnessliving.com/rs/book-process.html?id_book_process_back=8&id_class_tab=2&id_place=1&k_class_tab=66373&uid=56221530&dt_date=2025-07-14+13%3A00%3A00&k_class_period=15060281&k_business=651877&id_mode=1",
      "_blank"
    );
  };

  const linkToBuyTickets2 = () => {
    window.open(
      "  https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=3&k_id=813889",
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
            src={specialEvents1}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents1)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets1}
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
