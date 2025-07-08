import { useState } from "react";
import { Helmet } from "react-helmet";
import "./BirthdayParties.scss";
import BackButton from "../BackButton/BackButton";
import birthdayPackage from "../../assets/images/birthdaypackage.jpeg";
import birthdayPackage2 from "../../assets/images/birthdaypackage2.jpeg";
import birthdayVideo from "../../assets/images/bdayparty.mp4";

const BirthdayParties = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => setSelectedImage(imageSrc);
  const closeImage = () => setSelectedImage(null);

  const FAQItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="faq-item">
        <div className="faq-header" onClick={() => setIsOpen(!isOpen)}>
          <h3 className="birthday__subtitle">{title}</h3>
          <button className="faq-toggle">{isOpen ? "-" : "+"}</button>
        </div>
        {isOpen && <div className="birthday-party__subtext">{children}</div>}
      </div>
    );
  };

  return (
    <div className="birthday-party">
      <Helmet>
        <title>Birthday Party Venue in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Plan your child’s next birthday party at Step By Step Club in Durham. Private party space, decorations, activities, and stress-free setup!"
        />
        <meta
          name="keywords"
          content="birthday party Durham, kids event space, private birthday venue, indoor party Durham"
        />
        <link
          rel="canonical"
          href="https://www.stepbystepclub.ca/birthdayparties"
        />
      </Helmet>

      <div className="birthday-party__header">
        <BackButton />
        <h2 className="birthday-party__title">Birthday Parties</h2>
      </div>

      <div className="birthday-party__container">
        <div className="birthday-party__video-container">
          <video
            className="birthday-party__video"
            src={birthdayVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            poster={birthdayPackage}
          />
        </div>

        <div className="birthday-party__wrapper">
          <img
            className="birthday-party__image"
            alt="Birthday Party"
            src={birthdayPackage}
            onClick={() => openImage(birthdayPackage)}
          />
          <img
            className="birthday-party__image"
            alt="Birthday Party 2"
            src={birthdayPackage2}
            onClick={() => openImage(birthdayPackage2)}
          />
        </div>

        <div className="faq">
          <h2 className="faq__title">FAQ</h2>
          <FAQItem title="How many adults are allowed?">
            Our space can accommodate 350 persons – there is no cap on adults!
          </FAQItem>
          <FAQItem title="Can I bring outside food?">
            Pizza has to be ordered through us; however, you can bring
            additional outside food at no additional cost.
          </FAQItem>
          <FAQItem title="What do you provide for decoration? ">
            For the little stars:
            <ul>
              <li>10 plates</li>
              <li>10 cups</li>
              <li>10 napkins</li>
              <li>10 forks</li>
              <li>Table runner & additional decor</li>
              <li>Table cloths</li>
            </ul>
            <br></br>
            <strong>Note:</strong> The number of plates, cups, napkins, etc. is
            dependent on your package selection.
          </FAQItem>
          <FAQItem title="What time slots do you offer?">
            11:00am–1:00pm, 1:30pm–3:30pm, or 4:00pm–6:00pm <br></br> <br></br>If you’d like a
            specific time, please ask us and we will try our best to accommodate.
          </FAQItem>
        </div>

        <div className="birthday-party__button">
          <button
            className="birthday-party__cta-button"
            onClick={() => {
              window.location.href =
                "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-07-08+13%3A41%3A30&id_class_tab=3&id_mode=1&k_class_tab=66298&k_service=267220&k_service_category=61177&s_id=QFXOVY";
            }}
          >
            Connect With Your Event Planner
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="image-modal__close" onClick={closeImage}>
            &times;
          </span>
          <img
            className="image-modal__content"
            src={selectedImage}
            alt="Full View"
          />
        </div>
      )}
    </div>
  );
};

export default BirthdayParties;