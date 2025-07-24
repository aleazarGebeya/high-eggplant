import React from "react";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 bg-white/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b shadow-md">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-black tracking-tight text-gray-900">Jane Doe</div>
        <span className="ml-3 px-2 py-1 text-xs rounded-lg bg-gradient-to-r from-cyan-400 to-blue-300 text-white font-semibold shadow-lg">Portfolio</span>
      </div>
      <div className="flex gap-8 items-center text-base font-medium">
        <a className="hover:text-cyan-600 transition-colors" href="#work">Work</a>
        <a className="hover:text-cyan-600 transition-colors" href="#about">About</a>
        <a className="hover:text-cyan-600 transition-colors" href="#testimonials">Testimonials</a>
        <a className="hover:text-cyan-600 transition-colors" href="#awards">Awards</a>
        <a className="hover:text-cyan-600 transition-colors" href="#contact">Contact</a>
        <a className="hover:text-cyan-600 px-4 py-2 border border-cyan-400 rounded-lg ml-2 bg-white/70 shadow-sm flex items-center gap-2 transition-colors" href="/resume.pdf" download>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"></path></svg>
          Resume
        </a>
      </div>
    </nav>
  );
}
