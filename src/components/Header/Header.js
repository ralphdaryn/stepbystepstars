import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="step by step logo" />
        <FaBars size={30} />
      </div>
    </div>
  );
};

export default Header;
