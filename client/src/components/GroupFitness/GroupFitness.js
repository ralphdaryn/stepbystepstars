import { useState } from "react";
import "./GroupFitness.scss";
import BackButton from "../BackButton/BackButton";
import groupFitnessImage from "../../assets/images/groupfitness1.jpeg";
import groupFitnessImage2 from "../../assets/images/groupfitness-member.jpeg";

const GroupFitness = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877"
    );
  };

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="groupfitness">
      <div className="groupfitness__header">
        <BackButton />
        <h2 className="groupfitness__title">Group Fitness</h2>
      </div>
      <div className="groupfitness__container">
        <div className="groupfitness__wrapper">
          <div className="groupfitness__image">
            <img
              src={groupFitnessImage}
              alt="Group Fitness"
              className="groupfitness__image-section"
              onClick={() => openImage(groupFitnessImage)}
            />
            <img
              src={groupFitnessImage2}
              alt="Group Fitness Member"
              className="groupfitness__image-section"
              onClick={() => openImage(groupFitnessImage2)}
            />
          </div>

          <p className="groupfitness__subtitle">
            Boost your fitness with an energizing group workout that combines
            strength, cardio, and flexibility for a total body experience.
          </p>
          <p className="groupfitness__subtitle">
            Designed for all levels, this class uses a mix of high-energy
            intervals, functional movements, and core-focused exercises to
            maximize results. Each session is adaptable to individual fitness
            levels, making it perfect for beginners and experienced participants
            alike.
          </p>
          <div className="groupfitness__button-container">
            <button
              className="groupfitness__button"
              onClick={handleButtonClick}
            >
              Sign Up Today!
            </button>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="image-modal__close" onClick={closeImage}>
            &times;
          </span>
          <img
            className="image-modal__content"
            src={selectedImage}
            alt="Full View"
          />
        </div>
      )}
    </div>
  );
};

export default GroupFitness;
