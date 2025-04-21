import React, { useEffect, useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItem = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleClicked = (id) => {
    setIsSelected(id);
    setIsOpen(false);
  
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsSelected(""); // Reset selected nav item if you want
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[15vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-7  ">
        {/* //LOGO... */}
        <div className="text-lg font-semibold cursor-pointer" onClick={handleLogoClick}>
          <span className="text-blue-600">&lt;</span>
          <span className="text-white">Pritam</span>
          <span className="text-blue-600">/</span>
          <span className="text-white">Maity</span>
          <span className="text-blue-600">&gt;</span>
        </div>

        {/* //Nav Menu */}
        <ul className="hidden md:flex space-x-7 text-gray-400">
          {menuItem.map((item) => (
            <li
              key={item.id}
              className={` cursor-pointer hover:text-blue-700  ${
                isSelected === item.id ? "text-blue-700" : ""
              }`}
            >
              <button
                onClick={() => {
                  handleClicked(item.id);
                  console.log(item.id)
                }}
                className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
                  isSelected === item.id ? "after:w-full text-blue-700" : "after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Pritam-Maity861"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pritam-maity-76602a290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/16BMW9MUnE/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItem.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                    isSelected === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleClicked(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Pritam-Maity861"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pritam-maity-76602a290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <a
            href="https://www.facebook.com/share/16BMW9MUnE/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaFacebook size={24} />
          </a>
            </div>
          </ul>
        </div>
         )}
        
      </div>
      
    </nav>
  );
};

export default Navbar;
