import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";

const frontEndSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
];
const backEndSkills = [
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "GraphQL",
  "REST APIs",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-2xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl text-center  p-8 border-white/10 border hover:translate-y-1 transition-all ">
            <p className="text-grey-300 mb-6">
              Pacatech is a web development company focused on building fast,
              responsive, and modern websites. We create clean, functional
              solutions tailored to your goals whether it’s a simple site or a
              complex web application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,220,0.5)] "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,220,0.5)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📚 Education</h3>
              <ul className="list-disc list-inside text-grey-300 space-y-2 ">
                <li>
                  <strong>Web Dev Certification</strong> - Udemy Web Development
                  Course 2025
                </li>

                <li>
                  Relevant Coursework:Data Structure, Web Development, Computer
                  repairs and maintenance...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience </h3>
              <div className="space-4 text-grey-100">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Computer Repairs Technician @ Happiness Computers
                    Abuja(2019- 2025)
                  </h4>
                  <p>
                    I fix computers, handle both hardware and software issues,
                    and make sure everything runs smoothly for my clients. I
                    also help them with any tech problems they have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default About;
