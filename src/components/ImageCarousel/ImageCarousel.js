import "./ImageCarousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import facepaintImage from "../../assets/images/facepaint.png";
import danceparty from "../../assets/images/danceparty.png";
import danceparty2 from "../../assets/images/danceparty2.png";
import fitnessmom from "../../assets/images/fitnessmom.png";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    variableWidth: false,
    fade: true,
  };

  return (
    <Slider {...settings} className="image-carousel__slider">
      <div className="image-carousel">
        <div className="image-carousel__container">
          <img
            className="image-carousel__image"
            src={facepaintImage}
            alt="Slide 1"
          />
        </div>
      </div>
      <div className="image-carousel">
        <div className="image-carousel__container">
          <img
            className="image-carousel__image"
            src={danceparty2}
            alt="Slide 2"
          />
        </div>
      </div>
      <div className="image-carousel">
        <div className="image-carousel__container">
          <img
            className="image-carousel__image"
            src={danceparty}
            alt="Slide 3"
          />
        </div>
      </div>
      <div className="image-carousel">
        <div className="image-carousel__container">
          <img
            className="image-carousel__image"
            src={fitnessmom}
            alt="Slide 4"
          />
        </div>
      </div>
    </Slider>
  );
};

export default ImageCarousel;
