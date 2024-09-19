import { NavItem, NavbarContainer } from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function Nav({
  scrollToAbout,
  scrollToEvents,
  scrollToContact,
}) {
  const navigate = useNavigate();
  function handleHomeNavigate() {
    navigate("/");
  }

  function handleAboutNavigate() {
    navigate("/", { state: { scrollTo: "about" } });
  }

  function handleEventsNavigate() {
    navigate("/", { state: { scrollTo: "events" } });
  }

  function handleContactNavigate() {
    navigate("/", { state: { scrollTo: "contact" } });
  }

  

  return (
    <div className="w-screen h-30 bg-black flex justify-center pt-10">
      <NavbarContainer>
        <NavItem onClick={handleHomeNavigate}>Home</NavItem>
        <NavItem onClick={handleEventsNavigate}>Events</NavItem>
        <NavItem onClick={handleAboutNavigate}>About</NavItem>
        <NavItem onClick={handleContactNavigate}>Contact</NavItem>
      </NavbarContainer>
    </div>
  );
}
