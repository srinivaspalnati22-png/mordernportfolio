import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Cpu, Server, Rocket, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';

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

  // Connect scroll listener to activate cards progressively
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
    handleScrollActivation();
    return () => window.removeEventListener('scroll', handleScrollActivation);
  }, []);

  const steps = [
    {
      num: "01",
      title: "System Architecture & Data Modeling",
      badge: "High-Throughput Design",
      icon: <Layers className="w-5 h-5 text-[#FF2A2A]" />,
      desc: "Architecting event-driven pipelines, designing normalized relational & document schemas, mapping REST/WebSocket protocols, and defining < 200ms latency SLAs.",
      ref: card1Ref,
      isActive: activeCards.step1,
      align: "justify-end md:pr-12",
      rotate: "rotate-[1deg]"
    },
    {
      num: "02",
      title: "Algorithmic Engineering & Complexity Pruning",
      badge: "Java & DSA Optimization",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      desc: "Implementing optimized data structures, eliminating algorithmic bottlenecks, optimizing memory & CPU complexity to O(N log N) or O(1), and hardening edge-case handling.",
      ref: card2Ref,
      isActive: activeCards.step2,
      align: "justify-start md:pl-12",
      rotate: "rotate-[-1deg]"
    },
    {
      num: "03",
      title: "Full-Stack Integration & AI Inference",
      badge: "FastAPI, React & CV Models",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      desc: "Connecting responsive React frontends with asynchronous Python backends, integrating PyTorch/OpenCV deep learning pipelines, and synchronizing real-time state via WebSockets.",
      ref: card3Ref,
      isActive: activeCards.step3,
      align: "justify-end md:pr-12",
      rotate: "rotate-[1deg]"
    },
    {
      num: "04",
      title: "Containerized Deployment & Production Health",
      badge: "Docker, Cloud & Edge Monitoring",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      desc: "Containerizing services with Docker, deploying to edge cloud infrastructures, configuring automated CI/CD builds, and establishing real-time telemetry logging.",
      ref: card4Ref,
      isActive: activeCards.step4,
      align: "justify-start md:pl-12",
      rotate: "rotate-[-1deg]"
    }
  ];

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative w-full py-28 bg-[#08080b] text-white overflow-hidden border-b border-white/5"
    >
      {/* Background ambient lighting and dark technical grid */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#FF2A2A]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center mb-20">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 text-[11px] font-mono text-[#FF2A2A] uppercase tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Engineering SDLC & Execution Lifecycle</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
          From System Architecture to Production Deployment
        </h2>
        <div className="w-12 h-[2px] bg-[#FF2A2A] mx-auto mt-4" />
        <p className="mt-4 text-zinc-400 font-light text-sm md:text-base leading-relaxed">
          A disciplined, production-first development workflow centered on rigorous algorithmic foundations, low-latency microservices, and robust cloud deployment.
        </p>
      </div>

      {/* Main Process Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 min-h-[1100px] flex flex-col justify-between py-12">
        
        {/* SVG Glowing Curve Background */}
        <div className="absolute inset-0 w-full h-full flex justify-center pointer-events-none z-0">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 1200" 
            preserveAspectRatio="none" 
            className="w-full h-full opacity-40"
          >
            {/* Base dashed line */}
            <path 
              d="M400,0 C750,250 750,350 400,600 C50,850 50,950 400,1200" 
              fill="none" 
              stroke="#27272a" 
              strokeWidth="3" 
              strokeDasharray="6,6"
            />
            {/* Animated scroll-driven glowing trace */}
            <motion.path 
              d="M400,0 C750,250 750,350 400,600 C50,850 50,950 400,1200" 
              fill="none" 
              stroke="#FF2A2A" 
              strokeWidth="4" 
              strokeDasharray="6,6"
              style={{ pathLength: pathProgress }}
            />
          </svg>
        </div>

        {/* Process Cards */}
        {steps.map((step) => (
          <div 
            key={step.num}
            ref={step.ref} 
            className={`relative w-full flex ${step.align} z-10 my-6`}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className={`w-full md:w-[390px] p-7 rounded-3xl border transition-all duration-500 cursor-pointer shadow-2xl relative backdrop-blur-xl ${
                step.isActive 
                  ? 'bg-zinc-950/90 border-[#FF2A2A]/70 text-white shadow-[0_0_35px_rgba(255,42,42,0.18)]' 
                  : 'bg-zinc-900/60 border-white/10 text-white hover:border-white/30'
              }`}
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className={`p-2 rounded-xl border ${step.isActive ? 'bg-[#FF2A2A]/20 border-[#FF2A2A]/40' : 'bg-white/5 border-white/10'}`}>
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-300">
                    {step.badge}
                  </span>
                </div>
                <div className={`text-2xl font-mono font-black ${step.isActive ? 'text-[#FF2A2A]' : 'text-zinc-600'}`}>
                  {step.num}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm font-light text-zinc-300 leading-relaxed">
                {step.desc}
              </p>

              {/* Status footer pill */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                <span className={step.isActive ? 'text-emerald-400 font-bold flex items-center space-x-1' : 'text-zinc-500'}>
                  {step.isActive ? (
                    <>
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Pipeline Active</span>
                    </>
                  ) : (
                    <span>Phase {step.num} Ready</span>
                  )}
                </span>
                <span className="text-zinc-500">SDE Standard</span>
              </div>
            </motion.div>
          </div>
        ))}

      </div>

      {/* Bottom Resilient Uptime Badge */}
      <div className="text-center mt-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-2xl hover:border-emerald-500/40 transition-colors"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Engineered for Production Resilience • Clean Code • 99.9% Reliability</span>
        </motion.div>
      </div>

    </section>
  );
}
