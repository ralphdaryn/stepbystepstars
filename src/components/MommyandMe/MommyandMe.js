import "./MommyandMe.scss";
import mommyandme1 from "../../assets/images/mommyandme1.jpeg";
import mommyandme2 from "../../assets/images/mommyandme2.jpeg";
import mommyandme3 from "../../assets/images/mommyandme3.jpeg";
import mommyandme4 from "../../assets/images/mommyandme4.jpeg";

const MommyandMe = () => {
  return (
    <div className="mommyandme">
      <h2 className="mommyandme__title">Mommy and Me</h2>
      <div className="mommyandme__container">
        <img
          src={mommyandme1}
          className="mommyandme__image"
          alt="Mom and baby exercising"
        />
        <img
          src={mommyandme2}
          className="mommyandme__image"
          alt="Mom and baby stretching"
        />
        <img
          src={mommyandme3}
          className="mommyandme__image"
          alt="Group of moms with babies"
        />
        <img
          src={mommyandme4}
          className="mommyandme__image"
          alt="Mom and baby doing yoga"
        />
      </div>
      <div>
        <p className="mommyandme__subtitle">
          Join our Mommy and Me Fitness Class, where all fitness levels are
          welcome! This engaging class is designed for moms with babies,
          providing a fantastic opportunity to meet and socialize with fellow
          moms.
        </p>
        <p className="mommyandme__subtitle">
          Embrace a full-body conditioning experience with a special focus on
          core restoration. Strengthen your body while creating lasting
          connections in a supportive community. Come be a part of a fitness
          journey that celebrates both motherhood and well-being!
        </p>
      </div>
    </div>
  );
};

export default MommyandMe;
