import { useState } from "react";
import ticketImage from "../../assets/images/ticket.jpeg";

const RibbonCutting = () => {
  const [quantity, setQuantity] = useState(1);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
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
      window.location.href = data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Checkout failed. Please try again.");
    }
  };  

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Grand Opening Ribbon Cutting</h2>
      <label style={{ marginBottom: "10px", display: "block" }}>
        Number of Children:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          min="1"
          style={{ marginLeft: "10px", width: "50px" }}
        />
      </label>
      <button
        onClick={handleCheckout}
        style={{ border: "none", background: "none", padding: 0 }}
      >
        <img
          src={ticketImage}
          alt="Ribbon Cutting Ticket"
          style={{
            cursor: "pointer",
            maxWidth: "300px",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </button>
    </div>
  );
};

export default RibbonCutting;