import { useState } from "react";
import { Helmet } from "react-helmet";
import "./GroupFitness.scss";

import groupFitnessImage from "../../assets/images/groupfitness1.jpeg";
import groupFitnessImage2 from "../../assets/images/groupfitness-member.jpeg";

import specialEvents1 from "../../assets/images/smallgroup.PNG";
import specialEvents2 from "../../assets/images/training.jpeg";

const GroupFitness = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (mediaSrc) => setSelectedMedia(mediaSrc);
  const closeMedia = () => setSelectedMedia(null);

  const handleButtonClick = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877",
      "_blank"
    );
  };

  const linkToBuyTickets12 = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=1&k_id=3904840",
      "_blank"
    );
  };

  const linkToBuyTickets3 = () => {
    window.open(
      "https://www.wellnessliving.com/schedule/step_by_step_club?id_class_tab=1&k_class=844005#dt_date=2025-10-11&f_distance=50&f_latitude=&f_longitude=&filter=1&&id_screen=3&is_appointment_cancel_recurring=&is_appointment_cancel_single=&is_class_cancel=0&&&is_remove=0&is_week=1&&id_screen=3&k_business=651877&&&k_class_tab=0&&is_location=1&k_promotion=0&k_skin=0&&&s_period=calendar-month&&sort=&a_day[]=7%2C1%2C2%2C3%2C4%2C5%2C6&a_class[]=844005&a_staff[]=656393%2C660586%2C660587%2C660588&a_time[]=1%2C2%2C3&a_virtual[]=2%2C1&a_location[]=426598",
      "_blank"
    );
  };

  const programs = [
    {
      title: "Small Group Training",
      desc: "Train with a coach + stay motivated with a small crew.",
      img: specialEvents1,
      onClick: linkToBuyTickets3,
    },
    {
      title: "Personal Training",
      desc: "1:1 coaching personalized to your goals.",
      img: specialEvents2,
      onClick: linkToBuyTickets12,
    },
  ];

  return (
    <div className="groupfitness" data-page="groupfitness">
      <Helmet>
        <title>Group Fitness for Moms in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Get stronger together! Join our energizing group fitness classes designed for moms in Durham. Fun, supportive, and results-driven workouts for all levels."
        />
        <meta
          name="keywords"
          content="group fitness Durham, mom workout classes, postnatal group fitness, strength training for moms, stepbystepclub"
        />
        <link
          rel="canonical"
          href="https://www.stepbystepclub.ca/groupfitness"
        />
      </Helmet>

      {/* Header */}
      <header className="groupfitness__header">
        <h1 className="groupfitness__title">Group Fitness</h1>
      </header>

      {/* HERO (keep stacked layout for all sizes) */}
      <section className="groupfitness__hero" aria-label="Group fitness hero">
        <article className="groupfitness__hero-card card card--soft">
          <p className="groupfitness__kicker">For moms • All levels</p>
          <h2 className="groupfitness__heading">Get stronger together.</h2>

          <p className="groupfitness__text">
            Boost your fitness with an energizing group workout that combines
            strength, cardio, and flexibility for a total body experience.
          </p>
          <p className="groupfitness__text">
            Expect high-energy intervals, functional movements, and core-focused
            work — with modifications so beginners and experienced members feel
            supported.
          </p>

          <div className="groupfitness__cta-wrap">
            <button className="groupfitness__cta" onClick={handleButtonClick}>
              Join Our Community
            </button>
          </div>
        </article>

        {/* Images (keep like mobile: stacked, not forced side-by-side) */}
        <div className="groupfitness__media">
          <button
            type="button"
            className="groupfitness__media-btn"
            onClick={() => openMedia(groupFitnessImage2)}
            aria-label="View group fitness photo 1"
          >
            <img
              src={groupFitnessImage2}
              alt="Group Fitness Member"
              className="groupfitness__media-img"
              loading="lazy"
            />
          </button>

          <button
            type="button"
            className="groupfitness__media-btn"
            onClick={() => openMedia(groupFitnessImage)}
            aria-label="View group fitness photo 2"
          >
            <img
              src={groupFitnessImage}
              alt="Group Fitness"
              className="groupfitness__media-img"
              loading="lazy"
            />
          </button>
        </div>
      </section>

      {/* Programs */}
      <section className="groupfitness__programs" aria-label="Programs">
        <div className="groupfitness__section-head">
          <h3 className="groupfitness__section-title">Register for programs</h3>
          <p className="groupfitness__section-sub">
            Tap a program to register.
          </p>
        </div>

        <div className="groupfitness__program-grid">
          {programs.map((p) => (
            <button
              key={p.title}
              type="button"
              className="groupfitness__program card"
              onClick={p.onClick}
              aria-label={`Register for ${p.title}`}
            >
              <div className="groupfitness__program-media">
                <img
                  src={p.img}
                  alt={p.title}
                  className="groupfitness__program-image"
                  loading="lazy"
                  onClick={(e) => {
                    e.stopPropagation();
                    openMedia(p.img);
                  }}
                />
              </div>

              <div className="groupfitness__program-body">
                <div className="groupfitness__program-title">{p.title}</div>
                <div className="groupfitness__program-desc">{p.desc}</div>

                <div className="groupfitness__program-foot">
                  <span className="groupfitness__program-chip">
                    Register →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
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

export default GroupFitness;