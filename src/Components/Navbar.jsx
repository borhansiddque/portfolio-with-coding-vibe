import React from "react";
import { FaTerminal } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import useScrollSpy from "../hooks/useScrollSpy";

const Navbar = () => {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 100);
  return (
    <nav className="bg-[#111827]/50 backdrop-blur-2xl sticky top-0 border-b border-green-400/20 z-40">
      <div className="navbar max-w-[1280px] mx-auto px-5">
        <div className="navbar-start gap-5 flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <MdMenu size={25} className="text-green-400" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
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
          <a href="#home">
            <div className="flex items-center md:space-x-2 text-2xl font-mono font-bold">
              <FaTerminal
                className="text-green-400 hidden md:inline-block"
                size={20}
              />
              <span className="text-white hidden md:inline-block">borhan</span>
              <span className="text-white inline-block md:hidden">
                Borhan Siddque
              </span>
              <span className="text-green-400 animate-pulse hidden md:inline-block">
                _
              </span>
              <span className="text-green-400 animate-pulse inline-block md:hidden">
                .
              </span>
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
