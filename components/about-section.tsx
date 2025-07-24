import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-32 px-6 gap-12 flex flex-col md:flex-row items-center">
      <div className="flex-1 flex justify-center pb-8 md:pb-0">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&auto=format"
          alt="Jane Doe professional portrait"
          loading="lazy"
          className="rounded-full border-4 border-cyan-400 shadow-lg w-64 h-64 object-cover object-top bg-gradient-to-br from-blue-300 to-cyan-300"
        />
      </div>
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">About me</h2>
        <p className="text-gray-800 text-lg mb-5">
          Hello! I'm Jane Doe, a creative digital designer based in NYC. I blend innovative UX/UI with storytelling that connects brands and audiences.
        </p>
        <p className="text-gray-600 mb-4">
          I specialize in visually-driven, impactful web experiences, have collaborated with award-winning agencies, and helped startups launch products that wow users.
        </p>
        <ul className="list-inside list-disc text-gray-700 mb-4">
          <li>10+ years experience in UX/UI design</li>
          <li>Bachelor of Fine Arts in Design</li>
          <li>Exhibited works at Digital Arts Expo</li>
          <li>Speaker at Creative Conf 2022</li>
        </ul>
        <a download href="/resume.pdf" className="inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl shadow transition-all">Download Resume</a>
      </div>
    </section>
  );
}
