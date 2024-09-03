import { NavItem, NavbarContainer } from "./Navbar";

export default function Nav() {
  return (
    <div className="w-screen h-30 bg-black flex justify-center pt-10">
      <NavbarContainer>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#events">Events</NavItem>
        <NavItem href="#contact">Contact</NavItem>
        <NavItem href="#register">Register</NavItem>
      </NavbarContainer>
    </div>
  );
}
