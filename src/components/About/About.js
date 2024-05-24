import "./About.scss";
import laurenImg from "../../assets/images/about.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import BackButton from "../BackButton/BackButton";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <BackButton />
        <h2 className="about__title">Our Story</h2>
      </div>
      <div className="about__container">
        <div className="about__image-container">
          <img className="about__image" src={laurenImg} alt="bio pic" />
          <div className="about__icons-wrapper">
            <a href="mailto:stepbystepstars@gmail.com" className="about__icon">
              <FaEnvelope className="about__icon-envelope" />
            </a>
            <a href="tel:6479988074" className="about__icon">
              <FaPhone className="about__icon-phone" />
            </a>
          </div>
          <div className="about__text-wrapper">
            <h4 className="about__text">Lauren Paul</h4>
            <p className="about__subtext">Step by Step</p>
          </div>
        </div>
        <div className="about__subtitle-wrapper">
          <p className="about__subtitle">
            A personal trainer and group fitness instructor with over 20 years
            of experience as a competitive dancer. As a mom of two young kids, I
            understand the challenges of finding time for fitness in a busy
            lifestyle.
          </p>
          <p className="about__subtitle">
            My personal journey led me to discover effective strategies to stay
            active and healthy despite a hectic schedule. Now, I'm dedicated to
            sharing these secrets with other women, empowering them to
            prioritize their well-being.
          </p>
          <p className="about__subtitle">
            Together, we'll create a balanced and sustainable approach to
            health, making fitness an integral part of your vibrant lifestyle.
            Let's make your fitness journey not just a routine but a fulfilling
            lifestyle where each workout becomes a step towards a healthier and
            happier you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
