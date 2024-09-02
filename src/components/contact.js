import bg from "../images/bluegrid.png";
import { Footer } from "./Footer";
import { AiFillInstagram } from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { LinkItem, LinksContainer } from "../components/MediaLinks";
import { Button } from "../components/Button";
export default function Contact() {
  return (
    <>
      <div className="w-screen h-4 bg-black flex flex-col items-center text-white mt-10">
        <h2 className="text-6xl leading-tight">Contact</h2>
      </div>
      <div
        className="w-screen h-screen bg-black bg-cover bg-center flex flex-col items-center text-white mt-20"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-4/6 bg-cardbg bg-opacity-70 h-2/3 mt-16  p-4 flex flex-col items-center">
          <div className="flex flex-row"></div>
          <div className="flex flex-col m-4">
            <div className="flex flex-row justify-around ">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent  border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-4 h-10"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent  border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-4 h-10"
              />
            </div>
            <div className="flex flex-row py-6 justify-around">
              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent  border-b border-solid border-phcolor  placeholder:text-phcolor font-extralight p-4 h-10 "
              />
              <input
                type="email"
                placeholder="Email ID"
                className="bg-transparent  border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-4 h-10 "
              />
            </div>
            <textarea
              rows={6}
              cols={60}
              className="bg-transparent border-b border-solid border-phcolor mx-32 placeholder:text-phcolor font-extralight mt-4"
              placeholder="Message"
            />
          </div>
          <br />
          <Button what="Send message" />
        </div>
        <div className="flex items-center justify-center min-h-[100px] mt-20">
          <LinksContainer>
            <LinkItem href="https://www.instagram.com/tam.vit_vellore/">
              <AiFillInstagram />
            </LinkItem>
            <LinkItem href="https://medium.com/@tam_vit">
              <FaMedium />
            </LinkItem>
            <LinkItem href="https://www.linkedin.com/company/tam-vit/?originalSubdomain=in">
              <FaLinkedin />
            </LinkItem>
          </LinksContainer>
        </div>
        <Footer />
      </div>
    </>
  );
}
