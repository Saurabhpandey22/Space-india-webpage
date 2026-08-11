import React from 'react';
import { VISION_2047 } from '../data/missionsData';
import { Building2, Footprints, PackageCheck, Sparkles, Flame, Rocket, Target, ShieldAlert } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  Footprints: Footprints,
  PackageCheck: PackageCheck,
  Sparkles: Sparkles,
  Flame: Flame,
};

export default function Vision2047() {
  return (
    <section id="vision2047" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-accent/10 border border-amber-accent/30 text-amber-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5" /> Amrit Kaal Space Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-sans">
            Vision <span className="text-gradient-gold">2047</span> & Beyond
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Charting India's roadmap toward space leadership for the centenary of Independence: From an Indian Space Station to human lunar habitation.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISION_2047.map((item) => {
            const IconComponent = iconMap[item.icon] || Rocket;
            const isGold = item.accent === 'gold';

            return (
              <div
                key={item.id}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between ${
                  isGold
                    ? 'border-space-700 hover:border-amber-accent/60 hover:shadow-amber-glow'
                    : 'border-space-700 hover:border-cyan-accent/60 hover:shadow-cyan-glow'
                }`}
              >
                {/* Top Row Icon & Target Year */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isGold
                          ? 'bg-amber-accent/10 border-amber-accent/40 text-amber-accent group-hover:scale-110'
                          : 'bg-cyan-accent/10 border-cyan-accent/40 text-cyan-accent group-hover:scale-110'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-sm font-extrabold font-mono px-3 py-1 rounded-full border ${
                        isGold
                          ? 'bg-amber-accent/15 border-amber-accent/50 text-amber-accent'
                          : 'bg-cyan-accent/15 border-cyan-accent/50 text-cyan-accent'
                      }`}
                    >
                      Target: {item.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-cyan-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-accent mb-4">
                    {item.subtitle}
                  </p>

                  {/* Objective Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Status Chip */}
                <div className="pt-4 border-t border-space-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className={`w-3.5 h-3.5 ${isGold ? 'text-amber-accent' : 'text-cyan-accent'}`} />
                    Approved Strategic Roadmap
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">ISRO 2047</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* National Pride Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-space-850 via-space-900 to-space-850 border border-amber-accent/30 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-accent block mb-2">
              National Inspiration • Indigenous Space Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              "From Cycles & Bull Cart Launch Pads to Deep Space Horizons"
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light mb-6">
              India's space journey stands as an inspiring beacon of indigenous technological self-reliance (Aatmanirbhar Bharat), inspiring future generations of students, coders, and scientists.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-space-950 bg-amber-accent hover:bg-amber-400 rounded-xl shadow-amber-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Back to Top Overview ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
