import React from "react";
import { FiTerminal } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900/80 border-t border-green-400/20 relative z-40">
      {/* Code decoration */}
      <div className="absolute top-4 left-4 font-mono text-green-400/30 text-xs hidden sm:block">
        /* Footer Component */
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xl md:text-2xl font-bold font-mono mb-2">
              <FiTerminal className="text-green-400" size={20} />
              <span className="text-white">Borhan</span>
              <span className="text-green-400 animate-pulse">_</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-gray-400 break-words">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">mission</span> ={" "}
              <span className="text-yellow-400">
                "Building the future, one commit at a time"
              </span>
              ;
            </div>
          </div>

          <div className="text-center text-gray-400 text-xs sm:text-sm font-mono">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-purple-400">//</span>
              <span className="text-yellow-400">const</span>
              {/* <Heart size={12} className="text-red-500 animate-pulse sm:w-4 sm:h-4" /> */}
              <span className="text-purple-400">developer</span>
              {/* <Code size={12} className="text-green-400 sm:w-4 sm:h-4" /> */}
              <span>=</span>
              <span className="text-green-400">"Borhan Siddque"</span>
              <span>;</span>
            </div>
            <div className="text-xs sm:text-sm break-words">
              <span className="text-green-400">console.log(</span>
              <span className="text-yellow-400">
                "© {currentYear} All rights reserved"
              </span>
              <span className="text-green-400">);</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
