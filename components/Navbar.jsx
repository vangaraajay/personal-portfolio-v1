import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50 navbar-font">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            My name is Ajay Vangara;
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
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
              className="text-sm px-3 py-2 rounded transition-transform duration-200 transform hover:bg-white hover:text-black hover:scale-105"
            >
              Skills
            </a>
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
              className="text-sm px-3 py-2 rounded transition-transform duration-200 transform hover:bg-white hover:text-black hover:scale-105"
            >
              Projects
            </a>
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
              className="text-sm px-3 py-2 rounded transition-transform duration-200 transform hover:bg-white hover:text-black hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Push content below navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;


