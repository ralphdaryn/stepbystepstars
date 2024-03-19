import "./Main.scss";
import {
  FaBirthdayCake,
  FaPaintBrush,
  FaMusic,
  FaDumbbell,
  FaRegCheckCircle,
} from "react-icons/fa";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";
import About from "../About/About";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <h1 className="main__title">
          Elevate Your <span className="main__title-text">Celebration</span> &
          <span className="main__title-text"> Wellness </span>
          with
          <span className="main__title-text"> Step By Step!</span>
        </h1>
        <div>
          <Carousel />
        </div>
        <div className="main__wrapper">
          <h4 className="main__text">We offer the following services:</h4>
          <div className="main__list">
            <li className="main__list-item">
              <FaBirthdayCake className="main__list-icon" /> DANCE PARTIES{"  "}
              <FaRegCheckCircle className="main__list-check" />
            </li>
            <li className="main__list-item">
              <FaPaintBrush className="main__list-icon" /> FACE PAINTING{" "}
              <FaRegCheckCircle className="main__list-check" />
            </li>
            <li className="main__list-item">
              <FaMusic className="main__list-icon" /> MUSICAL BABIES{" "}
              <FaRegCheckCircle className="main__list-check" />
            </li>
            <li className="main__list-item">
              <FaDumbbell className="main__list-icon" /> FITNESS CLASSES{" "}
              <FaRegCheckCircle className="main__list-check" />
            </li>
          </div>
          <li className="main__list-item main__list-more">
            ... and so much more!
          </li>
        </div>
        <h3 className="main__subtext">
          Join Us For{" "}
          <span className="main__subtext-color">
            Unforgettable Experiences!
          </span>
        </h3>
        <div className="main__icons">
          <ul className="main__icons-list">
            <li className="main__icons-facebook">
              <a href="https://www.facebook.com/stepbystepstars/">
                <FaFacebook />
              </a>
            </li>
            <a href="#contact" className="main__button">
              Contact Us!
            </a>
            <li className="main__icons-instagram">
              <a href="https://www.instagram.com/stepbystepstars/">
                <FaInstagramSquare />
              </a>
            </li>
          </ul>
        </div>
 
        <div className="main__section">
          <div>
            <Services />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Reviews />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
