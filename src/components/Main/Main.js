import "./Main.scss";
import {
  FaBirthdayCake,
  FaPaintBrush,
  FaBaby,
  FaDumbbell,
  FaRegCheckCircle,
} from "react-icons/fa";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div>
          <h1 className="main__title">
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
            <li>... and so much more!</li>
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
          <h2 className="main__caption">
            Start the Celebration! <br></br> Your Step by Step Journey Begins
            Here!"
          </h2>

          <div>
            <Services />
          </div>
          <div>
            <About />
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
