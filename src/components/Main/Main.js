import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Main.scss";
import Carousel from "../ImageCarousel/ImageCarousel";
import Services from "../Services/Services";
// import About from "../About/About";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const checkInView = () => {
      const rect = ref.current.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      const isVisible = elemTop < window.innerHeight && elemBottom >= 0;

      setInView(isVisible);
    };

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
  return (
    <div>
      <div className="main__carousel">
        <Carousel />
      </div>
      <div className="main">
        <div className="main__container">
          {/* <div>
          <Carousel />
        </div> */}
          <div className="main__section">
            <ScrollFade key="services">
              <Services />
            </ScrollFade>
            {/* <ScrollFade key="about">
            <About />
          </ScrollFade> */}
            <ScrollFade key="reviews">
              <Reviews />
            </ScrollFade>
            <ScrollFade key="contact">
              <Contact />
            </ScrollFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
