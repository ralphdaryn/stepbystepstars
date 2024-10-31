import { useState } from "react";
import ticketImage from "../../assets/images/ticket.jpeg"; // Information image
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
          <select
            id="quantity"
            className="ribbon-cutting__input"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="ribbon-cutting__image-container">
          <img
            src={ticketImage}
            alt="Grand Opening Information"
            className="ribbon-cutting__image"
          />
        </div>
        <button className="ribbon-cutting__button" onClick={handleCheckout}>
          Purchase Ticket
        </button>
      </div>
    </div>
  );
};

export default RibbonCutting;
