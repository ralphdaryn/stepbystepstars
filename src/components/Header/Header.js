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

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const closeSidebar = () => {
    setShowNavigation(false);
  };

  return (
    <div className={`header ${showNavigation ? "open" : ""}`}>
      <div className="header__container">
        <img className="header__logo" src={logo} alt="step by step logo" />
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
            <li className="header__navigation-link">
              <a href="/" onClick={closeSidebar}>
                Home
              </a>
            </li>
            <li className="header__navigation-link">
              <a href="#services" onClick={closeSidebar}>
                Services
              </a>
            </li>
            <li className="header__navigation-link">
              <a href="#about" onClick={closeSidebar}>
                About
              </a>
            </li>
            <li className="header__navigation-link">
              <a href="#contact" onClick={closeSidebar}>
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
              <a href="/">Home</a> <FaArrowRight />
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <a href="#services">Services</a> <FaArrowRight />
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <a href="#about">About</a> <FaArrowRight />
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <a href="#contact">Contact</a> <FaArrowRight />
            </li>
          </ul>
          <ul className="header__sidebar-icons">
            <li className="header__sidebar-facebook">
              <FaFacebook size={35} />
            </li>
            <li className="header__sidebar-instagram">
              <FaInstagramSquare size={35} />
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
