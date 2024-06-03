import "./Danceparty.scss";
import danceparty from "../../assets/images/danceparty2.jpg";
import BackButton from "../BackButton/BackButton";
import ContactButton from "../ContactButton/ContactButton";

const Danceparty = () => {
  return (
    <div className="danceparty">
      <div className="danceparty__header">
        <BackButton />
        <h2 className="danceparty__title">Dance Party</h2>
      </div>
      <div className="danceparty__container">
        <img className="danceparty__image" alt="dance party" src={danceparty} />
        <div className="danceparty__subtitle-container">
          <p className="danceparty__subtitle">
            Immerse in an hour of non-stop fun: dance parties that transform
            into personalized music videos, engaging games with the kids,
            choreographed dance moves for all to enjoy, and the glam of a red
            carpet with a mini photoshoot.
          </p>
          <p className="danceparty__subtitle">
            Make your celebration unforgettable with our dynamic one-hour
            entertainment service.
          </p>
          <p className="danceparty__subtitle">
            Let's turn your party into a showstopper! 🕺💃🎥🎈
          </p>
          <div className="danceparty__button">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Danceparty;
