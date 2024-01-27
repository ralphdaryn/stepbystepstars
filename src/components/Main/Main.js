import "./Main.scss";
import {
  FaBirthdayCake,
  FaPaintBrush,
  FaBaby,
  FaDumbbell,
  FaRegCheckCircle,
} from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div>
          <h2 className="main__subtitle">
            Elevate Your Celebration and Wellness with
          </h2>
          <h1 className="main__title">Step By Step Stars!</h1>
        </div>
        <div>
          
        </div>
        <div className="main__wrapper">
          <p className="main__text">We offer the following services:</p>
          <ul className="main__list">
            <li className="main__link">
              <FaBirthdayCake /> DANCE PARTIES <FaRegCheckCircle />
            </li>
            <li className="main__link">
              <FaPaintBrush /> FACE PAINTING <FaRegCheckCircle />
            </li>
            <li className="main__link">
              <FaBaby /> MUSICAL BABIES <FaRegCheckCircle />
            </li>
            <li className="main__link">
              <FaDumbbell /> FITNESS CLASSES for MOMS <FaRegCheckCircle />
            </li>
          </ul>
        </div>
        <div>
          <p className="main__subtext">
            Join us for unforgettable experiences!
          </p>
          <button className="main__button">Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
