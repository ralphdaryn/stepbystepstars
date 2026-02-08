import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import BirthdayParties from "./components/BirthdayParties/BirthdayParties";
import PrivatePlayGroup from "./components/PrivatePlayGroup/PrivatePlayGroup";
import SpecialEvents from "./components/SpecialEvents/SpecialEvents";
import MommyandMe from "./components/MommyandMe/MommyandMe";
import GroupFitness from "./components/GroupFitness/GroupFitness";
import PersonalTraining from "./components/PersonalTraining/PersonalTraining";
import Events from "./components/Events/Events";
import WaiverForm from "./components/WaiverForm/WaiverForm";
import WaiverFormKids from "./components/WaiverFormKids/WaiverFormKids";
import Success from "./components/StatusPage/Success";
import Cancel from "./components/StatusPage/Cancel";
import StrollerFitness from "./components/StrollerFitness/StrollerFitness";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./Background.css";
// import Alert from "./components/Alert/Alert";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Alert /> */}
        <Header />

        <div className="background">
          {Array.from({ length: 50 }, (_, i) => (
            <span key={i} />
          ))}
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/birthdayparties" element={<BirthdayParties />} />
          <Route path="/PrivatePlayGroup" element={<PrivatePlayGroup />} />
          <Route path="/specialevents" element={<SpecialEvents />} />
          <Route path="/mommyandme" element={<MommyandMe />} />
          <Route path="/groupfitness" element={<GroupFitness />} />
          <Route path="/personaltraining" element={<PersonalTraining />} />
          <Route path="/strollerfitness" element={<StrollerFitness />} />
          <Route path="/events" element={<Events />} />
          <Route path="/waiver" element={<WaiverForm />} />
          <Route path="/waiverkids" element={<WaiverFormKids />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          {/* ✅ Results Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
