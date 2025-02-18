// // import "./BirthdayParties.scss";
// // import BackButton from "../BackButton/BackButton";
// // import EventsButton from "../EventsButton/EventsButton";
// // import birthdayPackage from "../../assets/images/birthdaypackage.jpeg";
// // import birthdayPackage2 from "../../assets/images/birthdaypackage2.jpeg";
// // import birthdayVideo from "../../assets/images/bdayparty.mp4";

// // const BirthdayParties = () => {
// //   return (
// //     <div className="birthday-party">
// //       <div className="birthday-party__header">
// //         <BackButton />
// //         <h2 className="birthday-party__title">Birthday Parties</h2>
// //       </div>

// //       <div className="birthday-party__container">
// //         <div>
// //           <video
// //             className="birthday-party__video"
// //             src={birthdayVideo}
// //             controls
// //             poster={birthdayPackage} // Placeholder image before play
// //           />
// //         </div>
// //         <div className="birthday-party__wrapper">
// //           <img
// //             className="birthday-party__image"
// //             alt="bday party"
// //             src={birthdayPackage}
// //           />
// //           <img
// //             className="birthday-party__image"
// //             alt="bday party 2"
// //             src={birthdayPackage2}
// //           />
// //         </div>

// //         <div className="birthday-party__subtitle-container">
// //           <div className="birthday-party__button">
// //             <EventsButton />
// //           </div>
// //           <p className="birthday-party__subtitle">
// //             Welcome to S TOWN, where kids can explore, play, and learn through
// //             interactive play! S TOWN - An indoor kids' village designed to
// //             foster learning through pretend play...
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BirthdayParties;

// import "./BirthdayParties.scss";
// import BackButton from "../BackButton/BackButton";
// import EventsButton from "../EventsButton/EventsButton";
// import birthdayPackage from "../../assets/images/birthdaypackage.jpeg";
// import birthdayPackage2 from "../../assets/images/birthdaypackage2.jpeg";
// import birthdayVideo from "../../assets/images/bdayparty.mp4";

// const BirthdayParties = () => {
//   return (
//     <div className="birthday-party">
//       <div className="birthday-party__header">
//         <BackButton />
//         <h2 className="birthday-party__title">Birthday Parties</h2>
//       </div>

//       <div className="birthday-party__container">
//         {/* Video Section */}
//         <div className="birthday-party__video-container">
//           <video
//             className="birthday-party__video"
//             src={birthdayVideo}
//             controls
//             autoPlay
//             muted
//             loop
//             playsInline
//             poster={birthdayPackage} // Low-res placeholder image before play
//           />
//         </div>

//         {/* Images */}
//         <div className="birthday-party__wrapper">
//           <img
//             className="birthday-party__image"
//             alt="Birthday Party"
//             src={birthdayPackage}
//           />
//           <img
//             className="birthday-party__image"
//             alt="Birthday Party 2"
//             src={birthdayPackage2}
//           />
//         </div>

//         {/* Description */}
//         <div className="birthday-party__subtitle-container">
//           <div className="birthday-party__button">
//             <EventsButton />
//           </div>
//           <p className="birthday-party__subtitle">
//             Looking for a stress-free birthday party? S-Town Club, a kids'
//             entertainment center in Durham, offers an all-inclusive experience.
//             With private venues, no need to share space or handle logistics.
//             Packages include food, cakes, decorations, and entertainment like
//             face painting, soft play, and bouncy castles. We handle setup and
//             cleanup, so parents can focus on making memories. With imaginative
//             play areas and customizable options, every celebration is unique.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BirthdayParties;

import { useState } from "react";
import "./BirthdayParties.scss";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";
import birthdayPackage from "../../assets/images/birthdaypackage.jpeg";
import birthdayPackage2 from "../../assets/images/birthdaypackage2.jpeg";
import birthdayVideo from "../../assets/images/bdayparty.mp4";

const BirthdayParties = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="birthday-party">
      <div className="birthday-party__header">
        <BackButton />
        <h2 className="birthday-party__title">Birthday Parties</h2>
      </div>
      <div className="birthday-party__container">
        <div className="birthday-party__video-container">
          <video
            className="birthday-party__video"
            src={birthdayVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            poster={birthdayPackage}
          />
        </div>
        {/* Images */}
        <div className="birthday-party__wrapper">
          <img
            className="birthday-party__image"
            alt="Birthday Party"
            src={birthdayPackage}
            onClick={() => openImage(birthdayPackage)}
          />
          <img
            className="birthday-party__image"
            alt="Birthday Party 2"
            src={birthdayPackage2}
            onClick={() => openImage(birthdayPackage2)}
          />
        </div>
        <div className="birthday-party__subtitle-container">
          <p className="birthday-party__subtitle">
            Looking for a stress-free birthday party? S-Town Club, a kids'
            entertainment center in Durham, offers an all-inclusive experience.
            With private venues, no need to share space or handle logistics.
            Packages include food, cakes, decorations, and entertainment like
            face painting, soft play, and bouncy castles. We handle setup and
            cleanup, so parents can focus on making memories. With imaginative
            play areas and customizable options, every celebration is unique!
          </p>
        </div>
        <div className="birthday-party__button">
          <EventsButton />
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="image-modal__close" onClick={closeImage}>
            &times;
          </span>
          <img
            className="image-modal__content"
            src={selectedImage}
            alt="Full View"
          />
        </div>
      )}
    </div>
  );
};

export default BirthdayParties;
