import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";

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
    closeSidebar();
  };

  return (
    <div className={`header ${showNavigation ? "open" : ""}`}>
      <div className="header__container">
        <a href="/" onClick={handleLogoClick}>
          <img className="header__logo" src={logo} alt="step by step logo" />
        </a>
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
              <a href="/" onClick={() => handleLinkClick("Home")}>
                Home
              </a>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Services" ? "active" : ""
              }`}
            >
              <a href="#services" onClick={() => handleLinkClick("Services")}>
                Services
              </a>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "About" ? "active" : ""
              }`}
            >
              <a href="#about" onClick={() => handleLinkClick("About")}>
                About
              </a>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Contact" ? "active" : ""
              }`}
            >
              <a href="#contact" onClick={() => handleLinkClick("Contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {showNavigation && (
        <div className="header__sidebar">
          <ul className="header__sidebar-list">
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <a href="/">Home</a>{" "}
              <a href="/">
                <FaArrowRight />
              </a>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <a href="#services">Services</a>{" "}
              <a href="#services">
                <FaArrowRight />
              </a>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <a href="#about">About</a>{" "}
              <a href="#about">
                <FaArrowRight />
              </a>
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <a href="#contact">Contact</a>{" "}
              <a href="#contact">
                <FaArrowRight />
              </a>
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
