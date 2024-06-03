import "./ContactButton.scss";
import { useNavigate, useLocation } from "react-router-dom";

const ContactButton = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact-section" } });
    } else {
      document
        .getElementById("contact-section")
        .scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <button className="contact-button" onClick={handleContactClick}>
      Contact
    </button>
  );
};

export default ContactButton;
