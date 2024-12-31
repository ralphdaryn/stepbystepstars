import "./GroupFitness.scss";
import groupfitness from "../../assets/images/groupfitness.mp4";
import BackButton from "../BackButton/BackButton";

const GroupFitness = () => {
  const handleButtonClick = () => {
    window.open("https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877");
  };

  return (
    <div className="groupfitness">
      <div className="groupfitness__header">
        <BackButton />
        <h2 className="groupfitness__title">Group Fitness</h2>
      </div>
      <div className="groupfitness__container">
        <video className="groupfitness__video" controls autoPlay muted>
          <source src={groupfitness} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="groupfitness_wrapper">
          <p className="groupfitness__subtitle">
            Boost your fitness with an energizing group workout that combines
            strength, cardio, and flexibility for a total body experience.
          </p>
          <p className="groupfitness__subtitle">
            Designed for all levels, this class uses a mix of high-energy
            intervals, functional movements, and core-focused exercises to
            maximize results. Each session is adaptable to individual fitness
            levels, making it perfect for beginners and experienced participants
            alike. Bring your motivation and leave with a sense of
            accomplishment, improved endurance, and increased strength!
          </p>
          <p className="groupfitness__subtitle">
            What to Expect:
            <ul>
              <li>• Dynamic warm-up to get the blood flowing.</li>
              <li>• Varied circuits targeting different muscle groups.</li>
              <li>• Core and balance work to enhance stability.</li>
              <li>• Cool down and stretching to finish.</li>
            </ul>
          </p>
          <div className="groupfitness__container">
            <button
              className="groupfitness__button"
              onClick={handleButtonClick}
            >Sign Up Today!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupFitness;
