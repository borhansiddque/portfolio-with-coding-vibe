import React from 'react';
import { IoMdCode } from "react-icons/io";
import { FiServer } from "react-icons/fi";
import { HiOutlineWrench } from "react-icons/hi2";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: IoMdCode,
      color: 'from-green-500 to-blue-500',
      borderColor: 'border-green-400/30',
      skills: [
        { name: 'HTML5', level: 95, syntax: '<html>' },
        { name: 'CSS3', level: 90, syntax: '.style {}' },
        { name: 'JavaScript (ES6+)', level: 88, syntax: 'const fn = () => {}' },
        { name: 'React.jsx', level: 85, syntax: '<Component />' },
        { name: 'React Router', level: 80, syntax: '<Route path="/>" />' },
        { name: 'Tailwind CSS', level: 90, syntax: 'className="flex"' },
        { name: 'Bootstrap', level: 85, syntax: 'class="container"' }
      ]
    },
    {
      title: 'Backend',
      icon: FiServer,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-400/30',
      skills: [
        { name: 'Node.js', level: 75, syntax: 'require("express")' },
        { name: 'Express.js', level: 70, syntax: 'app.get("/", ...)' },
        { name: 'MongoDB', level: 75, syntax: 'db.collection.find()' },
        { name: 'Firebase', level: 80, syntax: 'firebase.auth()' },
        { name: 'REST APIs', level: 78, syntax: 'GET /api/users' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: HiOutlineWrench,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-400/30',
      skills: [
        { name: 'Git & GitHub', level: 85, syntax: 'git commit -m' },
        { name: 'Figma', level: 75, syntax: 'design.prototype' },
        { name: 'Canva', level: 80, syntax: 'canvas.create()' },
        { name: 'NPM', level: 85, syntax: 'npm install' },
        { name: 'Vercel', level: 80, syntax: 'vercel deploy' },
        { name: 'Postman', level: 75, syntax: 'POST /api/test' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#111827]">
      {/* Code decoration */}
      <div className="absolute top-10 right-4 md:right-10 font-mono text-blue-400/20 text-xs md:text-sm hidden sm:block ">
        // Skills Array
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 mb-2">&lt;Skills /&gt;</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
            My <span className="text-green-400">&lt;</span><span className="text-blue-400">TechStack</span><span className="text-green-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 md:p-4 max-w-xs sm:max-w-md lg:max-w-lg mx-auto font-mono text-xs md:text-sm">
            <div className="text-purple-400">// Technologies I use to build amazing apps</div>
            <div className="text-green-400 break-words">const <span className="text-blue-400">skills</span> = [<span className="text-yellow-400">'Frontend'</span>, <span className="text-yellow-400">'Backend'</span>, <span className="text-yellow-400">'Tools'</span>];</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className={`bg-gray-900/80 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border ${category.borderColor} hover:border-green-400/50 transition-all duration-300 group`}>
                <div className="text-center mb-8">
                  <div className={`inline-block p-2 sm:p-3 md:p-4 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 mb-4 relative`}>
                    <div className="absolute inset-0 rounded-full border border-gray-600/30"></div>
                    <IconComponent size={20} className="text-white relative z-10 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white font-mono">{category.title}</h3>
                  <div className="text-green-400 font-mono text-xs md:text-sm mt-2">
                    &#123; category: "{category.title.toLowerCase()}" &#125;
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex flex-col">
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors font-mono text-sm md:text-base">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 font-mono mt-1 break-all">
                            {skill.syntax}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs md:text-sm text-gray-400 font-mono">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 border border-gray-600/30">
                        <div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: `${skill.level}%`,
                            animation: 'fillProgress 2s ease-out forwards'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-4 md:p-6 lg:p-8 border border-green-400/20 max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
            <div className="font-mono text-xs md:text-sm mb-4">
              <div className="text-green-400">// Continuous Learning Mode</div>
              <div className="text-gray-300">
                <span className="text-purple-400">while</span> (<span className="text-blue-400">learning</span> === <span className="text-yellow-400">true</span>) &#123;
              </div>
              <div className="ml-2 md:ml-4 text-gray-300">
                <span className="text-blue-400">skills</span>.<span className="text-green-400">push</span>(<span className="text-yellow-400">'new_technology'</span>);
              </div>
              <div className="text-gray-300">&#125;</div>
            </div>
            <p className="text-gray-300 font-mono text-xs md:text-sm">
              Always exploring new technologies and modern development practices.
              Currently diving deeper into advanced React patterns and AI tools.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fillProgress {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
      `}</style>
    </section>
  );
};

export default Skills;