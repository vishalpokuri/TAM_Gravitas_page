import React from "react";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import TeamForm from "../components/TeamForm";

function ParticipantDetails() {
  window.scroll(0, 0);
  return (
    <>
      <Nav />

      <div className="w-screen h-screen bg-black bg-cover bg-center">
        <div className="flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-6xl leading-tight mt-14 text-center">
            PARTICIPANT DETAILS
          </h1>
          <TeamForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ParticipantDetails;
