import { useState } from "react";
import "./hamburger.css";
export default function HamburgerMenu({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="background">
        <button
          className={`menu__icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isOpen && (
        <div className="menu">
          {/* You can add your menu content here */}
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="mb-2 last:mb-0 hover:bg-gray-600 rounded-md p-2 cursor-pointer"
                onClick={() => {
                  item.onClick();
                  setIsOpen(!isOpen);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
