import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import {
  HomePage,
  About,
  Contact,
  Projects,
} from "./components/sections/index";

const currentTime = new Date().getFullYear();

function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App bg-gradient-to-r from-slate-950 to-stone-950">
      <div>
        {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      </div>
      <div
        className={` min-h-screen transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0 "
        } text-grey-100 `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HomePage />
        <About />
        <Projects />
        <Contact />

        <div className="flex justify-center items-center h-20">
          <p className="text-purple-300 text-sm">
            © {currentTime} PACATECH. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
