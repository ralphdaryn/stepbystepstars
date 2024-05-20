import "./Facepaint.scss";
import facepaint1 from "../../assets/images/facepaint1.jpeg";
import facepaint2 from "../../assets/images/facepaint2.jpeg";

const Facepaint = () => {
  return (
    <div className="facepaint">
      <h2 className="facepaint__title">Face Painting</h2>
      <div className="facepaint__images">
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
      <p className="facepaint__subtitle">
        Transform your celebration with our Face Painting Extravaganza! 🌈🎨 One
        hour of artistic magic that brings 8-12 kids to life with creative
        designs. From whimsical butterflies to fierce superheroes, our talented
        artists will make your party a canvas of joy. Book now and let the
        face-painting fun begin!
      </p>
    </div>
  );
};

export default Facepaint;
