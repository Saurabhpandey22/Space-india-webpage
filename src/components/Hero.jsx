import React from 'react';
import { HERO_DATA } from '../data/missionsData';
import { Rocket, ChevronDown, Sparkles, Award, Globe2, Orbit } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Graphic Rings & 24-Spoke Ashoka Chakra Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        {/* Outer Orbital Rings */}
        <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] border border-tiranga-saffron/30 rounded-full animate-orbit" />
        <div className="absolute w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] border border-dashed border-tiranga-greenGlow/30 rounded-full animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

        {/* 24-Spoke Ashoka Chakra Center Graphic */}
        <div className="absolute w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full border-2 border-tiranga-chakraLight/30 animate-spin-slow flex items-center justify-center">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-tiranga-chakraLight/40 to-transparent"
              style={{ transform: `rotate(${i * 15}deg)` }}
            />
          ))}
        </div>

        <div className="absolute w-72 h-72 sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-tiranga-saffron/10 via-white/5 to-tiranga-greenGlow/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Tiranga National Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-space-850/90 border border-tiranga-saffron/40 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-8 shadow-saffron-glow backdrop-blur-md">
          <span className="text-base">🇮🇳</span>
          <span className="text-gradient-tiranga">BHARAT IN SPACE • ISRO MISSIONS & BEYOND</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 font-sans leading-[1.15]">
          India's Journey to the{' '}
          <span className="text-gradient-tiranga relative inline-block">
            Stars
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-tiranga-saffron opacity-80"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {HERO_DATA.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#timeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold rounded-2xl text-space-950 bg-gradient-to-r from-tiranga-saffron via-amber-400 to-tiranga-greenGlow hover:opacity-95 shadow-saffron-glow transition-all duration-300 transform hover:-translate-y-1"
          >
            <Rocket className="w-5 h-5 text-space-950" />
            Explore Mission Timeline
          </a>
          <a
            href="#vision2047"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold rounded-2xl text-white bg-space-850 hover:bg-space-800 border border-tiranga-greenGlow/50 hover:border-tiranga-greenGlow shadow-green-glow transition-all duration-300 transform hover:-translate-y-1"
          >
            <Orbit className="w-5 h-5 text-tiranga-greenGlow" />
            Vision 2047 Objectives
          </a>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#stats"
        aria-label="Scroll to Statistics section"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-space-850 border border-space-700 text-slate-400 hover:text-cyan-accent hover:border-cyan-accent transition-all duration-300 animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
