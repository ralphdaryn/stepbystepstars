import { Helmet } from "react-helmet";
import "./PrivatePlayGroup.scss";
import BackButton from "../BackButton/BackButton";
import privatePlayGroupImg from "../../assets/images/dropinplay5.JPEG";

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
        <link rel="canonical" href="https://www.stepbystepclub.ca/privateplaygroup" />
      </Helmet>

      <div className="privateplaygroup__header">
        <BackButton />
        <h2 className="privateplaygroup__title">Private Play Group</h2>
      </div>

      <div className="privateplaygroup__container">
        <div className="privateplaygroup__wrapper">
          <img
            src={privatePlayGroupImg}
            className="privateplaygroup__image"
            alt="Child with butterfly face paint"
          />
        </div>

        <div className="privateplaygroup__subtitle-container">
          <p className="privateplaygroup__subtitle">
            Welcome to S TOWN, where kids can explore, play and learn through interactive play! S TOWN - An indoor kids' village designed to foster learning through pretend play. The space includes a variety of miniature environments like a grocery store, salon, veterinary office, and nostalgic 90s café, encouraging role-playing and imagination. It’s all designed so your child can take the lead while you support and encourage their development.
          </p>
          <p className="privateplaygroup__subtitle">
            S Town promotes key developmental skills such as problem-solving, language development, social interaction, and cognitive flexibility. Through realistic, hands-on activities, children not only have fun but also build real-world awareness, creativity, and emotional skills.
          </p>
{/* 
          <div className="privateplaygroup__pricing">
            <h3 className="privateplaygroup__pricing-title">Pricing</h3>
            <ul className="privateplaygroup__pricing-list">
              <li>$16.99 - One child</li>
              <li>$15.00 - Ages 1-3</li>
              <li>$10.00 - Kids under 1</li>
              <li>$5.00 - Extra observer (adult)</li>
              <li>Each family includes one adult</li>
            </ul>
          </div> */}

          <div className="privateplaygroup__hours">
            <h3 className="privateplaygroup__hours-title">Group Play Hours</h3>
            <p>
              Group play hours vary due to private bookings. Weekly schedule is posted every Sunday on{" "}
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
