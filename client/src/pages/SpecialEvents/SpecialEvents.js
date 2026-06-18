import "./SpecialEvents.scss";
import { useState } from "react";

import specialEvents3 from "../../assets/images/smallgrouptrain.jpeg";
import specialEvents4 from "../../assets/images/mom-fitness.jpeg";
import specialEvents8 from "../../assets/images/strollerfit.jpeg";
import specialEvents9 from "../../assets/images/stroller-fitness.jpeg";
import specialEvents10 from "../../assets/images/soca.jpeg";
import specialEvents11 from "../../assets/images/bustrip.jpeg";
import specialEvents12 from "../../assets/images/bubbleshow.jpeg";
import specialEvents13 from "../../assets/images/kidsoca.PNG";

const SpecialEvents = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => setSelectedMedia(mediaSrc);
  const closeMedia = () => setSelectedMedia(null);

  // ✅ GA4: track booking / registration click
  const trackBookingClick = (label) => {
    window.gtag?.("event", "booking_click", {
      page: window.location.pathname,
      label,
    });
  };

  // ✅ track first, then open external registration link
  const openRegistrationLink = (url, label) => {
    trackBookingClick(label);
    window.open(url, "_blank");
  };

  // ✅ NEW: open email instead of link
  const openEmail = () => {
    trackBookingClick("bus_trip_email");

    const subject = encodeURIComponent("Bus Trip Registration");
    const body = encodeURIComponent(
      "Hi, I’m interested in registering for the bus trip. Please send details!",
    );

    window.location.href = `mailto:stepxstepclub@gmail.com?subject=${subject}&body=${body}`;
  };

  const linkToBuyTickets2 = () => {
    openRegistrationLink(
      "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877",
      "catalog_list",
    );
  };

  const linkToBuyTickets7 = () => {
    openRegistrationLink(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=954144&k_class_tab=66299",
      "strollerfit",
    );
  };

  const linkToBuyTickets8 = () => {
    openRegistrationLink(
      "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877",
      "strollerfitness",
    );
  };

  const linkToBuyTickets9 = () => {
    openRegistrationLink(
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_business=651877&k_class_tab=66373&uid=0&id_class_tab=2",
      "soca",
    );
  };

  const linkToBuyTickets10 = () => {
    openRegistrationLink(
      " https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=982233&k_class_tab=66373",
      "bubble",
    );
  };

  const linkToBuyTickets11 = () => {
    openRegistrationLink(
      "   https://www.wellnessliving.com/rs/event/step_by_step_club?k_class=982744&k_class_tab=66373",
      "kidsoca",
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

      {/* Event 1 */}
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
            onClick={linkToBuyTickets2}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

      {/* Event 2 */}
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
            onClick={linkToBuyTickets2}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

      {/* Event 3 */}
      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents9}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents9)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets8}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

      {/* Event 4 */}
      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents8}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents8)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets7}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

      {/* Event 5 */}
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
            onClick={linkToBuyTickets9}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents12}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents12)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets10}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents13}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents13)}
          />
          <button
            className="special-events__button"
            onClick={linkToBuyTickets11}
          >
            Click Here to Register!
          </button>
        </div>
      </div>

      {/* Event 6 (EMAIL INSTEAD OF LINK) */}
      <div className="special-events__card-wrapper">
        <div className="special-events__image-container">
          <img
            src={specialEvents11}
            alt="Special Event"
            className="special-events__image"
            onClick={() => openMedia(specialEvents11)}
          />
          <button className="special-events__button" onClick={openEmail}>
            Email to Register
          </button>
        </div>
      </div>

      {/* Modal */}
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
