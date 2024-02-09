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
          <h2 className="main__caption">
            Start the Celebration! <br></br> Your Step by Step Journey Begins
            Here!"
          </h2>

          <div className="main__services">
            <h2>Facepaint</h2>
            <p>
              Transform your celebration with our Face Painting Extravaganza!
              🌈🎨 One hour of artistic magic that brings 8-12 kids to life with
              creative designs. From whimsical butterflies to fierce
              superheroes, our talented artists will make your party a canvas of
              joy. Book now and let the face-painting fun begin!
            </p>
            <h2>Dance Party</h2>
            <p>
              Immerse in an hour of non-stop fun: dance parties that transform
              into personalized music videos, engaging games with the kids,
              choreographed dance moves for all to enjoy, and the glam of a red
              carpet with a mini photoshoot. Make your celebration unforgettable
              with our dynamic one-hour entertainment service. Let's turn your
              party into a showstopper! 🕺💃🎥🎈
            </p>
            <h2>Musical Babies</h2>
            <p>
              Introducing our Musical Babies Program - a harmonious blend of joy
              and learning for little ones aged 3 and under. Join us for an
              engaging half-hour session of interactive fun featuring circle
              time, musical instruments, Montessori toys, parachute play! Watch
              your child blossom in a melody of laughter and discovery.
            </p>
            <h2>Mommy and Me</h2>
            <p>
              Join our Mommy and Me Fitness Class, where all fitness levels are
              welcome! This engaging class is designed for moms with babies,
              providing a fantastic opportunity to meet and socialize with
              fellow moms. Embrace a full-body conditioning experience with a
              special focus on core restoration. Strengthen your body while
              creating lasting connections in a supportive community. Come be a
              part of a fitness journey that celebrates both motherhood and
              well-being!
            </p>
          </div>

          <div className="main__about">
            <h2>Meet Lauren Paul</h2>
            <img className="main__image" src={laurenBio} alt="bio pic" />
            <p>
              a personal trainer and group fitness instructor with over 20 years
              of experience as a competitive dancer. As a mom of two young kids,
              I understand the challenges of finding time for fitness in a busy
              lifestyle.
            </p>
            <p>
              My personal journey led me to discover effective strategies to
              stay active and healthy despite a hectic schedule. Now, I'm
              dedicated to sharing these secrets with other women, empowering
              them to prioritize their well-being. Join me in group fitness
              classes and personal training sessions designed not only to build
              strength but also to fit seamlessly into your busy life.
            </p>
            <p>
              Together, we'll create a balanced and sustainable approach to
              health, making fitness an integral part of your vibrant lifestyle.
              Let's make your fitness journey not just a routine but a
              fulfilling lifestyle where each workout becomes a step towards a
              healthier and happier you.
            </p>
          </div>
          <div className="main__contact">
            <h2>Contact</h2>
            <p>Name</p>
            <p>Email</p>
            <p>Message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
