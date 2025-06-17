import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    variableWidth: false,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  const handleClientButtonClick = () => {
    window.location =
      "https://www.wellnessliving.com/rs/event/step_by_step_club?k_business=651877&k_class_tab=66299&uid=0&id_class_tab=2";
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.wellnessliving.com/rs/skin-widget-static.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="mommyandme">
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

      <div className="mommyandme__header">
        <BackButton />
        <h2 className="mommyandme__title">Mommy and Me</h2>
      </div>

      <div className="mommyandme__container">
        <Slider {...settings} className="mommyandme__slider">
          {[mommyandme1, mommyandme2, mommyandme3, mommyandme4].map(
            (image, index) => (
              <div key={index} className="mommyandme__slide">
                <img
                  className="mommyandme__image"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            )
          )}
        </Slider>

        <div className="mommyandme__wrapper">
          <p className="mommyandme__subtitle">
            Join our Mommy and Me Fitness Class, where all fitness levels are
            welcome!
          </p>
          <p className="mommyandme__subtitle">
            This engaging class is designed for moms with babies, providing a
            fantastic opportunity to meet and socialize with fellow moms.
            Embrace a full-body conditioning experience with a special focus on
            core restoration. Strengthen your body while creating lasting
            connections in a supportive community.
          </p>
          <p className="mommyandme__subtitle">
            Come be a part of a fitness journey that celebrates both motherhood
            and well-being!
          </p>
        </div>
      </div>

      {/* Widget Section */}
      <div className="mommyandme__widget">
        <div
          className="wl-widget"
          data="k_skin=326966&amp;k_business=651877"
        ></div>
        <script
          src="https://www.wellnessliving.com/rs/skin-widget-static.js"
          type="text/javascript"
        ></script>
        <a
          href="https://www.wellnessliving.com/fitness/"
          rel="nofollow"
          style={{
            display: "block",
            float: "right",
            margin: "16px 16px 0 0",
          }}
        >
          <img
            src="https://d1v4s90m0bk5bo.cloudfront.net/E/S.png"
            alt="Fitness management software"
            height="39"
            width="267"
            style={{ height: "39px", width: "267px" }}
          />
        </a>
        <br style={{ clear: "both" }} />
      </div>

      {/* Client Booking Button */}
      <button className="mommyandme__button">
        <Link
          onClick={handleClientButtonClick}
          className="mommyandme__button-link"
        >
          Enroll Today!
        </Link>
      </button>
    </div>
  );
};

export default MommyandMe;