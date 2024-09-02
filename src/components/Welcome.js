import { Button } from "./Button";
import bg from "../images/bluegrid.png";
export function Welcome() {
  return (
    <div
      className="w-screen h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div id="home" className="flex flex-col items-center text-white pt-32 ">
        <h1 className="text-6xl leading-tight">TAM-VIT</h1>
        <p className="font-thin text-5xl leading-tight">welcomes you to</p>
        <h2 className="text-7xl leading-tight">graVITas'24</h2>
        <Button className="mt-28" what="Discover events" />
      </div>
    </div>
  );
}
