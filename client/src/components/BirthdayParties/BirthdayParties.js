import { useState } from "react";
import { Helmet } from "react-helmet";
import "./BirthdayParties.scss";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";
import birthdayPackage from "../../assets/images/birthdaypackage.jpeg";
import birthdayPackage2 from "../../assets/images/birthdaypackage2.jpeg";
import birthdayVideo from "../../assets/images/bdayparty.mp4";

const BirthdayParties = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="birthday-party">
      <Helmet>
        <title>Birthday Party Venue in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Plan your child’s next birthday party at Step By Step Club in Durham. Private party space, decorations, activities, and stress-free setup!"
        />
        <meta
          name="keywords"
          content="birthday party Durham, kids event space, private birthday venue, indoor party Durham"
        />
        <link
          rel="canonical"
          href="https://www.stepbystepclub.ca/birthdayparties"
        />
      </Helmet>

      <div className="birthday-party__header">
        <BackButton />
        <h2 className="birthday-party__title">Birthday Parties</h2>
      </div>

      <div className="birthday-party__container">
        <div className="birthday-party__video-container">
          <video
            className="birthday-party__video"
            src={birthdayVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            poster={birthdayPackage}
          />
        </div>

        {/* Images */}
        <div className="birthday-party__wrapper">
          <img
            className="birthday-party__image"
            alt="Birthday Party"
            src={birthdayPackage}
            onClick={() => openImage(birthdayPackage)}
          />
          <img
            className="birthday-party__image"
            alt="Birthday Party 2"
            src={birthdayPackage2}
            onClick={() => openImage(birthdayPackage2)}
          />
        </div>

        <div className="birthday-party__subtitle-container">
          <p className="birthday-party__subtitle">
            Looking for a stress-free birthday party? S-Town Club, a kids'
            entertainment center in Durham, offers an all-inclusive experience.
            With private venues, no need to share space or handle logistics.
            Packages include food, cakes, decorations, and entertainment like
            face painting, soft play, and bouncy castles. We handle setup and
            cleanup, so parents can focus on making memories. With imaginative
            play areas and customizable options, every celebration is unique!
          </p>
        </div>

        <div className="birthday-party__button">
          <EventsButton />
        </div>
      </div>

      {/* Full-Screen Image Modal */}
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

export default BirthdayParties;
