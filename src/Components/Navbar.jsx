import React from "react";
import { FaTerminal } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import useScrollSpy from "../hooks/useScrollSpy";

const Navbar = () => {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 10);
  return (
    <nav className="bg-[#111827]/50 backdrop-blur-2xl sticky top-0 border-b border-green-700 z-50">
      <div className="navbar max-w-[1280px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a href="#home">
            <div className="flex items-center space-x-2 text-2xl font-mono font-bold">
              <FaTerminal className="text-green-400" size={20} />
              <span className="text-white">borhan</span>
              <span className="text-green-400 animate-pulse">_</span>
            </div>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-8 px-1">
            <li className="">
              <a
                href="#home"
                className={`flex transition-all duration-300 ${
                  activeSection === "home"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                <span className="text-green-400">&lt;</span>
                <p>Home</p>
                <span className="text-green-400">/&gt;</span>
              </a>
            </li>
            <li className="">
              <a
                href="#about"
                className={`flex transition-all duration-300 ${
                  activeSection === "about"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                <span className="text-green-400">&lt;</span>
                <p>About</p>
                <span className="text-green-400">/&gt;</span>
              </a>
            </li>
            <li className="">
              <a
                href="#skills"
                className={`flex transition-all duration-300 ${
                  activeSection === "skills"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                <span className="text-green-400">&lt;</span>
                <p>Skills</p>
                <span className="text-green-400">/&gt;</span>
              </a>
            </li>
            <li className="">
              <a
                href="#projects"
                className={`flex transition-all duration-300 ${
                  activeSection === "projects"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                <span className="text-green-400">&lt;</span>
                <p>Projects</p>
                <span className="text-green-400">/&gt;</span>
              </a>
            </li>
            <li className="">
              <a
                href="#contact"
                className={`flex transition-all duration-300 ${
                  activeSection === "contact"
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                <span className="text-green-400">&lt;</span>
                <p>Contact</p>
                <span className="text-green-400">/&gt;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
