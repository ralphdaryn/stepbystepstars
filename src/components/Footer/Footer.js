import "./Footer.scss";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__icons">
          <FaFacebook className="footer__facebook" />
          <FaInstagramSquare className="footer__instagram"  />
        </div>
        <div>
          <p className="footer__text">Step By Step © 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
