import "./App.css";
import bg from "./images/bluegrid.png";
function App() {
  return (
    <>
      <div className="w-screen h-10 bg-black"></div>
      <div className="w-screen h-screen ">
        <img src={bg} className="object-fill" alt="bg"></img>
      </div>
    </>
  );
}

export default App;
