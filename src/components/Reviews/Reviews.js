import "./Reviews.scss";
import { useState, useEffect } from "react";
import { FaFacebook, FaStar } from "react-icons/fa";
import GoogleIcon from "../GoogleIcon/GoogleIcon";

const Reviews = () => {
  const [category, setCategory] = useState("Birthday Parties");
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      message:
        "We hired Step by Step Stars for my son’s second birthday. The kids and especially the birthday boy had a wonderful time 🙂 Lauren was high energy and got both the kids and adults up and dancing. The video we received was adorable! Highly recommend Lauren and her team!",
      stars: 5,
      author: "Sa Kaur",
      date: "01/22/24",
      type: "Birthday Parties",
    },
    {
      id: 2,
      message:
        "Join our fitness dance party to stay fit and have fun! Our trainers ensure you get the best workout while enjoying the dance.",
      stars: 5,
      author: "John Doe",
      date: "02/15/24",
      type: "Fitness",
    },
    {
      id: 3,
      message:
        "I've worked with Lauren and the Step by Step Stars team two years in a row now for our Girl's Soccer Tournament. Lauren and her team had face painting available for 60 - 80 youth and did an absolutely amazing job!! All the kids LOVED it and were so thrilled. Thank you Lauren and team!!!!",
      stars: 5,
      author: "Gabriela Estrada",
      date: "09/17/23",
      type: "Fitness",
    },
    {
      id: 4,
      message:
        "Lauren and her team recently came to host a dance party at my daughter's 5th birthday. The girls had the BEST time and the music video she sent a few days later was adorable. Thank you Lauren and team! The birthday girl had the best time!",
      stars: 5,
      author: "Alyssa Galego",
      date: "08/29/23",
      type: "Birthday Parties",
    },
    {
      id: 5,
      message:
        "Last week I hired Lauren and her crew for my daughter's 8th birthday party. The face painting was amazing. They kept the kids entertained and they had so much fun dancing and playing. The best part of it was the music video which she sent the day after the party. It was a great gift for my daughter to keep the memories of her 8th birthday. I highly recommend her :)",
      stars: 5,
      author: "Asal Famili",
      date: "02/25/23",
      type: "Birthday Parties",
    },
  ];

  const filteredReviews = reviews.filter((review) => review.type === category);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setIndex(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [filteredReviews.length, category]);

  return (
    <div className="reviews">
      <h2 className="reviews__title">What Our Clients Say About Us</h2>

      <div className="reviews__socials">
        <a
          href="https://www.google.com/search?q=step+by+step+stars+google+reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleIcon className="reviews__google" />
        </a>
        <a
          href="https://www.facebook.com/stepbystepstars/reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="reviews__facebook" />
        </a>
      </div>
      <div className="reviews__buttons">
        <div
          className="reviews__buttons-birthday"
          onClick={() => handleCategoryChange("Birthday Parties")}
        >
          Birthday Parties
        </div>
        <div
          className="reviews__buttons-fitness"
          onClick={() => handleCategoryChange("Fitness")}
        >
          Fitness
        </div>
      </div>
      <h3 className="reviews__subtitle">Step By Step Stars</h3>
      <p className="reviews__text">
        Rating 5.0{" "}
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="reviews__icon" />
        ))}{" "}
        (over 50+ reviews)
      </p>
      {filteredReviews.length > 0 && (
        <div className="reviews__wrapper">
          <div className="reviews__testimonial">
            <div className="reviews__container">
              <p className="reviews__message">
                {filteredReviews[index].message}
              </p>
              <div>
                {[...Array(filteredReviews[index].stars)].map(
                  (_, starIndex) => (
                    <FaStar key={starIndex} className="reviews__icon" />
                  )
                )}
              </div>
              <div className="reviews__avatar">
                <div className="reviews__avatar-circle">
                  {filteredReviews[index].author}
                </div>
              </div>
              <div className="reviews__date">{filteredReviews[index].date}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
