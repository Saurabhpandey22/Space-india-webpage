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
      {/* Section Divider Line */}
      <div className="w-full max-w-5xl mx-auto h-0.5 tiranga-stripe opacity-40 mb-16 rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-tiranga-saffron block mb-2">
            Pioneering Space Frontiers • 🇮🇳 Nation's Pride
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            India's Space Achievement <span className="text-gradient-tiranga">Stats</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Decades of relentless innovation positioning ISRO among the world's most efficient, reliable, and visionary space agencies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS_DATA.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Rocket;
            const isSaffron = stat.accent === 'saffron';
            const isGreen = stat.accent === 'green';
            const isChakra = stat.accent === 'chakra';

            const borderHover = isSaffron
              ? 'hover:border-tiranga-saffron/60 hover:shadow-saffron-glow'
              : isGreen
              ? 'hover:border-tiranga-greenGlow/60 hover:shadow-green-glow'
              : 'hover:border-tiranga-chakraLight/60 hover:shadow-chakra-glow';

            const bgAccent = isSaffron
              ? 'bg-tiranga-saffron'
              : isGreen
              ? 'bg-tiranga-greenGlow'
              : 'bg-tiranga-chakraLight';

            const iconStyle = isSaffron
              ? 'bg-tiranga-saffron/15 border-tiranga-saffron/40 text-tiranga-saffron'
              : isGreen
              ? 'bg-tiranga-greenGlow/15 border-tiranga-greenGlow/40 text-tiranga-greenGlow'
              : 'bg-tiranga-chakraLight/15 border-tiranga-chakraLight/40 text-tiranga-chakraLight';

            const textGrad = isSaffron
              ? 'text-gradient-saffron'
              : isGreen
              ? 'text-gradient-green'
              : 'text-gradient-chakra';

            return (
              <div
                key={stat.id}
                className={`glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-all duration-300 group hover:-translate-y-2 border border-space-700 ${borderHover}`}
              >
                {/* Background Accent Blur */}
                <div
                  className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none ${bgAccent}`}
                />

                {/* Top Row Icon & Accent Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${iconStyle} group-hover:scale-110`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full border ${iconStyle}`}
                  >
                    Milestone
                  </span>
                </div>

                {/* Counter Number */}
                <div className="mb-2">
                  <span className={`text-4xl sm:text-5xl font-black font-sans tracking-tight block ${textGrad}`}>
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
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel border border-tiranga-saffron/40 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-saffron-glow">
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-4 rounded-2xl bg-space-800 border border-tiranga-saffron/30 text-tiranga-saffron shrink-0">
              <Satellite className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-black text-tiranga-saffron uppercase tracking-wider block flex items-center gap-1.5">
                <span>🇮🇳</span> WORLD RECORD MILESTONE • PSLV-C37
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
            className="shrink-0 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-space-950 bg-gradient-to-r from-tiranga-saffron via-amber-400 to-tiranga-greenGlow hover:opacity-95 rounded-xl shadow-saffron-glow transition-all duration-300"
          >
            Explore Missions Timeline →
          </a>
        </div>
      </div>
    </section>
  );
}
