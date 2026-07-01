import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import backgroundVideo from '../assets/Content_creator_speaking_on_video_202607011318.mp4';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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
      // Try playing unmuted initially
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

  const handleVideoEnded = () => {
    setIsPaused(true);
  };

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black flex items-center">
      {/* Background Media Container (HTML5 background video) */}
      <div className="absolute inset-0 w-full h-full z-0 select-none">
        <video
          ref={videoRef}
          src={backgroundVideo}
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={handleVideoEnded}
          playsInline
        />
        {/* Cinematic dark overlay covering the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 md:via-black/50 md:to-black/30" />
      </div>

      {/* Main Layout Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full pt-16">
        
        {/* Left Content (Overlayed text) */}
        <div className="md:col-span-8 flex flex-col justify-center text-left pt-8 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 glass-panel-dark text-xs uppercase tracking-widest text-[#FF2A2A] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-ping" />
              <span>Available for Freelance & Full-time</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display tracking-tight text-white leading-[1.05] uppercase">
              Hi, I'm a <br />
              <span className="text-stroke-white text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                Full Stack Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mt-6 text-base md:text-lg text-white/70 max-w-xl font-sans font-light leading-relaxed drop-shadow-md"
          >
            Palnati Pushpa Naga Venkata Srinivas. B.Tech CSE student specializing in AI/ML engineering, full-stack prototyping, and startup building using React, Node.js, Tailwind CSS, and Google AI.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.1)] cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full border border-white/20 glass-panel text-white font-bold uppercase tracking-wider text-xs hover:bg-white/10 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Video Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-3">
        {/* Play/Pause Toggle */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label={isPaused ? "Play video" : "Pause video"}
        >
          {isPaused ? (
            <Play className="w-5 h-5 text-white fill-white" />
          ) : (
            <Pause className="w-5 h-5 text-[#FF2A2A]" />
          )}
        </button>

        {/* Sound Toggle */}
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

      {/* Bottom Scroll Indicator (Desktop Only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-20 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1.5 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-2 rounded-full bg-[#FF2A2A]"
          />
        </div>
      </div>
    </section>
  );
}
