import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaArrowDown,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/stown-purple.jpeg";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showBirthdayPartiesDropdown, setShowBirthdayPartiesDropdown] =
    useState(false);
  const [showFitnessDropdown, setShowFitnessDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const closeSidebar = () => {
    setShowNavigation(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeSidebar();
    setShowBirthdayPartiesDropdown(false);
    setShowFitnessDropdown(false);
  };

  const handleLogoClick = () => {
    setActiveLink("");
    closeSidebar();
    setShowBirthdayPartiesDropdown(false);
    setShowFitnessDropdown(false);
  };

  const handleContactClick = () => {
    handleLinkClick("Contact");
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact-section" } });
    } else {
      document
        .getElementById("contact-section")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDropdownClick = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className={`header ${showNavigation ? "open" : ""}`}>
      <div className="header__container">
        <div className="background">
          {Array.from({ length: 50 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="header__logo-container">
          <Link to="/" onClick={() => handleLogoClick("Home")}>
            <img className="header__logo-stown" src={logo2} alt="stown logo" />
            <img className="header__logo" src={logo} alt="Step by Step Logo" />
          </Link>
        </div>
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
                activeLink === "About" ? "active" : ""
              }`}
            >
              <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
                Our Story
              </Link>
            </li>
            <li
              className="header__navigation-link"
              onMouseEnter={() => setShowBirthdayPartiesDropdown(true)}
              onMouseLeave={() => setShowBirthdayPartiesDropdown(false)}
            >
              <span className="header__navigation-span">
                S-Town{" "}
                {showBirthdayPartiesDropdown ? (
                  <FaArrowDown className="arrow-icon" />
                ) : (
                  <FaArrowRight className="arrow-icon" />
                )}
              </span>
              {showBirthdayPartiesDropdown && (
                <ul className="header__navigation-link-dropdown">
                  <li>
                    <Link
                      to="/birthdayparties"
                      onClick={() => handleLinkClick("Dance Party")}
                    >
                      Birthday Parties
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dropinplay"
                      onClick={() => handleLinkClick("Face Painting")}
                    >
                      Drop In Play
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/waiverkids"
                      onClick={() => handleLinkClick("Musical Babies")}
                    >
                      Waiver
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="header__navigation-link"
              onMouseEnter={() => setShowFitnessDropdown(true)}
              onMouseLeave={() => setShowFitnessDropdown(false)}
            >
              <span className="header__navigation-span">
                Fitness{" "}
                {showFitnessDropdown ? (
                  <FaArrowDown className="arrow-icon" />
                ) : (
                  <FaArrowRight className="arrow-icon" />
                )}
              </span>
              {showFitnessDropdown && (
                <ul className="header__navigation-link-dropdown">
                  <li>
                    <Link
                      to="/mommyandme"
                      onClick={() => handleLinkClick("Mommy and Me")}
                    >
                      Mommy and Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/groupfitness"
                      onClick={() => handleLinkClick("Group Fitness")}
                    >
                      Group Fitness
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privatetraining"
                      onClick={() => handleLinkClick("Private Training")}
                    >
                      Private Training
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Events" ? "active" : ""
              }`}
            >
              <Link
                to="/specialevents"
                onClick={() => handleLinkClick("Events")}
              >
                Upcoming Events
              </Link>
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Contact" ? "active" : ""
              }`}
            >
              <button
                className="header__button contact-button"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </li>
            <li className="header__navigation">
              <p className="header__navigation-text">
                1400 Bayly St. Unit 13B,<br></br> Pickering, ON <br></br> L1W
                3R2
              </p>
            </li>
          </ul>
        </nav>
      </div>
      {showNavigation && (
        <div className="header__sidebar">
          <ul className="header__sidebar-list">
            <li
              className="header__sidebar-link"
              onClick={() => handleLinkClick("Home")}
            >
              <Link to="/">
                Home <FaArrowRight />
              </Link>
            </li>
            <li
              className="header__sidebar-link"
              onClick={() => handleLinkClick("About")}
            >
              <Link to="/ourstory">
                Our Story <FaArrowRight />
              </Link>
            </li>
            <li className="header__sidebar-link">
              <span
                onClick={() =>
                  handleDropdownClick(setShowBirthdayPartiesDropdown)
                }
              >
                S-Town (Indoor Play){" "}
                {showBirthdayPartiesDropdown ? (
                  <FaArrowDown />
                ) : (
                  <FaArrowRight />
                )}
              </span>
              {showBirthdayPartiesDropdown && (
                <ul className="header__sidebar-dropdown">
                  <li className="header__sidebar-dropdown-item">
                    <Link
                      to="/birthdayparties"
                      onClick={() => handleLinkClick("Dance Party")}
                    >
                      Birthday Parties
                    </Link>
                  </li>
                  <li className="header__sidebar-dropdown-item">
                    <Link
                      to="/dropinplay"
                      onClick={() => handleLinkClick("Face Painting")}
                    >
                      Drop in Play
                    </Link>
                  </li>
                  <li className="header__sidebar-dropdown-item">
                    <Link
                      to="/waiverkids"
                      onClick={() => handleLinkClick("Musical Babies")}
                    >
                      Waiver
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="header__sidebar-link">
              <span onClick={() => handleDropdownClick(setShowFitnessDropdown)}>
                Fitness{" "}
                {showFitnessDropdown ? <FaArrowDown /> : <FaArrowRight />}
              </span>
              {showFitnessDropdown && (
                <ul className="header__sidebar-dropdown">
                  <li>
                    <Link
                      to="/mommyandme"
                      onClick={() => handleLinkClick("Mommy and Me")}
                    >
                      Mommy and Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/groupfitness"
                      onClick={() => handleLinkClick("Group Fitness")}
                    >
                      Group Fitness
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privatetraining"
                      onClick={() => handleLinkClick("Private Training")}
                    >
                      Private Training
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="header__sidebar-link"
              onClick={() => handleLinkClick("Events")}
            >
              <Link to="/specialevents">
                Upcoming Events <FaArrowRight />
              </Link>
            </li>
            <li className="header__sidebar-link" onClick={handleContactClick}>
              <span>
                Contact Us
                <FaArrowRight />
              </span>
            </li>
          </ul>
          <ul className="header__sidebar-icons">
            <li className="header__sidebar-facebook">
              <a href="https://www.facebook.com/stepxstepclub/">
                <FaFacebook />
              </a>
            </li>
            <li className="header__sidebar-instagram">
              <a href="https://www.instagram.com/stepxstepclub/">
                <FaInstagramSquare />
              </a>
            </li>
          </ul>
          <div>
            <p className="header__sidebar-text">
              1400 Bayly St. Unit 13B,<br></br> Pickering, ON<br></br> L1W 3R2
            </p>
          </div>
          <div className="header__sidebar-footer">
            <p className="header__sidebar-footer-text">
              © Step By Step {currentYear}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;