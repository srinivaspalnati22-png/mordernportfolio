import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, FileText, Sparkles, ArrowRight, Code, Award } from 'lucide-react';
import backgroundVideo from '../assets/Content_creator_speaking_on_video_202607011318.mp4';

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

export default function Hero({ onOpenResume }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // Dynamic typing state
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.log("Unmuted play blocked by browser. Falling back to muted.", err);
          setIsMuted(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.log("All playback blocked:", e));
          }
        });
      }
    }
  }, [isPaused]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Unmuted autoplay blocked by browser. Playing muted instead.", err);
        setIsMuted(true);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.log("All autoplay blocked:", e));
        }
      });
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0;
        setIsPaused(false);
        videoRef.current.play().catch(e => console.log(e));
      } else {
        setIsPaused(!isPaused);
      }
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black flex items-center pt-24 pb-16">
      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full z-0 select-none">
        <video
          ref={videoRef}
          src={backgroundVideo}
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setIsPaused(true)}
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl lg:max-w-3xl flex flex-col justify-center text-left">
          
          {/* Top Badge: Goal & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="flex flex-wrap items-center gap-2 mb-4"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 text-xs uppercase tracking-widest text-[#FF2A2A] font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-ping" />
              <span>Target Role: Product SDE & AI Systems</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/10 glass-panel-dark text-xs font-mono text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>B.Tech CSE '28 • Andhra Pradesh, India</span>
            </div>
          </motion.div>

          {/* Dynamic Headline with Decreased, Balanced Font Size */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="space-y-2"
          >
            <div className="text-lg sm:text-xl font-mono text-zinc-300 font-medium">
              Hello, I'm <span className="text-white font-bold">Palnati Srinivas</span> 👋
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white leading-tight uppercase min-h-[56px] sm:min-h-[72px] flex items-center flex-wrap">
              <span className="text-stroke-white text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {phrases[textIndex].substring(0, charIndex)}
              </span>
              <span className="inline-block w-2 h-6 sm:h-8 md:h-10 bg-[#FF2A2A] ml-1.5 animate-pulse shrink-0" />
            </h1>
          </motion.div>

          {/* Bio Quote from GitHub Profile */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-sans font-light leading-relaxed drop-shadow-md border-l-2 border-[#FF2A2A] pl-4 italic"
          >
            "Building systems that don't just compute — they respond, protect, and save time when it matters most."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="mt-3 text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl font-light leading-relaxed"
          >
            Computer Science Engineering student specializing in high-throughput backend systems, Java & DSA algorithm design, and production AI platforms like <strong className="text-white font-semibold">RESQONE AI</strong> and <strong className="text-white font-semibold">Pulsevein</strong>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* ATS Resume CTA */}
            <button
              onClick={onOpenResume}
              className="px-7 py-3.5 rounded-full bg-[#FF2A2A] text-white font-bold uppercase tracking-wider text-xs hover:bg-[#ff4444] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(255,42,42,0.4)] cursor-pointer flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>ATS Resume (Product SDE)</span>
            </button>

            {/* Explore Projects */}
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-full border border-white/20 glass-panel text-white font-bold uppercase tracking-wider text-xs hover:bg-white/10 active:scale-95 transition-all duration-300 cursor-pointer flex items-center space-x-2"
            >
              <span>Explore 7+ AI Systems</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* GitHub Profile Link */}
            <a
              href="https://github.com/srinivaspalnati22-png"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/20 glass-panel text-zinc-300 hover:text-white hover:border-white transition-all duration-300 cursor-pointer"
              title="Visit GitHub @srinivaspalnati22-png"
            >
              <GithubIcon size={18} />
            </a>
          </motion.div>

          {/* Live Quick Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400"
          >
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>1st Prize Winner @ 5-Hr Hackathon</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-[#FF2A2A]" />
              <span>Java + DSA on LeetCode</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>7+ Shipped AI Platforms</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating Video Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-3">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label={isPaused ? "Play video" : "Pause video"}
        >
          {isPaused ? <Play className="w-5 h-5 text-white fill-white" /> : <Pause className="w-5 h-5 text-[#FF2A2A]" />}
        </button>

        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label={isMuted ? "Unmute background video" : "Mute background video"}
        >
          {isMuted ? (
            <div className="relative flex items-center justify-center">
              <VolumeX className="w-5 h-5 text-white/60" />
              <span className="absolute -inset-1 rounded-full border border-red-500 animate-ping opacity-75" />
            </div>
          ) : (
            <Volume2 className="w-5 h-5 text-[#FF2A2A]" />
          )}
        </button>
      </div>
    </section>
  );
}
