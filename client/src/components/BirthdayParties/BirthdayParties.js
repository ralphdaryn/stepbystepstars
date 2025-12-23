import { useState } from "react";
import { Helmet } from "react-helmet";
import "./BirthdayParties.scss";

import birthdayPackage from "../../assets/images/birthdaypackage.jpeg";
import birthdayPackage2 from "../../assets/images/birthdaypackage2.jpeg";
import birthdayVideo from "../../assets/images/bdayparty.mp4";

const BirthdayParties = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (src) => setSelectedMedia(src);
  const closeMedia = () => setSelectedMedia(null);

  const FAQItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="birthday-party__faq-item">
        <button
          type="button"
          className="birthday-party__faq-header"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="birthday-party__faq-title">{title}</span>
          <span
            className={`birthday-party__faq-toggle ${isOpen ? "is-open" : ""}`}
          >
            {isOpen ? "–" : "+"}
          </span>
        </button>

        <div
          className={`birthday-party__faq-body ${isOpen ? "is-open" : ""}`}
          aria-hidden={!isOpen}
        >
          {children}
        </div>
      </div>
    );
  };

  const handlePlanner = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-07-08+13%3A41%3A30&id_class_tab=3&id_mode=1&k_class_tab=66298&k_service=267220&k_service_category=61177&s_id=QFXOVY";
  };

  return (
    <div className="birthday-party" data-page="birthday-parties">
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

      {/* Header */}
      <header className="birthday-party__header">
        <h1 className="birthday-party__title">Birthday Parties</h1>
      </header>

      {/* Hero (mobile stacked) */}
      <section
        className="birthday-party__hero"
        aria-label="Birthday parties hero"
      >
        <article className="birthday-party__hero-card card card--soft">
          <p className="birthday-party__kicker">
            Stress-free • Fun • Private space
          </p>
          <h2 className="birthday-party__heading">
            Celebrate your little star.
          </h2>

          <p className="birthday-party__text">
            Host a birthday party that’s easy for parents and unforgettable for
            kids. We’ll help you make it smooth, organized, and fun from start
            to finish.
          </p>

          <div className="birthday-party__cta-wrap">
            <button className="birthday-party__cta" onClick={handlePlanner}>
              Connect With Your Event Planner
            </button>
          </div>
        </article>

        {/* Media lane */}
        <div className="birthday-party__media">
          <div className="birthday-party__video-card card">
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

          <div className="birthday-party__images">
            <button
              type="button"
              className="birthday-party__media-btn"
              onClick={() => openMedia(birthdayPackage)}
              aria-label="View birthday package photo 1"
            >
              <img
                className="birthday-party__image"
                alt="Birthday Party"
                src={birthdayPackage}
                loading="lazy"
              />
            </button>

            <button
              type="button"
              className="birthday-party__media-btn"
              onClick={() => openMedia(birthdayPackage2)}
              aria-label="View birthday package photo 2"
            >
              <img
                className="birthday-party__image"
                alt="Birthday Party 2"
                src={birthdayPackage2}
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="birthday-party__faq card"
        aria-label="Birthday party FAQ"
      >
        <h2 className="birthday-party__faq-heading">FAQ</h2>

        <FAQItem title="How many adults are allowed?">
          <p className="birthday-party__faq-text">
            Our space can accommodate 350 persons — there is no cap on adults!
          </p>
        </FAQItem>

        <FAQItem title="Can I bring outside food?">
          <p className="birthday-party__faq-text">
            Pizza has to be ordered through us; however, you can bring
            additional outside food at no additional cost.
          </p>
        </FAQItem>

        <FAQItem title="What do you provide for decoration?">
          <p className="birthday-party__faq-text">For the little stars:</p>
          <ul className="birthday-party__faq-list">
            <li>10 plates</li>
            <li>10 cups</li>
            <li>10 napkins</li>
            <li>10 forks</li>
            <li>Table runner &amp; additional decor</li>
            <li>Table cloths</li>
          </ul>
          <p className="birthday-party__faq-text">
            <strong>Note:</strong> The number of plates, cups, napkins, etc. is
            dependent on your package selection.
          </p>
        </FAQItem>

        <FAQItem title="What time slots do you offer?">
          <p className="birthday-party__faq-text">
            11:00am–1:00pm, 1:30pm–3:30pm, or 4:00pm–6:00pm
          </p>
          <p className="birthday-party__faq-text">
            If you’d like a specific time, please ask us and we will try our
            best to accommodate.
          </p>
        </FAQItem>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="image-modal" onClick={closeMedia}>
          <span className="image-modal__close" onClick={closeMedia}>
            &times;
          </span>

          {selectedMedia.includes(".mp4") ? (
            <video className="image-modal__content" controls autoPlay>
              <source src={selectedMedia} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="image-modal__content"
              src={selectedMedia}
              alt="Full View"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BirthdayParties;