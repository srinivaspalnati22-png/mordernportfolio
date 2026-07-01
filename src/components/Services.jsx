import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Services() {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  // States to keep track of active steps
  const [activeCards, setActiveCards] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });

  // Scroll tracking for drawing path progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress using a spring animation
  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Connect intersection observer to activate cards when they cross near middle of screen
  useEffect(() => {
    const handleScrollActivation = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const height = rect.height;
      const scrolledInContainer = -rect.top + window.innerHeight / 1.8;
      const progress = Math.min(Math.max(scrolledInContainer / height, 0), 1);

      setActiveCards({
        step1: progress > 0.18,
        step2: progress > 0.42,
        step3: progress > 0.68,
        step4: progress > 0.88,
      });
    };

    window.addEventListener('scroll', handleScrollActivation);
    // Initial call
    handleScrollActivation();

    return () => window.removeEventListener('scroll', handleScrollActivation);
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative w-full py-28 bg-white text-[#111111] bg-grid-pattern overflow-hidden"
    >
      
      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl mx-auto mb-24">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/10 text-xs font-semibold uppercase tracking-wider bg-zinc-50 shadow-sm mb-4">
          How we work
        </span>
        <div className="relative inline-block max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-none uppercase text-black">
            Let us show you how we drive your brand to new heights
          </h2>
          {/* Handwritten-style Sketch Arrow SVG beside the heading */}
          <div className="absolute -right-16 md:-right-24 -top-8 w-16 h-16 md:w-20 md:h-20 text-[#FF2A2A] hidden sm:block rotate-12">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-full h-full">
              <path d="M10,80 C25,50 45,30 80,45" />
              <path d="M65,30 C72,35 80,45 80,45 C80,45 70,60 65,65" />
            </svg>
          </div>
        </div>
        <p className="mt-6 text-zinc-500 font-light max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Our development cycle is structured to refine details, minimize delivery friction, and engineer high-performance systems.
        </p>
      </div>

      {/* Main Process Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 min-h-[1200px] flex flex-col justify-between py-16">
        
        {/* SVG Curve Background */}
        <div className="absolute inset-0 w-full h-full flex justify-center pointer-events-none z-0">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 1200" 
            preserveAspectRatio="none" 
            className="w-full h-full opacity-30"
          >
            {/* Base dashed grey line */}
            <path 
              d="M400,0 C750,250 750,350 400,600 C50,850 50,950 400,1200" 
              fill="none" 
              stroke="#e4e4e7" 
              strokeWidth="4" 
              strokeDasharray="8,8"
            />
            {/* Animated scroll-driven path drawing */}
            <motion.path 
              d="M400,0 C750,250 750,350 400,600 C50,850 50,950 400,1200" 
              fill="none" 
              stroke="#FF2A2A" 
              strokeWidth="5" 
              strokeDasharray="8,8"
              style={{ pathLength: pathProgress }}
            />
          </svg>
        </div>

        {/* Process Cards Layout Grid/Flex */}
        {/* Card 01: Define */}
        <div ref={card1Ref} className="relative w-full flex justify-end md:pr-12 mt-4 z-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`w-full md:w-[350px] p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer shadow-lg relative ${
              activeCards.step1 
                ? 'bg-[#FF2A2A] border-[#FF2A2A] text-white rotate-[2deg] shadow-[0_20px_40px_rgba(255,42,42,0.25)]' 
                : 'bg-white border-zinc-200 text-[#111111] rotate-[1deg] hover:border-zinc-300'
            }`}
          >
            {/* Punch Hole detail */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
            </div>
            <div className={`text-4xl font-serif italic font-bold mb-4 ${activeCards.step1 ? 'text-black/50' : 'text-zinc-300'}`}>01</div>
            <h3 className="text-xl font-bold font-display uppercase tracking-wider mb-2">Define</h3>
            <p className={`text-xs md:text-sm font-light leading-relaxed ${activeCards.step1 ? 'text-white/80' : 'text-zinc-500'}`}>
              Establishing scope, evaluating architecture design, mapping application endpoints, and defining project requirements to build a secure framework.
            </p>
          </motion.div>
        </div>

        {/* Card 02: Design */}
        <div ref={card2Ref} className="relative w-full flex justify-start md:pl-12 mt-16 z-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`w-full md:w-[350px] p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer shadow-lg relative ${
              activeCards.step2 
                ? 'bg-[#FF2A2A] border-[#FF2A2A] text-white rotate-[-2deg] shadow-[0_20px_40px_rgba(255,42,42,0.25)]' 
                : 'bg-white border-zinc-200 text-[#111111] rotate-[-1deg] hover:border-zinc-300'
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
            </div>
            <div className={`text-4xl font-serif italic font-bold mb-4 ${activeCards.step2 ? 'text-black/50' : 'text-zinc-300'}`}>02</div>
            <h3 className="text-xl font-bold font-display uppercase tracking-wider mb-2">Design</h3>
            <p className={`text-xs md:text-sm font-light leading-relaxed ${activeCards.step2 ? 'text-white/80' : 'text-zinc-500'}`}>
              Structuring responsive components, customizing clean layouts, embedding premium micro-animations, and planning intuitive client interactions.
            </p>
          </motion.div>
        </div>

        {/* Card 03: Build */}
        <div ref={card3Ref} className="relative w-full flex justify-end md:pr-12 mt-16 z-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`w-full md:w-[350px] p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer shadow-lg relative ${
              activeCards.step3 
                ? 'bg-[#FF2A2A] border-[#FF2A2A] text-white rotate-[2deg] shadow-[0_20px_40px_rgba(255,42,42,0.25)]' 
                : 'bg-white border-zinc-200 text-[#111111] rotate-[1deg] hover:border-zinc-300'
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
            </div>
            <div className={`text-4xl font-serif italic font-bold mb-4 ${activeCards.step3 ? 'text-black/50' : 'text-zinc-300'}`}>03</div>
            <h3 className="text-xl font-bold font-display uppercase tracking-wider mb-2">Build</h3>
            <p className={`text-xs md:text-sm font-light leading-relaxed ${activeCards.step3 ? 'text-white/80' : 'text-zinc-500'}`}>
              Programming optimized frontends, setting up robust database models, creating APIs, and configuring generative intelligence.
            </p>
          </motion.div>
        </div>

        {/* Card 04: Launch */}
        <div ref={card4Ref} className="relative w-full flex justify-start md:pl-12 mt-16 z-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className={`w-full md:w-[350px] p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer shadow-lg relative ${
              activeCards.step4 
                ? 'bg-[#FF2A2A] border-[#FF2A2A] text-white rotate-[-2deg] shadow-[0_20px_40px_rgba(255,42,42,0.25)]' 
                : 'bg-white border-zinc-200 text-[#111111] rotate-[-1deg] hover:border-zinc-300'
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
            </div>
            <div className={`text-4xl font-serif italic font-bold mb-4 ${activeCards.step4 ? 'text-black/50' : 'text-zinc-300'}`}>04</div>
            <h3 className="text-xl font-bold font-display uppercase tracking-wider mb-2">Launch</h3>
            <p className={`text-xs md:text-sm font-light leading-relaxed ${activeCards.step4 ? 'text-white/80' : 'text-zinc-500'}`}>
              Deploying on serverless platforms, running end-to-end user experience testing, securing environment keys, and delivering live links.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-2xl md:text-3xl font-serif italic text-zinc-400 font-bold bg-zinc-50 px-6 py-2 border border-zinc-200 rounded-lg shadow-sm"
        >
          Ready to be delivered!
        </motion.div>
      </div>

    </section>
  );
}
