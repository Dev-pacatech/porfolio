import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,220,0.5)] transition-all">
              <h3 className="text-xl font-bold mb-2">Filmpire</h3>
              <div className="mb-4">
                <img
                  src="https://i.postimg.cc/7LmFwwqg/Screenshot-2025-05-09-204607.png"
                  alt="Filmpire Project"
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <p className="text-gray-400 mb-3">
                Filmpire is a sleek web app for discovering movies, showcasing
                my skills in React, API integration, and responsive design
                through an engaging and user-friendly interface
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "TailwindCSS", "Rest API", "DataBase"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 m-1  text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,220,0.1)] "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center my-4">
                <a
                  href="https://filmpire-eta.vercel.app/"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-4 inline-block"
                  target="_blank"
                >
                  View Project ⇾
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,220,0.5)] transition-all">
              <h3 className="text-xl font-bold mb-2">Todo-App</h3>
              <div className="mb-4">
                <img
                  src="https://i.postimg.cc/fRXf5g6W/Screenshot-2025-05-21-200049.png"
                  alt="Todo-app"
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <p className="text-gray-400 mb-3">
                A simple and responsive To-Do list application built with React
                and Tailwind CSS. It allows users to add, complete, undo, and
                delete tasks with a clean and user-friendly interface.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "TailwindCSS"].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 m-1  text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,220,0.1)] "
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href="https://todo-app-sooty-ten-11.vercel.app/"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-4 inline-block"
                  target="_blank"
                >
                  View Project ⇾
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,220,0.5)] transition-all">
              <h3 className="text-xl font-bold mb-2">Quotes Generator</h3>
              <div className="mb-4">
                <img
                  src="https://i.postimg.cc/1zYNQT1L/Screenshot-2025-05-26-173927.png"
                  alt="quotes-generator"
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <p className="text-gray-400 mb-3">
                A simple and responsive Random Quotes Generator.The app fetches
                and displays random quotes from the Quotable API, allowing users
                to get new inspirational quotes with the click of a button.
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "TailwindCSS", "API", "Framer-motion"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 m-1  text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,220,0.1)] "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div>
                <a
                  href="https://random-quotes-app-delta.vercel.app/"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-4 inline-block"
                  target="_blank"
                >
                  View Project ⇾
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,220,0.5)] transition-all">
              <h3 className="text-xl font-bold mb-2">Note-App</h3>
              <div className="mb-4">
                <img
                  src="https://i.postimg.cc/qRfx6bYY/Screenshot-2025-05-28-120103.png"
                  alt="Filmpire Project"
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <p className="text-gray-400 mb-3">
                A simple and responsive To-Do list application built with React
                and Tailwind CSS. It allows users to add, complete, undo, and
                delete tasks with a clean and user-friendly interface.
              </p>

              <div className="flex flex-wrap gap-2 ">
                {["React", "TailwindCSS", "uuid", "localStorage"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 m-1  text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,220,0.1)] "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div>
                <a
                  href="https://note-app-liard-seven.vercel.app/"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-4 inline-block"
                  target="_blank"
                >
                  View Project ⇾
                </a>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
