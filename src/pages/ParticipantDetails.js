import React from "react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/Button";
import bg from "../images/bluegrid.png";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import TeamForm from "../components/TeamForm";

function ParticipantDetails() {
  window.scroll(0, 0);
  return (
    <>
      <div className="w-screen h-30 bg-black flex justify-center py-10">
        <Nav />
      </div>

      <div
        className="w-screen h-screen bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center text-white">
          <h1 className="text-6xl leading-tight my-9">PARTICIPANT DETAILS</h1>

          <TeamForm/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ParticipantDetails;
