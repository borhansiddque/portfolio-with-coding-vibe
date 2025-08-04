import React from "react";
import {
  FiExternalLink,
  FiGithub,
  FiDatabase,
  FiGlobe,
  FiShield,
  FiCode,
  FiTerminal,
} from "react-icons/fi";

import projects from '../data/projects.json'

const Projects = () => {


  const getIcon = (category) => {
    switch (category) {
      case "Full-Stack":
        return FiDatabase;
      case "Frontend":
        return FiGlobe;
      default:
        return FiShield;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/30 relative">
      {/* Code decoration */}
      <div className="absolute top-10 left-4 md:left-10 font-mono text-purple-400/20 text-xs md:text-sm hidden sm:block">
        /* Projects Portfolio */
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 mb-2">
            projects.map((project) =&gt; &#123;
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
            My <span className="text-green-400">&lt;</span>
            <span className="text-blue-400">Projects</span>
            <span className="text-green-400">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 md:p-4 max-w-xs sm:max-w-lg mx-auto font-mono text-xs md:text-sm">
            <div className="text-purple-400">
              // Showcase of recent development work
            </div>
            <div className="text-green-400 break-words">
              return{" "}
              <span className="text-yellow-400">
                &lt;ProjectCard key={"{project.id}"} /&gt;
              </span>
              ;
            </div>
          </div>
          <div className="font-mono text-green-400 mt-2">&#125;)</div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const IconComponent = getIcon(project.category);
            return (
              <div
                key={project.title}
                className="bg-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent group-hover:from-gray-900/80"></div>

                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 md:space-x-2 bg-gray-900/80 px-2 md:px-3 py-1 rounded-full border border-gray-600/50">
                        <IconComponent
                          size={12}
                          className="text-blue-400 md:w-4 md:h-4"
                        />
                        <span className="text-xs text-white font-mono hidden sm:inline">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <FiTerminal
                        size={14}
                        className="text-green-400 md:w-4 md:h-4"
                      />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-green-400 transition-colors font-mono">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-xs sm:text-sm font-mono text-blue-400 mb-2">
                        // Key Features:
                      </div>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs sm:text-sm text-gray-400 flex items-start font-mono"
                          >
                            <span className="text-green-400 mr-2">✓</span>
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="text-xs sm:text-sm font-mono text-purple-400 mb-2">
                        // Tech Stack:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 md:px-3 py-1 bg-green-500/10 text-green-400 text-xs sm:text-sm rounded-full border border-green-400/20 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 p-5">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center space-x-2 px-3 md:px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white text-xs md:text-sm font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 font-mono border border-green-400/30"
                  >
                    <FiExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center px-3 md:px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:border-green-400 hover:text-green-400 transition-all duration-300 sm:w-auto w-full"
                  >
                    <FiGithub size={14} />
                    <span className="ml-2 sm:hidden text-xs">GitHub</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gray-900/80 border border-green-400/30 rounded-lg p-3 md:p-4 font-mono mb-4 max-w-xs sm:max-w-md mx-auto">
            <div className="text-green-400">
              // More projects available on GitHub
            </div>
            <div className="text-gray-300">
              <span className="text-purple-400">if</span> (
              <span className="text-blue-400">interested</span>) &#123;
            </div>
            <div className="ml-2 md:ml-4 text-gray-300 break-words">
              <span className="text-blue-400">window</span>.
              <span className="text-green-400">open</span>(
              <span className="text-yellow-400">'github.com/borhan'</span>);
            </div>
            <div className="text-gray-300">&#125;</div>
          </div>
          <br />
          <button className="px-6 md:px-8 py-3 border border-green-400 text-green-400 rounded-lg font-medium hover:bg-green-400/10 hover:text-green-300 transition-all duration-300 font-mono text-sm md:text-base cursor-pointer">
            <FiCode size={14} className="inline mr-2 md:w-4 md:h-4" />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
