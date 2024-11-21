import "./ImageCarouselEvent.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eventCarousel1 from "../../assets/images/carouselTwo1.jpeg";
import eventCarousel2 from "../../assets/images/carouselTwo2.jpeg";
import eventCarousel3 from "../../assets/images/carouselTwo3.jpeg";
import eventCarousel4 from "../../assets/images/carouselTwo4.jpeg";
import eventCarousel5 from "../../assets/images/carouselTwo5.jpeg";

const ImageCarouselTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };

  const carouselImages = [
    eventCarousel1,
    eventCarousel2,
    eventCarousel3,
    eventCarousel4,
    eventCarousel5,
  ];

  return (
    <div className="image-carousel-event">
      <Slider {...settings} className="image-carousel-event__slider">
        {carouselImages.map((image, index) => (
          <div key={index} className="image-carousel-event__slide">
            <div className="image-carousel-event__container">
              <img
                className="image-carousel-event__image"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarouselTwo;
