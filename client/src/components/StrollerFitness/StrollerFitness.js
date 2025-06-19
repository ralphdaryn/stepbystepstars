import "./StrollerFitness.scss";
import { Helmet } from "react-helmet";
import strollerfitness from "../../assets/images/strollerfitness.mp4";
import BackButton from "../BackButton/BackButton";

const StrollerFitness = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/schedule/step_by_step_club?k_business=651877&id_class_tab=1#dt_date=2025-06-17";
  };

  return (
    <section
      className="stroller-fitness"
      aria-labelledby="stroller-fitness-heading"
    >
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
          content="https://yourdomain.com/stroller-fitness-durham"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/path-to-image/strollerfitness-thumbnail.jpg"
        />
      </Helmet>

      <div className="stroller-fitness__header">
        <BackButton />
        <h1 id="stroller-fitness-heading" className="stroller-fitness__title">
          Stroller Fitness Durham
        </h1>
      </div>

      <div className="stroller-fitness__container">
        <video
          className="stroller-fitness__video"
          controls
          autoPlay
          muted
          title="Stroller Fitness Class Preview in Durham"
        >
          <source src={strollerfitness} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <article className="stroller-fitness__wrapper">
          <p className="stroller-fitness__subtitle">
            Join our stroller fitness classes in Durham Region and reclaim your
            strength with other local moms. It’s a 45-minute full-body sweat
            session designed for moms—no judgment, no excuses.
          </p>
          <p className="stroller-fitness__subtitle">
            Our workouts include squats, lunges, core work, and cardio—all while
            your baby relaxes in the stroller. Diaper changes? Crying? Totally
            welcome.
          </p>
          <p className="stroller-fitness__subtitle">
            You’ll feel stronger, more energized, and connected to a real mom
            community in Durham.
          </p>

          <div className="stroller-fitness__subtitle">
            <h2>What to Expect</h2>
            <ul>
              <li>
                Fun, safe workouts for postpartum moms of all fitness levels
              </li>
              <li>
                Outdoor and indoor options in Oshawa, Whitby, Ajax, and
                Pickering
              </li>
              <li>Meet like-minded moms and build your support network</li>
              <li>Led by certified instructors with baby-friendly pacing</li>
            </ul>
            <p>
              <strong>
                It’s more than a workout. It’s your support system, mama.
              </strong>
            </p>
          </div>

          <button
            className="stroller-fitness__button"
            onClick={handleButtonClick}
            aria-label="Book your Stroller Fitness class in Durham"
          >
            Book Your Spot!
          </button>
        </article>
      </div>
    </section>
  );
};

export default StrollerFitness;