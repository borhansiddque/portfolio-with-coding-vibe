import React from "react";

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-bl from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center z-50 animate-fadeIn">
      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-4 md:right-20 opacity-20 font-mono text-green-400 animate-float hidden sm:block">
          <div className="bg-gray-800/70 p-4 rounded-lg border border-green-400/90">
            <div className="text-xs md:text-sm">const developer = &#123;</div>
            <div className="ml-4 text-xs md:text-sm">name: 'Borhan Siddque',</div>
            <div className="ml-4 text-xs md:text-sm">
              skills: ['React', 'Next.js']
            </div>
            <div>&#125;;</div>
          </div>
        </div>
        <div className="absolute bottom-32 left-4 md:left-20 opacity-20 font-mono text-blue-400 animate-float delay-1000 hidden sm:block">
          <div className="bg-gray-800/70 p-4 rounded-lg border border-blue-400/90">
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
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-green-400 animate-spin shadow-[0_0_20px_#22c55e]"></div>

        {/* <div className="text-xl sm:text-2xl flex gap-1 items-end font-semibold tracking-wide">
          <span className="text-purple-400 animate-pulse">Loading</span>
          <span className="text-blue-400 animate-pulse">Portfolio</span>
          <span className="loading loading-dots loading-sm text-green-400"></span>
        </div> */}
      </div>
    </div>
  );
};

export default Preloader;
