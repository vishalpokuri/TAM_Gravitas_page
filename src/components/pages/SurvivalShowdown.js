import React from 'react';
import NavbarContainer from '../components/NavbarContainer'; 
import NavItem from '../components/NavItem';
import RegisterButton from '../components/RegisterButton';
import TeamCard from '../components/TeamCard'; 
import Button from '../components/Button'; 
import bg from '../assets/someImage.jpg'; 

function SurvivalShowdown() {
  return (
    <>
      <div className="w-screen h-30 bg-black flex justify-center py-10">
        <NavbarContainer>
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#events">Events</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <RegisterButton href="#register">Register</RegisterButton>
        </NavbarContainer>
      </div>
      
      <div
        className="w-screen h-screen bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center text-white">
          <h1 className="text-6xl leading-tight">SURVIVAL SHOWDOWN</h1>
          
          <TeamCard>CREATE TEAM <br />  →</TeamCard>
          <TeamCard>JOIN TEAM <br />  →</TeamCard>

          <Button what="Back to Home" />
        </div>
      </div>
    </>
  );
}

export default SurvivalShowdown;
