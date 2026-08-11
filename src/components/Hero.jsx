import React from 'react';
import { HERO_DATA } from '../data/missionsData';
import { Rocket, ChevronDown, Sparkles, Award, Globe2, Orbit } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 1. Giant Right-Side Ashoka Chakra Graphic Overlay (Exact match to Reference Screenshot 2) */}
      <div className="absolute right-[-25%] sm:right-[-15%] lg:right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] lg:w-[1000px] lg:h-[1000px] pointer-events-none opacity-25 z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 animate-spin-slow">
          {/* Outer Ring */}
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

      {/* 2. Top Ambient Tiranga Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-tiranga-saffron/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-tiranga-greenGlow/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container (Centered like Image 2) */}
      <div className="relative max-w-5xl mx-auto text-center z-10 w-full">
        {/* Top Gold Pill Badge (Exact match to Image 2 Badge Style) */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-8 shadow-saffron-glow backdrop-blur-md">
          <span className="text-tiranga-saffron font-extrabold">IN</span>
          <span>THEMATIC WEBSITE DEVELOPMENT COMPETITION 2026</span>
        </div>

        {/* Main Heading (Exact Font, Structure & Tiranga Colors as Image 2) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-heading font-black tracking-tight mb-8 leading-[1.18]">
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            India's Journey
          </span>
          <span className="block">
            <span className="text-tiranga-saffron drop-shadow-[0_0_30px_rgba(255,103,31,0.85)]">
              to the —
            </span>{' '}
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Deep Space
            </span>
          </span>
          <span className="block text-tiranga-greenGlow drop-shadow-[0_0_30px_rgba(16,185,129,0.85)]">
            Stars
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Design. Develop. Deploy. Transform ideas into digital space experiences that honour India's space culture, celebrate ISRO's achievements, and illuminate its future.
        </p>

        {/* Action Buttons (Centered like Image 2) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#timeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold rounded-xl text-white bg-[#FF671F] hover:bg-orange-600 shadow-saffron-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Topics →
          </a>
          <a
            href="#vision2047"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-xl text-slate-200 bg-[#101B33]/80 hover:bg-[#1A243B] border border-slate-700/80 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Vision 2047 Objectives
          </a>
        </div>

        {/* Bottom Key Stats Row (Exact match to Image 2 Footer Stats Bar) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-space-800/80 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-black font-serif-heading text-amber-400">
              16 Aug
            </span>
            <span className="block text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mt-1">
              COMPETITION DAY
            </span>
          </div>

          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-black font-serif-heading text-amber-400">
              120+
            </span>
            <span className="block text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mt-1">
              ISRO MISSIONS
            </span>
          </div>

          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-black font-serif-heading text-amber-400">
              1st
            </span>
            <span className="block text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mt-1">
              MARS ORBIT ATTEMPT
            </span>
          </div>

          <div className="text-center">
            <span className="block text-2xl sm:text-3xl font-black font-serif-heading text-amber-400">
              75 yrs
            </span>
            <span className="block text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase mt-1">
              OF INDEPENDENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
