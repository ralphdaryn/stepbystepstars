import "./SpecialEvents.scss";
import musicalbabiesVideo from "../../assets/images/musicalbabies.MP4";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";

const SpecialEvents = () => {
  return (
    <div className="special-events">
      <div className="special-events__header">
        <BackButton />
        <h2 className="special-events__title">Special Events</h2>
      </div>
      <div className="special-events__container">
        <video className="special-events__video" controls autoPlay muted>
          <source src={musicalbabiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="special-events__wrapper">
          <p className="special-events__subtitle">
            Come visit us at S-Town, where kids can explore, play, and learn
            through interactive pretend play!
          </p>
          <p className="special-events__subtitle">
            Let your kids take the lead while you support their creativity and
            growth and don’t forget — you can also book your next birthday party
            at S-Town for a unique and unforgettable celebration!
          </p>
          <div className="special-events__container">
            <button className="special-events__button">
              <Link to="/waiverkids">Sign Waiver Here</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialEvents;
