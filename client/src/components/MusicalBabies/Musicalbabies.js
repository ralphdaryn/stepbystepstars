import "./Musicalbabies.scss";
import musicalbabiesVideo from "../../assets/images/musicalbabies.MP4";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";

const Musicalbabies = () => {
  return (
    <div className="musicalbabies">
      <div className="musicalbabies__header">
        <BackButton />
        <h2 className="musicalbabies__title">Drop in Play</h2>
      </div>
      <div className="musicalbabies__container">
        <video className="musicalbabies__video" controls autoPlay muted>
          <source src={musicalbabiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="musicalbabies__wrapper">
          <p className="musicalbabies__subtitle">
            Come visit us at S-Town, where kids can explore, play, and learn through interactive pretend play!
          </p>
          <p className="musicalbabies__subtitle">
            Let your kids take the lead while you support their creativity and growth and don’t forget — you can also book your next birthday party at S-Town for a unique and unforgettable celebration!
          </p>
          <div className="musicalbabies__button">
            <EventsButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicalbabies;
