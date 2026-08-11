import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, Sparkles, Compass } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'stats', 'timeline', 'gallery', 'vision2047'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Key Stats', href: '#stats', id: 'stats' },
    { label: 'Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Key Missions', href: '#gallery', id: 'gallery' },
    { label: 'Vision 2047', href: '#vision2047', id: 'vision2047' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-950/85 backdrop-blur-md border-b border-space-800 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-space-850 border border-cyan-accent/30 flex items-center justify-center group-hover:border-cyan-accent group-hover:shadow-cyan-glow transition-all duration-300">
              <Rocket className="w-5 h-5 text-cyan-accent group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wide text-slate-100 flex items-center gap-1.5 font-sans">
                ISRO <span className="text-cyan-accent font-normal">SPACE TECH</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-amber-accent font-semibold">
                ISRO Missions & Beyond
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-space-850/60 p-1.5 rounded-full border border-space-700/60 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-accent text-space-950 shadow-cyan-glow font-semibold'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-space-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Single CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-space-950 bg-amber-accent hover:bg-amber-400 rounded-lg shadow-amber-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              Explore Journey
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg bg-space-850 border border-space-700 text-slate-200 hover:text-cyan-accent focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-950/95 border-b border-space-800 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-accent text-space-950 font-bold'
                      : 'text-slate-200 hover:bg-space-850 hover:text-cyan-accent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="mt-4 pt-4 border-t border-space-800 flex items-center justify-between text-xs text-slate-400">
              <span>ISRO Missions & Beyond</span>
              <span className="text-amber-accent font-semibold">Space Technology Showcase</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
