import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import holiday from "../../assets/images/holiday.jpeg";
import axios from "axios";

const SpecialEvents = () => {
  const handleCheckout = async (eventName, tickets, price) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/create-checkout-session",
        {
          eventName,
          tickets,
          price,
        }
      );

      // Redirect to Stripe Checkout
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Failed to create checkout session. Please try again.");
    }
  };

  return (
    <div className="special-events">
      <div className="special-events__header">
        <BackButton />
        <h2 className="special-events__title">Special Events</h2>
      </div>
      <div>
        {" "}
        <h3 className="special-events__subtitle">Click on the event below to purchase your tickets!</h3>
      </div>
      <div className="special-events__image-container">
        <img
          className="special-events__image"
          src={holiday}
          alt="holiday pic"
        />
        {/* Overlay clickable sections */}
        <button
          className="special-events__link special-events__link--section1"
          onClick={() => handleCheckout("Holiday Mini: w/ Raspberry Studios", 1, 150)} 
        >
          Holiday Mini: w/ Raspberry Studios
        </button>
        <button
          className="special-events__link special-events__link--section2"
          onClick={() => handleCheckout("Holly Jolly Stokes: Holiday Sip and Paint for Moms", 1, 40)} 
        >
          Holly Jolly Stokes: Holiday Sip and Paint for Moms
        </button>
        <button
          className="special-events__link special-events__link--section3"
          onClick={() => handleCheckout("Christmas Minis w/ Fazs Photography", 1, 150)} 
        >
          Christmas Minis w/ Fazs Photography
        </button>
        <button
          className="special-events__link special-events__link--section4"
          onClick={() => handleCheckout("Cheers to the Holidays: Cocktail Crafting for Moms", 1, 60)} 
        >
          Cheers to the Holidays: Cocktail Crafting for Moms
        </button>
        <button
          className="special-events__link special-events__link--section5"
          onClick={() => handleCheckout("Step into Christmas: Family Christmas Market", 1, 15)} 
        >
          Step into Christmas: Family Christmas Market
        </button>
      </div>
      <div className="special-events__container">
        <div className="special-events__wrapper"></div>
      </div>
    </div>
  );
};

export default SpecialEvents;
