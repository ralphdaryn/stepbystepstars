import { useState } from "react";
import "./ChristmasMarket.scss";

const ChristmasMarket = ({ handleCheckout }) => {
  const [individualPassQty, setIndividualPassQty] = useState(0);
  const [familyPassQty, setFamilyPassQty] = useState(0);
  const [extraChildQty, setExtraChildQty] = useState(0);
  const [adultPassQty, setAdultPassQty] = useState(0);

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  const handleDecrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleCalculateAndCheckout = () => {
    // Add ticket prices directly
    const totalPrice =
      individualPassQty * 15 + adultPassQty * 10 + familyPassQty * 30 + extraChildQty * 5;

    // Add total tickets directly (1 pass = 1 ticket)
    const totalTickets = individualPassQty + adultPassQty + familyPassQty + extraChildQty;

    // Prevent checkout if no tickets are selected
    if (totalTickets === 0) {
      alert("Please select at least one ticket option.");
      return;
    }

    // Pass calculated values to handleCheckout
    handleCheckout(
      "Step into Christmas: Family Christmas Market",
      totalTickets,
      totalPrice
    );
  };

  return (
    <div className="christmas-market">
      <h4>Step into Christmas: Family Christmas Market</h4>
      <p>
        Individual Pass: $15 each (1 adult, 1 child)
        <br />
        Adult Pass: $10 each
        <br />
        Family Pass: $30 each (2 adults, 3 children)
        <br />
        Additional Child: $5 each
        <br /> (Kids 3 and under free)
      </p>
      <div className="christmas-market__form">
        <div className="christmas-market__quantity">
          <label>Individual Passes:</label>
          <div className="christmas-market__counter">
            <button
              onClick={() =>
                handleDecrement(setIndividualPassQty, individualPassQty)
              }
            >
              -
            </button>
            <span>{individualPassQty}</span>
            <button
              onClick={() =>
                handleIncrement(setIndividualPassQty, individualPassQty)
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="christmas-market__quantity">
          <label>Adult Pass:</label>
          <div className="christmas-market__counter">
            <button
              onClick={() => handleDecrement(setAdultPassQty, adultPassQty)}
            >
              -
            </button>
            <span>{adultPassQty}</span>
            <button
              onClick={() => handleIncrement(setAdultPassQty, adultPassQty)}
            >
              +
            </button>
          </div>
        </div>
        <div className="christmas-market__quantity">
          <label>Family Passes:</label>
          <div className="christmas-market__counter">
            <button
              onClick={() => handleDecrement(setFamilyPassQty, familyPassQty)}
            >
              -
            </button>
            <span>{familyPassQty}</span>
            <button
              onClick={() => handleIncrement(setFamilyPassQty, familyPassQty)}
            >
              +
            </button>
          </div>
        </div>
        <div className="christmas-market__quantity">
          <label>Additional Children:</label>
          <div className="christmas-market__counter">
            <button
              onClick={() => handleDecrement(setExtraChildQty, extraChildQty)}
            >
              -
            </button>
            <span>{extraChildQty}</span>
            <button
              onClick={() => handleIncrement(setExtraChildQty, extraChildQty)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleCalculateAndCheckout}>
        Click Here To Buy Tickets!
      </button>
    </div>
  );
};

export default ChristmasMarket;
