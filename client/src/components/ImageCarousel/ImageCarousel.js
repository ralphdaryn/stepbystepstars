import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.scss";
import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpeg";
import carousel3 from "../../assets/images/carousel3.jpeg";
import carousel4 from "../../assets/images/carousel4.jpeg";
import carousel5 from "../../assets/images/carousel5.jpeg";
import carousel6 from "../../assets/images/carousel6.jpeg";

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="image-carousel">
      <Slider {...settings} className="image-carousel__slider">
        {[carousel1, carousel2, carousel3, carousel4, carousel5, carousel6].map(
          (image, index) => (
            <div key={index} className="image-carousel__slide">
              <div className="image-carousel__container">
                <img
                  className="image-carousel__image"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
