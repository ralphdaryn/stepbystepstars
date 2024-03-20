import "./Reviews.scss";
import Slider from "react-slick";
import { FaFacebook, FaStar } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      message:
        "We hired Step by Step Stars for my son’s second birthday. The kids and especially the birthday boy had a wonderful time 🙂 Lauren was high energy and got both the kids and adults up and dancing. The video we received was adorable! High recommend Lauren and her team!",
      stars: 5,
      author: "Sa Kaur",
      date: "01/22/24",
    },
    {
      id: 2,
      message:
        "I highly recommend Step By Step Stars and Lauren for your parties. She skillfully managed a group of 25 eight-year-old kids, effortlessly entertaining them. The children had a fantastic time learning choreographies, dancing, laughing, and thoroughly enjoying themselves. Lauren and her team member did an outstanding job.",
      stars: 5,
      author: "Mirey Kara",
      date: "12/11/23",
    },
    {
      id: 3,
      message:
        "I've worked with Lauren and the Step by Step Stars team two years in a row now for our Girl's Soccer Tournament. Lauren and her team had face painting available for 60 - 80 youth and did an absolutely amazing job!! All the kids LOVED it and were so thrilled. Thank you Lauren and team!!!!",
      stars: 5,
      author: "Gabriela Estrada",
      date: "09/17/23",
    },
    {
      id: 4,
      message:
        "Lauren and her team recently came to host a dance party at my daughter's 5th birthday. The girls had the BEST time and the music video she sent a few days later was adorable. Thank you Lauren and team! The birthday girl had the best time!",
      stars: 5,
      author: "Alyssa Galego",
      date: "08/29/23",
    },
    {
      id: 5,
      message:
        "Last week I hired Lauren and her crew for my daughter's 8th birthday party. The face painting was amazing. They kept the kids entertained and they had so much fun dancing and playing. The best part of it was the music video which she sent the day after the party. It was a great gift for my daughter to keep the memories of her 8th birthday. I highly recommend her :)",
      stars: 5,
      author: "Asal Famili",
      date: "02/25/23",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="reviews">
      <h2 className="reviews__title">What Our Clients Say About Us</h2>
      <FaFacebook className="reviews__facebook" />
      <h3 className="reviews__subtitle">Step By Step Stars</h3>
      <p className="reviews__text">
        Rating 5.0{" "}
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="reviews__icon" />
        ))}{" "}
        (over 50+ reviews)
      </p>
      {reviews.map((review) => (
        <div className="reviews__testimonial" key={review.id}></div>
      ))}

      <div className="reviews__wrapper">
        <Slider {...settings} className="reviews">
          {reviews.map((review) => (
            <div className="reviews__testimonial" key={review.id}>
              <div className="reviews__container">
                <p className="reviews__message">{review.message}</p>
                <div>
                  {[...Array(review.stars)].map((_, index) => (
                    <FaStar key={index} className="reviews__icon" />
                  ))}
                </div>
                <div className="reviews__avatar">
                  <div className="reviews__avatar-circle">{review.author}</div>
                </div>
                <div className="reviews__date">{review.date}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
