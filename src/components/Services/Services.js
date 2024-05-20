import "./Services.scss";
import { useNavigate } from "react-router-dom";
import facepaintImg from "../../assets/images/facepaintkids.png";
import dancepartyImg from "../../assets/images/dancepartykids.jpg";
import musicalImg from "../../assets/images/danceparty.png";
import fitnessImg from "../../assets/images/fitnessmom.png";
import mommyandme from "../../assets/images/mommyandme.jpeg";

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
      <h1 className="services__title">
        Your <span className="services__title--highlight">Step by Step</span>{" "}
        Journey Begins Here!
      </h1>

      {/* Birthday Parties Section */}
      <h2 className="services__section-title">Birthday Parties</h2>
      <div className="services__section">
        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={dancepartyImg}
              alt="Dance party"
            />
          </div>
          <h2 className="services__card-title">Dance Party</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/danceparty")}
          >
            View Details
          </button>
        </div>

        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={facepaintImg}
              alt="Face painting"
            />
          </div>
          <h2 className="services__card-title">Face Painting</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/facepainting")}
          >
            View Details
          </button>
        </div>

        <div className="services__card">
          <div className="services__image-wrapper">
            <img
              className="services__image"
              src={musicalImg}
              alt="Musical babies"
            />
          </div>
          <h2 className="services__card-title">Musical Babies</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/musicalbabies")}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Fitness Section */}
      <h2 className="services__section-title--fitness">Fitness Class</h2>
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
              src={fitnessImg}
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
              src={fitnessImg}
              alt="Private training"
            />
          </div>
          <h2 className="services__card-title">Private Training</h2>
          <button
            className="services__button"
            onClick={() => goToServicePage("/privatetraining")}
          >
            View Details
          </button>
        </div>
      </div>

      <div className="services__booking">
        <h2 className="services__booking-title">Plan Your Event</h2>
        <p className="services__booking-description">
          Click below to start with our easy booking form!
        </p>
        <button className="services__booking-button" onClick={goToBookingForm}>
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default Services;
