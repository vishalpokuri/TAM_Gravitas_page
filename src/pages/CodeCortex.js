import React from "react";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../components/Button";
import bg from "../images/bluegrid.png";
import { Footer } from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../components/hamburgerMenu";
function CodeCortex({
  scrollToEventsBig,
  scrollToAbout,
  scrollToContact,
  menuItems,
}) {
  const navigate = useNavigate();
  function handleHomeNavigate() {
    navigate("/");
  }
  window.scroll(0, 0);
  return (
    <>
      <div className="hidden md:block">
        <Nav
          scrollToAbout={scrollToAbout}
          scrollToEvents={scrollToEventsBig}
          scrollToContact={scrollToContact}
        />
      </div>
      <div className="md:hidden">
        <HamburgerMenu menuItems={menuItems} />
      </div>
      <div
        className="w-screen h-screen bg-black bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center text-white">
          <h1 className=" mt-36 text-4xl md:text-6xl leading-tight mb-9 md:mt-16 text-center">
            CODE&lt;/&gt;CORTEX
          </h1>

          <div className="flex gap-10 mb-12">
            <Link to="/registration-ParticipantDetails/0">
              <TeamCard>
                CREATE TEAM <br /> →
              </TeamCard>
            </Link>
            <Link to="/join-ParticipantDetails/0">
              <TeamCard>
                JOIN <br /> TEAM <br /> →
              </TeamCard>
            </Link>
          </div>
          <Button what="Back to Home" onClick={handleHomeNavigate} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CodeCortex;
