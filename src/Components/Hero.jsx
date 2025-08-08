import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import {
  FiChevronDown,
  FiExternalLink,
  FiTerminal,
  FiCode,
} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-[#111827]"
    >
      {/* Animated code blocks background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-lg blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-lg blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-lg blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-4 md:right-20 opacity-15 font-mono text-green-400 animate-float hidden sm:block">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-green-400/20">
            <div className="text-xs md:text-sm">const developer = &#123;</div>
            <div className="ml-4 text-xs md:text-sm">name: 'Borhan',</div>
            <div className="ml-4 text-xs md:text-sm">
              skills: ['React', 'Node.js']
            </div>
            <div>&#125;;</div>
          </div>
        </div>
        <div className="absolute bottom-32 left-4 md:left-20 opacity-15 font-mono text-blue-400 animate-float delay-1000 hidden sm:block">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-400/20">
            <div className="text-xs md:text-sm">
              function buildAmazingApps() &#123;
            </div>
            <div className="ml-4 text-xs md:text-sm">
              return 'Magic happens here!';
            </div>
            <div>&#125;</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-900 p-2 rounded-full border-2 border-green-400/30">
                <img
                  src="https://img.3s-soft.com/uploads/Borhan_Siddque.png"
                  alt="Borhan Siddque - MERN Stack Developer"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-gray-800"
                />
              </div>
              {/* Code decoration around image */}
              <div className="absolute -top-6 -right-6 bg-gray-800/90 border border-green-400/30 rounded px-2 py-1 font-mono text-xs text-green-400 block">
                &lt;img /&gt;
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gray-800/90 border border-blue-400/30 rounded px-2 py-1 font-mono text-xs text-blue-400 block">
                developer.jpg
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-mono px-4">
              <span className="text-white">&lt;</span>
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Borhan Siddque
              </span>
              <span className="text-white">/&gt;</span>
            </h1>

            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 h-6 sm:h-8 md:h-10 lg:h-12 font-mono px-4 mb-10 sm:mb-0">
              <span className="text-green-400">const role = "</span>
              <span className="text-blue-400">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "Frontend Specialist",
                    2000,
                    "React.js Expert",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <span className="text-green-400">";</span>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 sm:p-4 md:p-6 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
              <div className="font-mono text-left text-xs sm:text-sm">
                <div className="text-purple-400">
                  // Passionate Frontend Developer
                </div>
                <div className="text-gray-400">
                  /* Building responsive web applications with */
                </div>
                <div className="text-green-400">
                  <span className="text-blue-400">technologies:</span> [
                  <span className="text-yellow-400">'React.js'</span>,
                  <span className="text-yellow-400">'JavaScript'</span>,
                  <span className="text-yellow-400">'Node.js'</span>
                  ];
                </div>
                <div className="text-gray-400">
                  /* Focused on creating impactful user experiences */
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a
                href="https://github.com/borhansiddque"
                target="_blank"
                className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-green-800 via-green-600 to-green-800 rounded-lg font-mono font-semibold hover:from-green-700  hover:to-green-700 transform hover:scale-105 shadow-lg border border-green-400/30 text-sm md:text-base cursor-pointer transition-all duration-300"
              >
                <FiCode className="inline mr-2" size={16} />
                View My Code
              </a>
              <a href="/resume_of_borhan_siddque.pdf" download className="w-full sm:w-auto px-6 md:px-8 py-3 border border-green-400 rounded-lg font-mono font-semibold hover:bg-green-400/10 hover:text-green-400 transition-all duration-300 text-sm md:text-base cursor-pointer">
                <FiTerminal className="inline mr-2" size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-12 mb-16 md:mb-20">
          <div className="flex justify-center space-x-4 md:space-x-6">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/borhansiddque",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/borhan-siddque/",
                label: "LinkedIn",
              },
              {
                icon: FaFacebook,
                href: "https://www.facebook.com/borhan.siddque.19/",
                label: "Facebook",
              },
              // { icon: FiExternalLink, href: "#", label: "Portfolio" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 sm:p-3 md:p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-green-400/50 hover:bg-green-400/10 hover:scale-110 transition-all duration-300 group shadow-lg"
                aria-label={label}
              >
                <Icon
                  size={18}
                  className="text-gray-400 group-hover:text-green-400 transition-colors duration-300 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <div className="flex flex-col items-center font-mono text-green-400 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all duration-300 group cursor-pointer">
          <span className="text-xs mb-1 hidden sm:block group-hover:text-blue-400 transition-colors">
            scroll_down()
          </span>
          <FiChevronDown
            size={24}
            className="group-hover:text-blue-400 transition-colors duration-300 md:w-7 md:h-7"
          />
        </div>
      </button>
    </section>
  );
};

export default Hero;
