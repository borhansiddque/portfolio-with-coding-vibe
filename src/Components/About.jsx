import React from 'react';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiTerminal,
  FiCodepen
} from 'react-icons/fi';
import { PiBracketsCurlyLight } from "react-icons/pi";

const About = () => {
  const stats = [
    { icon: FiCode, label: 'Frontend Projects', value: '10+', color: 'text-green-400' },
    { icon: FiDatabase, label: 'Full-Stack Apps', value: '3+', color: 'text-blue-400' },
    { icon: FiGlobe, label: 'Technologies', value: '12+', color: 'text-purple-400' }
  ];

  return (
    <section id="about" className="py-20 bg-[#151D2C] relative">
      {/* Code comment decoration */}
      <div className="absolute top-10 left-4 md:left-10 font-mono text-green-400/20 text-xs md:text-sm hidden sm:block">
        /* About Section */
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 mb-2">&lt;section id="about"&gt;</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
            About <span className="text-green-400">&lt;/</span><span className="text-blue-400">Me</span><span className="text-green-400">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
          <div className="font-mono text-green-400 mt-2">&lt;/section&gt;</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 ">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/10 rounded-lg blur-xl hidden md:block"></div>
              <div className="relative bg-gray-900/80 p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl border border-green-400/20 font-mono">
                <div className="flex items-center space-x-2 mb-4">
                  <FiTerminal className="text-green-400" size={16} />
                  <span className="text-green-400 text-xs sm:text-sm md:text-base">profile.js</span>
                </div>
                
                <div className="text-xs sm:text-sm md:text-base space-y-1 md:space-y-2 overflow-x-auto">
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</div>
                  <div className="ml-1 sm:ml-2 md:ml-4"><span className="text-green-400">name</span>: <span className="text-yellow-400">'Borhan Siddque'</span>,</div>
                  <div className="ml-1 sm:ml-2 md:ml-4"><span className="text-green-400">role</span>: <span className="text-yellow-400">'MERN Stack Developer'</span>,</div>
                  <div className="ml-1 sm:ml-2 md:ml-4"><span className="text-green-400">experience</span>: <span className="text-yellow-400">'Frontend Specialist'</span>,</div>
                  <div className="ml-1 sm:ml-2 md:ml-4"><span className="text-green-400">passion</span>: <span className="text-yellow-400">'Building Amazing UIs'</span>,</div>
                  <div className="ml-1 sm:ml-2 md:ml-4">
                    <span className="text-green-400">skills</span>: [
                    <div className="ml-1 sm:ml-2 md:ml-4">
                      <span className="text-yellow-400">'React.js'</span>, <span className="text-yellow-400">'JavaScript'</span>,
                    </div>
                    <div className="ml-1 sm:ml-2 md:ml-4">
                      <span className="text-yellow-400">'Node.js'</span>, <span className="text-yellow-400">'MongoDB'</span>, <span className="text-yellow-400">'Express JS'</span>,
                      
                    </div>
                    <div className="ml-1 sm:ml-2">],</div>
                  </div>
                  <div className="ml-1 sm:ml-2 md:ml-4"><span className="text-green-400">learning</span>: <span className="text-yellow-400">'Always'</span></div>
                  <div>&#125;;</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map(({ icon: Icon, label, value, color }, index) => (
                <div key={label} className="text-center p-4 md:p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-green-400/30 transition-all duration-300 group">
                  <div className="relative">
                    <PiBracketsCurlyLight className="absolute top-0 left-0 text-green-400/30 hidden md:block" size={32} />
                    <Icon size={24} className={`${color} mx-auto mb-3 relative z-10 md:w-8 md:h-8`} />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-1 font-mono">{value}</div>
                  <div className="text-xs md:text-sm text-gray-400 font-mono">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/80 p-4 md:p-6 rounded-2xl border border-blue-400/20">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-blue-400 font-mono ml-2 text-sm md:text-base">contact.json</span>
              </div>
              
              <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                    <FiMapPin size={16} className="text-green-400 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-400">"location":</div>
                    <div className="text-white break-words">"Chattogram, Bangladesh"</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <FiPhone size={16} className="text-blue-400 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-400">"phone":</div>
                    <div className="text-white break-words">"+880 1627323206"</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <FiMail size={16} className="text-purple-400 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gray-400">"email":</div>
                    <div className="text-white break-all">"borhansiddque19@gmail.com"</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-4 md:p-6 rounded-2xl border border-green-400/20">
              <div className="font-mono">
                <div className="text-green-400 mb-3 md:mb-4 text-sm md:text-base">// Languages</div>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bangla:</span>
                    <span className="text-green-400">"Native"</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">English:</span>
                    <span className="text-blue-400">"Compatible"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;