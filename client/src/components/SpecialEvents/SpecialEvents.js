import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";
import holiday from "../../assets/images/holiday.jpeg";
import ImageCarouselTwo from "../ImageCarouselEvent/ImageCarouselEvent";
import ChristmasMarket from "../ChristmasMarket/ChristmasMarket";

const SpecialEvents = () => {
  const handleCheckout = async (eventName, tickets, price) => {
    try {
      const response = await fetch("/.netlify/functions/specialevents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          tickets,
          price,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error("Error during checkout:", data.error);
        alert("Failed to create checkout session. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="special-events">
      <div className="special-events__header">
        <BackButton />
        <h2 className="special-events__title">Special Events</h2>
      </div>
      <div className="special-events__intro">
        <p className="special-events__intro-text">
          Welcome to our Special Events! <br />
          Check out the exclusive events below to grab your tickets today!
        </p>
      </div>
      <div>
        <ImageCarouselTwo />
      </div>
      <div>
        <h3 className="special-events__subtitle">
          Click the event below to buy your tickets!
        </h3>
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
          onClick={() =>
            handleCheckout("Holiday Mini: w/ Raspberry Studios", 1, 150)
          }
        >
          Click Here To Buy Tickets!
        </button>
        <button
          className="special-events__link special-events__link--section2"
          onClick={() =>
            handleCheckout(
              "Holly Jolly Stokes: Holiday Sip and Paint for Moms",
              1,
              40
            )
          }
        >
          Click Here To Buy Tickets!
        </button>
        <button
          className="special-events__link special-events__link--section3"
          onClick={() =>
            handleCheckout("Christmas Minis w/ Fazs Photography", 1, 150)
          }
        >
          Click Here To Buy Tickets!
        </button>
        <button
          className="special-events__link special-events__link--section4"
          onClick={() =>
            handleCheckout(
              "Cheers to the Holidays: Cocktail Crafting for Moms",
              1,
              60
            )
          }
        >
          Click Here To Buy Tickets!
        </button>
        <button
          className="special-events__link special-events__link--section5"
          onClick={() =>
            handleCheckout(
              "Step into Christmas: Family Christmas Market",
              1,
              15
            )
          }
        >
          Click Here To Buy Tickets!
        </button>
      </div>
      <ChristmasMarket handleCheckout={handleCheckout} />
    </div>
  );
};

export default SpecialEvents;
