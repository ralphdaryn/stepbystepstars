import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="step by step logo" />
        <FaBars
          className="header__navbar"
          size={30}
          onClick={toggleNavigation}
        />
        <nav className={`header__navigation ${showNavigation ? "show" : ""}`}>
          <ul className="header__navigation-list">
            <li className="header__navigation-link">Home</li>
            <li className="header__navigation-link">About</li>
            <li className="header__navigation-link">Services</li>
            <li className="header__navigation-link">Gallery</li>
            <li className="header__navigation-link">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
