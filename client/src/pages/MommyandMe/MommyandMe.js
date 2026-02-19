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
      "_blank"
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.wellnessliving.com/rs/skin-widget-static.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const images = [mommyandme1, mommyandme2, mommyandme3, mommyandme4];

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
      <header className="mommyandme__header">
        <h1 className="mommyandme__title">Mommy &amp; Me Fitness</h1>
      </header>

      <Helmet>
        <title>Mommy and Me Fitness Classes in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Join our Mommy and Me fitness classes in Durham. Meet other moms, stay active, and enjoy quality bonding time with your baby."
        />
        <link rel="canonical" href="https://www.stepbystepclub.ca/mommyandme" />
      </Helmet>

      {/* Hero */}
      <section className="mommyandme__hero">
        <div className="mommyandme__slider">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx} className="mommyandme__slide">
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

      {/* Content */}
      <section className="mommyandme__content">
        <div className="mommyandme__intro card card--soft">
          <p className="mommyandme__kicker">Next Session</p>
          <h2 className="mommyandme__heading u-nowrap u-nowrap--glow">
            Jan 5 - Feb 12
          </h2>

          <div className="mommyandme__cta-wrap">
            <button className="mommyandme__cta" onClick={handleEnroll}>
              Enroll Today
            </button>
          </div>
        </div>

        <div className="mommyandme__layout">
          {/* Sessions */}
          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title">2026 Remaining Sessions</h3>

            <div className="mommyandme__session-slider">
              <Slider {...sessionsSliderSettings}>
                {remainingSessions2026.map((dateRange) => (
                  <div key={dateRange} className="mommyandme__session-slide">
                    <div className="mommyandme__session-pill">{dateRange}</div>
                  </div>
                ))}
              </Slider>
            </div>
          </article>

          {/* ✅ IMAGE + REGISTER CARD */}
          <article className="mommyandme__panel card">
            <img
              src={mommyme}
              alt="Mommy and Me Fitness"
              className="mommyandme__media-img"
              loading="lazy"
            />

            <div className="mommyandme__cta-wrap">
              <button className="mommyandme__cta" onClick={handleEnroll}>
                Register →
              </button>
            </div>
          </article>

          {/* Little Ones Welcome */}
          <article className="mommyandme__panel card">
            <h3 className="mommyandme__panel-title">Little Ones Welcome</h3>
            <p className="mommyandme__text">
              All ages are welcome. The S Town Club Play Center is open for older
              kids during class.
            </p>
          </article>

          <article className="mommyandme__panel card card--accent">
            <h3 className="mommyandme__panel-title">Are These Classes For Me?</h3>
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