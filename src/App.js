import "./App.css";
import bg from "./images/bluegrid.png";
import { Button } from "./components/Button";
import data_alchemy from "./images/data_alchemy.png";
import survival from "./images/survival.png";
import codecortex from "./images/codecortex.png";
import { EventCard } from "./components/Card";
function App() {
  return (
    <>
      <div className="w-screen h-20 bg-black"></div>
      <div
        className="w-screen h-screen bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center text-white pt-32 ">
          <h1 className="text-6xl leading-tight">TAM-VIT</h1>
          <p className="font-thin text-5xl leading-tight">welcomes you to</p>
          <h2 className="text-7xl leading-tight">graVITas'24</h2>

          <Button what="Discover events" />
        </div>
      </div>
      <div className="w-screen h-60 bg-black flex flex-col items-center text-white">
        <h2 className="text-6xl leading-tight">SPONSOR BROs</h2>
      </div>
      <div
        className="w-screen h-screen bg-black bg-cover bg-center flex flex-row items-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-6xl leading-tight pt-12 mb-12">Events</h2>
        <EventCard
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
          image={survival}
          alt="Survival Showdown"
          title="Survival Showdown"
          desc=" An escape room where you have to complete a series of exciting tasks. Clock will be
ticking, pressure will be high,
go through all the levels and
escape the room."
        />
      </div>
    </>
  );
}

export default App;
