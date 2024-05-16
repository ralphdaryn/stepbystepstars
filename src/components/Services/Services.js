import "./Services.scss";
import { useNavigate } from "react-router-dom";
import facepaintImg from "../../assets/images/facepaintkids.png";
import dancepartyImg from "../../assets/images/dancepartykids.jpg";
import musicalImg from "../../assets/images/danceparty.png";
import fitnessImg from "../../assets/images/fitnessmom.png";

const Services = () => {
  const navigate = useNavigate();

  const goToServicePage = (path) => {
    navigate(path);
  };

  const goToBookingForm = () => {
    navigate("/events");
  };

  return (
    <div id="services" className="services">
      <h1 className="services__text">
        Your <span className="services__text-name">Step by Step</span> Journey
        Begins Here!
      </h1>

      {/* Birthday Parties Section */}
      <h2 className="services__caption">Birthday Parties</h2>
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
          <button
            className="services__button"
            onClick={() => goToServicePage("/danceparty")}
          >
            View Details
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
          <button
            className="services__button"
            onClick={() => goToServicePage("/facepainting")}
          >
            View Details
          </button>
        </div>

        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={musicalImg} alt="musical pic" />
          </div>
          <h2 className="services__title">Musical Babies</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/musicalbabies")}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Fitness Section */}
      <h2 className="services__caption-fitness">Fitness Class</h2>
      <div className="services__container">
        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={fitnessImg} alt="fitness pic" />
          </div>
          <h2 className="services__title">Mommy and Me</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/mommyandme")}
          >
            View Details
          </button>
        </div>

        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={fitnessImg} alt="fitness pic" />
          </div>
          <h2 className="services__title">Group Fitness</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/groupfitness")}
          >
            View Details
          </button>
        </div>

        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={fitnessImg} alt="fitness pic" />
          </div>
          <h2 className="services__title">Private Training</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/privatetraining")}
          >
            View Details
          </button>
        </div>
      </div>
      <div className="services__book-event">
        <h2 className="services__book-event-title">Plan Your Event</h2>
        <p className="services__book-event-description">
          Ready to make your next event unforgettable? Click below to start with
          our easy booking form!
        </p>
        <button
          className="services__book-event-button"
          onClick={goToBookingForm}
        >
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default Services;
