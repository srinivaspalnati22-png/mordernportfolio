import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Code, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import profilePhoto from '/profile_photo.jpg';

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

const phrases = [
  "Aspiring SDE & AI/ML Engineer",
  "Architect of RESQONE AI (Emergency Rescue)",
  "Deepfake Detection with rPPG Signals",
  "Java & DSA Mastery on LeetCode",
  "1st Prize Hackathon Winner @ NRI IT"
];

const techChips = [
  { name: "Java & DSA", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  { name: "AI/ML & CV", color: "text-[#FF2A2A] border-[#FF2A2A]/30 bg-[#FF2A2A]/10" },
  { name: "Full-Stack React", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Python & PyTorch", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  { name: "Distributed Systems", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" }
];

export default function Hero({ onOpenResume }) {
  // Dynamic typing state
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Developer Information & High-Impact Typography */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono tracking-wider text-zinc-300 font-medium uppercase">
                Open to SDE & AI Internships // B.Tech CSE '28
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-xs sm:text-sm font-mono tracking-widest text-[#FF2A2A] font-bold uppercase">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.08]">
                Palnati Srinivas
              </h1>
            </motion.div>

            {/* Animated Typing Role Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full"
            >
              <div className="min-h-[50px] sm:min-h-[64px] flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-display tracking-tight bg-gradient-to-r from-red-400 via-white to-zinc-300 bg-clip-text text-transparent">
                  {phrases[textIndex].substring(0, charIndex)}
                  <span className="inline-block w-[3px] h-6 sm:h-8 bg-[#FF2A2A] ml-1.5 animate-pulse align-middle" />
                </span>
              </div>
            </motion.div>

            {/* Bio & Engineering Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm max-w-2xl"
            >
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Computer Science undergraduate with a passion for building 
                <span className="text-white font-semibold"> mission-critical AI applications</span>, 
                <span className="text-[#FF2A2A] font-semibold"> distributed systems</span>, and 
                <span className="text-cyan-400 font-semibold"> real-time event architectures</span>. 
                Winner of multiple hackathons with experience shipping 7+ production-ready software systems.
              </p>
            </motion.div>

            {/* Interactive Tech Stacks / Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {techChips.map((chip) => (
                <span
                  key={chip.name}
                  className={`text-[11px] font-mono px-3 py-1 rounded-lg border font-medium transition-all duration-300 hover:scale-105 ${chip.color}`}
                >
                  {chip.name}
                </span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3 w-full"
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

              {/* GitHub Profile */}
              <a
                href="https://github.com/srinivaspalnati22-png"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            </motion.div>

            {/* Key Metrics / Credibility Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-zinc-400 border-t border-white/5 w-full"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>7+ Deployed Systems</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>1st Place CREATHON Winner</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>17+ Verified Credentials</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Resolution Portrait Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md group"
            >
              {/* Outer Glow & Ambient Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#FF2A2A]/40 via-purple-600/20 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] flex items-center justify-center">
                
                {/* Developer Profile Image */}
                <img
                  src={profilePhoto}
                  alt="Palnati Pushpa Naga Venkata Srinivas"
                  className="w-full h-full object-cover object-center brightness-105"
                />

                {/* Subtle edge overlay for text badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SDE Candidate // Srinivas</span>
                  </div>

                  <div className="px-2.5 py-1 rounded-full bg-[#FF2A2A]/90 border border-white/20 backdrop-blur-md text-[10px] font-mono font-bold text-white shadow-lg">
                    B.Tech CSE '28
                  </div>
                </div>

                {/* Bottom Overlay Info Pill */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3.5 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-xl flex items-center justify-between shadow-xl">
                    <div className="text-left">
                      <div className="text-xs font-bold text-white font-display">
                        Palnati Pushpa Naga Venkata Srinivas
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 flex items-center space-x-1.5 mt-0.5">
                        <span className="text-[#FF2A2A] font-semibold">Aspiring Software Development Engineer</span>
                        <span>•</span>
                        <span>AI Systems</span>
                      </div>
                    </div>

                    <button
                      onClick={onOpenResume}
                      className="px-3 py-1.5 rounded-xl bg-[#FF2A2A] hover:bg-[#ff4444] text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95 shrink-0"
                    >
                      Resume
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
