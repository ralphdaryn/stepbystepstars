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
            <li className="header__navigation-link">Home</li>
            <li className="header__navigation-link">About</li>
            <li className="header__navigation-link">Services</li>
            <li className="header__navigation-link">Gallery</li>
            <li className="header__navigation-link">Contact</li>
          </ul>
        </nav>
      </div>
      {showNavigation && (
        <div className="header__sidebar">
          <ul className="header__sidebar-list">
            <li className="header__sidebar-link">
              Home <FaArrowRight />
            </li>
            <li className="header__sidebar-link">
              About <FaArrowRight />
            </li>
            <li className="header__sidebar-link">
              Services <FaArrowRight />
            </li>
            <li className="header__sidebar-link">
              Contact
              <FaArrowRight />
            </li>
          </ul>
          <ul className="header__sidebar-icons">
            <li className="header__sidebar-image">
              <FaFacebook size={35} />
            </li>
            <li className="header__sidebar-image">
              <FaInstagramSquare size={35} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
