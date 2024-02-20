import "./About.scss";
import laurenImg from "../../assets/images/about.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">Meet Lauren Paul</h2>
      <div className="about__container">
        <div className="about__image-container">
          <img className="about__image" src={laurenImg} alt="bio pic" />
          <div className="about__icons-wrapper">
            <div className="about__icons">
              <FaFacebook className="about__icons-facebook" />
              <FaInstagramSquare className="about__icons-instagram" />
              <FaEnvelope className="about__icons-envelope" />
              <FaPhone className="about__icons-phone" />
            </div>
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
            prioritize their well-being. Join me in group fitness classes and
            personal training sessions designed not only to build strength but
            also to fit seamlessly into your busy life.
          </p>
          <p className="about__subtitle">
            Together, we'll create a balanced and sustainable approach to
            health, making fitness an integral part of your vibrant lifestyle.
            Let's make your fitness journey not just a routine but a fulfilling
            lifestyle where each workout becomes a step towards a healthier and
            happier you.
          </p>
          {/* <div className="about__text-wrapper">
            <h4 className="about__text">Lauren Paul</h4>
            <h5 className="about__text">Step By Step</h5>
            <p className="about__text-number">647-998-8074</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
