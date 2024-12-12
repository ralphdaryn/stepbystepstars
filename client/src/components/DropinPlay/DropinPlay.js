import "./DropinPlay.scss";
// import facepaint1 from "../../assets/images/facepaint1.jpeg";
// import facepaint2 from "../../assets/images/facepaint2.jpeg";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";

const DropinPlay = () => {
  return (
    <div className="dropinplay">
      <div className="dropinplay__header">
        <BackButton />
        <h2 className="dropinplay__title">Face Painting</h2>
      </div>

      <div className="dropinplay__container">
        <div className="dropinplay__wrapper">
          {/* <img
            src={facepaint1}
            className="facepaint__image"
            alt="Child with butterfly face paint"
          />
          <img
            src={facepaint2}
            className="facepaint__image"
            alt="Child with superhero face paint"
          /> */}
        </div>

        <div className="dropinplay__subtitle-container">
          <p className="dropinplay__subtitle">
            Transform your celebration with our Face Painting Extravaganza! 🌈🎨
          </p>
          <p className="dropinplay__subtitle">
            One hour of artistic magic that brings 8-12 kids to life with
            creative designs.
          </p>
          <p className="dropinplay__subtitle">
            From whimsical butterflies to fierce superheroes, our talented
            artists will make your party a canvas of joy.
          </p>
          <p className="dropinplay__subtitle">
            Book now and let the face-painting fun begin!
          </p>
          <div className="dropinplay__button">
            <EventsButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropinPlay;
