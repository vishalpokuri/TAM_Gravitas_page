import { Button } from "./Button";
import bg from "../images/bluegrid.png";

export function Welcome({ scrollToEvents }) {
  return (
    <div
      className="w-screen h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center text-white pt-32">
        <h1
          id="home"
          className="text-4xl md:text-6xl leading-snug md:leading-tight"
        >
          TAM-VIT
        </h1>
        <p className="text-3xl md:text-5xl font-thin leading-snug md:leading-tight">
          welcomes you to
        </p>
        <h2 className="text-5xl md:text-7xl leading-snug md:leading-tight">
          graVITas'24
        </h2>
        <Button
          className="mt-28"
          what="Discover events"
          onClick={scrollToEvents} // Use the scroll function passed from Home.js
        />
      </div>
    </div>
  );
}
