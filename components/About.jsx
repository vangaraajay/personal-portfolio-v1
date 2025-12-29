import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.18 }
    );
    obs.observe(el);

    // If the section is already visible when the splash unmounts,
    // IntersectionObserver may not fire. Run a small delayed check
    // to ensure `inView` is set when arriving from the splash.
    const checkNow = () => {
      const r = el.getBoundingClientRect()
      const isVisible = r.top < window.innerHeight && r.bottom > 0
      if (isVisible) setInView(true)
    }
    const t = setTimeout(checkNow, 50)

    return () => {
      clearTimeout(t)
      obs.disconnect()
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[calc(100vh-80px)] flex flex-col items-center bg-gray-50 px-6 pt-27 pb-20">
      {/* Title */}
      <h1 className={`text-3xl md:text-5xl font-bold text-center text-black mb-8 font-nunito max-w-5xl mx-auto navbar-font ${inView ? 'slide-left delay-100' : 'opacity-0'}`}>
        Hi! I’m Ajay Vangara, a student developer at the University of Florida.
      </h1>

      {/* Description */}
      <div className={`max-w-3xl text-center text-gray-700 space-y-4 text-lg md:text-xl font-nunito mb-8 ${inView ? 'slide-right delay-200' : 'opacity-0'}`}>
        <p>
          I'm an aspiring software engineer who's built a variety of projects including full-stack web apps, mobile apps,
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
      <div className="mt-4 flex justify-center gap-6 flex-wrap">
        {/* Skills Button */}
        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault(); // stop default jump
            const el = document.getElementById("skills");
            if (!el) return;
            const yOffset = -80; // offset for navbar
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
          className={`bg-white text-black border border-black rounded-lg px-6 py-4 text-center transition-transform transition-shadow duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 max-w-xs ${inView ? 'pop-in delay-300' : 'opacity-0'}`}
        >
          <div className="font-semibold text-lg md:text-xl">Skills</div>
          <div className="text-sm md:text-base mt-1">Click here to see my skills</div>
        </a>

        {/* Projects Button */}
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault(); // stop default jump
            const el = document.getElementById("projects");
            if (!el) return;
            const yOffset = -80; // offset for navbar
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
          className={`bg-white text-black border border-black rounded-lg px-6 py-4 text-center transition-transform transition-shadow duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 max-w-xs ${inView ? 'pop-in delay-350' : 'opacity-0'}`}
        >
          <div className="font-semibold text-lg md:text-xl">Projects</div>
          <div className="text-sm md:text-base mt-1">Click here to view my projects</div>
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault(); // stop default jump
            const el = document.getElementById("contact");
            if (!el) return;
            const yOffset = -80; // offset for navbar
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
          className={`bg-white text-black border border-black rounded-lg px-6 py-4 text-center transition-transform transition-shadow duration-200 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 max-w-xs ${inView ? 'pop-in delay-400' : 'opacity-0'}`}
        >
          <div className="font-semibold text-lg md:text-xl">Contact</div>
          <div className="text-sm md:text-base mt-1">Click here to get in touch</div>
        </a>
      </div>
    </section>
  );
};

export default About;
