import "./PrivateTraining.scss";
import privatetraining from "../../assets/images/privatetraining.mp4";

const PrivateTraining = () => {
  return (
    <div className="private-training">
      <h2 className="private-training__title">Private Training</h2>
      <video className="groupfitness__video" controls autoPlay muted>
        <source src={privatetraining} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="private-training__subtitle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi est unde
        impedit cumque, repellendus veritatis ratione similique reprehenderit
        molestiae nam expedita, modi eligendi optio saepe. Blanditiis repellat
        harum tempore mollitia. Illum cumque assumenda eveniet. Sequi at
        temporibus ipsa voluptatibus tempore fugiat totam iusto et quod eveniet,
        excepturi rerum veniam? Cumque soluta voluptatum iste nisi. Officia amet
        repellendus facilis debitis aspernatur!
      </p>
    </div>
  );
};

export default PrivateTraining;
