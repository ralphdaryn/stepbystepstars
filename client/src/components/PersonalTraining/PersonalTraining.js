import { useState, useEffect } from "react";
import "./PersonalTraining.scss";
import BackButton from "../BackButton/BackButton";
import img1 from "../../assets/images/personal-training.JPEG";
import img2 from "../../assets/images/personal-training2.JPEG";
import img3 from "../../assets/images/personal-training3.JPEG";
import img4 from "../../assets/images/personal-training4.JPEG";
import img5 from "../../assets/images/personal-training5.JPEG";
import img6 from "../../assets/images/personal-training6.JPEG";

const PersonalTraining = () => {
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6];

  // Autoplay carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => setIndex((index + 1) % images.length);
  const handlePrev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2024-12-31+15%3A28%3A54&id_class_tab=3&id_mode=1&s_id=78Epip";
  };

  return (
    <div className="personal-training">
      <div className="personal-training__header">
        <BackButton />
        <h2 className="personal-training__title">Personal Training</h2>
      </div>

      <div className="personal-training__media">
        <div className="personal-training__carousel">
          <button
            onClick={handlePrev}
            className="personal-training__carousel-button"
          >
            ‹
          </button>
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="personal-training__carousel-image"
          />
          <button
            onClick={handleNext}
            className="personal-training__carousel-button"
          >
            ›
          </button>
        </div>
      </div>

      <div className="personal-training__content">
        <p className="personal-training__text">
          Take your fitness journey to the next level with personalized training
          and coaching designed to fit your unique needs, goals, and lifestyle.
        </p>
        <ul className="personal-training__list">
          <li>Customized workouts tailored to your goals</li>
          <li>Proper form and injury prevention guidance</li>
          <li>Expert coaching and motivational support</li>
          <li>Holistic fitness, nutrition, and lifestyle focus</li>
        </ul>
        <p className="personal-training__text">
          Start today and take the first step toward becoming your best self!
        </p>
      </div>
      <div className="personal-training__button-container">
        <button
          className="personal-training__button"
          onClick={handleButtonClick}
        >
          Sign Up Today!
        </button>
      </div>
    </div>
  );
};

export default PersonalTraining;
