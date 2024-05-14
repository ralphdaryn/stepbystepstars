import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Danceparty from "./components/Danceparty/Danceparty";
import Facepaint from "./components/Facepaint/Facepaint";
import MusicalBabies from "./components/MusicalBabies/Musicalbabies";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourstory" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/danceparty" element={<Danceparty />} />
          <Route path="/facepainting" element={<Facepaint />} />
          <Route path="/musicalbabies" element={<MusicalBabies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
