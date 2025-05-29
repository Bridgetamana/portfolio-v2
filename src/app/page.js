"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col stripe-bg">
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        <div className="text-center animate-fade-in">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
            Bridget
          </h1>
          <h2 className="font-sans text-xl md:text-2xl tracking-widest text-white/80 mb-4">
            FRONTEND DEVELOPER
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-white/70 mb-8">
            Frontend developer with extensive knowledge of JavaScript, web technologies, and cross platform development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects" className="button-filled">View Projects</Link>
            <Link href="/contact" className="button-outline">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
