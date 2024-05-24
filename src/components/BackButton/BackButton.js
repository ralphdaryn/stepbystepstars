import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.scss";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      <FaArrowLeft className="back-button-icon" />
      <span className="back-button-text">Back</span>
    </button>
  );
};

export default BackButton;
