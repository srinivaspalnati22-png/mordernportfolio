import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, FileText, Code2, Copy, Check, ExternalLink, Sparkles, Send } from 'lucide-react';

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

export default function Footer({ onOpenResume }) {
  const footerRef = useRef(null);
  const [copiedType, setCopiedType] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [0.25, 0.9]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact"
      ref={footerRef}
      className="relative w-full bg-[#060608] text-white pt-24 pb-12 overflow-hidden flex flex-col justify-between border-t border-white/10"
    >
      {/* Background ambient lighting and dark grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,42,42,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-grow flex flex-col justify-between">
        
        {/* Contact Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 text-xs uppercase tracking-widest text-[#FF2A2A] font-mono font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span>Direct Channels • Let's Build Together</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight max-w-3xl">
            Ready to Build Next-Gen Systems? <span className="text-[#FF2A2A]">Let's Talk.</span>
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-zinc-300 font-light max-w-2xl">
            Currently interviewing for <strong className="text-white font-medium">Software Engineering Roles & AI Systems</strong> positions. Reach out directly through any channel below:
          </p>
        </div>

        {/* High-Visibility Contact & Connect Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
          
          {/* Card 1: Email */}
          <div className="group relative p-6 rounded-2xl bg-zinc-900/80 border border-white/15 hover:border-[#FF2A2A]/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF2A2A]/15 border border-[#FF2A2A]/30 text-[#FF2A2A] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF2A2A] bg-[#FF2A2A]/10 px-2.5 py-1 rounded-md">
                  Primary
                </span>
              </div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider font-semibold">Email Address</h3>
              <p className="text-base sm:text-lg font-bold text-white mt-1 break-all select-all font-mono">
                srinivaspalnati22@gmail.com
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/10">
              <a
                href="mailto:srinivaspalnati22@gmail.com"
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#FF2A2A] hover:bg-[#ff4444] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Mail</span>
              </a>
              <button
                onClick={() => copyToClipboard('srinivaspalnati22@gmail.com', 'email')}
                className="py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center justify-center space-x-1 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Phone / WhatsApp */}
          <div className="group relative p-6 rounded-2xl bg-zinc-900/80 border border-white/15 hover:border-emerald-500/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  Instant Reach
                </span>
              </div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider font-semibold">Phone & WhatsApp</h3>
              <p className="text-lg sm:text-xl font-bold text-white mt-1 select-all font-mono">
                +91 9581778571
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/10">
              <a
                href="tel:+919581778571"
                className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => copyToClipboard('+919581778571', 'phone')}
                className="py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center justify-center space-x-1 cursor-pointer"
                title="Copy phone number"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Location & Roles */}
          <div className="group relative p-6 rounded-2xl bg-zinc-900/80 border border-white/15 hover:border-amber-500/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                  Location
                </span>
              </div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider font-semibold">Base & Availability</h3>
              <p className="text-lg font-bold text-white mt-1 font-sans">
                Andhra Pradesh, India
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Open for On-site, Hybrid & Global Remote Opportunities
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onOpenResume}
                className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#FF2A2A]" />
                <span>Open SDE Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Profiles & Engineering Quick Links Bar */}
        <div className="p-6 rounded-2xl bg-black/60 border border-white/10 mb-12 flex flex-wrap items-center justify-between gap-6">
          
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Engineering Profiles:
            </span>
            
            <a
              href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-mono font-semibold"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://github.com/srinivaspalnati22-png"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all text-xs font-mono font-semibold"
            >
              <GithubIcon size={14} />
              <span>GitHub (7+ AI Repos)</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://leetcode.com/u/srinivaspalnati22-png/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all text-xs font-mono font-semibold"
            >
              <Code2 size={14} />
              <span>LeetCode (Java & DSA)</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/srinivaspalnati1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all text-xs font-mono font-semibold"
            >
              <Code2 size={14} />
              <span>HackerRank</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/15 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:border-white transition-all cursor-pointer bg-white/5"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>

        {/* Large Watermark Name Centerpiece (Clean, without .dev) */}
        <div className="py-10 select-none text-center relative overflow-hidden">
          <motion.h3 
            style={{ scale: textScale, opacity: textOpacity }}
            className="text-[12vw] font-black font-display tracking-tighter text-[#1c1c1c] leading-none uppercase text-center cursor-pointer transition-colors duration-500 hover:text-white hover:drop-shadow-[0_0_50px_rgba(255,42,42,0.35)]"
            title="Palnati Srinivas"
          >
            Palnati Srinivas
          </motion.h3>
        </div>

        {/* Bottom Copyright & Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-zinc-500 font-light gap-4">
          <p>© {new Date().getFullYear()} Palnati Pushpa Naga Venkata Srinivas. All rights reserved.</p>
          <p className="font-mono text-zinc-400">
            Engineered for High Performance • Built with React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}
