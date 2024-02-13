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
          Elevate Your Celebration & Wellness with Step By Step!
        </h1>
        <div>
          <Carousel />
        </div>
        <div className="main__wrapper">
          <h4 className="main__text">We offer the following services:</h4>
          <ul className="main__list">
            <li className="main__list-item">
              <FaBirthdayCake /> DANCE PARTIES <FaRegCheckCircle />
            </li>
            <li className="main__list-item">
              <FaPaintBrush /> FACE PAINTING <FaRegCheckCircle />
            </li>
            <li className="main__list-item">
              <FaMusic /> MUSICAL BABIES <FaRegCheckCircle />
            </li>
            <li className="main__list-item">
              <FaDumbbell /> FITNESS CLASSES <FaRegCheckCircle />
            </li>
            <li>... and so much more!</li>
          </ul>
        </div>
        <div className="main__section">
          <h3 className="main__subtext">
            Join Us For Unforgettable Experiences!
          </h3>
          <div className="main__icons">
            <ul className="main__icons-list">
              <li className="main__icons-item">
                <FaFacebook />
              </li>
              <button className="main__button">Contact Us!</button>
              <li className="main__icons-item">
                <FaInstagramSquare />
              </li>
            </ul>
          </div>
       
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
