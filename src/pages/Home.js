import bg from "../images/bluegrid.png";
import { useRef } from "react";
import data_alchemy from "../images/data_alchemy.png";
import survival from "../images/survival.png";
import codecortex from "../images/codecortex.png";
import { EventCard } from "../components/Card";
import Contact from "../components/contact";
import { Welcome } from "../components/Welcome";
import Nav from "../components/Nav";
import About from "../components/About";
export function Home() {
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

  return (
    <>
      <Nav
        scrollToAbout={scrollToAbout}
        scrollToEvents={scrollToEventsBig}
        scrollToContact={scrollToContact}
      />
      <Welcome
        scrollToEventsSmol={scrollToEventsSmol}
        scrollToEventsBig={scrollToEventsBig}
      />
      <div className="w-screen h-60 bg-black flex flex-col items-center text-white">
        <h2 className="text-4xl md:text-6xl leading-tight">SPONSOR BROs</h2>
      </div>

      {/* Large screens: One background div for all cards */}
      <div>
        <div
          id="eventpage"
          className="hidden md:block w-screen min-h-screen bg-black bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container mx-auto px-4 ">
            <h2
              ref={eventsRefbig}
              className="text-6xl leading-tight mb-16 text-white text-center pt-12"
            >
              Events
            </h2>
            <div className="flex flex-row justify-around mx-auto ">
              <EventCard
                image={data_alchemy}
                alt="Data Alchemy"
                title="Data Alchemy 2.0"
                desc="An AI&ML Workshop to learn from the basics to advanced algorithms, master key concepts and make some exciting projects."
                where="DataAlchemy"
              />
              <EventCard
                image={codecortex}
                alt="Code Cortex"
                title="CodeCortex"
                desc="A 56-hour hackathon including all tracks - AI&ML, IoT, Blockchain, Webdev, Appdev, Cybersec, and many more. Bring ideas, implement and win."
                where="CodeCortex"
              />
              <EventCard
                image={survival}
                alt="Survival Showdown"
                title="Survival Showdown"
                where="SurvivalShowdown"
                desc="An escape room where you have to complete a series of exciting tasks. The clock will be ticking, pressure will be high, go through all the levels and escape the room."
              />
            </div>
          </div>
        </div>
      </div>
      {/* Small screens: Separate background div for each card */}
      <div className="md:hidden">
        <h2
          ref={eventsRefsmol}
          className="text-4xl leading-tight mb-12 text-white text-center pt-12 bg-black"
        >
          Events
        </h2>
        <div
          className="w-screen bg-black bg-cover bg-center py-12"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <EventCard
            image={data_alchemy}
            alt="Data Alchemy"
            title="Data Alchemy 2.0"
            desc="An AI&ML Workshop to learn from the basics to advanced algorithms, master key concepts and make some exciting projects."
            where="DataAlchemy"
          />
        </div>
        <div
          className="w-screen bg-black bg-cover bg-center py-12"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <EventCard
            image={codecortex}
            alt="Code Cortex"
            title="CodeCortex"
            desc="A 56-hour hackathon including all tracks - AI&ML, IoT, Blockchain, Webdev, Appdev, Cybersec, and many more. Bring ideas, implement and win."
            where="CodeCortex"
          />
        </div>
        <div
          className="w-screen bg-black bg-cover bg-center py-12"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <EventCard
            image={survival}
            alt="Survival Showdown"
            title="Survival Showdown"
            where="SurvivalShowdown"
            desc="An escape room where you have to complete a series of exciting tasks. The clock will be ticking, pressure will be high, go through all the levels and escape the room."
          />
        </div>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}
