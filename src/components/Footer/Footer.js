import "./Footer.scss";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <FaFacebook />
        <FaInstagramSquare />
      </div>
    </div>
  );
};

export default Footer;
