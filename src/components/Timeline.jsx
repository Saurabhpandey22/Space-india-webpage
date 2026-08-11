import React, { useState } from 'react';
import { TIMELINE_MISSIONS } from '../data/missionsData';
import { Calendar, Rocket, Award, Info, X, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function Timeline() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeMission, setActiveMission] = useState(null);

  const categories = ['All', 'Historic', 'Lunar', 'Deep Space', 'Human Spaceflight'];

  const filteredMissions = selectedCategory === 'All'
    ? TIMELINE_MISSIONS
    : TIMELINE_MISSIONS.filter((m) => m.category === selectedCategory);

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Divider Line */}
      <div className="w-full max-w-5xl mx-auto h-0.5 tiranga-stripe opacity-40 mb-16 rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-tiranga-saffron block mb-2">
            Chronological Achievements • 🇮🇳 Space History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ISRO Mission <span className="text-gradient-tiranga">Timeline</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Tracing India's remarkable journey from launching our first satellite in 1975 to landing on the Moon's South Pole and pioneering solar science.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-extrabold rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-tiranga-saffron via-white to-tiranga-greenGlow text-space-950 border-transparent shadow-saffron-glow font-black scale-105'
                  : 'bg-space-850/80 text-slate-300 border-space-700 hover:border-slate-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Path & Cards Container */}
        <div className="relative">
          {/* Central Glowing Tiranga Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-tiranga-saffron via-white to-tiranga-greenGlow opacity-70 shadow-saffron-glow" />

          {/* Missions List */}
          <div className="space-y-12 md:space-y-16">
            {filteredMissions.map((mission, index) => {
              const isEven = index % 2 === 0;
              const isSaffron = mission.accent === 'saffron';
              const isGreen = mission.accent === 'green';
              const isChakra = mission.accent === 'chakra';

              const borderHover = isSaffron
                ? 'hover:border-tiranga-saffron/60 hover:shadow-saffron-glow'
                : isGreen
                ? 'hover:border-tiranga-greenGlow/60 hover:shadow-green-glow'
                : 'hover:border-tiranga-chakraLight/60 hover:shadow-chakra-glow';

              const badgeStyle = isSaffron
                ? 'bg-tiranga-saffron/15 border-tiranga-saffron/40 text-tiranga-saffron'
                : isGreen
                ? 'bg-tiranga-greenGlow/15 border-tiranga-greenGlow/40 text-tiranga-greenGlow'
                : 'bg-tiranga-chakraLight/15 border-tiranga-chakraLight/40 text-tiranga-chakraLight';

              const dotBorder = isSaffron
                ? 'border-tiranga-saffron shadow-saffron-glow'
                : isGreen
                ? 'border-tiranga-greenGlow shadow-green-glow'
                : 'border-tiranga-chakraLight shadow-chakra-glow';

              return (
                <div
                  key={mission.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Badge */}
                  <div className={`z-20 flex items-center justify-center w-12 h-12 rounded-full bg-space-950 border-2 ${dotBorder} my-4 md:my-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2`}>
                    <span className="text-xs font-black text-white">
                      {mission.year.substring(0, 4)}
                    </span>
                  </div>

                  {/* Card Content Side */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div
                      className={`glass-panel p-6 sm:p-8 rounded-3xl border border-space-700 transition-all duration-300 group hover:-translate-y-1.5 ${borderHover}`}
                    >
                      {/* Header Badge & Date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full border ${badgeStyle}`}
                          >
                            {mission.category}
                          </span>
                          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {mission.date}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                            mission.status === 'Active' || mission.status === 'Completed'
                              ? 'bg-tiranga-greenGlow/15 text-tiranga-greenGlow border border-tiranga-greenGlow/40'
                              : 'bg-tiranga-saffron/15 text-tiranga-saffron border border-tiranga-saffron/40'
                          }`}
                        >
                          {mission.status === 'Active' || mission.status === 'Completed' ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <Clock className="w-3 h-3" />
                          )}
                          {mission.status}
                        </span>
                      </div>

                      {/* Mission Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-tiranga-saffron transition-colors">
                        {mission.title}
                      </h3>
                      <p className="text-xs font-bold text-tiranga-saffron mb-3">
                        {mission.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                        {mission.description}
                      </p>

                      {/* Launch Vehicle & Action */}
                      <div className="pt-4 border-t border-space-800 flex items-center justify-between text-xs">
                        <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                          <Rocket className="w-3.5 h-3.5 text-tiranga-saffron" />
                          Vehicle: <strong className="text-slate-200">{mission.vehicle}</strong>
                        </span>

                        <button
                          onClick={() => setActiveMission(mission)}
                          className="inline-flex items-center gap-1 text-tiranga-greenGlow hover:text-white font-bold focus:outline-none"
                        >
                          <Info className="w-3.5 h-3.5" />
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Details Modal */}
        {activeMission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-panel w-full max-w-xl p-6 sm:p-8 rounded-3xl border border-cyan-accent/40 shadow-cyan-glow relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveMission(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-space-850 text-slate-300 hover:text-white border border-space-700 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="mb-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-amber-accent block mb-1">
                  ISRO Mission Deep Dive
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeMission.title}
                </h3>
                <p className="text-sm text-cyan-accent font-medium mt-1">
                  {activeMission.tagline}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 mb-6">
                <div className="p-4 rounded-xl bg-space-850 border border-space-700">
                  <span className="text-xs font-bold text-slate-400 block mb-1">HISTORIC ACHIEVEMENT</span>
                  <p className="text-slate-100 font-medium">{activeMission.achievement}</p>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 block mb-2">KEY MISSION SPECS</span>
                  <ul className="space-y-2">
                    {activeMission.keySpecs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-space-900/60 p-2.5 rounded-lg border border-space-800">
                        <Sparkles className="w-4 h-4 text-amber-accent shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-space-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Launch Date: {activeMission.date}</span>
                <button
                  onClick={() => setActiveMission(null)}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-space-950 bg-cyan-accent hover:bg-cyan-300 rounded-xl transition-all"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
