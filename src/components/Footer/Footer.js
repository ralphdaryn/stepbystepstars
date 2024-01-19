import "./Footer.scss";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div>
          <FaFacebook />
          <FaInstagramSquare />
        </div>
      </div>
    </div>
  );
};

export default Footer;
