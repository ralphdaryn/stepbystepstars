import { useState } from "react";
import ticketImage from "../../assets/images/ticket.jpeg";
import "./RibbonCutting.scss";

const RibbonCutting = () => {
  const [quantity, setQuantity] = useState(1);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/.netlify/functions/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Checkout session creation failed:", errorData);
        alert(errorData.error || "Failed to create checkout session.");
        return;
      }

      const data = await response.json();
      console.log("Redirecting to:", data.url);
      window.location.href = data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div className="ribbon-cutting">
      <div className="ribbon-cutting__content">
        <h2 className="ribbon-cutting__title">Buy Tickets Here</h2>
        <div className="ribbon-cutting__input-group">
          <label htmlFor="quantity" className="ribbon-cutting__label">
            Number of Children:
          </label>
          <input
            id="quantity"
            type="number"
            className="ribbon-cutting__input"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            min="1"
          />
        </div>
        <button className="ribbon-cutting__button" onClick={handleCheckout}>
          <img
            src={ticketImage}
            alt="Ribbon Cutting Ticket"
            className="ribbon-cutting__image"
          />
        </button>
      </div>
    </div>
  );
};

export default RibbonCutting;