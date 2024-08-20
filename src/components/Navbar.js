import React from "react";

export function NavbarContainer({ children }) {
  return (
    <nav className="w-1/2 flex justify-around items-center bg-black p-2 rounded-3xl shadow-lg shadow-blue-900/70 h-12">
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
      className="bg-blue-700 text-white no-underline text-lg p-2.5 rounded-xl transition-colors duration-300 ease-in-out hover:bg-blue-900"
    >
      {children}
    </a>
  );
}
