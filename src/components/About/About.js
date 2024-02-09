import "./About.scss";
import laurenImg from "../../assets/images/about.png";

const About = () => {
  return (
    <div className="about">
      <h2>Meet Lauren Paul</h2>
      <img className="about__image" src={laurenImg} alt="bio pic" />
      <p>
        a personal trainer and group fitness instructor with over 20 years of
        experience as a competitive dancer. As a mom of two young kids, I
        understand the challenges of finding time for fitness in a busy
        lifestyle.
      </p>
      <p>
        My personal journey led me to discover effective strategies to stay
        active and healthy despite a hectic schedule. Now, I'm dedicated to
        sharing these secrets with other women, empowering them to prioritize
        their well-being. Join me in group fitness classes and personal training
        sessions designed not only to build strength but also to fit seamlessly
        into your busy life.
      </p>
      <p>
        Together, we'll create a balanced and sustainable approach to health,
        making fitness an integral part of your vibrant lifestyle. Let's make
        your fitness journey not just a routine but a fulfilling lifestyle where
        each workout becomes a step towards a healthier and happier you.
      </p>
    </div>
  );
};

export default About;
