import "./Main.scss";
import {
  FaBirthdayCake,
  FaPaintBrush,
  FaBaby,
  FaDumbbell,
  FaRegCheckCircle,
} from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div>
          <h1 className="main__subtitle">
            Elevate Your Celebration & Wellness with Step By Step!
          </h1>
        </div>
        <div>
          <Carousel />
        </div>
        <div className="main__wrapper">
          <h4 className="main__text">We offer the following services:</h4>
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
              <FaDumbbell /> FITNESS CLASSES <FaRegCheckCircle />
            </li>
          </ul>
        </div>
        <div className="main__section">
          <h4 className="main__subtext">
            Join us for unforgettable experiences!
          </h4>
          <button className="main__button">Contact Us!</button>
          <div className="main__section-list">
            <ul className="main__section-list">
              <li>
                <FaFacebook />
                <FaInstagramSquare />
              </li>
            </ul>
          </div>
          <div className="main__area">
            <h2>
              Start the Celebration! <br></br> Your Step by Step Journey Begins
              Here!"
            </h2>
            <p>
              Step by Step Movement is focused on mental well-being! We offer
              fitness training and birthday party entertainment. We specialize
              in empowering individuals to hit their goals and be their best
              self!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
