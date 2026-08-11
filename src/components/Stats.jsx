import React from 'react';
import { STATS_DATA } from '../data/missionsData';
import { Moon, Rocket, Globe, Satellite } from 'lucide-react';

const iconMap = {
  Moon: Moon,
  Rocket: Rocket,
  Globe: Globe,
  Satellite: Satellite,
};

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-accent block mb-2">
            Pioneering Space Frontiers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            India's Space Achievement <span className="text-gradient-cyan">Stats</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Decades of relentless innovation positioning ISRO among the world's most efficient, reliable, and visionary space agencies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Rocket;
            const isGold = stat.accent === 'gold';

            return (
              <div
                key={stat.id}
                className={`glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 group hover:-translate-y-2 ${
                  isGold
                    ? 'hover:border-amber-accent/50 hover:shadow-amber-glow'
                    : 'hover:border-cyan-accent/50 hover:shadow-cyan-glow'
                }`}
              >
                {/* Background Accent Blur */}
                <div
                  className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none ${
                    isGold ? 'bg-amber-accent' : 'bg-cyan-accent'
                  }`}
                />

                {/* Top Row Icon & Accent Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isGold
                        ? 'bg-amber-accent/10 border-amber-accent/30 text-amber-accent group-hover:scale-110'
                        : 'bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent group-hover:scale-110'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                      isGold
                        ? 'bg-amber-accent/10 border-amber-accent/40 text-amber-accent'
                        : 'bg-cyan-accent/10 border-cyan-accent/40 text-cyan-accent'
                    }`}
                  >
                    Milestone
                  </span>
                </div>

                {/* Counter Number */}
                <div className="mb-2">
                  <span
                    className={`text-4xl sm:text-5xl font-extrabold font-sans tracking-tight block ${
                      isGold ? 'text-gradient-gold' : 'text-gradient-cyan'
                    }`}
                  >
                    {stat.number}
                  </span>
                </div>

                {/* Label & Description */}
                <h3 className="text-base font-bold text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* World Record Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-accent/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-space-800 border border-space-700 text-cyan-accent shrink-0">
              <Satellite className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-accent uppercase tracking-wider block">
                World Record Milestone • PSLV-C37
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                104 Satellites Launched in a Single Rocket Mission
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                ISRO set a historic global benchmark by launching 104 satellites simultaneously into orbit with unmatched precision.
              </p>
            </div>
          </div>
          <a
            href="#timeline"
            className="shrink-0 px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-space-950 bg-cyan-accent hover:bg-cyan-300 rounded-xl shadow-cyan-glow transition-all duration-300"
          >
            Explore Missions Timeline →
          </a>
        </div>
      </div>
    </section>
  );
}
