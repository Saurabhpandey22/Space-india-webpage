import React, { useState } from 'react';
import { GALLERY_CARDS } from '../data/missionsData';
import { ShieldCheck, Compass, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export default function MissionGallery() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Divider Line */}
      <div className="w-full max-w-5xl mx-auto h-0.5 tiranga-stripe opacity-40 mb-16 rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-tiranga-saffron block mb-2">
            Flagship Exploration • 🇮🇳 ISRO Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Featured Mission <span className="text-gradient-tiranga">Gallery</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Highlighting India's premier space exploration platforms engineered for scientific breakthroughs and interplanetary discovery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_CARDS.map((card) => {
            const isSaffron = card.accent === 'saffron';
            const isGreen = card.accent === 'green';
            const isChakra = card.accent === 'chakra';
            const isHovered = hoveredCard === card.id;

            const borderHover = isSaffron
              ? 'hover:border-tiranga-saffron/80 hover:shadow-saffron-glow'
              : isGreen
              ? 'hover:border-tiranga-greenGlow/80 hover:shadow-green-glow'
              : 'hover:border-tiranga-chakraLight/80 hover:shadow-chakra-glow';

            const badgeStyle = isSaffron
              ? 'bg-tiranga-saffron/20 border-tiranga-saffron/50 text-tiranga-saffron'
              : isGreen
              ? 'bg-tiranga-greenGlow/20 border-tiranga-greenGlow/50 text-tiranga-greenGlow'
              : 'bg-tiranga-chakraLight/20 border-tiranga-chakraLight/50 text-tiranga-chakraLight';

            const textValColor = isSaffron
              ? 'text-tiranga-saffron'
              : isGreen
              ? 'text-tiranga-greenGlow'
              : 'text-tiranga-chakraLight';

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border border-space-700 transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${borderHover} ${
                  isHovered ? '-translate-y-2' : ''
                }`}
              >
                {/* Visual Top Decorative Banner */}
                <div className="h-44 sm:h-52 w-full rounded-2xl bg-space-900 border border-space-800 p-6 flex flex-col justify-between relative overflow-hidden mb-6">
                  {/* Subtle Background Orbital Art */}
                  <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-20 pointer-events-none">
                    <div className={`w-64 h-64 border-4 rounded-full ${isSaffron ? 'border-tiranga-saffron' : isGreen ? 'border-tiranga-greenGlow' : 'border-tiranga-chakraLight'}`} />
                  </div>

                  <div className="flex items-center justify-between z-10">
                    <span
                      className={`text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full border ${badgeStyle}`}
                    >
                      {card.badge}
                    </span>
                    <Sparkles className={`w-5 h-5 ${textValColor}`} />
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
                      <span className={`text-xs sm:text-sm font-extrabold ${textValColor}`}>
                        {st.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Link / Highlight */}
                <div className="flex items-center justify-between pt-4 border-t border-space-800 text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-tiranga-greenGlow" />
                    Verified ISRO Milestone
                  </span>
                  <a
                    href="#timeline"
                    className={`font-bold flex items-center gap-1 transition-colors ${textValColor} hover:text-white`}
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
