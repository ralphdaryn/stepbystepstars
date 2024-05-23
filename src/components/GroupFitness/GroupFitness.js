import "./GroupFitness.scss";
import groupfitness from "../../assets/images/groupfitness.mp4";

const GroupFitness = () => {
  return (
    <div className="groupfitness">
      <h2 className="groupfitness__title">Group Fitness</h2>
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
        </div>
      </div>
    </div>
  );
};

export default GroupFitness;
