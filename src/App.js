// import "./App.scss";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import DanceParty from "./components/DanceParty/DanceParty";
// import FacePaint from "./components/FacePaint/FacePaint";
// import MusicalBabies from "./components/MusicalBabies/MusicalBabies";
// import MommyAndMe from "./components/MommyAndMe/MommyAndMe";
// import GroupFitness from "./components/GroupFitness/GroupFitness";
// import PrivateTraining from "./components/PrivateTraining/PrivateTraining";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/ourstory" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/danceparty" element={<DanceParty />} />
//           <Route path="/facepaint" element={<FacePaint />} />
//           <Route path="/musicalbabies" element={<MusicalBabies />} />
//           <Route path="/mommyandme" element={<MommyAndMe />} />
//           <Route path="/groupfitness" element={<GroupFitness />} />
//           <Route path="/privatetraining" element={<PrivateTraining />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ourstory" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
