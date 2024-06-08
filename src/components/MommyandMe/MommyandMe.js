import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MommyandMe.scss";
import mommyandme1 from "../../assets/images/mommyandme1.jpeg";
import mommyandme2 from "../../assets/images/mommyandme2.jpeg";
import mommyandme3 from "../../assets/images/mommyandme3.jpeg";
import mommyandme4 from "../../assets/images/mommyandme4.jpeg";
import BackButton from "../BackButton/BackButton";
import ContactButton from "../ContactButton/ContactButton";

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
  };

  return (
    <div className="mommyandme">
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
      <div className="mommyandme__button">
        <ContactButton />
      </div>
    </div>
  );
};

export default MommyandMe;
