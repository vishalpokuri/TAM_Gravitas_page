import "./App.css";
import bg from "./images/bluegrid.png";
import data_alchemy from "./images/data_alchemy.png";
import survival from "./images/survival.png";
import codecortex from "./images/codecortex.png";
import { EventCard } from "./components/Card";

import { TeamCard } from "./components/TeamCard";
import { Welcome } from "./components/Welcome";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <Welcome />
      <div className="w-screen h-60 bg-black flex flex-col items-center text-white">
        <h2 className="text-6xl leading-tight">SPONSOR BROs</h2>
      </div>
      <div
        className="w-screen h-screen bg-black bg-cover bg-center flex flex-col items-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-6xl leading-tight  mb-12">Events</h2>
        <div className="flex flex-row justify-between">
          <EventCard
            explicit="mt-48"
            image={data_alchemy}
            alt="Data Alchemy"
            title="Data Alchemy 2.0"
            desc=" An AI&ML Workshop to learn from the basics to advanced algorithms,
          master key concepts and make some exciting projects."
          />
          <EventCard
            image={codecortex}
            alt="Code Cortex"
            title="CodeCortex"
            desc="A 56-hour hackathon including all tracks - AI&ML, IoT, Blockchain, Webdev, Appdev, Cybersec and many more. Bring ideas, implement and win."
          />
          <EventCard
            explicit="mt-48"
            imageexplicit="mb-4"
            image={survival}
            alt="Survival Showdown"
            title="Survival Showdown"
            desc=" An escape room where you have to complete a series of exciting tasks. Clock will be
          ticking, pressure will be high,
          go through all the levels and
          escape the room."
          />
        </div>
      </div>

      <div
        className="w-screen h-screen bg-black bg-cover bg-center flex flex-col items-center text-white my-36 "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-6xl leading-tight mt-32">ABOUT</h2>
        <div className="w-4/6 bg-cardbg bg-opacity-70 h-2/4 mt-16 font-extralight text-2xl p-16 text-center ">
          <span className="text-white">
            The AI&ML Club is a dynamic student-led organization dedicated to
            fostering a deep understanding and appreciation for Artificial
            Intelligence and Machine Learning technologies among students at
            Vellore Institute of Technology, Vellore. Established with the
            vision of nurturing a community of learners, innovators, and problem
            solvers, our club serves as a hub for exploring the fascinating
            intersection of AI and ML with various domains such as healthcare,
            finance, education, and more
          </span>
        </div>
      </div>
      <div
        className="w-screen h-screen bg-black bg-cover bg-center flex flex-col items-center text-white my-36 "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-6xl leading-tight mt-12">CONTACT</h2>
        <div className="w-4/6 bg-cardbg bg-opacity-70 h-3/5 mt-16  p-4">
          <div className="flex flex-row">
            {/* This is the top wrapper for send button too */}
            <div className="flex flex-col m-4">
              <div className="flex flex-row justify-around ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent  border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-4 h-10"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent  border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-4 h-10"
                />
              </div>
              <div className="flex flex-row py-6 justify-around">
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent  border-b border-solid border-phcolor  placeholder:text-phcolor font-extralight p-4 h-10 "
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="bg-transparent  border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-4 h-10 "
                />
              </div>
              <textarea
                rows={8}
                cols={60}
                className="bg-transparent mx-32 placeholder:text-phcolor font-extralight p-4"
                placeholder="Message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
