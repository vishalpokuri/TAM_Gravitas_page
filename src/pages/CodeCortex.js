import React from "react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/Button";
import bg from "../images/bluegrid.png";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";

function CodeCortex() {
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
          <h1 className="text-6xl leading-tight my-9">CODE&lt;/&gt;CORTEX</h1>

          <div className="flex gap-20">
            <TeamCard>
              CREATE TEAM <br /> →
            </TeamCard>
            <TeamCard>
              JOIN <br /> TEAM <br /> →
            </TeamCard>
          </div>
          <Button what="Back to Home" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CodeCortex;
