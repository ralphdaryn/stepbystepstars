import "./Waiver.scss";

const Waiver = () => {
  const handleClick = () => {
    window.location.href = "/waiverkids";
  };

  return (
    <div className="waiver">
      <div className="waiver__container">
        <div className="waiver__content">
          <h2 className="waiver__title">Waiver</h2>
          <button className="waiver__button" onClick={handleClick}>
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waiver;