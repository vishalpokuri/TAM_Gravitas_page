import React from 'react';
import { TeamCard } from '../TeamCard';
import { Button } from '../Button';
import bg from "../../images/bluegrid.png";
import { Footer } from '../Footer';
import Nav from '../Nav';

function SurvivalShowdown({children}) {
  return (
    <>
      <div className="w-screen h-30 bg-black flex justify-center py-10">
        <Nav/>
      </div>
      
      <div
        className="w-screen h-screen bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center text-white">
          <h1 className="text-6xl leading-tight my-9">{children}</h1>
          
          <div className="flex gap-20">
          <TeamCard>CREATE TEAM <br />  →</TeamCard>
          <TeamCard>JOIN <br /> TEAM <br />  →</TeamCard>
          </div>
          <Button what="Back to Home" />

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SurvivalShowdown;
