import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-50 px-6 pt-32 pb-20">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-center text-black mb-6 font-nunito">
        Who am I?
      </h1>

      {/* Description */}
      <div className="max-w-3xl text-center text-gray-700 space-y-4 text-lg md:text-xl font-nunito">
        <p>
          Hi! I’m Ajay Vangara, a student developer at the University of Florida.
          I've built a variety of projects including full-stack web apps, mobile apps, 
          and cloud-based systems, experimenting with AI and infrastructure along the way.
          I love creating technology that can have a strong impact on society, 
          both with the use of novel AI and without!
        </p>
        <p>
          Feel free to explore my skills and projects below, 
          and don't hesitate to reach out if you'd like to connect!
        </p>
      </div>

      {/* Links */}
      <div className="mt-12 flex justify-center gap-6 flex-wrap">
        {/* Skills Button */}
        <a
          href="#skills"
          className="bg-white text-black border border-black rounded-lg px-6 py-4 text-center transition-transform transition-shadow duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 max-w-xs"
        >
          <div className="font-semibold text-lg md:text-xl">Skills</div>
          <div className="text-sm md:text-base mt-1">Click here to see my skills</div>
        </a>

        {/* Projects Button */}
        <a
          href="#projects"
          className="bg-white text-black border border-black rounded-lg px-6 py-4 text-center transition-transform transition-shadow duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 max-w-xs"
        >
          <div className="font-semibold text-lg md:text-xl">Projects</div>
          <div className="text-sm md:text-base mt-1">Click here to view my projects</div>
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-white text-black border border-black rounded-lg px-6 py-4 text-center transition-transform transition-shadow duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 max-w-xs"
        >
          <div className="font-semibold text-lg md:text-xl">Contact</div>
          <div className="text-sm md:text-base mt-1">Click here to get in touch</div>
        </a>
      </div>
    </section>
  );
};

export default About;
