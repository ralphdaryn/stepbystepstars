import "./Services.scss";
import { useState } from "react";
import facepaintImg from "../../assets/images/facepaintkids.png";
import dancepartyImg from "../../assets/images/dancepartykids.jpg";
import musicalImg from "../../assets/images/danceparty.png";
import fitnessImg from "../../assets/images/fitnessmom.png";

const Services = () => {
  const [showDetails, setShowDetails] = useState({
    facepaint: false,
    danceParty: false,
    musicalBabies: false,
    mommyAndMe: false,
  });

  const toggleDetails = (service) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [service]: !prevDetails[service],
    }));
  };

  return (
    <div id="services" className="services">
      <h2 className="services__text">
        Your <span className="services__text-name">Step by Step</span> Journey
        Begins Here!
      </h2>
      <div className="services__container">
        <div className="services__wrapper">
          <div className="services__img-container">
            <img
              className="services__img-dance"
              src={dancepartyImg}
              alt="dance party pic"
            />
          </div>
          <h2 className="services__title">Dance Party</h2>
          <p
            className={`services__subtitle ${
              showDetails.danceParty ? "show" : ""
            }`}
          >
            Immerse in an hour of non-stop fun: dance parties that transform
            into personalized music videos, engaging games with the kids,
            choreographed dance moves for all to enjoy, and the glam of a red
            carpet with a mini photoshoot. Make your celebration unforgettable
            with our dynamic one-hour entertainment service. Let's turn your
            party into a showstopper! 🕺💃🎥🎈
          </p>
          <button
            className="services__button"
            onClick={() => toggleDetails("danceParty")}
          >
            {showDetails.danceParty ? "Hide Details" : "View Details"}
          </button>
        </div>
        <div className="services__wrapper">
          <div className="services__img-container">
            <img
              className="services__img-face"
              src={facepaintImg}
              alt="facepaint pic"
            />
          </div>
          <h2 className="services__title">Face Painting</h2>
          <p
            className={`services__subtitle ${
              showDetails.facepaint ? "show" : ""
            }`}
          >
            Transform your celebration with our Face Painting Extravaganza! 🌈🎨
            One hour of artistic magic that brings 8-12 kids to life with
            creative designs. From whimsical butterflies to fierce superheroes,
            our talented artists will make your party a canvas of joy. Book now
            and let the face-painting fun begin!
          </p>
          <button
            className="services__button"
            onClick={() => toggleDetails("facepaint")}
          >
            {showDetails.facepaint ? "Hide Details" : "View Details"}
          </button>
        </div>
        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={musicalImg} alt="musical pic" />
          </div>
          <h2 className="services__title">Musical Babies</h2>
          <p
            className={`services__subtitle ${
              showDetails.musicalBabies ? "show" : ""
            }`}
          >
            Introducing our Musical Babies Program - a harmonious blend of joy
            and learning for little ones aged 3 and under. Join us for an
            engaging half-hour session of interactive fun featuring circle time,
            musical instruments, Montessori toys, parachute play! Watch your
            child blossom in a melody of laughter and discovery.
          </p>
          <button
            className="services__button"
            onClick={() => toggleDetails("musicalBabies")}
          >
            {showDetails.musicalBabies ? "Hide Details" : "View Details"}
          </button>
        </div>
        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={fitnessImg} alt="fitness pic" />
          </div>
          <h2 className="services__title">Fitness Class</h2>
          <p
            className={`services__subtitle ${
              showDetails.mommyAndMe ? "show" : ""
            }`}
          >
            Join our Mommy and Me Fitness Class, where all fitness levels are
            welcome! This engaging class is designed for moms with babies,
            providing a fantastic opportunity to meet and socialize with fellow
            moms. Embrace a full-body conditioning experience with a special
            focus on core restoration. Strengthen your body while creating
            lasting connections in a supportive community. Come be a part of a
            fitness journey that celebrates both motherhood and well-being!
          </p>
          <button
            className="services__button"
            onClick={() => toggleDetails("mommyAndMe")}
          >
            {showDetails.mommyAndMe ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
