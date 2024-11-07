import "./Reviews.scss";
import { useState, useEffect } from "react";
import { FaFacebook, FaStar } from "react-icons/fa";
import GoogleIcon from "../GoogleIcon/GoogleIcon";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      message:
        "I recently hired step by step stars for my son’s birthday. The team did an amazing job and the kids love their facepaint! See you in our next parties!!!",
      stars: 5,
      author: "Tamara Cruz",
      source: "Facebook",
    },
    {
      id: 2,
      message:
        "We hired Step by Step Stars for my son’s second birthday. The kids and especially the birthday boy had a wonderful time 🙂 Lauren was high energy and got both the kids and adults up and dancing. The video we received was adorable! Highly recommend Lauren and her team!",
      stars: 5,
      author: "Sa Kaur",
      source: "Facebook",
    },
    {
      id: 3,
      message:
        "Only 2 weeks in and I already love working out with Lauren and the other moms! Sessions are fun but also kicks your butt and gets your heart rate high and calories burnt, which is exactly what you need from a great fitness class :)",
      stars: 5,
      author: "Oishee Mondal",
      source: "Google",
    },
    {
      id: 4,
      message:
        "I've worked with Lauren and the Step by Step Stars team two years in a row now for our Girl's Soccer Tournament. Lauren and her team had face painting available for 60 - 80 youth and did an absolutely amazing job!! All the kids LOVED it and were so thrilled. Thank you Lauren and team!!!!",
      stars: 5,
      author: "Gabriela Estrada",
      source: "Facebook",
    },
    {
      id: 5,
      message:
        "Lauren and her team recently came to host a dance party at my daughter's 5th birthday. The girls had the BEST time and the music video she sent a few days later was adorable. Thank you Lauren and team! The birthday girl had the best time!",
      stars: 5,
      author: "Alyssa Galego",
      source: "Facebook",
    },
    {
      id: 6,
      message:
        "Last week I hired Lauren and her crew for my daughter's 8th birthday party. The face painting was amazing. They kept the kids entertained and they had so much fun dancing and playing. The best part of it was the music video which she sent the day after the party. It was a great gift for my daughter to keep the memories of her 8th birthday. I highly recommend her :)",
      stars: 5,
      author: "Asal Famili",
      source: "Facebook",
    },
    {
      id: 7,
      message:
        "I’ve been doing the fitness classes where I can bring my baby. The place is clean, warm, and cozy for my little one to roam while I work up a good sweat! The music is great and Lauren is so sweet. She’s motivating, pushes us in the best way possible, and overall just fun to talk to :)",
      stars: 5,
      author: "Chantel Persaud",
      source: "Google",
    },
    {
      id: 8,
      message:
        "Lauren is amazing! So glad to have found her mommy and baby fitness classes 😀. Signing up, was the best decision I made this year, I look forward to every class and have been getting so fit and energized! I recommend her classes to everyone I meet.",
      stars: 5,
      author: "Yasmina Tehami",
      source: "Google",
    },
    {
      id: 9,
      message:
        "We have fallen in love with Lauren because she is humble, leads with her heart, and has a great sense of humor. Lauren and I connected via social media, and although I always wanted to attend her classes it took a bit to align with my schedule. In the meantime, she encouraged me to look into other mommy and me fitness programs...",
      stars: 5,
      author: "Adriana MacNeil",
      source: "Google",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="reviews">
      <h2 className="reviews__title">What Our Clients Say About Us</h2>

      <div className="reviews__socials">
        <a
          href="https://www.google.com/search?q=step+by+step+stars+google+reviews#lrd=0x89d4d0b52fe49513:0x27e19329664bd353,1,,,,"
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
      <h3 className="reviews__subtitle">Step By Step Stars</h3>
      <p className="reviews__text">
        Rating 5.0{" "}
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="reviews__icon" />
        ))}{" "}
        (over 50+ reviews)
      </p>
      {reviews.length > 0 && (
        <div className="reviews__wrapper">
          <div className="reviews__testimonial">
            <div className="reviews__container">
              <p className="reviews__message">{reviews[index].message}</p>
              <div>
                {[...Array(reviews[index].stars)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="reviews__icon" />
                ))}
              </div>
              <div className="reviews__avatar">
                <div className="reviews__avatar-circle">
                  {reviews[index].author}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
