import "./PrivateTraining.scss";
import privatetraining from "../../assets/images/privatetraining.mp4";
import BackButton from "../BackButton/BackButton";

const PrivateTraining = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2024-12-31+15%3A28%3A54&id_class_tab=3&id_mode=1&s_id=78Epip";
  };

  return (
    <div className="private-training">
      <div className="private-training__header">
        <BackButton />
        <h2 className="private-training__title">Personal Training</h2>
      </div>
      <div className="private-training__container">
        <video className="private-training__video" controls autoPlay muted>
          <source src={privatetraining} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="private-training__wrapper">
          <p className="private-training__subtitle">
            Take your fitness journey to the next level with personalized
            training and coaching designed to fit your unique needs, goals, and
            lifestyle.
          </p>
          <p className="private-training__subtitle">
            Each session is crafted to provide you with expert guidance,
            support, and accountability, helping you build strength, improve
            endurance, and boost overall health.
          </p>
          <p className="private-training__subtitle">
            Whether you’re a beginner or looking to break through a fitness
            plateau, I’ll be there every step of the way to keep you motivated,
            informed, and progressing toward your goals.
          </p>
          <p className="private-training__subtitle">
            What to Expect:
            <ul>
              <li>
                • Customized workouts tailored to your specific goals,
                preferences, and fitness level.
              </li>
              <li>
                • Safe and effective techniques focused on proper form and
                injury prevention.
              </li>
              <li>
                • Ongoing coaching and support to build healthy, sustainable
                habits.
              </li>
              <li>
                • A balanced approach incorporating fitness, nutrition, and
                lifestyle adjustments.
              </li>
            </ul>
            <br></br>
            <p>
              Start today and take the first step toward becoming your best
              self!
            </p>
          </p>
          <div className="private-training__container">
            <button
              className="private-training__button"
              onClick={handleButtonClick}
            >
              Book Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateTraining;
