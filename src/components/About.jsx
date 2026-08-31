import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cpu, FileText, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#FF2A2A] text-white pt-24 pb-36 overflow-hidden flex items-center">
      
      {/* Decorative Floating Black Stars */}
      <div className="absolute top-12 left-10 w-8 h-8 text-black opacity-30 animate-pulse-slow">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-12 w-12 h-12 text-black opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 text-black opacity-25 animate-pulse-slow" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Hanging Employee / SDE Conference ID Badge */}
        <div className="lg:col-span-5 flex flex-col items-center relative pt-16 lg:pt-24">
          
          {/* Lanyard Strap hanging from screen top */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-6 h-40 bg-black rounded-b-md shadow-lg z-10" />
          
          {/* Metal Clip & Ring connector */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 z-10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-[3px] border-zinc-400 bg-transparent shadow" />
            <div className="absolute top-4 w-4 h-6 bg-zinc-300 rounded-sm border border-zinc-500 shadow-md" />
          </div>

          {/* ID Card Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            whileHover={{ rotate: 1, scale: 1.03, y: -5 }}
            className="relative w-80 bg-zinc-900 border-[3px] border-black rounded-2xl p-5 shadow-[10px_20px_40px_rgba(0,0,0,0.5)] cursor-pointer z-0 select-none overflow-hidden"
          >
            {/* Top Badge header */}
            <div className="flex flex-col items-center justify-center pb-4 border-b border-white/10">
              <div className="text-[10px] font-mono tracking-widest text-[#FF2A2A] font-black uppercase flex items-center space-x-1">
                <span>SDE CANDIDATE PASS</span>
              </div>
              <div className="text-[9px] font-mono text-zinc-500 tracking-wider">
                DEVPASS // PRODUCT SDE '28
              </div>
            </div>

            {/* Profile Photo Area */}
            <div className="mt-5 w-full aspect-square rounded-xl overflow-hidden bg-zinc-800 border-2 border-black shadow-inner">
              <img 
                src="/prompt_image_2.png" 
                alt="Palnati Pushpa Naga Venkata Srinivas" 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>

            {/* Card Info Area */}
            <div className="mt-5 space-y-3 text-left">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider">Name</span>
                <span className="text-base font-black tracking-tight text-white font-display block uppercase leading-none">
                  P P N V SRINIVAS
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2">
                <div>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block">TARGET</span>
                  <span className="text-[10px] font-mono text-white font-bold">PRODUCT SDE</span>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block">CORE</span>
                  <span className="text-[10px] font-mono text-[#FF2A2A] font-bold">JAVA • AI/ML</span>
                </div>
              </div>
            </div>

            {/* Barcode */}
            <div className="mt-6 border-t border-white/10 pt-4 flex flex-col items-center space-y-1.5">
              <div className="w-full h-8 flex justify-between items-center px-2 bg-white rounded-sm py-1">
                {[...Array(26)].map((_, idx) => (
                  <div 
                    key={idx} 
                    className="h-full bg-black"
                    style={{ 
                      width: `${[2, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2, 3, 1, 4, 1, 2, 1, 3, 2, 1][idx]}px` 
                    }}
                  />
                ))}
              </div>
              <span className="text-[8px] font-mono text-zinc-500 tracking-widest">
                *GITHUB-SRINIVASPALNATI22-PNG*
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-black font-display tracking-tighter text-black uppercase leading-none select-none">
              About Me
            </h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-4 uppercase">
              PALNATI PUSHPA NAGA VENKATA SRINIVAS
            </h3>
            <div className="text-sm font-mono text-black font-bold uppercase tracking-wider mt-1">
              Aspiring Software Development Engineer (SDE) & AI/ML Engineer
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 text-white/95 font-light text-base md:text-lg leading-relaxed max-w-2xl"
          >
            <p>
              I am a Computer Science Engineering student dedicated to building robust, high-throughput systems and intelligent applications. My primary focus lies in <strong className="text-black font-bold">Data Structures & Algorithms (Java)</strong>, <strong className="text-black font-bold">System Design fundamentals</strong>, and <strong className="text-black font-bold">Production-Grade AI Pipelines</strong>.
            </p>
            <p className="text-zinc-100">
              I believe in shipping real software. Over the past year, I have engineered and deployed <strong>7+ AI platforms</strong> spanning autonomous emergency triage (<strong className="text-black font-bold">RESQONE AI</strong>), multimodal rPPG deepfake forensics (<strong className="text-black font-bold">Pulsevein</strong>), and cybersecurity scam defense.
            </p>
          </motion.div>

          {/* Competitive Programming & SDE Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
          >
            <a 
              href="https://leetcode.com/u/srinivaspalnati22-png/" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-2xl bg-black/80 border border-black/40 hover:border-white transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">Competitive Programming</span>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">LeetCode • Java & DSA</h4>
                <p className="text-xs text-zinc-400">Daily algorithmic problem solving</p>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white" />
            </a>

            <a 
              href="https://www.hackerrank.com/profile/srinivaspalnati1" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-2xl bg-black/80 border border-black/40 hover:border-white transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Algorithm Mastery</span>
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">HackerRank Certified</h4>
                <p className="text-xs text-zinc-400">Data structures & logic design</p>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white" />
            </a>
          </motion.div>

          {/* Core Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/70 font-black mb-4">
              Core Languages & Frameworks
            </h4>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'FastAPI', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
              ].map((logo, idx) => (
                <motion.div
                  key={logo.name}
                  whileHover={{ scale: 1.15, y: -6 }}
                  className="w-14 h-14 bg-zinc-950/90 p-3 rounded-2xl flex items-center justify-center border border-black/30 shadow-xl cursor-pointer"
                  title={logo.name}
                >
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="w-full h-full object-contain filter drop-shadow" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Divider: Torn-paper SVG transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16 md:h-24 fill-[#0c0c0f]"
        >
          <path d="M0,0 C150,90 350,15 500,75 C680,147 850,20 1000,90 C1100,136 1150,110 1200,85 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
}
