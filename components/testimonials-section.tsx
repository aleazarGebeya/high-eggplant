import React from "react";

export function TestimonialCard({ name, quote, image }: { name: string; quote: string; image: string }) {
  return (
    <div className="bg-white/90 rounded-2xl p-8 shadow-xl border-b-4 border-cyan-300/80">
      <img src={image} alt={name} className="w-14 h-14 rounded-full mb-4 object-cover mx-auto border-2 border-cyan-400" loading="lazy" />
      <blockquote className="italic text-gray-700 mb-3">“{quote}”</blockquote>
      <div className="font-bold text-gray-900 text-center">{name}</div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto px-5 md:px-0 py-24 md:py-36">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-700 to-blue-700 text-transparent bg-clip-text">What Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <TestimonialCard
          name="Chris Evans"
          quote="Jane's creativity and attention to detail helped our product stand out in a crowded market."
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=128&fit=crop&auto=format"
        />
        <TestimonialCard
          name="Ava Martinez"
          quote="Amazing design sense and so easy to work with! Highly recommend for digital projects."
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&auto=format"
        />
        <TestimonialCard
          name="Liam Smith"
          quote="The portfolio and attention to branding made a huge difference in client acquisition."
          image="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=128&h=128&fit=crop&auto=format"
        />
      </div>
    </section>
  );
}
