import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import "./Main.scss";
import Carousel from "../ImageCarousel/ImageCarousel";
import Services from "../Services/Services";
import EventPlan from "../EventPlan/EventPlan";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const checkInView = debounce(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;

        setInView(isVisible);
      }
    }, 100);

    window.addEventListener("scroll", checkInView);
    checkInView();

    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return [ref, inView];
};

const springIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 100 },
  },
};

const ScrollFade = ({ children }) => {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      variants={springIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="main__carousel">
        <Carousel />
      </div>
      <div className="main">
        <div className="main__container">
          <div className="main__section">
            <ScrollFade key="services">
              <Services />
            </ScrollFade>
            <ScrollFade key="eventplan">
              <EventPlan />
            </ScrollFade>
            <ScrollFade key="reviews">
              <Reviews />
            </ScrollFade>
            <ScrollFade key="contact">
              <div id="contact-section">
                <Contact />
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
