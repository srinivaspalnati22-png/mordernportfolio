import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, ArrowRight, Award, CheckCircle2, ShieldCheck, Trophy, Zap, Cpu, Sparkles, Terminal, Code2, ExternalLink } from 'lucide-react';
import profilePhoto from '/profile_photo.jpg';

const GithubIcon = ({ size = 18, ...props }) => (
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

const LinkedinIcon = ({ size = 18, ...props }) => (
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
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetcodeIcon = ({ size = 18, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.621 5.318 5.318 0 0 0 2.76 2.06c.452.139.924.208 1.398.204a5.534 5.534 0 0 0 2.222-.463 5.334 5.334 0 0 0 1.83-1.391l4.085-4.52a1.374 1.374 0 0 0-1.026-2.288 1.374 1.374 0 0 0-1.006.444l-4.048 4.476a2.767 2.767 0 0 1-1.011.758 2.787 2.787 0 0 1-2.148-.093 2.75 2.75 0 0 1-1.398-1.57 2.894 2.894 0 0 1-.03-1.637 2.87 2.87 0 0 1 .65-1.12l3.874-4.148 4.793-5.28A1.374 1.374 0 0 0 13.483 0zm1.522 17.973H7.018a1.374 1.374 0 0 0 0 2.748h7.987a1.374 1.374 0 0 0 0-2.748z" />
  </svg>
);

const phrases = [
  "Mastering Java & Data Structures on LeetCode",
  "Aspiring Software Development Engineer (SDE)",
  "Architect of RESQONE AI (Emergency Rescue)",
  "1st Prize Hackathon Winner @ NRI IT",
  "Building Distributed Real-Time Systems"
];

const techChips = [
  { name: "Java & DSA", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  { name: "Distributed Systems", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Full-Stack React", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  { name: "Python & PyTorch", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  { name: "System Design", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" }
];

export default function Hero({ onOpenResume }) {
  // Dynamic typing state
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Card tilt motion controls
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    let typingSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200; // Pause at end of text
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
      typingSpeed = 400; // Pause before typing next
      const timer = setTimeout(() => {}, typingSpeed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      {/* Technical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[size:4rem_4rem]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`
        }}
      />

      {/* Floating Animated Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [0, 40, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FF2A2A]/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.22, 0.1],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full relative z-10">
        
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Executive Developer Information & High-Impact Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono tracking-wider text-zinc-300 font-medium uppercase">
                3rd Year B.Tech CSE // Learning Java + DSA // Open to SDE Roles
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1.5"
            >
              <p className="text-xs sm:text-sm font-mono tracking-widest text-[#FF2A2A] font-bold uppercase">
                Software Development Engineer • Distributed AI Systems
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.06]">
                Palnati Srinivas
              </h1>
            </motion.div>

            {/* Animated Typing Role Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <div className="min-h-[48px] sm:min-h-[56px] flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-zinc-200">
                  {phrases[textIndex].substring(0, charIndex)}
                  <span className="inline-block w-[3px] h-6 sm:h-7 bg-[#FF2A2A] ml-1.5 animate-pulse align-middle" />
                </span>
              </div>
            </motion.div>

            {/* Bio & Engineering Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm max-w-2xl text-left"
            >
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                <span className="text-white font-semibold">3rd-Year B.Tech CSE student</span> actively mastering 
                <span className="text-amber-400 font-semibold"> Java + Data Structures & Algorithms (DSA)</span> on LeetCode, while engineering 
                <span className="text-[#FF2A2A] font-semibold"> mission-critical AI applications</span> and 
                <span className="text-cyan-400 font-semibold"> real-time event architectures</span>. 
                Winner of multiple hackathons with experience shipping 7+ production-ready software systems.
              </p>
            </motion.div>

            {/* Interactive Tech Stacks / Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {techChips.map((chip) => (
                <span
                  key={chip.name}
                  className={`text-[11px] font-mono px-3 py-1.5 rounded-lg border font-medium transition-all duration-300 hover:scale-105 ${chip.color}`}
                >
                  {chip.name}
                </span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full"
            >
              {/* ATS Resume Modal Trigger */}
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-[#FF2A2A] hover:bg-[#ff4444] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-2 transition-all duration-300 shadow-[0_0_25px_rgba(255,42,42,0.35)] hover:shadow-[0_0_35px_rgba(255,42,42,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View ATS Resume</span>
              </button>

              {/* View Projects Link */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 font-display font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/10 hover:border-white/30 flex items-center space-x-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Featured Projects</span>
                <ArrowRight className="w-4 h-4 text-[#FF2A2A]" />
              </a>

              {/* Social Link Cluster */}
              <div className="flex items-center space-x-2">
                {/* GitHub Profile */}
                <a
                  href="https://github.com/srinivaspalnati22-png"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                {/* LinkedIn Profile */}
                <a
                  href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-[#0077B5] border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>

                {/* LeetCode Profile */}
                <a
                  href="https://leetcode.com/u/srinivaspalnati22-png/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-[#FFA116] border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <LeetcodeIcon size={18} />
                </a>
              </div>
            </motion.div>

            {/* Key Credibility Bento Stats Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 w-full max-w-2xl"
            >
              <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-1.5 text-amber-400 mb-0.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-xs sm:text-sm font-mono font-black text-white">300+</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">LeetCode Solved</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-1.5 text-[#FF2A2A] mb-0.5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span className="text-xs sm:text-sm font-mono font-black text-white">1st Prize</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">CREATHON 2026</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center space-x-1.5 text-emerald-400 mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-xs sm:text-sm font-mono font-black text-white">7+ Deployed</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">AI Systems</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clean Architectural Bento Studio Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full space-y-4">
            
            {/* Main Studio Portrait Card */}
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[380px] sm:max-w-[410px] select-none"
            >
              {/* Subtle Ambient Backlight Glow */}
              <div className="absolute -inset-4 bg-gradient-to-b from-[#FF2A2A]/20 via-purple-600/15 to-cyan-500/15 rounded-[3rem] blur-2xl opacity-60 pointer-events-none" />

              {/* 3D Tilted Glass Card Frame */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full aspect-[3.8/4.6] rounded-[2.5rem] p-[2px] bg-gradient-to-b from-white/20 via-[#FF2A2A]/30 to-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(255,42,42,0.15)] group"
              >
                {/* Inner Card Body */}
                <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-zinc-950 flex flex-col justify-between">
                  
                  {/* High-Resolution Developer Portrait */}
                  <img
                    src="/persona/hero_suit.png"
                    alt="Palnati Pushpa Naga Venkata Srinivas"
                    className="absolute inset-0 w-full h-full object-cover object-[center_12%] brightness-105 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Smooth Studio Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

                  {/* Subtle Interactive Glare */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle 320px at ${glareX} ${glareY}, rgba(255,255,255,0.4), transparent 70%)`
                    }}
                  />

                  {/* Top Overlay Badge Bar */}
                  <div className="relative z-20 pt-4 px-4 flex items-center justify-between">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available for SDE</span>
                    </div>

                    <div className="px-3 py-1.5 rounded-full bg-[#FF2A2A]/90 border border-white/20 backdrop-blur-md text-[10px] font-mono font-bold text-white shadow-lg">
                      3rd Year B.Tech
                    </div>
                  </div>

                  {/* Bottom Integrated Pedestal */}
                  <div className="relative z-20 pb-4 px-4">
                    <div className="p-3.5 rounded-2xl bg-black/85 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-3 group-hover:border-[#FF2A2A]/40 transition-colors">
                      <div className="text-left overflow-hidden">
                        <div className="text-xs sm:text-sm font-bold text-white font-display uppercase tracking-wider truncate">
                          Palnati Srinivas
                        </div>
                        <div className="text-[10px] font-mono text-zinc-300 flex items-center space-x-1.5 mt-0.5">
                          <span className="text-[#FF2A2A] font-semibold">SDE Candidate</span>
                          <span>•</span>
                          <span className="text-amber-400 font-medium truncate">Java + DSA</span>
                        </div>
                      </div>

                      <button
                        onClick={onOpenResume}
                        className="px-3 py-1.5 rounded-xl bg-[#FF2A2A] hover:bg-[#ff4444] text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(255,42,42,0.4)] hover:shadow-[0_0_20px_rgba(255,42,42,0.7)] cursor-pointer hover:scale-105 active:scale-95 shrink-0"
                      >
                        Resume
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

            {/* Sub-Card Bento Highlights */}
            <div className="w-full max-w-[380px] sm:max-w-[410px] grid grid-cols-2 gap-3">
              <a 
                href="https://leetcode.com/u/srinivaspalnati22-png/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 backdrop-blur-md flex items-center space-x-2.5 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-amber-400 font-bold">LeetCode DSA</div>
                  <div className="text-xs font-mono font-bold text-white truncate group-hover:text-amber-300 transition-colors">Java & Algos</div>
                </div>
              </a>

              <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#FF2A2A]/40 backdrop-blur-md flex items-center space-x-2.5 transition-all duration-300 hover:scale-[1.02] group">
                <div className="p-2 rounded-xl bg-[#FF2A2A]/10 text-[#FF2A2A] border border-[#FF2A2A]/20 group-hover:bg-[#FF2A2A]/20 transition-colors">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-red-400 font-bold">1st Prize Winner</div>
                  <div className="text-xs font-mono font-bold text-white truncate">CREATHON '26</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
