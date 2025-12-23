import "./StrollerFitness.scss";
import { Helmet } from "react-helmet";
import strollerfitness from "../../assets/images/strollerfitness.mp4";

const StrollerFitness = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/schedule/step_by_step_club?k_business=651877&id_class_tab=1#dt_date=2025-06-17";
  };

  return (
    <div className="strollerfitness" data-page="strollerfitness">
      <Helmet>
        <title>Stroller Fitness Durham | Postnatal Mom & Baby Workouts</title>
        <meta
          name="description"
          content="Join stroller fitness classes in Durham Region – fun, full-body workouts for moms and babies. Perfect for postpartum exercise, mommy and me fitness, and connecting with other local moms in Oshawa, Whitby, Ajax, and Pickering."
        />
        <meta
          name="keywords"
          content="stroller fitness Durham, postnatal workouts Durham, mom and baby fitness Durham Region, mommy and me workouts, Oshawa stroller fitness, Pickering postnatal fitness, Whitby mom workouts, Ajax baby-friendly workouts, outdoor fitness for moms, Durham Region mom fitness, mommy fitness group, baby workout class Durham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Step by Step Club" />

        <meta
          property="og:title"
          content="Stroller Fitness Durham | Mom & Baby Exercise Classes"
        />
        <meta
          property="og:description"
          content="Outdoor and indoor stroller fitness classes in Durham Region for moms with babies. Join the community in Oshawa, Whitby, Pickering, and Ajax."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.stepbystepclub.ca/strollerfitness"
        />
        {/* Optional: swap to a real image when you have one */}
        {/* <meta property="og:image" content="https://www.stepbystepclub.ca/path-to-image/strollerfitness-thumbnail.jpg" /> */}
      </Helmet>

      {/* Header */}
      <header className="strollerfitness__header">
        <h1 className="strollerfitness__title">Stroller Fitness</h1>
      </header>

      {/* Hero: stacked (like your other pages) */}
      <section className="strollerfitness__hero" aria-label="Stroller fitness hero">
        {/* Video card */}
        <div className="strollerfitness__video-card card card--soft">
          <video
            className="strollerfitness__video"
            controls
            autoPlay
            muted
            loop
            playsInline
            title="Stroller Fitness class preview"
          >
            <source src={strollerfitness} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Info card */}
        <article className="strollerfitness__info card" aria-label="Stroller fitness details">
          <p className="strollerfitness__kicker">Moms • Babies welcome • 45 minutes</p>
          <h2 className="strollerfitness__heading">A workout + a mom community.</h2>

          <p className="strollerfitness__text">
            A 45-minute full-body sweat session designed for moms — supportive,
            baby-friendly, and judgment-free.
          </p>

          <ul className="strollerfitness__list">
            <li>
              <strong>Full-body training</strong> (squats, lunges, core, cardio)
            </li>
            <li>
              <strong>Baby-friendly pace</strong> — crying and diaper changes are
              totally okay
            </li>
            <li>
              <strong>Outdoor + indoor options</strong> across Durham Region
            </li>
            <li>
              <strong>Meet other moms</strong> and build your support system
            </li>
          </ul>

          <p className="strollerfitness__note">
            <strong>It’s more than a workout.</strong> It’s your support system,
            mama.
          </p>

          <div className="strollerfitness__cta-wrap">
            <button
              className="strollerfitness__cta"
              onClick={handleButtonClick}
              aria-label="Book your Stroller Fitness class"
            >
              Book Your Spot
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default StrollerFitness;