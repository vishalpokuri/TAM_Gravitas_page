import "./App.css";
import bg from "./images/bluegrid.png";

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
          <button className="bg-gradient-to-r from-start to-end font-extralight p-2 rounded-md w-36 mt-28">
            Discover events
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
