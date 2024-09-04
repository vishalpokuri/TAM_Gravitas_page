import "./App.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SurvivalShowdown from "./pages/SurvivalShowdown";
import CodeCortex from "./pages/CodeCortex";
import ParticipantDetails from "./pages/ParticipantDetails";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
function App() {
  const eventsRefbig = useRef(null);
  const eventsRefsmol = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToEventsBig = () => {
    if (eventsRefbig.current) {
      console.log(eventsRefbig.current); // Check if this logs the correct element
      eventsRefbig.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("eventsRef is null");
    }
  };

  const scrollToEventsSmol = () => {
    if (eventsRefsmol.current) {
      console.log(eventsRefsmol.current); // Check if this logs the correct element
      eventsRefsmol.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("eventsRef is null");
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    {
      label: "Events",
      onClick: () => {
        scrollToEventsSmol();
      },
    },
    {
      label: "About",
      onClick: () => {
        scrollToAbout();
      },
    },
    {
      label: "Contact",
      onClick: () => {
        scrollToContact();
      },
    },
  ];
  // Logic end
  return (
    <>
      {/* Uncomment to view survival shutdown and Code Cortex pages. */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                eventsRefbig={eventsRefbig}
                eventsRefsmol={eventsRefsmol}
                aboutRef={aboutRef}
                contactRef={contactRef}
                scrollToEventsBig={scrollToEventsBig}
                scrollToEventsSmol={scrollToEventsSmol}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
          <Route
            path="/registration-SurvivalShowdown"
            element={
              <SurvivalShowdown
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
          <Route
            path="/registration-CodeCortex"
            element={
              <CodeCortex
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
          {/* Code cortex*/}
          <Route
            path="/registration-ParticipantDetails/0"
            element={
              <ParticipantDetails
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
          {/* survival showdown */}
          <Route
            path="/registration-ParticipantDetails/1"
            element={
              <ParticipantDetails
                scrollToEventsBig={scrollToEventsBig}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
                menuItems={menuItems}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
