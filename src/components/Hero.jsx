import React from 'react';
import { HERO_DATA } from '../data/missionsData';
import { Rocket, ChevronDown, Sparkles, Award, Globe2, Orbit } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 1. Large Right-Side Ashoka Chakra Overlay (Identical to Reference Image 2) */}
      <div className="absolute right-[-20%] sm:right-[-10%] lg:right-[-5%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] lg:w-[920px] lg:h-[920px] pointer-events-none opacity-25 z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 animate-spin-slow">
          {/* Outer Dual Circles */}
          <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
          {/* Center Hub */}
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          {/* 24 Radial Spokes */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 50 + 10 * Math.cos(angle);
            const y1 = 50 + 10 * Math.sin(angle);
            const x2 = 50 + 47 * Math.cos(angle);
            const y2 = 50 + 47 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.6"
              />
            );
          })}
        </svg>
      </div>

      {/* 2. Top-Left Saffron & Green Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-tiranga-saffron/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-tiranga-greenGlow/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Top Gold Pill Badge (Matching Image 2 Badge Style) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-8 shadow-saffron-glow backdrop-blur-md">
          <span className="text-tiranga-saffron">IN</span>
          <span>THEMATIC WEBSITE DEVELOPMENT COMPETITION 2026</span>
        </div>

        {/* Main Heading in Exact Colors & Structure as Image 2 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 font-serif sm:font-sans leading-[1.12]">
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            India's
          </span>
          <span className="block text-tiranga-saffron drop-shadow-[0_0_30px_rgba(255,103,31,0.8)]">
            Journey to the —
          </span>
          <span className="block text-tiranga-greenGlow drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]">
            Stars
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
          {HERO_DATA.tagline}
        </p>

        {/* Action Buttons (Matching Image 2 Button Style) */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#timeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-xl text-white bg-[#FF671F] hover:bg-orange-600 shadow-saffron-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Mission Timeline →
          </a>
          <a
            href="#vision2047"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl text-slate-200 bg-[#101B33]/90 hover:bg-[#1A243B] border border-slate-700/80 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Vision 2047 Objectives
          </a>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#stats"
        aria-label="Scroll to Statistics section"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 p-2.5 rounded-full bg-space-850 border border-space-700 text-slate-400 hover:text-tiranga-saffron hover:border-tiranga-saffron transition-all duration-300 animate-bounce z-10"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
