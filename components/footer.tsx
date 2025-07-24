import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-cyan-800 via-blue-800 to-cyan-900 text-white flex flex-col items-center gap-2 relative z-40 mt-32">
      <div className="font-bold text-lg">Jane Doe &copy; {new Date().getFullYear()}</div>
      <div className="text-gray-100/70">Creative Portfolio · Designed with Next.js & Tailwind</div>
      <div className="flex gap-4 mt-2">
        <a href="#" className="hover:text-cyan-300 transition">Twitter</a>
        <a href="#" className="hover:text-cyan-300 transition">Dribbble</a>
        <a href="#" className="hover:text-cyan-300 transition">LinkedIn</a>
        <a href="#" className="hover:text-cyan-300 transition">GitHub</a>
      </div>
    </footer>
  );
}
