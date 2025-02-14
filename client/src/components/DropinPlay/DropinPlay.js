// import "./DropinPlay.scss";
// import BackButton from "../BackButton/BackButton";
// import EventsButton from "../EventsButton/EventsButton";
// import dropInPlayImg from "../../assets/images/dropinplay5.JPEG";

// const DropinPlay = () => {
//   return (
//     <div className="dropinplay">
//       <div className="dropinplay__header">
//         <BackButton />
//         <h2 className="dropinplay__title">Drop In Play</h2>
//       </div>

//       <div className="dropinplay__container">
//         <div className="dropinplay__wrapper">
//           <img
//             src={dropInPlayImg}
//             className="dropinplay__image"
//             alt="Child with butterfly face paint"
//           />
//         </div>

//         <div className="dropinplay__subtitle-container">
//           <p className="dropinplay__subtitle">
//             Welcome to S TOWN, where kids can explore, play and learn through
//             interactive play! S TOWN - An indoor kids' village designed to
//             foster learning through pretend play. The space will include a
//             variety of interactive, miniature environments like a grocery store,
//             salon, veterinary office, and nostalgic 90s café, each encouraging
//             role-playing and imaginative exploration. The design is crafted to
//             allow your child to take the lead while you, as parents are meant to
//             support and encourage their development.
//           </p>
//           <p className="dropinplay__subtitle">
//             S Town promotes key developmental skill such as problem-solving,
//             language development, social interaction, and cognitive flexibility.
//             By engaging in these realistic, hands-on activities, children will
//             not only have fun but also strengthen their understanding of
//             real-world tasks and scenarios, helping them build social-emotional
//             skills and boosting their creativity.
//           </p>
//           <p className="dropinplay__subtitle">
//             $16.99 - one child <br></br> $15.00 - ages 1-3<br></br> $10.00 -
//             kids under 1 <br></br> $5.00 - extra observer (adult) <br></br> Each
//             family includes two adults.
//           </p>
//           <p className="dropinplay__subtitle">
//             Drop-in hours vary due to private events. Weekly schedule is posted
//             every Sunday at <br></br>
//             <a href="https://www.instagram.com/stownclub/">Instagram</a>
//           </p>

//           <div className="dropinplay__button">
//             <EventsButton />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropinPlay;

import "./DropinPlay.scss";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";
import dropInPlayImg from "../../assets/images/dropinplay5.JPEG";

const DropinPlay = () => {
  return (
    <div className="dropinplay">
      <div className="dropinplay__header">
        <BackButton />
        <h2 className="dropinplay__title">Drop In Play</h2>
      </div>

      <div className="dropinplay__container">
        <div className="dropinplay__wrapper">
          <img
            src={dropInPlayImg}
            className="dropinplay__image"
            alt="Child with butterfly face paint"
          />
        </div>

        <div className="dropinplay__subtitle-container">
          <p className="dropinplay__subtitle">
            Welcome to S TOWN, where kids can explore, play and learn through
            interactive play! S TOWN - An indoor kids' village designed to
            foster learning through pretend play. The space will include a
            variety of interactive, miniature environments like a grocery store,
            salon, veterinary office, and nostalgic 90s café, each encouraging
            role-playing and imaginative exploration. The design is crafted to
            allow your child to take the lead while you, as parents are meant to
            support and encourage their development.
          </p>
          <p className="dropinplay__subtitle">
            S Town promotes key developmental skills such as problem-solving,
            language development, social interaction, and cognitive flexibility.
            By engaging in these realistic, hands-on activities, children will
            not only have fun but also strengthen their understanding of
            real-world tasks and scenarios, helping them build social-emotional
            skills and boosting their creativity.
          </p>

          <div className="dropinplay__pricing">
            <h3 className="dropinplay__pricing-title">Pricing</h3>
            <ul className="dropinplay__pricing-list">
              <li>$16.99 - One child</li>
              <li>$15.00 - Ages 1-3</li>
              <li>$10.00 - Kids under 1</li>
              <li>$5.00 - Extra observer (adult)</li>
              <li>Each family includes one adult</li>
            </ul>
          </div>

          <div className="dropinplay__hours">
            <h3 className="dropinplay__hours-title">Drop-In Hours</h3>
            <p>
              Drop-in hours vary due to private events. Weekly schedule is
              posted every Sunday on{" "}
              <a
                href="https://www.instagram.com/stownclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </p>
          </div>

          <div className="dropinplay__button">
            <EventsButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropinPlay;
