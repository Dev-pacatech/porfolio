import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <div className="fixed top-0 w-full z-40 bg-[rgba(21,26,37,0.61)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-15">
          <a href="/" className="text-2xl font-bold text-purple-200">
            PACA<span className="text-purple-700 font-extrabold">TECH</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-purple-300 font-medium hover:text-slate-400  transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-purple-300 font-medium hover:text-slate-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-purple-300 font-medium hover:text-slate-400 transition-colors"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-purple-300 font-medium hover:text-slate-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
