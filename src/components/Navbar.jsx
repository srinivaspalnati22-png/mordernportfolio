import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Process', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 glass-panel-dark shadow-lg border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Side: Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-2 cursor-pointer group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FF2A2A] text-white flex items-center justify-center font-black text-sm group-hover:rotate-12 transition-transform duration-300 shadow-md">
              S
            </div>
            <span className="text-xl md:text-2xl font-black font-display text-white tracking-tight">
              Srinivas<span className="text-[#FF2A2A] transition-all duration-300 group-hover:scale-125 inline-block">.dev</span>
            </span>
          </button>

          {/* Center Navigation: Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-xs font-mono uppercase tracking-widest cursor-pointer transition-colors duration-300 hover:text-white focus:outline-none ${
                  activeSection === item.id 
                    ? 'text-white font-bold' 
                    : 'text-white/60'
                }`}
              >
                {item.label}
                {/* Underline grow animation on hover & active */}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#FF2A2A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {activeSection !== item.id && (
                  <div className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: CTAs (Resume + Hire Me) */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* ATS Resume CTA */}
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#FF2A2A] hover:bg-[#ff4444] transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,42,42,0.35)] hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ATS Resume</span>
              <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-white text-black font-black uppercase">
                SDE
              </span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-white border border-white/15 glass-panel hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase bg-[#FF2A2A] text-white"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#FF2A2A] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-Down Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#0a0a0a] z-40 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-6 text-left max-w-lg mx-auto w-full">
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-3xl font-black font-display text-left uppercase tracking-tight focus:outline-none cursor-pointer hover:translate-x-2 transition-transform duration-300 ${
                    activeSection === item.id ? 'text-[#FF2A2A]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-white/10 space-y-3"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3.5 text-center rounded-2xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#FF2A2A] hover:bg-[#ff4444] transition-all flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>View ATS Resume (SDE Role)</span>
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 text-center rounded-2xl text-xs font-mono font-semibold uppercase tracking-wider text-white border border-white/20 glass-panel"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
