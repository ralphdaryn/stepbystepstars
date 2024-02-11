import "./Services.scss";
import facepaintImg from "../../assets/images/facepaintkids.png";
import dancepartyImg from "../../assets/images/dancepartykids.jpg";
import musicalImg from '../../assets/images/danceparty.png';
import fitnessImg from '../../assets/images/fitnessmom.png';

const Services = () => {
  return (
    <div className="services">
      <h2>Facepaint</h2>
      <img className="services__img" src={facepaintImg} alt="facepaint pic" />
      <p>
        Transform your celebration with our Face Painting Extravaganza! 🌈🎨 One
        hour of artistic magic that brings 8-12 kids to life with creative
        designs. From whimsical butterflies to fierce superheroes, our talented
        artists will make your party a canvas of joy. Book now and let the
        face-painting fun begin!
      </p>
      <h2>Dance Party</h2>
      <img
        className="services__img"
        src={dancepartyImg}
        alt="dance party pic"
      />
      <p>
        Immerse in an hour of non-stop fun: dance parties that transform into
        personalized music videos, engaging games with the kids, choreographed
        dance moves for all to enjoy, and the glam of a red carpet with a mini
        photoshoot. Make your celebration unforgettable with our dynamic
        one-hour entertainment service. Let's turn your party into a
        showstopper! 🕺💃🎥🎈
      </p>
      <h2>Musical Babies</h2>
      <img
        className="services__img"
        src={musicalImg}
        alt="musical pic"
      />
      <p>
        Introducing our Musical Babies Program - a harmonious blend of joy and
        learning for little ones aged 3 and under. Join us for an engaging
        half-hour session of interactive fun featuring circle time, musical
        instruments, Montessori toys, parachute play! Watch your child blossom
        in a melody of laughter and discovery.
      </p>
      <h2>Mommy and Me</h2>
      <img
        className="services__img"
        src={fitnessImg}
        alt="fitness pic"
      />
      <p>
        Join our Mommy and Me Fitness Class, where all fitness levels are
        welcome! This engaging class is designed for moms with babies, providing
        a fantastic opportunity to meet and socialize with fellow moms. Embrace
        a full-body conditioning experience with a special focus on core
        restoration. Strengthen your body while creating lasting connections in
        a supportive community. Come be a part of a fitness journey that
        celebrates both motherhood and well-being!
      </p>
    </div>
  );
};

export default Services;
