import "./Reviews.scss";
import { FaFacebook, FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="reviews">
      <h2 className="reviews__title">What They Say About Us</h2>
      <FaFacebook className="reviews__facebook" />
      <h3 className="reviews__subtitle">Step By Step Stars</h3>
      <p className="reviews__text">
        Rating 5.0 <FaStar className="reviews__icon" />
        <FaStar className="reviews__icon" />
        <FaStar className="reviews__icon" />
        <FaStar className="reviews__icon" />
        <FaStar className="reviews__icon" /> (over 50+ reviews)
      </p>
      <div className="reviews__testimonial">
        <div className="reviews__container">
          <p className="reviews__message">
            We hired Step by Step Stars for my son’s second birthday. The kids
            and especially the birthday boy had a wonderful time 🙂 Lauren was
            high energy and got both the kids and adults up and dancing. The
            video we received was adorable! High recommend Lauren and her team!
          </p>
          <div>
            <FaStar className="reviews__icon" />
            <FaStar className="reviews__icon" />
            <FaStar className="reviews__icon" />
            <FaStar className="reviews__icon" />
            <FaStar className="reviews__icon" />
          </div>
          <div className="reviews__avatar">
            <div className="reviews__avatar-circle">Sa Kaur</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
