import "./WaiverPage.scss";
import BackButton from "../BackButton/BackButton";

const WaiverPage = () => {
  const handleClick = () => {
    window.location.href = "/waiverkids";
  };

  const handleButtonClick = () => {
    window.location.href = "/waiver";
  };

  return (
    <div className="waiver-page">
      <div className="waiver-page__header">
        <BackButton />
        <h2 className="waiver-page__title">Waivers</h2>
      </div>
      <div className="waiver-page__container">
        <div>
          <p className="waiver-page__subtitle">
            Please click the button below to fill out the waiver form.
          </p>
        </div>
        <div className="waiver-page__wrapper">
          <div>
            <button className="waiver-page__button" onClick={handleClick}>
              Drop In Play
            </button>
          </div>
          <div>
            <button className="waiver-page__button" onClick={handleButtonClick}>
              Group Fitness
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaiverPage;
