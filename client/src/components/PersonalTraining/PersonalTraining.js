import { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import "./PersonalTraining.scss";

import img1 from "../../assets/images/personal-training.JPEG";
import img2 from "../../assets/images/personal-training2.JPEG";
import img3 from "../../assets/images/personal-training3.JPEG";
import img4 from "../../assets/images/personal-training4.JPEG";
import img5 from "../../assets/images/personal-training5.JPEG";
import img6 from "../../assets/images/personal-training6.JPEG";

const PersonalTraining = () => {
  const images = useMemo(() => [img1, img2, img3, img4, img5, img6], []);
  const [index, setIndex] = useState(0);

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2024-12-31+15%3A28%3A54&id_class_tab=3&id_mode=1&s_id=78Epip";
  };

  return (
    <div className="personaltraining" data-page="personaltraining">
      <Helmet>
        <title>Personal Training in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Personal training in Durham with coaching tailored to your goals. Build strength, confidence, and consistency with 1:1 support."
        />
        <meta
          name="keywords"
          content="personal training Durham, 1:1 coaching, strength training, fitness coaching, stepbystepclub"
        />
        <link
          rel="canonical"
          href="https://www.stepbystepclub.ca/personaltraining"
        />
      </Helmet>

      {/* Header */}
      <header className="personaltraining__header">
        <h1 className="personaltraining__title">Personal Training</h1>
      </header>

      {/* Hero Carousel */}
      <section
        className="personaltraining__hero"
        aria-label="Personal training gallery"
      >
        <div className="personaltraining__carousel card card--soft">
          <button
            type="button"
            onClick={handlePrev}
            className="personaltraining__nav personaltraining__nav--left"
            aria-label="Previous slide"
          >
            ‹
          </button>

          <img
            src={images[index]}
            alt={`Personal training session ${index + 1}`}
            className="personaltraining__image"
            loading="eager"
          />

          <button
            type="button"
            onClick={handleNext}
            className="personaltraining__nav personaltraining__nav--right"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </section>

      {/* Content */}
      <section
        className="personaltraining__content card"
        aria-label="Personal training details"
      >
        <p className="personaltraining__kicker">1:1 Coaching • All levels</p>

        <h2 className="personaltraining__heading">
          Training built around you.
        </h2>

        <p className="personaltraining__text">
          Personal training designed around <strong>you</strong> — your goals,
          your schedule, and your lifestyle.
        </p>

        <ul className="personaltraining__list">
          <li>
            <strong>Custom workouts</strong> built specifically for your goals
          </li>
          <li>
            <strong>Safe, effective movement</strong> with proper form and injury
            prevention
          </li>
          <li>
            <strong>Expert coaching</strong> plus accountability and motivation
          </li>
          <li>
            <strong>Whole-body approach</strong> covering fitness, lifestyle, and
            long-term results
          </li>
        </ul>

        <p className="personaltraining__text">
          Ready to feel stronger, more confident, and consistent?
        </p>

        <div className="personaltraining__cta-wrap">
          <button
            className="personaltraining__cta"
            onClick={handleButtonClick}
          >
            Sign Up Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default PersonalTraining;