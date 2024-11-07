import "./DropinPlay.scss";
import musicalbabiesVideo from "../../assets/images/musicalbabies.MP4";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";

const DropinPlay = () => {
  return (
    <div className="dropinplay">
      <div className="dropinplay__header">
        <BackButton />
        <h2 className="dropinplay__title">Drop in Play</h2>
      </div>
      <div className="dropinplay__container">
        <video className="dropinplay__video" controls autoPlay muted>
          <source src={musicalbabiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="dropinplay__wrapper">
          <p className="dropinplay__subtitle">
            Come visit us at S-Town, where kids can explore, play, and learn through interactive pretend play!
          </p>
          <p className="dropinplay__subtitle">
            Let your kids take the lead while you support their creativity and growth and don’t forget — you can also book your next birthday party at S-Town for a unique and unforgettable celebration!
          </p>
          <div className="dropinplay__button">
            <EventsButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropinPlay;
