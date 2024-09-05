import "./Musicalbabies.scss";
import musicalbabiesVideo from "../../assets/images/musicalbabies.MP4";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";

const Musicalbabies = () => {
  return (
    <div className="musicalbabies">
      <div className="musicalbabies__header">
        <BackButton />
        <h2 className="musicalbabies__title">Musical Babies</h2>
      </div>
      <div className="musicalbabies__container">
        <video className="musicalbabies__video" controls autoPlay muted>
          <source src={musicalbabiesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="musicalbabies__wrapper">
          <p className="musicalbabies__subtitle">
            Introducing our Musical Babies Program - a harmonious blend of joy
            and learning for little ones aged 3 and under.
          </p>
          <p className="musicalbabies__subtitle">
            Join us for an engaging half-hour session of interactive fun
            featuring circle time, musical instruments, Montessori toys,
            parachute play!
          </p>
          <p className="musicalbabies__subtitle">
            Watch your child blossom in a melody of laughter and discovery.
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
