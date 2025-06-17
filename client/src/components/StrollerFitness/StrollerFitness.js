import "./StrollerFitness.scss";
import { Helmet } from "react-helmet";
import strollerfitness from "../../assets/images/strollerfitness.mp4";
import BackButton from "../BackButton/BackButton";

const StrollerFitness = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.wellnessliving.com/rs/schedule/step_by_step_club?k_business=651877&id_class_tab=1#dt_date=2025-06-17&f_distance=50&f_latitude=&f_longitude=&filter=1&&id_screen=3&is_appointment_cancel_recurring=&is_appointment_cancel_single=&is_class_cancel=0&&&is_remove=0&is_week=1&&id_screen=3&k_business=651877&&&k_class_tab=0&&is_location=1&k_promotion=0&k_skin=0&&&s_period=week&&sort=&a_day[]=7%2C1%2C2%2C3%2C4%2C5%2C6&a_class[]=794030&a_staff[]=656393%2C660586%2C660587%2C660588&a_time[]=1%2C2%2C3&a_virtual[]=2%2C1&a_location[]=426598";
  };

  return (
    <section
      className="stroller-fitness"
      aria-labelledby="stroller-fitness-heading"
    >
      <Helmet>
        <title>Stroller Fitness | Step by Step Club</title>
        <meta
          name="description"
          content="Join our fun, full-body stroller fitness class designed for moms and their little ones. Get strong, make mom friends, and enjoy real workouts in a judgment-free space."
        />
        <meta
          name="keywords"
          content="Stroller fitness, mom workout, mommy and baby workout, postnatal fitness, outdoor fitness, mom community"
        />
      </Helmet>

      <div className="stroller-fitness__header">
        <BackButton />
        <h1 id="stroller-fitness-heading" className="stroller-fitness__title">
          Stroller Fitness
        </h1>
      </div>

      <div className="stroller-fitness__container">
        <video
          className="stroller-fitness__video"
          controls
          autoPlay
          muted
          title="Stroller Fitness Class Preview"
        >
          <source src={strollerfitness} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <article className="stroller-fitness__wrapper">
          <p className="stroller-fitness__subtitle">
            Tired of scrolling while your coffee goes cold and your muscles go
            soft? Grab your stroller (and your sanity) and join us for a
            45-minute sweat session that’s all about strong bodies, real laughs,
            and zero judgment.
          </p>
          <p className="stroller-fitness__subtitle">
            We mix squats, lunges, cardio bursts, and core work—all while your
            baby rides shotgun in the stroller. No childcare? No problem. Crying
            babies, snack breaks, and diaper changes are all part of the vibe.
          </p>
          <p className="stroller-fitness__subtitle">
            You’ll leave stronger, more energized, and maybe even with a new mom
            friend or two.
          </p>

          <div className="stroller-fitness__subtitle">
            <h2>What to Expect</h2>
            <ul>
              <li>
                A full-body workout scalable for all stages of motherhood.
              </li>
              <li>A welcoming space where babies are part of the fun.</li>
              <li>Encouragement, energy, and community—you’re never alone.</li>
              <li>Real talk, real sweat, zero judgment.</li>
            </ul>
            <p>
              <strong>Let’s move, mama—your journey begins here.</strong>
            </p>
          </div>

          <button
            className="stroller-fitness__button"
            onClick={handleButtonClick}
            aria-label="Book your spot for Stroller Fitness"
          >
            Book Your Spot!
          </button>
        </article>
      </div>
    </section>
  );
};

export default StrollerFitness;
