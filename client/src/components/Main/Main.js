import "./Main.scss";
import Carousel from "../ImageCarousel/ImageCarousel";
import Services from "../Services/Services";
import EventPlan from "../EventPlan/EventPlan";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import Waiver from "../Waiver/Waiver";

const Main = () => {
  return (
    <div>
      <div className="main__carousel">
        <Carousel />
      </div>
      <div className="main">
        <div className="main__container">
          <div className="main__section">
            <Services />
            <EventPlan />
            <Waiver />
            <Reviews />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
