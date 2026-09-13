import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Sparkles, ExternalLink, Layers } from 'lucide-react';

export default function About({ onOpenResume }) {
  const coreTech = [
    { name: 'Java', level: 'DSA & OOP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', level: 'AI & Systems', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', level: 'Frontend UI', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'FastAPI', level: 'Microservices', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'PostgreSQL', level: 'Relational DB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', level: 'Containers', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
  ];

  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#07070a] text-white overflow-hidden border-t border-b border-white/5">
      
      {/* Background Ambient Glows & Technical Grid */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FF2A2A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 text-[11px] font-mono text-[#FF2A2A] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Profile & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight max-w-3xl">
            Building High-Throughput Software & Real-World AI Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Holographic Verified SDE Candidate Pass */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-sm rounded-3xl bg-zinc-900/60 border border-white/10 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-[#FF2A2A]/40 transition-all duration-500"
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                    ACTIVE CANDIDATE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                  DEVPASS // 2026
                </span>
              </div>

              {/* Portrait Frame */}
              <div className="mt-5 w-full aspect-[4/3.8] rounded-2xl overflow-hidden bg-zinc-950 border border-white/15 relative shadow-inner">
                <img 
                  src="/persona/about_pointing.png" 
                  alt="Palnati Pushpa Naga Venkata Srinivas" 
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#FF2A2A]/80 border border-white/20 text-[9px] font-mono font-bold text-white shadow-lg backdrop-blur-md">
                  That's Me! 👈
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded-md bg-black/70 border border-white/20 text-white backdrop-blur-md">
                    Palnati Srinivas
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FF2A2A]/80 text-white font-bold backdrop-blur-md">
                    3rd Year B.Tech
                  </span>
                </div>
              </div>

              {/* Candidate Info Grid */}
              <div className="mt-5 space-y-3 text-left text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Target Objective</div>
                  <div className="text-white font-bold">Product-Based SDE & AI Systems Engineer</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[9px] text-zinc-400 uppercase">Core Language</div>
                    <div className="text-amber-400 font-bold mt-0.5">Java + DSA</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[9px] text-zinc-400 uppercase">Specialization</div>
                    <div className="text-cyan-400 font-bold mt-0.5">Distributed & AI</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="text-[10px] text-zinc-400">Location</div>
                  <div className="text-zinc-200 font-bold">Andhra Pradesh, India</div>
                </div>
              </div>

              {/* Verified Barcode & CTA */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col items-center space-y-3">
                <div className="w-full h-7 flex justify-between items-center px-3 bg-white/95 rounded-md py-1">
                  {[...Array(28)].map((_, idx) => (
                    <div 
                      key={idx} 
                      className="h-full bg-black"
                      style={{ 
                        width: `${[2, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2, 3, 1, 4, 1, 2, 1, 3, 2, 1, 2, 1][idx]}px` 
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between w-full text-[10px] font-mono text-zinc-400">
                  <span>ID: PALNATI-SDE-2026</span>
                  <button 
                    onClick={onOpenResume}
                    className="text-[#FF2A2A] hover:underline font-bold uppercase cursor-pointer"
                  >
                    View Resume →
                  </button>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Structured Narrative & Pillars */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Biography & Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white">
                Palnati Pushpa Naga Venkata Srinivas
              </h3>
              
              <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                I am an aspiring <strong className="text-white font-semibold">Software Development Engineer (SDE)</strong> in my 3rd year of B.Tech Computer Science & Engineering. My primary technical focus centers on <strong className="text-amber-400 font-medium">Java Data Structures & Algorithms</strong>, rigorous algorithmic problem-solving on LeetCode, and engineering production-grade distributed architectures.
              </p>

              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Rather than treating theory in isolation, I bridge computer science fundamentals directly into functional software. Over the past year, I have architected and deployed <strong className="text-white font-medium">7+ production platforms</strong> — ranging from autonomous emergency triage (<strong className="text-[#FF2A2A] font-medium">RESQONE AI</strong>) to multimodal facial blood flow forensics (<strong className="text-purple-400 font-medium">Pulsevein</strong>).
              </p>
            </motion.div>

            {/* Core Competency Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Pillar 1 */}
              <a 
                href="https://leetcode.com/u/srinivaspalnati22-png/" 
                target="_blank" 
                rel="noreferrer"
                className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Code2 className="w-4 h-4" />
                    </span>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors font-display uppercase tracking-wide">
                    LeetCode & Java DSA
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Consistent daily practice solving Array, Tree, Graph, and Dynamic Programming problems in Java with optimized complexity.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-amber-400 font-bold">
                  <span>300+ Problems Solved</span>
                  <span>View LeetCode →</span>
                </div>
              </a>

              {/* Pillar 2 */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#FF2A2A]/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-[#FF2A2A]/10 text-[#FF2A2A] border border-[#FF2A2A]/20">
                      <Award className="w-4 h-4" />
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FF2A2A]/10 text-[#FF2A2A] border border-[#FF2A2A]/20 uppercase">
                      1st Prize
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors font-display uppercase tracking-wide">
                    Hackathons & Innovation
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Winner at CREATHON Hackathon 2026 and national finalist across multiple 24-hour engineering sprints building autonomous prototypes.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span>5+ National Events</span>
                  <span className="text-[#FF2A2A] font-bold">Validated Execution</span>
                </div>
              </div>
            </motion.div>

            {/* Core Tech Stack Micro-Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3 pt-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF2A2A]" />
                  <span>Primary Languages & Core CS Technologies</span>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {coreTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/30 hover:bg-zinc-800/60 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
                  >
                    <div className="w-8 h-8 mb-2 flex items-center justify-center">
                      <img 
                        src={tech.url} 
                        alt={tech.name} 
                        className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all" 
                      />
                    </div>
                    <div className="text-xs font-bold text-white font-mono">{tech.name}</div>
                    <div className="text-[9px] font-mono text-zinc-400 mt-0.5">{tech.level}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
