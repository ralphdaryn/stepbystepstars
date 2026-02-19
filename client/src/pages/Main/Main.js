import "./Main.scss";
import Carousel from "../../components/ImageCarousel/ImageCarousel";
import Services from "../../components/Services/Services";
import EventPlan from "../../components/EventPlan/EventPlan";
import Reviews from "../../components/Reviews/Reviews";
import Contact from "../../components/Contact/Contact";
import Waiver from "../../components/Waiver/Waiver";
import MailingList from "../../components/MailingList/MailingList";

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
            <MailingList />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
