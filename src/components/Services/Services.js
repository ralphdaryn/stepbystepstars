import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.scss";
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
    groupFitness: false,
    privateTraining: false,
  });
  const navigate = useNavigate();

  const toggleDetails = (service) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [service]: !prevDetails[service],
    }));
  };

  const goToServicePage = (path) => {
    navigate(path);
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
            onClick={() => {
              toggleDetails("danceParty");
              goToServicePage("/danceparty");
            }}
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
            onClick={() => {
              toggleDetails("facepaint");
              goToServicePage("/facepainting");
            }}
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
            onClick={() => {
              toggleDetails("musicalBabies");
              goToServicePage("/musicalbabies");
            }}
          >
            {showDetails.musicalBabies ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>

      {/* Fitness Section */}
      <h2 className="services__caption">Fitness</h2>
      <div className="services__container">
        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={fitnessImg} alt="fitness pic" />
          </div>
          <h2 className="services__title">Mommy and Me</h2>
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
            onClick={() => {
              toggleDetails("mommyAndMe");
              goToServicePage("/mommyandme");
            }}
          >
            {showDetails.mommyAndMe ? "Hide Details" : "View Details"}
          </button>
        </div>

        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={fitnessImg} alt="fitness pic" />
          </div>
          <h2 className="services__title">Group Fitness</h2>
          <p
            className={`services__subtitle ${
              showDetails.groupFitness ? "show" : ""
            }`}
          >
            Discover the energy and camaraderie of our Group Fitness classes!
            These sessions are perfect for those looking to stay motivated and
            achieve their fitness goals in a social setting. Our experienced
            instructors will guide you through a variety of exercises designed
            to improve strength, endurance, and flexibility. Join us and
            experience the benefits of working out together!
          </p>
          <button
            className="services__button"
            onClick={() => {
              toggleDetails("groupFitness");
              goToServicePage("/groupfitness");
            }}
          >
            {showDetails.groupFitness ? "Hide Details" : "View Details"}
          </button>
        </div>

        <div className="services__wrapper">
          <div className="services__img-container">
            <img className="services__img" src={fitnessImg} alt="fitness pic" />
          </div>
          <h2 className="services__title">Private Training</h2>
          <p
            className={`services__subtitle ${
              showDetails.privateTraining ? "show" : ""
            }`}
          >
            Elevate your fitness journey with our Private Training sessions!
            Tailored to your specific needs and goals, these one-on-one sessions
            provide personalized attention and expert guidance. Whether you're
            looking to build strength, improve endurance, or achieve a specific
            fitness milestone, our certified trainers are here to help you every
            step of the way. Invest in yourself and see the results you've
            always wanted.
          </p>
          <button
            className="services__button"
            onClick={() => {
              toggleDetails("privateTraining");
              goToServicePage("/privatetraining");
            }}
          >
            {showDetails.privateTraining ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
