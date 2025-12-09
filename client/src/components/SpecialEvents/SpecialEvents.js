import "./SpecialEvents.scss";
import { useState } from "react";
import BackButton from "../BackButton/BackButton";
import specialEvents from "../../assets/images/mommy-fitness.jpeg";
import specialEvents1 from "../../assets/images/smallgroup.PNG";
import specialEvents4 from "../../assets/images/pajama.jpeg";
import specialEvents5 from "../../assets/images/teaparty.jpeg";
import specialEvents6 from "../../assets/images/santaclaus.jpeg";
import specialEvents7 from "../../assets/images/newyear.jpeg";
import specialEvents8 from "../../assets/images/dropinplay.PNG";
import specialEvents10 from "../../assets/images/christmas.jpeg";
import specialEvents11 from "../../assets/images/training.jpeg";
import specialEvents12 from "../../assets/images/christmas2.jpeg";

const SpecialEvents = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => setSelectedMedia(mediaSrc);
  const closeMedia = () => setSelectedMedia(null);

  const linkToBuyTickets = () => {
    window.open(
      " https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877",
      "_blank"
    );
  };

  const linkToBuyTickets2 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=877471&k_class_tab=66373",
      "_blank"
    );
  };

  const linkToBuyTickets3 = () => {
    window.open(
      "https://www.wellnessliving.com/schedule/step_by_step_club?id_class_tab=1&k_class=844005#dt_date=2025-10-11&f_distance=50&f_latitude=&f_longitude=&filter=1&&id_screen=3&is_appointment_cancel_recurring=&is_appointment_cancel_single=&is_class_cancel=0&&&is_remove=0&is_week=1&&id_screen=3&k_business=651877&&&k_class_tab=0&&is_location=1&k_promotion=0&k_skin=0&&&s_period=calendar-month&&sort=&a_day[]=7%2C1%2C2%2C3%2C4%2C5%2C6&a_class[]=844005&a_staff[]=656393%2C660586%2C660587%2C660588&a_time[]=1%2C2%2C3&a_virtual[]=2%2C1&a_location[]=426598",
      "_blank"
    );
  };

  const linkToBuyTickets4 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=875165&k_class_tab=66373",
      "_blank"
    );
  };

  const linkToBuyTickets5 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=875815&k_class_tab=66373",
      "_blank"
    );
  };

  const linkToBuyTickets6 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=893309&k_class_tab=66373",
      "_blank"
    );
  };
  const linkToBuyTickets9 = () => {
    window.open(
      "  https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=878857&k_class_tab=66373",
      "_blank"
    );
  };
  const linkToBuyTickets11 = () => {
    window.open(
      "  https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=1&k_id=3895031",
      "_blank"
    );
  };
  const linkToBuyTickets12 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=1&k_id=3904840",
      "_blank"
    );
  };
  const linkToBuyTickets13 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=1&k_id=3914127",
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
            src={specialEvents10}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents10)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets11}
          >
            Click Here to Register!
          </button>
        </div>
              <div className="special-events__image-container">
          <img
            src={specialEvents12}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents12)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets13}
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
            onClick={linkToBuyTickets3}
          >
            Click Here to Register!
          </button>
        </div>
        <div className="special-events__image-container">
          <img
            src={specialEvents8}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents8)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets9}
          >
            Click Here to Register!
          </button>
        </div>
        <div className="special-events__image-container">
          <img
            src={specialEvents4}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents4)}
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
            src={specialEvents11}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents11)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets12}
          >
            Click Here to Register!
          </button>
        </div>
        <div className="special-events__image-container">
          <img
            src={specialEvents5}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents5)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets4}
          >
            Click Here to Register!
          </button>
        </div>
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
