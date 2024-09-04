import React from "react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/Button";
import bg from "../images/bluegrid.png";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
function SurvivalShowdown() {
  window.scroll(0, 0);
  return (
    <>
      <Nav />
      <div
        className="w-screen h-screen bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-6xl leading-tight mb-9 mt-16">
            SURVIVAL SHOWDOWN
          </h1>

          <div className="flex gap-20 mb-12">
            <Link to="/registration-ParticipantDetails/1">
              <TeamCard>
                CREATE TEAM <br /> →
              </TeamCard>
            </Link>
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

export default SurvivalShowdown;
