import "./Waiver.scss";

const Waiver = () => {
  const handleClick = () => {
    window.location.href = "/waiverpage";
  };

  return (
    <div className="waiver__container">
      <div className="waiver__content">
        <h2 className="waiver__title">Waivers</h2>
        <button className="waiver__button" onClick={handleClick}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Waiver;
