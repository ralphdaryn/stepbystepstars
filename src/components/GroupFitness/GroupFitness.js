import "./GroupFitness.scss";
import groupfitness from "../../assets/images/groupfitness.mp4";

const GroupFitness = () => {
  return (
    <div className="groupfitness">
      <h2 className="groupfitness__title">Group Fitness</h2>
      <video className="groupfitness__video" controls autoPlay muted>
        <source src={groupfitness} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="groupfitness__subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab amet
        excepturi, sit laudantium consectetur placeat unde, veritatis quasi,
        fugiat aliquam animi tenetur ut error? Ipsam perspiciatis necessitatibus
        dolores veniam. Pariatur, quidem exercitationem voluptatibus excepturi
        corrupti aliquam saepe consectetur, repellendus incidunt magni nam
        magnam iusto in ipsa ea dolorum, eum nihil voluptatum recusandae.
      </p>
    </div>
  );
};

export default GroupFitness;