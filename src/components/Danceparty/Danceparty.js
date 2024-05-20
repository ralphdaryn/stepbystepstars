import "./Danceparty.scss";
import danceparty from "../../assets/images/danceparty2.jpg";

const Danceparty = () => {
  return (
    <div className="danceparty">
      <h2 className="danceparty__title">Dance Party</h2>
      <img className="danceparty__image" alt="dance party" src={danceparty}></img>
      <p className="danceparty__subtitle">
        Immerse in an hour of non-stop fun: dance parties that transform into
        personalized music videos, engaging games with the kids, choreographed
        dance moves for all to enjoy, and the glam of a red carpet with a mini
        photoshoot. Make your celebration unforgettable with our dynamic
        one-hour entertainment service. Let's turn your party into a
        showstopper! 🕺💃🎥🎈
      </p>
    </div>
  );
};

export default Danceparty;
