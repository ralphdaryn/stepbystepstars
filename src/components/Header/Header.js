import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const closeSidebar = () => {
    setShowNavigation(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeSidebar();
  };

  const handleLogoClick = () => {
    setActiveLink("");
    closeSidebar();
  };

  return (
    <div className={`header ${showNavigation ? "open" : ""}`}>
      <div className="header__container">
        <Link to="/" onClick={handleLogoClick}>
          <img className="header__logo" src={logo} alt="step by step logo" />
        </Link>
        {showNavigation ? (
          <FaTimes
            className="header__navbar"
            size={30}
            onClick={toggleNavigation}
          />
        ) : (
          <FaBars
            className="header__navbar"
            size={30}
            onClick={toggleNavigation}
          />
        )}
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li
              className={`header__navigation-link ${
                activeLink === "Home" ? "active" : ""
              }`}
            >
              <Link to="/" onClick={() => handleLinkClick("Home")}>
                Home
              </Link>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "BirthdayParties" ? "active" : ""
              }`}
            >
              <Link
                to="/birthdayparties"
                onClick={() => handleLinkClick("BirthdayParties")}
              >
                Birthday Parties
              </Link>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Fitness" ? "active" : ""
              }`}
            >
              <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
                Fitness
              </Link>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "About" ? "active" : ""
              }`}
            >
              <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
                Our Story
              </Link>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Events" ? "active" : ""
              }`}
            >
              <Link to="/events" onClick={() => handleLinkClick("Events")}>
                Events
              </Link>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Contact" ? "active" : ""
              }`}
            >
              <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {showNavigation && (
        <div className="header__sidebar">
          <ul className="header__sidebar-list">
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <Link to="/" onClick={() => handleLinkClick("Home")}>
                Home <FaArrowRight />
              </Link>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <Link
                to="/birthdayparties"
                onClick={() => handleLinkClick("BirthdayParties")}
              >
                Birthday Parties <FaArrowRight />
              </Link>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
                Fitness <FaArrowRight />
              </Link>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
                Our Story <FaArrowRight />
              </Link>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <Link to="/events" onClick={() => handleLinkClick("Events")}>
                Events <FaArrowRight />
              </Link>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
                Contact <FaArrowRight />
              </Link>
            </li>
          </ul>
          <ul className="header__sidebar-icons">
            <li className="header__sidebar-facebook">
              <a href="https://facebook.com/stepbystepstars">
                <FaFacebook size={35} />
              </a>
            </li>

            <li className="header__sidebar-instagram">
              <a href="https://instagram.com/stepbystepstars">
                <FaInstagramSquare size={35} />
              </a>
            </li>
          </ul>
          <div className="header__sidebar-footer">
            <p className="header__sidebar-text">Step By Step © 2024</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
