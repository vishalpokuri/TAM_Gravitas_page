import React from "react";

export function NavbarContainer({ children }) {
  return (
    <nav className="w-1/2 hidden md:flex justify-around items-center bg-black p-4 rounded-3xl shadow-lg shadow-blue-900/70 h-14 ">
      {children}
    </nav>
  );
}

export function NavItem({ href, children }) {
  return (
    <a
      href={href}
      className="text-white no-underline text-lg p-2.5 rounded-xl transition-colors duration-300 ease-in-out hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export function RegisterButton({ href, children }) {
  return (
    <a
      href={href}
      className="m-2 bg-[#3665A0] text-white no-underline text-lg p-2.5 rounded-xl transition-colors duration-300 ease-in-out hover:bg-[#3665B5] "
    >
      {children}
    </a>
  );
}
