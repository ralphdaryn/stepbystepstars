// import "./ImageCarouselEvent.scss";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import eventCarousel1 from "../../assets/images/carouselTwo1.jpeg";
// import eventCarousel2 from "../../assets/images/carouselTwo2.jpeg";
// import eventCarousel3 from "../../assets/images/carouselTwo3.jpeg";
// import eventCarousel4 from "../../assets/images/carouselTwo4.jpeg";
// import eventCarousel5 from "../../assets/images/carouselTwo5.jpeg";

// const ImageCarouselTwo = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//     pauseOnHover: false,
//   };

//   const carouselImages = [
//     eventCarousel1,
//     eventCarousel2,
//     eventCarousel3,
//     eventCarousel4,
//     eventCarousel5,
//   ];

//   return (
//     <div className="image-carousel-event">
//       <Slider {...settings} className="image-carousel-event__slider">
//         {carouselImages.map((image, index) => (
//           <div key={index} className="image-carousel-event__slide">
//             <div className="image-carousel-event__container">
//               <img
//                 className="image-carousel-event__image"
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageCarouselTwo;

// import "./ImageCarouselEvent.scss";
// import eventCarousel1 from "../../assets/images/carouselTwo1.jpeg";
// import eventCarousel2 from "../../assets/images/carouselTwo2.jpeg";
// import eventCarousel3 from "../../assets/images/carouselTwo3.jpeg";
// import eventCarousel4 from "../../assets/images/carouselTwo4.jpeg";
// import eventCarousel5 from "../../assets/images/carouselTwo5.jpeg";

// const ImageCarouselTwo = () => {
//   const carouselImages = [
//     { src: eventCarousel1, link: "https://link-to-tickets1.com" },
//     { src: eventCarousel2, link: "https://link-to-tickets2.com" },
//     { src: eventCarousel3, link: "https://link-to-tickets3.com" },
//     { src: eventCarousel4, link: "https://link-to-tickets4.com" },
//     { src: eventCarousel5, link: "https://link-to-tickets5.com" },
//   ];

//   return (
//     <div className="image-carousel-event">
//       {carouselImages.map((image, index) => (
//         <div key={index} className="image-carousel-event__item">
//           <div className="image-carousel-event__container">
//             <img
//               className="image-carousel-event__image"
//               src={image.src}
//               alt={`Event ${index + 1}`}
//             />
//           </div>
//           <div className="image-carousel-event__button-container">
//             <a
//               href={image.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="image-carousel-event__button"
//             >
//               Buy Tickets
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageCarouselTwo;

// import "./ImageCarouselEvent.scss";
// import eventCarousel1 from "../../assets/images/carouselTwo1.jpeg";
// import eventCarousel2 from "../../assets/images/carouselTwo2.jpeg";
// import eventCarousel3 from "../../assets/images/carouselTwo3.jpeg";
// import eventCarousel4 from "../../assets/images/carouselTwo4.jpeg";
// import eventCarousel5 from "../../assets/images/carouselTwo5.jpeg";

// const ImageCarouselTwo = ({ handleCheckout }) => {
//   const carouselEvents = [
//     {
//       src: eventCarousel1,
//       eventName: "Holiday Mini: w/ Raspberry Studios",
//       tickets: 1,
//       price: 150,
//     },
//     {
//       src: eventCarousel2,
//       eventName: "Holly Jolly Stokes: Holiday Sip and Paint for Moms",
//       tickets: 1,
//       price: 40,
//     },
//     {
//       src: eventCarousel3,
//       eventName: "Christmas Minis w/ Fazs Photography",
//       tickets: 1,
//       price: 150,
//     },
//     {
//       src: eventCarousel4,
//       eventName: "Cheers to the Holidays: Cocktail Crafting for Moms",
//       tickets: 1,
//       price: 60,
//     },
//     {
//       src: eventCarousel5,
//       eventName: "Step into Christmas: Family Christmas Market",
//       tickets: 1,
//       price: 15,
//     },
//   ];

//   return (
//     <div className="image-carousel-event">
//       {carouselEvents.map((event, index) => (
//         <div key={index} className="image-carousel-event__item">
//           <div className="image-carousel-event__container">
//             <img
//               className="image-carousel-event__image"
//               src={event.src}
//               alt={event.eventName}
//             />
//           </div>
//           <div className="image-carousel-event__button-container">
//             <button
//               className="image-carousel-event__button"
//               onClick={() =>
//                 handleCheckout(event.eventName, event.tickets, event.price)
//               }
//             >
//               Buy Tickets for {event.eventName}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageCarouselTwo;

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
      price: 150,
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
      price: 150,
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
