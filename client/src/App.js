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
import MommyandMe from "./components/MommyandMe/MommyandMe";
import GroupFitness from "./components/GroupFitness/GroupFitness";
import PrivateTraining from "./components/PrivateTraining/PrivateTraining";
import Events from "./components/Events/Events";
import WaiverForm from "./components/WaiverForm/WaiverForm";
import './Background.css';
import RibbonCutting from "./components/RibbonCutting/RibbonCutting";
import Success from "./components/StatusPage/Success";
import Cancel from "./components/StatusPage/Cancel";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="background">
          {/* Render 50 spans to match the CSS animation */}
          {Array.from({ length: 50 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourstory" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/danceparty" element={<Danceparty />} />
          <Route path="/facepainting" element={<Facepaint />} />
          <Route path="/musicalbabies" element={<MusicalBabies />} />
          <Route path="/mommyandme" element={<MommyandMe />} />
          <Route path="/groupfitness" element={<GroupFitness />} />
          <Route path="/privatetraining" element={<PrivateTraining />} />
          <Route path="/events" element={<Events />} />
          <Route path="/waiver" element={<WaiverForm />} /> 
          <Route path="/ribbon-cutting" element={<RibbonCutting />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/" element={<RibbonCutting />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
