import React from "react";

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Scrolling to section: ${sectionId}`);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with ID "${sectionId}" not found in the DOM`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg shadow-lg py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Sreya Vijayan K
        </h1>
        <ul className="hidden md:flex space-x-8">
          {["home", "about", "projectsAndSkills", "contact"].map((section) => (
            <li key={section} className="relative group">
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(section);
                }}
                className="capitalize font-medium text-gray-200 hover:text-pink-500 transition"
              >
                {section === "projectsAndSkills" ? "Projects & Skills" : section}
              </a>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;