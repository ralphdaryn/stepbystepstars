// import { Helmet } from "react-helmet";
// import "./DropinPlay.scss";
// import BackButton from "../BackButton/BackButton";
// import dropInPlayImg from "../../assets/images/dropinplay5.JPEG";

// const DropinPlay = () => {
//   return (
//     <div className="dropinplay">
//       <Helmet>
//         <title>Drop-In Play Space in Durham | Step By Step Club</title>
//         <meta
//           name="description"
//           content="Explore S Town – an interactive indoor kids' village for toddlers and children in Durham. Enjoy imaginative drop-in play spaces like grocery stores, salons, and more."
//         />
//         <meta
//           name="keywords"
//           content="drop-in play Durham, toddler play space, indoor play area Durham, kids village, pretend play for children"
//         />
//         <link rel="canonical" href="https://www.stepbystepclub.ca/dropinplay" />
//       </Helmet>

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
//             S Town promotes key developmental skills such as problem-solving,
//             language development, social interaction, and cognitive flexibility.
//             By engaging in these realistic, hands-on activities, children will
//             not only have fun but also strengthen their understanding of
//             real-world tasks and scenarios, helping them build social-emotional
//             skills and boosting their creativity.
//           </p>

//           <div className="dropinplay__pricing">
//             <h3 className="dropinplay__pricing-title">Pricing</h3>
//             <ul className="dropinplay__pricing-list">
//               <li>$16.99 - One child</li>
//               <li>$15.00 - Ages 1-3</li>
//               <li>$10.00 - Kids under 1</li>
//               <li>$5.00 - Extra observer (adult)</li>
//               <li>Each family includes one adult</li>
//             </ul>
//           </div>

//           <div className="dropinplay__hours">
//             <h3 className="dropinplay__hours-title">Drop-In Hours</h3>
//             <p>
//               Drop-in hours vary due to private events. Weekly schedule is
//               posted every Sunday on{" "}
//               <a
//                 href="https://www.instagram.com/stownclub/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Instagram
//               </a>
//               .
//             </p>
//           </div>

//           <div className="dropinplay__button">
//             <button
//               className="birthday-party__cta-button"
//               onClick={() => {
//                 window.location.href =
//                   "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-07-08+05%3A17%3A55&id_class_tab=3&id_mode=1&k_class_tab=66372&s_id=Q1sjIK";
//               }}
//             >
//               Connect With Your Event Planner
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropinPlay;

import { Helmet } from "react-helmet";
import "./PrivatePlayGroup.scss";
import BackButton from "../BackButton/BackButton";
import privatePlayGroupImg from "../../assets/images/dropinplay5.JPEG";

const PrivatePlayGroup = () => {
  return (
    <div className="privateplaygroup">
      <Helmet>
        <title>Private Play Group in Durham | Step By Step Club</title>
        <meta
          name="description"
          content="Explore S Town – a private indoor kids' village experience for toddlers and children in Durham. Enjoy exclusive play spaces like grocery stores, salons, and more."
        />
        <meta
          name="keywords"
          content="private play group Durham, toddler group play, indoor play area Durham, kids village, pretend play for children"
        />
        <link rel="canonical" href="https://www.stepbystepclub.ca/privateplaygroup" />
      </Helmet>

      <div className="privateplaygroup__header">
        <BackButton />
        <h2 className="privateplaygroup__title">Private Play Group</h2>
      </div>

      <div className="privateplaygroup__container">
        <div className="privateplaygroup__wrapper">
          <img
            src={privatePlayGroupImg}
            className="privateplaygroup__image"
            alt="Child with butterfly face paint"
          />
        </div>

        <div className="privateplaygroup__subtitle-container">
          <p className="privateplaygroup__subtitle">
            Welcome to S TOWN, where kids can explore, play and learn through interactive play! S TOWN - An indoor kids' village designed to foster learning through pretend play. The space includes a variety of miniature environments like a grocery store, salon, veterinary office, and nostalgic 90s café, encouraging role-playing and imagination. It’s all designed so your child can take the lead while you support and encourage their development.
          </p>
          <p className="privateplaygroup__subtitle">
            S Town promotes key developmental skills such as problem-solving, language development, social interaction, and cognitive flexibility. Through realistic, hands-on activities, children not only have fun but also build real-world awareness, creativity, and emotional skills.
          </p>

          <div className="privateplaygroup__pricing">
            <h3 className="privateplaygroup__pricing-title">Pricing</h3>
            <ul className="privateplaygroup__pricing-list">
              <li>$16.99 - One child</li>
              <li>$15.00 - Ages 1-3</li>
              <li>$10.00 - Kids under 1</li>
              <li>$5.00 - Extra observer (adult)</li>
              <li>Each family includes one adult</li>
            </ul>
          </div>

          <div className="privateplaygroup__hours">
            <h3 className="privateplaygroup__hours-title">Group Play Hours</h3>
            <p>
              Group play hours vary due to private bookings. Weekly schedule is posted every Sunday on{" "}
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

          <div className="privateplaygroup__button">
            <button
              className="birthday-party__cta-button"
              onClick={() => {
                window.location.href =
                  "https://www.wellnessliving.com/rs/appointment-new/step_by_step_club?dtu_redirect=2025-07-08+05%3A17%3A55&id_class_tab=3&id_mode=1&k_class_tab=66372&s_id=Q1sjIK";
              }}
            >
              Connect With Your Event Planner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatePlayGroup;
