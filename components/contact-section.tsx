import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string|null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("All fields are required.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="container mx-auto py-24 px-5 md:px-0 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-700 to-blue-700 text-transparent bg-clip-text">Contact Me</h2>
      <form
        className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border"
        onSubmit={handleSubmit}
      >
        <Input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-cyan-50 placeholder-cyan-300 text-cyan-900"
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-cyan-50 placeholder-cyan-300 text-cyan-900"
        />
        <Textarea
          name="message"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          required
          className="bg-cyan-50 placeholder-cyan-300 text-cyan-900 min-h-[120px]"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {submitted && !error && (
          <div className="text-cyan-700 text-md font-bold">Thank you for reaching out! I'll get back soon.</div>
        )}
        <Button type="submit" className="w-full text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600">Send Message</Button>
      </form>
    </section>
  );
}
