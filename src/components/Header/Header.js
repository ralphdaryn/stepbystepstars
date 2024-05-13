// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import {
//   FaBars,
//   FaTimes,
//   FaArrowRight,
//   FaFacebook,
//   FaInstagramSquare,
// } from "react-icons/fa";
// import "./Header.scss";

// const Header = () => {
//   const [showNavigation, setShowNavigation] = useState(false);
//   const [activeLink, setActiveLink] = useState("");

//   const toggleNavigation = () => {
//     setShowNavigation(!showNavigation);
//   };

//   const closeSidebar = () => {
//     setShowNavigation(false);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     closeSidebar();
//   };

//   const handleLogoClick = () => {
//     setActiveLink("");
//     closeSidebar();
//   };

//   return (
//     <div className={`header ${showNavigation ? "open" : ""}`}>
//       <div className="header__container">
//         <Link to="/" onClick={handleLogoClick}>
//           <img className="header__logo" src={logo} alt="step by step logo" />
//         </Link>
//         {showNavigation ? (
//           <FaTimes
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         ) : (
//           <FaBars
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         )}
//         <nav className="header__navigation">
//           <ul className="header__navigation-list">
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Home" ? "active" : ""
//               }`}
//             >
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "BirthdayParties" ? "active" : ""
//               }`}
//             >
//               <Link
//                 to="/birthdayparties"
//                 onClick={() => handleLinkClick("BirthdayParties")}
//               >
//                 Birthday Parties
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Fitness" ? "active" : ""
//               }`}
//             >
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "About" ? "active" : ""
//               }`}
//             >
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Events" ? "active" : ""
//               }`}
//             >
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Contact" ? "active" : ""
//               }`}
//             >
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {showNavigation && (
//         <div className="header__sidebar">
//           <ul className="header__sidebar-list">
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link
//                 to="/birthdayparties"
//                 onClick={() => handleLinkClick("BirthdayParties")}
//               >
//                 Birthday Parties <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact <FaArrowRight />
//               </Link>
//             </li>
//           </ul>
//           <ul className="header__sidebar-icons">
//             <li className="header__sidebar-facebook">
//               <a href="https://facebook.com/stepbystepstars">
//                 <FaFacebook size={35} />
//               </a>
//             </li>

//             <li className="header__sidebar-instagram">
//               <a href="https://instagram.com/stepbystepstars">
//                 <FaInstagramSquare size={35} />
//               </a>
//             </li>
//           </ul>
//           <div className="header__sidebar-footer">
//             <p className="header__sidebar-text">Step By Step © 2024</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// import "./Header.scss";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaArrowRight,
//   FaArrowDown,
//   FaFacebook,
//   FaInstagramSquare,
// } from "react-icons/fa";
// import logo from "../../assets/images/logo.png";

// const Header = () => {
//   const [showNavigation, setShowNavigation] = useState(false);
//   const [activeLink, setActiveLink] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState("");

//   const toggleNavigation = () => {
//     setShowNavigation(!showNavigation);
//   };

//   const closeSidebar = () => {
//     setShowNavigation(false);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     closeSidebar();
//   };

//   const handleDropdownToggle = (dropdown) => {
//     if (activeDropdown === dropdown) {
//       setActiveDropdown("");
//     } else {
//       setActiveDropdown(dropdown);
//     }
//   };

//   const handleLogoClick = () => {
//     setActiveLink("");
//     closeSidebar();
//   };

//   return (
//     <div className={`header ${showNavigation ? "open" : ""}`}>
//       <div className="header__container">
//         <Link to="/" onClick={handleLogoClick}>
//           <img className="header__logo" src={logo} alt="step by step logo" />
//         </Link>
//         {showNavigation ? (
//           <FaTimes
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         ) : (
//           <FaBars
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         )}
//         <nav className="header__navigation">
//           <ul className="header__navigation-list">
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Home" ? "active" : ""
//               }`}
//             >
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeDropdown === "birthdayParties" ? "active" : ""
//               }`}
//             >
//               <span onClick={() => handleDropdownToggle("birthdayParties")}>
//                 Birthday Parties{" "}
//                 {activeDropdown === "birthdayParties" ? (
//                   <FaArrowDown />
//                 ) : (
//                   <FaArrowRight />
//                 )}
//               </span>
//               <ul
//                 className={`header__navigation-dropdown ${
//                   activeDropdown === "birthdayParties" ? "active" : ""
//                 }`}
//               >
//                 <li onClick={closeSidebar}>
//                   <Link to="/danceparty">Dance Party</Link>
//                 </li>
//                 <li onClick={closeSidebar}>
//                   <Link to="/facepaint">Face Painting</Link>
//                 </li>
//                 <li onClick={closeSidebar}>
//                   <Link to="/musicalbabies">Musical Babies</Link>
//                 </li>
//               </ul>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Fitness" ? "active" : ""
//               }`}
//             >
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "About" ? "active" : ""
//               }`}
//             >
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Events" ? "active" : ""
//               }`}
//             >
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Contact" ? "active" : ""
//               }`}
//             >
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {showNavigation && (
//         <div className="header__sidebar">
//           <ul className="header__sidebar-list">
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link">
//               <span onClick={() => handleDropdownToggle("birthdayParties")}>
//                 Birthday Parties{" "}
//                 {activeDropdown === "birthdayParties" ? (
//                   <FaArrowDown />
//                 ) : (
//                   <FaArrowRight />
//                 )}
//               </span>
//               <ul
//                 className={`header__sidebar-dropdown ${
//                   activeDropdown === "birthdayParties" ? "active" : ""
//                 }`}
//               >
//                 <li onClick={closeSidebar}>
//                   <Link to="/danceparty">Dance Party</Link>
//                 </li>
//                 <li onClick={closeSidebar}>
//                   <Link to="/facepaint">Face Painting</Link>
//                 </li>
//                 <li onClick={closeSidebar}>
//                   <Link to="/musicalbabies">Musical Babies</Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact <FaArrowRight />
//               </Link>
//             </li>
//           </ul>
//           <ul className="header__sidebar-icons">
//             <li className="header__sidebar-facebook">
//               <a href="https://facebook.com/stepbystepstars">
//                 <FaFacebook size={35} />
//               </a>
//             </li>

//             <li className="header__sidebar-instagram">
//               <a href="https://instagram.com/stepbystepstars">
//                 <FaInstagramSquare size={35} />
//               </a>
//             </li>
//           </ul>
//           <div className="header__sidebar-footer">
//             <p className="header__sidebar-text">Step By Step © 2024</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaArrowRight,
//   FaFacebook,
//   FaInstagramSquare,
// } from "react-icons/fa";
// import "./Header.scss";
// import logo from "../../assets/images/logo.png";

// const Header = () => {
//   const [showNavigation, setShowNavigation] = useState(false);
//   const [activeLink, setActiveLink] = useState("");
//   const [showBirthdayPartiesDropdown, setShowBirthdayPartiesDropdown] =
//     useState(false);

//   const toggleNavigation = () => {
//     setShowNavigation(!showNavigation);
//   };

//   const closeSidebar = () => {
//     setShowNavigation(false);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     closeSidebar();
//   };

//   const toggleBirthdayPartiesDropdown = () => {
//     setShowBirthdayPartiesDropdown(!showBirthdayPartiesDropdown);
//   };

//   const handleLogoClick = () => {
//     setActiveLink("");
//     closeSidebar();
//   };

//   return (
//     <div className={`header ${showNavigation ? "open" : ""}`}>
//       <div className="header__container">
//         <Link to="/" onClick={handleLogoClick}>
//           <img className="header__logo" src={logo} alt="step by step logo" />
//         </Link>
//         {showNavigation ? (
//           <FaTimes
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         ) : (
//           <FaBars
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         )}
//         <nav className="header__navigation">
//           <ul className="header__navigation-list">
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Home" ? "active" : ""
//               }`}
//             >
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "BirthdayParties" ? "active" : ""
//               }`}
//               onClick={toggleBirthdayPartiesDropdown}
//             >
//               <span>Birthday Parties</span>
//               {showBirthdayPartiesDropdown && (
//                 <ul className="header__navigation-dropdown">
//                   <li>
//                     <Link
//                       to="/danceparty"
//                       onClick={() => handleLinkClick("Dance Party")}
//                     >
//                       Dance Party
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/facepaint"
//                       onClick={() => handleLinkClick("Face Painting")}
//                     >
//                       Face Painting
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/musicalbabies"
//                       onClick={() => handleLinkClick("Musical Babies")}
//                     >
//                       Musical Babies
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Fitness" ? "active" : ""
//               }`}
//             >
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "About" ? "active" : ""
//               }`}
//             >
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Events" ? "active" : ""
//               }`}
//             >
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Contact" ? "active" : ""
//               }`}
//             >
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {showNavigation && (
//         <div className="header__sidebar">
//           <ul className="header__sidebar-list">
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home <FaArrowRight />
//               </Link>
//             </li>
//             <li
//               className="header__sidebar-link"
//               onClick={toggleBirthdayPartiesDropdown}
//             >
//               <span>Birthday Parties</span>
//               {showBirthdayPartiesDropdown && (
//                 <ul className="header__sidebar-dropdown">
//                   <li>
//                     <Link
//                       to="/danceparty"
//                       onClick={() => handleLinkClick("Dance Party")}
//                     >
//                       Dance Party
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/facepaint"
//                       onClick={() => handleLinkClick("Face Painting")}
//                     >
//                       Face Painting
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/musicalbabies"
//                       onClick={() => handleLinkClick("Musical Babies")}
//                     >
//                       Musical Babies
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact <FaArrowRight />
//               </Link>
//             </li>
//           </ul>
//           <ul className="header__sidebar-icons">
//             <li className="header__sidebar-facebook">
//               <a href="https://facebook.com/stepbystepstars">
//                 <FaFacebook size={35} />
//               </a>
//             </li>

//             <li className="header__sidebar-instagram">
//               <a href="https://instagram.com/stepbystepstars">
//                 <FaInstagramSquare size={35} />
//               </a>
//             </li>
//           </ul>
//           <div className="header__sidebar-footer">
//             <p className="header__sidebar-text">Step By Step © 2024</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaArrowRight,
//   FaFacebook,
//   FaInstagramSquare,
// } from "react-icons/fa";
// import "./Header.scss";
// import logo from "../../assets/images/logo.png";

// const Header = () => {
//   const [showNavigation, setShowNavigation] = useState(false);
//   const [activeLink, setActiveLink] = useState("");
//   const [showBirthdayPartiesDropdown, setShowBirthdayPartiesDropdown] =
//     useState(false);

//   const toggleNavigation = () => {
//     setShowNavigation(!showNavigation);
//   };

//   const closeSidebar = () => {
//     setShowNavigation(false);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     closeSidebar();
//   };

//   const toggleBirthdayPartiesDropdown = () => {
//     setShowBirthdayPartiesDropdown(!showBirthdayPartiesDropdown);
//   };

//   const handleLogoClick = () => {
//     setActiveLink("");
//     closeSidebar();
//   };

//   return (
//     <div className={`header ${showNavigation ? "open" : ""}`}>
//       <div className="header__container">
//         <Link to="/" onClick={handleLogoClick}>
//           <img className="header__logo" src={logo} alt="step by step logo" />
//         </Link>
//         {showNavigation ? (
//           <FaTimes
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         ) : (
//           <FaBars
//             className="header__navbar"
//             size={30}
//             onClick={toggleNavigation}
//           />
//         )}
//         <nav className="header__navigation">
//           <ul className="header__navigation-list">
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Home" ? "active" : ""
//               }`}
//             >
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "BirthdayParties" ? "active" : ""
//               }`}
//               onClick={toggleBirthdayPartiesDropdown}
//             >
//               <span>Birthday Parties</span>
//               {showBirthdayPartiesDropdown && (
//                 <ul className="header__navigation-dropdown">
//                   <li>
//                     <Link
//                       to="/danceparty"
//                       onClick={() => handleLinkClick("Dance Party")}
//                     >
//                       Dance Party
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/facepaint"
//                       onClick={() => handleLinkClick("Face Painting")}
//                     >
//                       Face Painting
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/musicalbabies"
//                       onClick={() => handleLinkClick("Musical Babies")}
//                     >
//                       Musical Babies
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Fitness" ? "active" : ""
//               }`}
//             >
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "About" ? "active" : ""
//               }`}
//             >
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Events" ? "active" : ""
//               }`}
//             >
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events
//               </Link>
//             </li>
//             <li
//               className={`header__navigation-link ${
//                 activeLink === "Contact" ? "active" : ""
//               }`}
//             >
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       {showNavigation && (
//         <div className="header__sidebar">
//           <ul className="header__sidebar-list">
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/" onClick={() => handleLinkClick("Home")}>
//                 Home <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link">
//               <span onClick={toggleBirthdayPartiesDropdown}>
//                 Birthday Parties <FaArrowRight />
//               </span>
//               {showBirthdayPartiesDropdown && (
//                 <ul className="header__sidebar-dropdown">
//                   <li>
//                     <Link
//                       to="/danceparty"
//                       onClick={() => handleLinkClick("Dance Party")}
//                     >
//                       Dance Party
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/facepaint"
//                       onClick={() => handleLinkClick("Face Painting")}
//                     >
//                       Face Painting
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/musicalbabies"
//                       onClick={() => handleLinkClick("Musical Babies")}
//                     >
//                       Musical Babies
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/fitness" onClick={() => handleLinkClick("Fitness")}>
//                 Fitness <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/ourstory" onClick={() => handleLinkClick("About")}>
//                 Our Story <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/events" onClick={() => handleLinkClick("Events")}>
//                 Events <FaArrowRight />
//               </Link>
//             </li>
//             <li className="header__sidebar-link" onClick={closeSidebar}>
//               <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
//                 Contact <FaArrowRight />
//               </Link>
//             </li>
//           </ul>
//           <ul className="header__sidebar-icons">
//             <li className="header__sidebar-facebook">
//               <a href="https://facebook.com/stepbystepstars">
//                 <FaFacebook size={35} />
//               </a>
//             </li>

//             <li className="header__sidebar-instagram">
//               <a href="https://instagram.com/stepbystepstars">
//                 <FaInstagramSquare size={35} />
//               </a>
//             </li>
//           </ul>
//           <div className="header__sidebar-footer">
//             <p className="header__sidebar-text">Step By Step © 2024</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showBirthdayPartiesDropdown, setShowBirthdayPartiesDropdown] =
    useState(false);
  const [showFitnessDropdown, setShowFitnessDropdown] = useState(false);

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

  const toggleDropdown = (dropdown) => {
    if (dropdown === "birthdayParties") {
      setShowBirthdayPartiesDropdown(!showBirthdayPartiesDropdown);
      setShowFitnessDropdown(false);
    } else if (dropdown === "fitness") {
      setShowFitnessDropdown(!showFitnessDropdown);
      setShowBirthdayPartiesDropdown(false);
    }
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
              onClick={() => toggleDropdown("birthdayParties")}
            >
              <span>Birthday Parties</span>
              {showBirthdayPartiesDropdown && (
                <ul className="header__navigation-dropdown">
                  <li>
                    <Link
                      to="/danceparty"
                      onClick={() => handleLinkClick("Dance Party")}
                    >
                      Dance Party
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/facepaint"
                      onClick={() => handleLinkClick("Face Painting")}
                    >
                      Face Painting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/musicalbabies"
                      onClick={() => handleLinkClick("Musical Babies")}
                    >
                      Musical Babies
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`header__navigation-link ${
                activeLink === "Fitness" ? "active" : ""
              }`}
              onClick={() => toggleDropdown("fitness")}
            >
              <span>Fitness</span>
              {showFitnessDropdown && (
                <ul className="header__navigation-dropdown">
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
              <span onClick={() => toggleDropdown("birthdayParties")}>
                Birthday Parties <FaArrowRight />
              </span>
              {showBirthdayPartiesDropdown && (
                <ul className="header__sidebar-dropdown">
                  <li>
                    <Link
                      to="/danceparty"
                      onClick={() => handleLinkClick("Dance Party")}
                    >
                      Dance Party
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/facepaint"
                      onClick={() => handleLinkClick("Face Painting")}
                    >
                      Face Painting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/musicalbabies"
                      onClick={() => handleLinkClick("Musical Babies")}
                    >
                      Musical Babies
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="header__sidebar-link" onClick={closeSidebar}>
              <span onClick={() => toggleDropdown("fitness")}>
                Fitness <FaArrowRight />
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
