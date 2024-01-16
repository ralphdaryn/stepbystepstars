import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div>
          <h2 className="main__text">
            Elevate Your Celebration and Wellness with
          </h2>
          <h1 className="main__text">Step By Step Stars!</h1>
        </div>
        <p className="main__subtext">We offer the following services:</p>
        <div>
          <ul>
            <li>DANCE PARTIES (Ages 4+)</li>
            <li>FACE PAINTING </li>
            <li>MUSICAL BABIES (Ages 3 and under)</li>
            <li>FITNESS CLASSES for MOMS</li>
          </ul>
        </div>
        <div>
          <p className="main__subtext">
            Join us for unforgettable experiences!
          </p>
        </div>
        <button>Learn More</button>
        <button>Book Now!</button>
      </div>
    </div>
  );
};

export default Main;
