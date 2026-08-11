import React, { useState } from 'react';
import { GALLERY_CARDS } from '../data/missionsData';
import { ShieldCheck, Compass, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export default function MissionGallery() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-accent block mb-2">
            Flagship Exploration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Featured Mission <span className="text-gradient-cyan">Gallery</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Highlighting India's premier space exploration platforms engineered for scientific breakthroughs and interplanetary discovery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_CARDS.map((card) => {
            const isGold = card.accent === 'gold';
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                  isGold
                    ? 'border-space-700 hover:border-amber-accent/80 hover:shadow-amber-glow'
                    : 'border-space-700 hover:border-cyan-accent/80 hover:shadow-cyan-glow'
                } ${isHovered ? '-translate-y-2' : ''}`}
              >
                {/* Visual Top Decorative Banner */}
                <div className="h-44 sm:h-52 w-full rounded-2xl bg-space-900 border border-space-800 p-6 flex flex-col justify-between relative overflow-hidden mb-6">
                  {/* Subtle Background Orbital Art */}
                  <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-20 pointer-events-none">
                    <div className={`w-64 h-64 border-4 rounded-full ${isGold ? 'border-amber-accent' : 'border-cyan-accent'}`} />
                  </div>

                  <div className="flex items-center justify-between z-10">
                    <span
                      className={`text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full border ${
                        isGold
                          ? 'bg-amber-accent/20 border-amber-accent/50 text-amber-accent'
                          : 'bg-cyan-accent/20 border-cyan-accent/50 text-cyan-accent'
                      }`}
                    >
                      {card.badge}
                    </span>
                    <Sparkles className={`w-5 h-5 ${isGold ? 'text-amber-accent' : 'text-cyan-accent'}`} />
                  </div>

                  <div className="z-10">
                    <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block mb-1">
                      {card.imageText}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card Tagline & Description */}
                <div className="mb-6">
                  <h4 className="text-base font-bold text-slate-100 mb-2">
                    {card.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Mission Key Specs Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 rounded-2xl bg-space-900/80 border border-space-800 mb-6">
                  {card.stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-[10px] text-slate-400 font-medium uppercase mb-0.5">
                        {st.label}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-extrabold ${
                          isGold ? 'text-amber-accent' : 'text-cyan-accent'
                        }`}
                      >
                        {st.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Link / Highlight */}
                <div className="flex items-center justify-between pt-4 border-t border-space-800 text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified ISRO Milestone
                  </span>
                  <a
                    href="#timeline"
                    className={`font-bold flex items-center gap-1 transition-colors ${
                      isGold ? 'text-amber-accent hover:text-amber-300' : 'text-cyan-accent hover:text-cyan-300'
                    }`}
                  >
                    View in Timeline <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
