import "./Footer.scss";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="background">
          {Array.from({ length: 50 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="footer__icons">
          <a
            href="https://www.facebook.com/stepxstepclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="footer__facebook" />
          </a>
          <a
            href="https://www.instagram.com/stepxstepclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="footer__instagram" />
          </a>
        </div>
        <div>
          <p className="footer__text">Step By Step © {currentYear}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
