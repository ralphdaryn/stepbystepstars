import { Helmet } from "react-helmet";
import { useEffect, useMemo } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MommyandMe.scss";

import mommyandme1 from "../../assets/images/mommyandme1.jpeg";
import mommyandme2 from "../../assets/images/mommyandme2.jpeg";
import mommyandme3 from "../../assets/images/mommyandme3.jpeg";
import mommyandme4 from "../../assets/images/mommyandme4.jpeg";
import mommyme from "../../assets/images/mommyme.jpeg";

const MommyandMe = () => {
  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      fade: true,
      arrows: false,
      adaptiveHeight: true,
    }),
    []
  );

  const sessionsSliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
    }),
    []
  );

  const handleEnroll = () => {
    window.open(
      "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.wellnessliving.com/rs/skin-widget-static.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const images = [
    mommyandme1,
    mommyandme2,
    mommyandme3,
    mommyandme4,
  ];

  /*
   * ======================================================
   * SESSION DATES
   * ======================================================
   *
   * The website automatically:
   *
   * 1. Removes sessions that have already ended.
   * 2. Makes the first remaining session the "Next Session".
   * 3. Shows every later session under "Upcoming Sessions".
   *
   * When you get new future dates, just add them below.
   *
   * IMPORTANT:
   * JavaScript months start at 0.
   *
   * January = 0
   * February = 1
   * March = 2
   * April = 3
   * May = 4
   * June = 5
   * July = 6
   * August = 7
   * September = 8
   * October = 9
   * November = 10
   * December = 11
   */

  const sessions = useMemo(
    () => [
      {
        start: new Date(2026, 8, 6),
        end: new Date(2026, 9, 15),
      },
      {
        start: new Date(2026, 9, 19),
        end: new Date(2026, 10, 20),
      },
      {
        start: new Date(2026, 10, 23),
        end: new Date(2026, 11, 18),
      },

      /*
       * ADD FUTURE SESSIONS BELOW
       *
       * Example:
       *
       * {
       *   start: new Date(2027, 0, 4),
       *   end: new Date(2027, 1, 12),
       * },
       */
    ],
    []
  );

  /*
   * ======================================================
   * AUTOMATIC SESSION UPDATE
   * ======================================================
   */

  const remainingSessions = useMemo(() => {
    const today = new Date();

    // Keeps the session visible through its final day
    today.setHours(0, 0, 0, 0);

    return sessions
      .filter((session) => {
        const sessionEnd = new Date(session.end);

        sessionEnd.setHours(23, 59, 59, 999);

        return sessionEnd >= today;
      })
      .sort((a, b) => a.start - b.start);
  }, [sessions]);

  /*
   * ======================================================
   * DATE FORMATTING
   * ======================================================
   */

  const formatSessionDate = (session) => {
    const startMonth = session.start.toLocaleString("en-US", {
      month: "short",
    });

    const startDay = session.start.getDate();

    const endMonth = session.end.toLocaleString("en-US", {
      month: "long",
    });

    const endDay = session.end.getDate();

    return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
  };

  /*
   * ======================================================
   * NEXT + UPCOMING SESSIONS
   * ======================================================
   */

  const nextSession = remainingSessions[0];

  // Everything AFTER the current/next session
  const upcomingSessions = remainingSessions.slice(1);

  return (
    <div className="mommyandme">
      <Helmet>
        <title>
          Mommy and Me Fitness Classes in Durham | Step By Step Club
        </title>

        <meta
          name="description"
          content="Join our Mommy and Me fitness classes in Durham. Meet other moms, stay active, and enjoy quality bonding time with your baby."
        />

        <link
          rel="canonical"
          href="https://www.stepbystepclub.ca/mommyandme"
        />
      </Helmet>

      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <div className="mommyandme__header">
        <h1 className="mommyandme__title">
          Mommy &amp; Me Fitness
        </h1>
      </div>

      {/* ========================================= */}
      {/* HERO IMAGE SLIDER */}
      {/* ========================================= */}

      <section className="mommyandme__hero">
        <div className="mommyandme__slider">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div
                key={idx}
                className="mommyandme__slide"
              >
                <img
                  className="mommyandme__image"
                  src={src}
                  alt={`Mommy & Me ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <section className="mommyandme__content">
        {/* ========================================= */}
        {/* NEXT SESSION */}
        {/* ========================================= */}

        <div className="mommyandme__intro card card--soft">
          <p className="mommyandme__kicker">
            Next Session
          </p>

          <h2 className="mommyandme__heading u-nowrap u-nowrap--glow">
            {nextSession
              ? formatSessionDate(nextSession)
              : "No upcoming sessions"}
          </h2>

          <div className="mommyandme__cta-wrap">
            <button
              className="mommyandme__cta"
              onClick={handleEnroll}
            >
              Enroll Today
            </button>
          </div>
        </div>

        <div className="mommyandme__layout">
          {/* ========================================= */}
          {/* UPCOMING SESSIONS */}
          {/* ========================================= */}

          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title">
              Upcoming Sessions
            </h3>

            {upcomingSessions.length > 0 ? (
              <div className="mommyandme__session-slider">
                <Slider {...sessionsSliderSettings}>
                  {upcomingSessions.map(
                    (session, index) => {
                      const dateRange =
                        formatSessionDate(session);

                      return (
                        <div
                          key={`${session.start.getTime()}-${index}`}
                          className="mommyandme__session-slide"
                        >
                          <div className="mommyandme__session-pill">
                            {dateRange}
                          </div>
                        </div>
                      );
                    }
                  )}
                </Slider>
              </div>
            ) : (
              <p className="mommyandme__text">
                New session dates coming soon.
              </p>
            )}
          </article>

          {/* ========================================= */}
          {/* IMAGE + REGISTER */}
          {/* ========================================= */}

          <article className="mommyandme__panel card">
            <img
              src={mommyme}
              alt="Mommy and Me Fitness"
              className="mommyandme__media-img"
              loading="lazy"
            />

            <div className="mommyandme__cta-wrap">
              <button
                className="mommyandme__cta"
                onClick={handleEnroll}
              >
                Register →
              </button>
            </div>
          </article>

          {/* ========================================= */}
          {/* LITTLE ONES */}
          {/* ========================================= */}

          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title">
              Little Ones Welcome
            </h3>

            <p className="mommyandme__text">
              All ages are welcome. The S Town Club Play
              Center is open for older kids during class.
            </p>
          </article>

          {/* ========================================= */}
          {/* CLASS INFO */}
          {/* ========================================= */}

          <article className="mommyandme__panel card card--accent">
            <h3 className="mommyandme__panel-title">
              Are These Classes For Me?
            </h3>

            <ul className="mommyandme__checklist">
              <li className="mommyandme__checklist-item">
                You’re 6+ weeks postpartum and ready to move
              </li>

              <li className="mommyandme__checklist-item">
                You want to connect with like-minded women
              </li>

              <li className="mommyandme__checklist-item">
                You want to rebuild pelvic floor &amp; core safely
              </li>

              <li className="mommyandme__checklist-item">
                You want to feel strong and confident
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MommyandMe;