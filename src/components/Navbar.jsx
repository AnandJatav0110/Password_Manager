import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500/30 via-teal-400/20 to-green-400/30 animate-gradient-x backdrop-blur-xl border-b border-white/20 text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="mycontainer flex justify-between items-center py-5 h-14">
        <div className="logo font-bold gap-10 text-2xl">
          <span className="text-blue-400"> /&lt;</span>
          <span className="text-white">Pass</span>
          <span className="text-green-400">OP/&gt;</span>
        </div>

        <a
          href="https://github.com/AnandJatav0110"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 bg-gradient-to-r from-blue-500/60 to-green-400/60 hover:from-blue-600 hover:to-green-500 text-white rounded-full px-3 py-1 md:px-4 md:py-2 items-center transition duration-300 backdrop-blur-lg border border-white/30"
        >
          <img
            className="invert w-5 h-5 md:w-6 md:h-6"
            src="/icons/pngwing.com.png"
            alt="GitHub logo"
          />
          <span className="font-bold hidden md:inline">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
