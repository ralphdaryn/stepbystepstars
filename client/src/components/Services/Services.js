import "./Services.scss";
import { useNavigate } from "react-router-dom";
import mommyandme from "../../assets/images/mommyandme.jpeg";
import privatetraining from "../../assets/images/privatetraining.jpg";
import birthdayParties from "../../assets/images/birthdayparty3.JPEG";
import specialEvents from "../../assets/images/specialevents.jpeg";
import dropInPlay from "../../assets/images/dropinplay4.JPEG";
import groupfitness from "../../assets/images/groupfitness.jpeg";
import strollerFitness from "../../assets/images/strollerfitness.jpeg";

const Services = () => {
  const navigate = useNavigate();

  const goToServicePage = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div id="services" className="services">
      <h1 className="services__title">
        Your <span className="services__title--highlight">Step by Step</span>{" "}
        Journey Begins Here!
      </h1>

      {/* Birthday Parties Section */}
      <h2 className="services__section-title">
        S-TOWN <br></br>(INDOOR PLAY CENTER)
      </h2>
      <div className="services__section">
        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={birthdayParties}
              alt="Dance party"
            />
          </div>
          <h2 className="services__card-title">Birthday Parties</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/birthdayparties")}
          >
            View Details
          </button>
        </div>

        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image-drop"
              src={specialEvents}
              alt="Musical babies"
            />
          </div>
          <h2 className="services__card-title">SPECIAL EVENTS</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/specialevents")}
          >
            View Details
          </button>
        </div>

        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={dropInPlay}
              alt="Face painting"
            />
          </div>
          <h2 className="services__card-title">Drop in Play</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/dropinplay")}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Fitness Section */}
      <h2 className="services__section-title--fitness">Fitness</h2>
      <div className="services__section">
        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={mommyandme}
              alt="Fitness with mom"
            />
          </div>
          <h2 className="services__card-title">Mommy and Me</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/mommyandme")}
          >
            View Details
          </button>
        </div>

        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={groupfitness}
              alt="Group fitness"
            />
          </div>
          <h2 className="services__card-title">Group Fitness</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/groupfitness")}
          >
            View Details
          </button>
        </div>

        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={privatetraining}
              alt="Private training"
            />
          </div>
          <h2 className="services__card-title">Personal Training</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/privatetraining")}
          >
            View Details
          </button>
        </div>
        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={strollerFitness}
              alt="Private training"
            />
          </div>
          <h2 className="services__card-title">Stroller Fitness</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/strollerfitness")}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
