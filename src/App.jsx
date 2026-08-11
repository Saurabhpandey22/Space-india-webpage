import React from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import MissionGallery from './components/MissionGallery';
import Vision2047 from './components/Vision2047';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 font-sans selection:bg-cyan-accent selection:text-space-950 overflow-x-hidden">
      {/* Interactive Particle Starfield Canvas */}
      <StarfieldCanvas />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Key Stats Section */}
        <Stats />

        {/* 3. Mission Timeline Section */}
        <Timeline />

        {/* 4. Featured Missions Cards Section */}
        <MissionGallery />

        {/* 5. Vision 2047 Section */}
        <Vision2047 />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  );
}
