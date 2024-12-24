import "./SpecialEvents.scss";
import BackButton from "../BackButton/BackButton";

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

      <div className="special-events__image-container">
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
      </div>
    </div>
  );
};

export default SpecialEvents;
