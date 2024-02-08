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
import laurenBio from "../../assets/images/about.png";

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
          <div className="main__area">
            <h2 className="main__caption">
              Start the Celebration! <br></br> Your Step by Step Journey Begins
              Here!"
            </h2>
            <div>
              <h2>Meet Lauren Paul</h2>
              <img className="main__image" src={laurenBio} alt="bio pic" />
              <p>
                a personal trainer and group fitness instructor with over 20
                years of experience as a competitive dancer. As a mom of two
                young kids, I understand the challenges of finding time for
                fitness in a busy lifestyle.
              </p>
              <p>
                My personal journey led me to discover effective strategies to
                stay active and healthy despite a hectic schedule. Now, I'm
                dedicated to sharing these secrets with other women, empowering
                them to prioritize their well-being. Join me in group fitness
                classes and personal training sessions designed not only to
                build strength but also to fit seamlessly into your busy life.
              </p>
              <p>
                Together, we'll create a balanced and sustainable approach to
                health, making fitness an integral part of your vibrant
                lifestyle. Let's make your fitness journey not just a routine
                but a fulfilling lifestyle where each workout becomes a step
                towards a healthier and happier you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
