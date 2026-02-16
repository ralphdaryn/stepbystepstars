import "./Footer.scss";
import { Link } from "react-router-dom";
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

        {/* ✅ Subtle Client Login */}
        <Link to="/dashboard" className="footer__client-link">
          Client Login
        </Link>

        {/* ✅ Social Icons */}
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

        {/* ✅ Address */}
        <p className="footer__address">
          1400 Bayly St. Unit 13B,
          <br />
          Pickering, ON
          <br />
          L1W 3R2
        </p>

        {/* ✅ Copyright */}
        <p className="footer__text">Step By Step © {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
