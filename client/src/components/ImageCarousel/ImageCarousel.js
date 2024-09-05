import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.scss';
import facepaintImage from '../../assets/images/facepaint.png';
import danceparty from '../../assets/images/danceparty.png';
import danceparty2 from '../../assets/images/danceparty2.png';
import fitnessmom from '../../assets/images/fitnessmom.png';

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
        {[facepaintImage, danceparty2, danceparty, fitnessmom].map((image, index) => (
          <div key={index} className="image-carousel__slide">
            <div className="image-carousel__container">
              <img className="image-carousel__image" src={image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
