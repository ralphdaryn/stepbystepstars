import "./Facepaint.scss";
import facepaint1 from "../../assets/images/facepaint1.jpeg";
import facepaint2 from "../../assets/images/facepaint2.jpeg";
import BackButton from "../BackButton/BackButton";

const Facepaint = () => {
  return (
    <div className="facepaint">
      <div className="facepaint__header">
        <BackButton />
        <h2 className="facepaint__title">Face Painting</h2>
      </div>

      <div className="facepaint__container">
        <div className="facepaint__wrapper">
          <img
            src={facepaint1}
            className="facepaint__image"
            alt="Child with butterfly face paint"
          />
          <img
            src={facepaint2}
            className="facepaint__image"
            alt="Child with superhero face paint"
          />
        </div>

        <div className="facepaint__subtitle-container">
          <p className="facepaint__subtitle">
            Transform your celebration with our Face Painting Extravaganza! 🌈🎨
          </p>
          <p className="facepaint__subtitle">
            One hour of artistic magic that brings 8-12 kids to life with
            creative designs.
          </p>
          <p className="facepaint__subtitle">
            From whimsical butterflies to fierce superheroes, our talented
            artists will make your party a canvas of joy.
          </p>
          <p className="facepaint__subtitle">
            Book now and let the face-painting fun begin!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facepaint;
