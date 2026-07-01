import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Hanging Employee ID Badge */}
        <div className="lg:col-span-5 flex flex-col items-center relative pt-16 lg:pt-24">
          
          {/* Lanyard Strap hanging from the screen top */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-6 h-40 bg-black rounded-b-md shadow-lg z-10" />
          
          {/* Metal Clip & Ring connector */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 z-10 flex items-center justify-center">
            {/* Metal Ring */}
            <div className="w-6 h-6 rounded-full border-[3px] border-zinc-400 bg-transparent shadow" />
            {/* Metal Clip */}
            <div className="absolute top-4 w-4 h-6 bg-zinc-300 rounded-sm border border-zinc-500 shadow-md" />
          </div>

          {/* ID Card Wrapper with tilt angle */}
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
              <div className="text-[10px] font-mono tracking-widest text-[#FF2A2A] font-black uppercase">
                CONFERENCE PASS
              </div>
              <div className="text-[9px] font-mono text-zinc-500 tracking-wider">
                DEVPASS // 2026-2027
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
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block">ID NO</span>
                  <span className="text-[10px] font-mono text-white font-bold">#22-PNG</span>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block">ROLE</span>
                  <span className="text-[10px] font-mono text-[#FF2A2A] font-bold">FULL STACK</span>
                </div>
              </div>
            </div>

            {/* Simulated Barcode */}
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
              Hello!
            </h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mt-4 uppercase">
              I AM <span className="text-black font-black font-display text-2xl md:text-3xl">PALNATI PUSHPA NAGA VENKATA SRINIVAS</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4 text-white/90 font-light text-base md:text-lg leading-relaxed max-w-2xl"
          >
            <p>
              I am a Computer Science Engineering student specializing in <strong className="text-black font-bold">AI/ML applications</strong>, <strong className="text-black font-bold">full-stack development</strong>, and cyber-safety products. I have successfully built and shipped five AI-powered platforms spanning scam detection, civic tech, and career safety.
            </p>
            <p className="text-zinc-200">
              Competing in multiple hackathons (including a First Prize win) has trained me to transform high-level concepts into functional prototypes rapidly. I work at the intersection of AI, cyber security, and development to create secure, intuitive systems.
            </p>
          </motion.div>

          {/* Technology Skills Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6"
          >
            <h4 className="text-xs font-mono uppercase tracking-widest text-black/60 font-black mb-4">
              Core Tech Stack
            </h4>
            <div className="flex items-center space-x-12">
              {[
                { 
                  name: 'React', 
                  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
                },
                { 
                  name: 'Node.js', 
                  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
                },
                { 
                  name: 'MongoDB', 
                  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' 
                }
              ].map((logo, idx) => (
                <motion.div
                  key={logo.name}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-zinc-950/80 p-4 rounded-2xl flex items-center justify-center border border-black/20 shadow-2xl animate-float cursor-pointer"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]" 
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
          className="relative block w-full h-16 md:h-24 fill-white"
        >
          <path d="M0,0 C150,90 350,15 500,75 C680,147 850,20 1000,90 C1100,136 1150,110 1200,85 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
}
