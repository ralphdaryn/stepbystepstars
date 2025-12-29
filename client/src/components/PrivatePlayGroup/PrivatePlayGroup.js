import { Helmet } from "react-helmet";
import "./PrivatePlayGroup.scss";
import privatePlayGroupImg from "../../assets/images/dropinplay5.JPEG";
import privatePlayGroupImg2 from "../../assets/images/dropinplay4.JPEG";

const PrivatePlayGroup = () => {
  const handlePlanner = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-07-08+05%3A17%3A55&id_class_tab=3&id_mode=1&k_class_tab=66372&s_id=Q1sjIK";
  };

  return (
    <div className="privateplaygroup" data-page="privateplaygroup">
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

      {/* Header */}
      <header className="privateplaygroup__header">
        <h1 className="privateplaygroup__title">Private Play Group</h1>
      </header>

      {/* Content */}
      <section
        className="privateplaygroup__content"
        aria-label="Private play group"
      >
        {/* Info Card */}
        <article className="privateplaygroup__card card card--soft">
          <p className="privateplaygroup__kicker">Private sessions • Calm play</p>

          <h2 className="privateplaygroup__heading">
            🚨 Private play dates are now available!
          </h2>

          <p className="privateplaygroup__text">
            Grab your mom friends and head to S TOWN Club — a fully
            air-conditioned indoor village — for your very own private play
            group!
          </p>

          <p className="privateplaygroup__text">
            Private sessions let your little ones explore freely while you enjoy
            uninterrupted catch-ups with other moms — no crowds, no
            overstimulation.
          </p>

          <ul className="privateplaygroup__bullets">
            <li>🌿 No crowds</li>
            <li>🎯 Ideal for smaller celebrations</li>
            <li>🧸 Calm, meaningful play for them — and a breather for you</li>
          </ul>

          {/* Pricing */}
          <p className="privateplaygroup__text privateplaygroup__price">
            <strong>Pricing:</strong> $35 per child for two hours (each child
            includes <strong>one adult</strong>).{" "}
            <strong>Additional adults:</strong> $20 each.
          </p>

          {/* Socks Required */}
          <div className="privateplaygroup__section privateplaygroup__notice">
            <h3 className="privateplaygroup__subheading">🧦 Socks Required</h3>
            <p className="privateplaygroup__text">
              For safety and hygiene, <strong>socks are required</strong> for all
              children and adults in the play area.{" "}
              <strong>Shoes are not permitted</strong>.
            </p>
          </div>

          {/* No Drop-in */}
          <div className="privateplaygroup__section privateplaygroup__notice">
            <h3 className="privateplaygroup__subheading">Important</h3>
            <p className="privateplaygroup__text">
              <strong>Please note:</strong> We do not offer drop-in play. All
              private play groups must be booked in advance.
            </p>
          </div>

          {/* Availability */}
          <div className="privateplaygroup__section privateplaygroup__availability">
            <h3 className="privateplaygroup__subheading">🕒 Availability</h3>
            <ul className="privateplaygroup__bullets">
              <li>
                <strong>Weekdays:</strong> Available all day
              </li>
              <li>
                <strong>Weekends:</strong> 8:30am–10:30am or 6:30pm–8:30pm
              </li>
            </ul>
          </div>

          {/* Booking */}
          <div className="privateplaygroup__section">
            <h3 className="privateplaygroup__subheading">📅 How to Book</h3>
            <ol className="privateplaygroup__steps">
              <li>
                Email{" "}
                <a
                  className="privateplaygroup__link"
                  href="mailto:stepxstepclub@gmail.com"
                >
                  stepxstepclub@gmail.com
                </a>{" "}
                with your preferred date and time.
              </li>
              <li>
                Our team will confirm availability and next steps within 24
                hours.
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="privateplaygroup__cta">
            <button
              className="privateplaygroup__button"
              onClick={handlePlanner}
            >
              Connect With Your Event Planner
            </button>
          </div>
        </article>

        {/* Images */}
        <div className="privateplaygroup__media">
          <div className="privateplaygroup__media-card card">
            <img
              src={privatePlayGroupImg2}
              className="privateplaygroup__image"
              alt="Private play room with toys"
              loading="lazy"
            />
          </div>

          <div className="privateplaygroup__media-card card">
            <img
              src={privatePlayGroupImg}
              className="privateplaygroup__image"
              alt="Indoor kids village"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivatePlayGroup;
