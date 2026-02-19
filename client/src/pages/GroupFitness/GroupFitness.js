import { useState } from "react";
import { Helmet } from "react-helmet";
import "./GroupFitness.scss";

import groupFitnessImage from "../../assets/images/groupfitness1.jpeg";
import groupFitnessImage2 from "../../assets/images/groupfitness-member.jpeg";

import specialEvents1 from "../../assets/images/smallgrouptrain.jpeg";
import specialEvents2 from "../../assets/images/training.jpeg";

const WL_CATALOG =
  "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877";

const WL_PERSONAL_TRAINING =
  "https://www.wellnessliving.com/rs/catalog-view.html?k_business=651877&id_sale=1&k_id=3904840";

const WL_SMALL_GROUP =
  "https://www.wellnessliving.com/schedule/step_by_step_club?id_class_tab=1&k_class=844005#dt_date=2025-10-11";

const GroupFitness = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMedia = (src) => setSelectedMedia(src);
  const closeMedia = () => setSelectedMedia(null);

  const openNewTab = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const programs = [
    {
      title: "Small Group Training",
      desc: "Train with a coach + stay motivated with a small crew.",
      img: specialEvents1,
      onClick: () => openNewTab(WL_SMALL_GROUP),
    },
    {
      title: "Personal Training",
      desc: "1:1 coaching personalized to your goals.",
      img: specialEvents2,
      onClick: () => openNewTab(WL_PERSONAL_TRAINING),
    },
  ];

  return (
    <div className="groupfitness" data-page="groupfitness">
      <Helmet>
        <title>Group Fitness for Moms in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Get stronger together! Join our energizing group fitness classes designed for moms in Durham."
        />
        <link rel="canonical" href="https://www.stepbystepclub.ca/groupfitness" />
      </Helmet>

      <header className="groupfitness__header">
        <h1 className="groupfitness__title">Group Fitness</h1>
      </header>

      <section className="groupfitness__hero" aria-label="Group fitness hero">
        <article className="groupfitness__hero-card card card--soft">
          <p className="groupfitness__kicker">For moms • All levels</p>
          <h2 className="groupfitness__heading">Get stronger together.</h2>

          <p className="groupfitness__text">
            Boost your fitness with an energizing group workout that combines strength,
            cardio, and flexibility.
          </p>

          <p className="groupfitness__text">
            Expect high-energy intervals, functional movements, and core-focused work —
            with modifications so beginners and experienced members feel supported.
          </p>

          <div className="groupfitness__cta-wrap">
            <button
              className="groupfitness__cta"
              onClick={() => openNewTab(WL_CATALOG)}
            >
              Join Our Community
            </button>
          </div>
        </article>

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
              className="groupfitness__media-img2"
              loading="lazy"
            />
          </button>
        </div>
      </section>

      <section className="groupfitness__programs" aria-label="Programs">
        <div className="groupfitness__section-head">
          <h3 className="groupfitness__section-title">Register for programs</h3>
          <p className="groupfitness__section-sub">Tap a program to register.</p>
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
                  <span className="groupfitness__program-chip">Register →</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedMedia && (
        <div className="image-modal" onClick={closeMedia}>
          <span className="image-modal__close" onClick={closeMedia}>
            &times;
          </span>
          <img
            className="image-modal__content"
            src={selectedMedia}
            alt="Full view"
          />
        </div>
      )}
    </div>
  );
};

export default GroupFitness;