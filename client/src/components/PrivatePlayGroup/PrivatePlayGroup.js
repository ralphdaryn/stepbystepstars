import { Helmet } from "react-helmet";
import "./PrivatePlayGroup.scss";
import BackButton from "../BackButton/BackButton";
import privatePlayGroupImg from "../../assets/images/dropinplay5.JPEG";
import privatePlayGroupImg2 from "../../assets/images/dropinplay4.JPEG";

const PrivatePlayGroup = () => {
  return (
    <div className="privateplaygroup">
      <Helmet>
        <title>Private Play Group in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Explore S Town – a private indoor kids' village experience for toddlers and children in Durham. Enjoy exclusive play spaces like grocery stores, salons, and more."
        />
        <meta
          name="keywords"
          content="private play group Durham, toddler group play, indoor play area Durham, kids village, pretend play for children"
        />
        <link
          rel="canonical"
          href="https://www.stepbystepclub.ca/privateplaygroup"
        />
      </Helmet>

      <div className="privateplaygroup__header">
        <BackButton />
        <h2 className="privateplaygroup__title">Private Play Group</h2>
      </div>

      <div className="privateplaygroup__container">
        <div className="privateplaygroup__wrapper">
          <img
            src={privatePlayGroupImg2}
            className="privateplaygroup__image"
            alt="Child with butterfly face paint"
          />
          <img
            src={privatePlayGroupImg}
            className="privateplaygroup__image"
            alt="Child with butterfly face paint"
          />
        </div>

        <div className="privateplaygroup__subtitle-container">
          <p className="privateplaygroup__subtitle">
            🚨 PRIVATE play dates are now available!
          </p>
          <p className="privateplaygroup__subtitle">
            Grab your mom friends and head to S TOWN Club — a fully
            air-conditioned indoor village — for your very own private play
            group!
          </p>
          <p className="privateplaygroup__subtitle">
            Private sessions let your little ones explore freely while you enjoy
            uninterrupted catch-ups with other moms — no crowds, no
            overstimulation.
          </p>
          <ul className="privateplaygroup__subtitle-list">
            <li>🌿 No crowds</li>
            <li>🎯 Ideal for smaller celebrations</li>
            <li>🧸 Calm, meaningful play for them — and a breather for you</li>
          </ul>
          <p className="privateplaygroup__subtitle">
            <strong>Additional children:</strong> $15 per hour
          </p>

          <h3 className="privateplaygroup__hours-title">📅 How to Book</h3>
          <ol className="privateplaygroup__subtitle-list">
            <li>
              Email{" "}
              <a
                className="privateplaygroup__email-link"
                href="mailto:stepxstepclub@gmail.com"
              >
                stepxstepclub@gmail.com
              </a>{" "}
              with your preferred date and time.
            </li>
            <li>
              Our team will confirm availability and next steps within 24 hours.
            </li>
          </ol>

          <p className="privateplaygroup__subtitle">
            We can’t wait to host you and your crew!
          </p>

          <div className="privateplaygroup__hours">
            <h3 className="privateplaygroup__hours-title">
              Private Play Group Hours
            </h3>
            <p>
              Group play hours vary due to private bookings. <br />
              For the latest updates, please check our{" "}
              <a
                href="https://www.instagram.com/stownclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </p>
          </div>

          <div className="privateplaygroup__button">
            <button
              className="birthday-party__cta-button"
              onClick={() => {
                window.location.href =
                  "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-07-08+05%3A17%3A55&id_class_tab=3&id_mode=1&k_class_tab=66372&s_id=Q1sjIK";
              }}
            >
              Connect With Your Event Planner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatePlayGroup;