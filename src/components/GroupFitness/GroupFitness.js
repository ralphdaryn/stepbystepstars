import "./GroupFitness.scss";
import groupfitness from "../../assets/images/groupfitness.mp4";
import BackButton from "../BackButton/BackButton";
import ContactButton from "../ContactButton/ContactButton";

const GroupFitness = () => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            necessitatibus dolores veniam. Pariatur, quidem exercitatione.
          </p>
          <p className="groupfitness__subtitle">
            voluptatibus excepturi corrupti aliquam saepe consectetur,
            repellendus incidunt magni nam magnam iusto in ipsa ea dolorum, eum
            nihil voluptatum recusandae.
          </p>
          <p className="groupfitness__subtitle">
            voluptatibus excepturi corrupti aliquam saepe consectetur,
            repellendus incidunt magni nam magnam iusto in ipsa ea dolorum, eum
            nihil voluptatum recusandae.
          </p>
          <div className="groupfitness__button">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupFitness;
