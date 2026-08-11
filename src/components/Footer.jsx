import React from 'react';
import { Rocket, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-space-950 border-t border-space-800/80 text-slate-400 py-10 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-space-800/80">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-space-850 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base text-white tracking-wide block font-sans">
                INDIA'S JOURNEY TO THE STARS
              </span>
              <span className="text-xs text-slate-400 font-light">
                ISRO Space Technology & Deep Space Portfolio
              </span>
            </div>
          </div>

          {/* Quick Links Nav */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            <a href="#hero" className="hover:text-cyan-accent transition-colors">
              Overview
            </a>
            <a href="#stats" className="hover:text-cyan-accent transition-colors">
              Key Stats
            </a>
            <a href="#timeline" className="hover:text-cyan-accent transition-colors">
              Timeline
            </a>
            <a href="#gallery" className="hover:text-cyan-accent transition-colors">
              Key Missions
            </a>
            <a href="#vision2047" className="hover:text-cyan-accent transition-colors">
              Vision 2047
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-space-850 border border-space-700 text-slate-300 hover:text-cyan-accent hover:border-cyan-accent transition-all duration-300 shrink-0"
          >
            <ArrowUp className="w-4 h-4" /> Back to Top
          </button>
        </div>

        {/* Minimal Submission Credit Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-light">
          <p>
            Dedicated to Dr. Vikram Sarabhai, Dr. A.P.J. Abdul Kalam & ISRO Scientists.
          </p>
          <p className="text-slate-400 font-medium">
            A Code for the Nation 2026 submission — DVSICS Kanpur
          </p>
        </div>
      </div>
    </footer>
  );
}
