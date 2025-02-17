import "./BirthdayParties.scss";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";
import birthdayPackage from "../../assets/images/birthdaypackage.jpeg";

const BirthdayParties = () => {
  return (
    <div className="birthday-party">
      <div className="birthday-party__header">
        <BackButton />
        <h2 className="birthday-party__title">Birthday Parties</h2>
      </div>
      <div className="birthday-party__container">
        <img
          className="birthday-party__image"
          alt="bday party"
          src={birthdayPackage}
        />
        <div className="birthday-party__button">
          <EventsButton />
        </div>
        <div className="birthday-party__subtitle-container">
          <p className="birthday-party__subtitle">
            Welcome to S TOWN, where kids can explore, play and learn through
            interactive play! S TOWN - An indoor kids' village designed to
            foster learning through pretend play. The space will include a
            variety of interactive, miniature environments like a grocery store,
            salon, veterinary office, and nostalgic 90s café, each encouraging
            role-playing and imaginative exploration.
          </p>
          <p className="birthday-party__subtitle">
            The design is crafted to allow your child to take the lead while
            you, as parents are meant to support and encourage their
            development. S Town promotes key developmental skill such as
            problem-solving, language development, social interaction, and
            cognitive flexibility. By engaging in these realistic, hands-on
            activities, children will not only have fun but also strengthen
            their understanding of real-world tasks and scenarios, helping them
            build social-emotional skills and boosting their creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayParties;
