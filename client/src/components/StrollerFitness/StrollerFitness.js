import "./StrollerFitness.scss";
import strollerfitness from "../../assets/images/strollerfitness.mp4";
import BackButton from "../BackButton/BackButton";

const StrollerFitness = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_business=651877&k_class_tab=66299&uid=0&id_class_tab=2";
  };

  return (
    <div className="stroller-fitness">
      <div className="stroller-fitness__header">
        <BackButton />
        <h2 className="stroller-fitness__title">Stroller Fitness</h2>
      </div>
      <div className="stroller-fitness__container">
        <video className="stroller-fitness__video" controls autoPlay muted>
          <source src={strollerfitness} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="stroller-fitness__wrapper">
          <p className="stroller-fitness__subtitle">
            Tired of scrolling while your coffee goes cold and your muscles go
            soft? Grab your stroller (and your sanity) and join us for a
            45-minute sweat session that’s all about strong bodies, real laughs,
            and zero judgment.
          </p>
          <p className="stroller-fitness__subtitle">
            We mix squats, lunges, cardio bursts, and core work—all while your
            baby rides shotgun in the stroller. No childcare? No problem. Crying
            babies, snack breaks, and diaper changes are all part of the vibe.
          </p>
          <p className="stroller-fitness__subtitle">
            You’ll leave stronger, more energized, and maybe even with a new mom
            friend or two.
          </p>
          <p className="stroller-fitness__subtitle">
            What to Expect:
            <ul>
              <li>
                • A full-body workout that balances challenge and accessibility
                for moms at any stage.
              </li>
              <li>
                • A supportive space where babies are welcome and your
                well-being comes first.
              </li>
              <li>
                • Encouragement, energy, and connection—you’re not doing this
                alone.
              </li>
              <li>• Real talk, real sweat, and no judgment.</li>
            </ul>
            <br />
            <p>Let’s move, mama—your journey begins here.</p>
          </p>
          <div className="stroller-fitness__container">
            <button
              className="stroller-fitness__button"
              onClick={handleButtonClick}
            >
              Book Your Spot!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrollerFitness;
