import './Waiver.scss'; 
import { Link } from 'react-router-dom';

const Waiver = ({ linkPath = "/waiverkids", buttonText = "Sign Waiver Here" }) => {
  return (
    <div className="waiver__container">
      <div className="waiver__content">
        <h2 className="waiver__title">Waiver</h2>
        <button className="waiver__button">
          <Link to={linkPath} className="waiver__link">{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default Waiver;
