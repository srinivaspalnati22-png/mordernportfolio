import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const footerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Parallax / size reveal for giant branding text
  const textScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact"
      ref={footerRef}
      className="relative w-full min-h-[70vh] bg-[#111111] text-white pt-24 pb-12 overflow-hidden flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-between">
        
        {/* Section 1: Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-left border-b border-white/5 pb-16">
          
          {/* Left Column: Creative Services */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#FF2A2A] font-black">
              Core Expertise
            </h4>
            <div className="space-y-2 text-xs font-mono tracking-wider text-zinc-400 uppercase">
              <p className="hover:text-white transition-colors duration-300">AI/ML Model Design</p>
              <p className="hover:text-white transition-colors duration-300">Full-Stack Web Dev</p>
              <p className="hover:text-white transition-colors duration-300">Flutter Mobile Apps</p>
              <p className="hover:text-white transition-colors duration-300">Cybersecurity Tech</p>
            </div>
          </div>

          {/* Center Column: Experience Showcase */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
              Engineering Focus
            </h4>
            <p className="text-sm font-light text-zinc-400 leading-relaxed">
              Engineering secure systems with high performance and interactive user interfaces.
            </p>
            <a 
              href="#projects" 
              className="inline-flex items-center space-x-1 text-xs font-mono uppercase tracking-widest text-[#FF2A2A] hover:text-white border-b border-[#FF2A2A]/40 hover:border-white transition-all duration-300 pb-0.5"
            >
              <span>View Projects</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Right Column: Availability & Contact Details */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
              Current Location
            </h4>
            <div className="text-sm font-light text-zinc-400 space-y-2">
              <p className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#FF2A2A]" />
                <span>Andhra Pradesh, India</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={14} className="text-[#FF2A2A]" />
                <a href="tel:+919581778571" className="hover:text-white transition-colors">+91 9581778571</a>
              </p>
            </div>
          </div>

        </div>

        {/* Section 2: Giant Branding Centerpiece */}
        <div className="py-20 select-none text-center relative overflow-hidden">
          <motion.h3 
            style={{ scale: textScale, opacity: textOpacity }}
            className="text-[16vw] md:text-[14vw] font-black font-display tracking-tighter text-[#1e1e1e] leading-none lowercase text-center cursor-pointer transition-colors duration-500 hover:text-white hover:drop-shadow-[0_0_50px_rgba(255,42,42,0.4)]"
            title="Srinivas Portfolio"
          >
            srinivas
          </motion.h3>
        </div>

        {/* Section 3: Bottom Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/5 pt-12 text-left">
          
          {/* Bottom Left: Copyright / React details */}
          <div className="text-xs text-zinc-500 font-light space-y-1">
            <p>© {new Date().getFullYear()} Palnati Srinivas.</p>
            <p>
              Built using <span className="text-zinc-400 font-medium">React.js</span> & <span className="text-zinc-400 font-medium">Tailwind CSS</span>.
            </p>
          </div>

          {/* Bottom Center: Main Email CTA */}
          <div className="flex md:justify-center">
            <a 
              href="mailto:srinivaspalnati22@gmail.com" 
              className="text-base md:text-lg font-mono tracking-wide text-zinc-300 hover:text-white border-b border-zinc-700 hover:border-white transition-all duration-300 pb-1 flex items-center space-x-2"
            >
              <Mail size={16} className="text-[#FF2A2A]" />
              <span>srinivaspalnati22@gmail.com</span>
            </a>
          </div>

          {/* Bottom Right: Social / Back to Top */}
          <div className="flex justify-start md:justify-end items-center space-x-6">
            <a 
              href="https://github.com/srinivaspalnati22-png" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              Back to Top
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
