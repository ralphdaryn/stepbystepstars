import "./About.scss";
import laurenImg from "../../assets/images/about.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" data-page="about">
      <header className="about__header">
        <h1 className="about__title">Our Story</h1>
      </header>

      <section className="about__content" aria-label="About Step By Step">
        {/* Profile card */}
        <article className="about__card about__card--profile" aria-label="Coach profile">
          <img className="about__image" src={laurenImg} alt="Lauren Paul" />

          <div className="about__icons" aria-label="Contact links">
            <a
              href="mailto:stepbystepstars@gmail.com"
              className="about__icon"
              aria-label="Email Step By Step"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:6479988074"
              className="about__icon"
              aria-label="Call Step By Step"
            >
              <FaPhone />
            </a>
          </div>

          <div className="about__name">
            <h2 className="about__name-title">Lauren Paul</h2>
            <p className="about__name-sub">Step by Step</p>
          </div>
        </article>

        {/* Story */}
        <article className="about__card about__card--story" aria-label="Our story">
          <p className="about__subtitle">
            A personal trainer and group fitness instructor with over 20 years of
            experience as a competitive dancer. As a mom of two young kids, I
            understand the challenges of finding time for fitness in a busy
            lifestyle.
          </p>

          <p className="about__subtitle">
            My personal journey led me to discover effective strategies to stay
            active and healthy despite a hectic schedule. Now, I'm dedicated to
            sharing these secrets with other women, empowering them to prioritize
            their well-being.
          </p>

          <p className="about__subtitle">
            Together, we'll create a balanced and sustainable approach to health,
            making fitness an integral part of your vibrant lifestyle. Let's make
            your fitness journey not just a routine but a fulfilling lifestyle
            where each workout becomes a step towards a healthier and happier you.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;