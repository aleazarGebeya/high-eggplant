import React from "react";

export function AwardsSection() {
  return (
    <section id="awards" className="container mx-auto py-24 md:py-36 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-700 to-blue-700 text-transparent bg-clip-text">Awards</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-12">
        <div className="rounded-2xl bg-white/80 shadow-xl p-7 border-t-4 border-cyan-400">
          <div className="font-bold text-xl text-gray-900 mb-2">Awwwards Site of the Day</div>
          <div className="text-sm text-gray-600">2023</div>
          <div className="text-gray-500 mt-2 italic">"For visually stunning UX/UI innovation."</div>
        </div>
        <div className="rounded-2xl bg-white/80 shadow-xl p-7 border-t-4 border-blue-400">
          <div className="font-bold text-xl text-gray-900 mb-2">CSSDA Winner</div>
          <div className="text-sm text-gray-600">2022</div>
          <div className="text-gray-500 mt-2 italic">"Exceptional creativity and usability."</div>
        </div>
        <div className="rounded-2xl bg-white/80 shadow-xl p-7 border-t-4 border-indigo-400">
          <div className="font-bold text-xl text-gray-900 mb-2">Behance Best of Interaction</div>
          <div className="text-sm text-gray-600">2021</div>
          <div className="text-gray-500 mt-2 italic">"For best-in-class interaction design."</div>
        </div>
      </div>
    </section>
  );
}
