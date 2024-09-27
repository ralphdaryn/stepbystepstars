import "./Danceparty.scss";
import danceparty from "../../assets/images/danceparty2.jpg";
import BackButton from "../BackButton/BackButton";
import EventsButton from "../EventsButton/EventsButton";

const Danceparty = () => {
  return (
    <div className="danceparty">
      <div className="danceparty__header">
        <BackButton />
        <h2 className="danceparty__title">Birthday Parties</h2>
      </div>
      <div className="danceparty__container">
        <img className="danceparty__image" alt="dance party" src={danceparty} />
        <div className="danceparty__subtitle-container">
          <p className="danceparty__subtitle">
            Welcome to S TOWN, where kids can explore, play and learn through
            interactive play! S TOWN - An indoor kids' village designed to
            foster learning through pretend play. The space will include a
            variety of interactive, miniature environments like a grocery store,
            salon, veterinary office, and nostalgic 90s café, each encouraging
            role-playing and imaginative exploration.
          </p>
          <p className="danceparty__subtitle">
            The design is crafted to allow your child to take the lead while you, as parents are meant to support and encourage their development. S Town promotes key developmental skill such as problem-solving, language development, social interaction, and cognitive flexibility. By engaging in these realistic, hands-on activities, children will not only have fun but also strengthen their understanding of real-world tasks and scenarios, helping them build social-emotional skills and boosting their creativity.
          </p>
          <div className="danceparty__button">
            <EventsButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Danceparty;
