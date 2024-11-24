import "./ImageCarouselEvent.scss";
import eventCarousel1 from "../../assets/images/carouselTwo1.jpeg";
import eventCarousel2 from "../../assets/images/carouselTwo2.jpeg";
import eventCarousel3 from "../../assets/images/carouselTwo3.jpeg";
import eventCarousel4 from "../../assets/images/carouselTwo4.jpeg";
import eventCarousel5 from "../../assets/images/carouselTwo5.jpeg";

const ImageCarouselTwo = ({ handleCheckout }) => {
  const carouselEvents = [
    {
      src: eventCarousel1,
      eventName: "Holiday Mini: w/ Raspberry Studios",
      tickets: 1,
      price: 100,
    },
    {
      src: eventCarousel2,
      eventName: "Holly Jolly Stokes: Holiday Sip and Paint for Moms",
      tickets: 1,
      price: 40,
    },
    {
      src: eventCarousel3,
      eventName: "Christmas Minis w/ Fazs Photography",
      tickets: 1,
      price: 100,
    },
    {
      src: eventCarousel4,
      eventName: "Cheers to the Holidays: Cocktail Crafting for Moms",
      tickets: 1,
      price: 60,
    },
    {
      src: eventCarousel5,
      eventName: "Step into Christmas: Family Christmas Market",
      tickets: 1,
      price: 15,
    },
  ];

  return (
    <div className="image-carousel-event">
      {carouselEvents.map((event, index) => (
        <div key={index} className="image-carousel-event__item">
          <div className="image-carousel-event__container">
            <img
              className="image-carousel-event__image"
              src={event.src}
              alt={event.eventName}
            />
          </div>
          <div className="image-carousel-event__button-container">
            {index < carouselEvents.length - 1 && ( // Exclude the last button
              <button
                className="image-carousel-event__button"
                onClick={() =>
                  handleCheckout(event.eventName, event.tickets, event.price)
                }
              >
                Buy Tickets for {event.eventName}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarouselTwo;
