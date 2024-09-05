import "./PrivateTraining.scss";
import privatetraining from "../../assets/images/privatetraining.mp4";
import BackButton from "../BackButton/BackButton";
import ContactButton from "../ContactButton/ContactButton";

const PrivateTraining = () => {
  return (
    <div className="private-training">
      <div className="private-training__header">
        <BackButton />
        <h2 className="private-training__title">Private Training</h2>
      </div>
      <div className="private-training__container">
        <video className="private-training__video" controls autoPlay muted>
          <source src={privatetraining} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="private-training__wrapper">
          <p className="private-training__subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. eveniet.
            Sequi at temporibus ipsa voluptatibus tempore fugiat totam
          </p>
          <p className="private-training__subtitle">
            Quasi est unde impedit cumque, repellendus veritatis ratione
            similique reprehenderit molestiae nam expedita, modi eligendi optio
            saepe.
          </p>
          <p className="private-training__subtitle">
            iusto et quod eveniet, excepturi rerum veniam? Cumque soluta
            voluptatum iste nisi. Officia amet repellendus facilis debitis
            aspernatur!
          </p>
          <div className="private-training__button">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateTraining;
