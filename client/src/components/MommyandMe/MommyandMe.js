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
import BackButton from "../BackButton/BackButton";

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
      centerMode: false,
      variableWidth: false,
      fade: true,
      pauseOnHover: true,
      arrows: false,
      adaptiveHeight: true,
    }),
    []
  );

  // ✅ Sessions carousel settings (left/right buttons)
  const sessionsSliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      adaptiveHeight: true,
    }),
    []
  );

  const handleEnroll = () => {
    window.location =
      "https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102551&is_filter=1&k_business=651877";
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.wellnessliving.com/rs/skin-widget-static.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const images = [mommyandme1, mommyandme2, mommyandme3, mommyandme4];

  // ✅ Updated: 2026 remaining sessions list (your dates)
  const remainingSessions2026 = [
    "Feb 16 - March 27",
    "March 30 - May 15",
    "May 18 - June 26",
    "June 29 - July 31",
    "August 3 - Sept 4",
    "Sept 7 - October 16",
    "October 19 - November 20",
    "Nov 23 - December 18",
  ];

  return (
    <div className="mommyandme" data-page="mommyandme">
      <div>
        <header className="mommyandme__header">
          <div className="mommyandme__header-left">
            <BackButton />
          </div>

          <h1 className="mommyandme__title">Mommy &amp; Me Fitness</h1>
        </header>
      </div>

      <Helmet>
        <title>
          Mommy and Me Fitness Classes in Durham | Step By Step Club
        </title>
        <meta
          name="description"
          content="Join our Mommy and Me fitness classes in Durham. Meet other moms, stay active, and enjoy quality bonding time with your baby in a supportive community."
        />
        <meta
          name="keywords"
          content="mommy and me Durham, baby and mom workout, postnatal fitness classes, mom baby exercise, stepbystepclub"
        />
        <link rel="canonical" href="https://www.stepbystepclub.ca/mommyandme" />
      </Helmet>

      {/* Hero / Slider */}
      <section className="mommyandme__hero" aria-label="Program gallery">
        <div className="mommyandme__slider">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx} className="mommyandme__slide">
                <img
                  className="mommyandme__image"
                  src={src}
                  alt={`Mommy & Me fitness ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Content */}
      <section className="mommyandme__content" aria-label="Program details">
        <div className="mommyandme__intro card card--soft">
          <p className="mommyandme__kicker">Next Session</p>

          <h2 className="mommyandme__heading u-nowrap u-nowrap--glow">
            Jan 5 - Feb 12
          </h2>

          <div className="mommyandme__cta-wrap">
            <button
              type="button"
              onClick={handleEnroll}
              className="mommyandme__cta"
              aria-label="Enroll in Mommy and Me"
            >
              Enroll Today
            </button>
          </div>
        </div>

        {/* ✅ Mobile-first stacked layout for ALL sizes */}
        <div className="mommyandme__layout" id="mommyandme-details">
          {/* ✅ Remaining sessions now carousel */}
          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title">2026 Remaining Sessions</h3>

            <div
              className="mommyandme__session-slider"
              aria-label="Remaining sessions carousel"
            >
              <Slider {...sessionsSliderSettings}>
                {remainingSessions2026.map((dateRange) => (
                  <div key={dateRange} className="mommyandme__session-slide">
                    <div
                      className="mommyandme__session-pill"
                      aria-label={dateRange}
                    >
                      {dateRange}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <p className="mommyandme__note mommyandme__note--muted">
              Use the arrows to view all session dates.
            </p>
          </article>

          {/* ✅ Commented out Membership for now (client still working on it) */}
          {/*
          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title">
              Membership: <span className="mommyandme__brand u-nowrap">MOMEMTUM</span>
            </h3>
            <p className="mommyandme__text">
              Choose how many classes you want per week and mix between Mommy
              &amp; Me and Stroller Fitness. Miss a class? Hop into a different
              one that week—flexibility built for new moms.
            </p>
            <p className="mommyandme__note">
              Example: Attend Mon &amp; Wed at 1:00pm. If you can’t make one,
              join another class that week.
            </p>
          </article>
          */}

          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title">Little Ones Welcome</h3>
            <p className="mommyandme__text">
              All ages are welcome. The S Town Club Play Center is open for
              older kids during class.
            </p>
          </article>

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

          {/* ✅ Other programs section (title centered) */}
          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title mommyandme__panel-title--center">
              Other fitness programs to join
            </h3>

            <p className="mommyandme__text">
              Want more options? Here are other programs you can jump into
              anytime.
            </p>

            <div className="mommyandme__programs">
              {/* Group Fitness (internal) */}
              <a className="mommyandme__program" href="/groupfitness">
                <span className="mommyandme__program-title">
                  Small Group Training
                </span>
                <span className="mommyandme__program-sub">
                  Train with a coach + stay motivated with a small crew.
                </span>
              </a>

              {/* Monthly Memberships (external) */}
              <a
                className="mommyandme__program"
                href="https://www.wellnessliving.com/rs/catalog-list.html?a_shop_category%5B%5D=1102664&is_filter=1&k_business=651877"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mommyandme__program-title">
                  Monthly Memberships
                </span>
                <span className="mommyandme__program-sub">
                  Flexible monthly options that fit your schedule.
                </span>
              </a>

              {/* Personal Training (internal) */}
              <a className="mommyandme__program" href="/personaltraining">
                <span className="mommyandme__program-title">
                  Personal Training
                </span>
                <span className="mommyandme__program-sub">
                  1:1 coaching personalized to your goals.
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MommyandMe;