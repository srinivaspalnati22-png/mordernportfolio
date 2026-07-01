import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
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
          if (rect.top <= 120 && rect.bottom >= 120) {
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
    { label: 'Services', id: 'services' },
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
            className="flex items-center space-x-1 cursor-pointer group focus:outline-none"
          >
            <span className="text-2xl md:text-3xl font-black font-display text-white tracking-tight">
              Srinivas<span className="text-[#FF2A2A] transition-all duration-300 group-hover:scale-125 inline-block">.</span>
            </span>
          </button>

          {/* Center Navigation: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium tracking-wide uppercase cursor-pointer transition-colors duration-300 hover:text-white focus:outline-none ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-white/60'
                }`}
              >
                {item.label}
                {/* Underline grow animation on hover & active */}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF2A2A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {activeSection !== item.id && (
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white/10 glass-panel hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,42,42,0.3)]"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#FF2A2A] transition-colors focus:outline-none cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
            className="fixed inset-0 w-full h-screen bg-[#FF2A2A] z-40 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-6 text-left max-w-lg mx-auto w-full">
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-4xl font-black font-display text-left uppercase tracking-tight focus:outline-none cursor-pointer hover:translate-x-3 transition-transform duration-300 ${
                    activeSection === item.id ? 'text-black' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-8 border-t border-white/20"
              >
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-4 text-center rounded-full text-base font-bold uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Hire Me
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
