import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent">
              Hi, I'm PACATECH
            </h1>
            <p className="text-lg  max-w-lg mx-auto text-purple-200 mb-8 ">
              I am a passionate web developer who loves learning new
              technologies and applying my knowledge to build meaningful and
              innovative projects. I enjoy tackling challenges and continuously
              improving my skills to create impactful web experiences
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-purple-500 text-white py-3 px-6 font-medium rounded-lg shadow-lg hover:bg-purple-600/50 transition relative duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,254,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-purple-500/50  text-white py-3 px-6 font-medium rounded-lg shadow-lg hover:bg-purple-600/10 transition-all  duration-300 hover:text-purple-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,254,0.4)] hover: bg-purple-500/10 "
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default HomePage;
