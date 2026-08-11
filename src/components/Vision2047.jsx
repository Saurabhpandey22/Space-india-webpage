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
      {/* Section Divider Line */}
      <div className="w-full max-w-5xl mx-auto h-0.5 tiranga-stripe opacity-40 mb-16 rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-850 border border-tiranga-saffron/40 text-tiranga-saffron text-xs font-extrabold uppercase tracking-wider mb-3 shadow-saffron-glow">
            <Target className="w-3.5 h-3.5 text-tiranga-saffron" /> 🇮🇳 AMRIT KAAL SPACE VISION 2047
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-sans">
            Vision <span className="text-gradient-tiranga">2047</span> & Beyond
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Charting India's roadmap toward space leadership for the centenary of Independence: From an Indian Space Station to human lunar habitation.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISION_2047.map((item) => {
            const IconComponent = iconMap[item.icon] || Rocket;
            const isSaffron = item.accent === 'saffron';
            const isGreen = item.accent === 'green';
            const isChakra = item.accent === 'chakra';

            const borderHover = isSaffron
              ? 'hover:border-tiranga-saffron/60 hover:shadow-saffron-glow'
              : isGreen
              ? 'hover:border-tiranga-greenGlow/60 hover:shadow-green-glow'
              : 'hover:border-tiranga-chakraLight/60 hover:shadow-chakra-glow';

            const iconStyle = isSaffron
              ? 'bg-tiranga-saffron/15 border-tiranga-saffron/40 text-tiranga-saffron'
              : isGreen
              ? 'bg-tiranga-greenGlow/15 border-tiranga-greenGlow/40 text-tiranga-greenGlow'
              : 'bg-tiranga-chakraLight/15 border-tiranga-chakraLight/40 text-tiranga-chakraLight';

            const tagStyle = isSaffron
              ? 'bg-tiranga-saffron/20 border-tiranga-saffron/50 text-tiranga-saffron'
              : isGreen
              ? 'bg-tiranga-greenGlow/20 border-tiranga-greenGlow/50 text-tiranga-greenGlow'
              : 'bg-tiranga-chakraLight/20 border-tiranga-chakraLight/50 text-tiranga-chakraLight';

            return (
              <div
                key={item.id}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border border-space-700 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between ${borderHover}`}
              >
                {/* Top Row Icon & Target Year */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${iconStyle} group-hover:scale-110`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-sm font-black font-mono px-3 py-1 rounded-full border ${tagStyle}`}
                    >
                      Target: {item.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-white mb-1 group-hover:text-tiranga-saffron transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-tiranga-saffron mb-4">
                    {item.subtitle}
                  </p>

                  {/* Objective Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Status Chip */}
                <div className="pt-4 border-t border-space-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sparkles className={`w-3.5 h-3.5 ${isSaffron ? 'text-tiranga-saffron' : isGreen ? 'text-tiranga-greenGlow' : 'text-tiranga-chakraLight'}`} />
                    Approved Strategic Roadmap
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">ISRO 2047</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* National Pride Callout Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-tiranga-saffron/40 text-center relative overflow-hidden shadow-saffron-glow">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs uppercase font-black tracking-widest text-tiranga-saffron block mb-2 flex items-center justify-center gap-2">
              <span>🇮🇳</span> NATIONAL INSPIRATION • AATMANIRBHAR BHARAT
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight">
              "From Cycles & Bull Cart Launch Pads to Deep Space Horizons"
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light mb-8 leading-relaxed">
              India's space journey stands as an inspiring beacon of indigenous technological self-reliance, empowering future generations of coders, engineers, and scientists across Bharat.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-black uppercase tracking-wider text-space-950 bg-gradient-to-r from-tiranga-saffron via-amber-400 to-tiranga-greenGlow hover:opacity-95 rounded-2xl shadow-saffron-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Back to Top Overview ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
