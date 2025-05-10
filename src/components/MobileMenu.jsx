import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[rgba(21,26,37,0.61)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
          ${
            menuOpen
              ? "h-screen opacity-100 pointer-events-auto"
              : "h-0 opacity-0 pointer-events-none"
          }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-grey-500 text-3xl hover:text-slate-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,254,0.4)] focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-purple-300 hover:text-slate-400  text-2xl font-bold mb-4 transform transition-transform duration-300 
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-purple-300 hover:text-slate-400 text-2xl font-bold mb-4 transform transition-transform duration-300
             ${
               menuOpen
                 ? "opacity-100 translate-y-0"
                 : "opacity-0 translate-y-4"
             }`}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-purple-300 hover:text-slate-400  text-2xl font-bold mb-4 transform transition-transform duration-300 
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
      >
        Project
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-purple-300 hover:text-slate-400  text-2xl font-bold mb-4 transform transition-transform duration-300
             ${
               menuOpen
                 ? "opacity-100 translate-y-0"
                 : "opacity-0 translate-y-4"
             }`}
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
