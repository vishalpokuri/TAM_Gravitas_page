import "./App.css";

import SurvivalShowdown from "./pages/SurvivalShowdown";
import CodeCortex from "./pages/CodeCortex";
import ParticipantDetails from "./pages/ParticipantDetails";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      {/* Uncomment to view survival shutdown and Code Cortex pages. */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/registration-SurvivalShowdown"
            element={<SurvivalShowdown />}
          />
          <Route path="/registration-CodeCortex" element={<CodeCortex />} />
          <Route path="/registration-ParticipantDetails" element={<ParticipantDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
