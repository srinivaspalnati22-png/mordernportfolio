import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, ShieldAlert, HeartHandshake, Briefcase, 
  BarChart3, Search, Activity, Sparkles, Star 
} from 'lucide-react';

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

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "RESQONE AI",
      tagline: "Flagship Autonomous Emergency Triage & Rescue Platform",
      description: "Autonomous rescue intelligence system featuring AI pre-crash sensor-fusion radar, 25-second automated SOS broadcast, and Three.js 3D live ambulance GPS route tracing along emergency green corridors with ICU reservation.",
      icon: <Activity className="w-6 h-6 text-[#FF2A2A]" />,
      tags: ["React", "Three.js", "FastAPI", "Supabase", "WebSockets", "Python"],
      github: "https://github.com/srinivaspalnati22-png/RESQONE-AI",
      live: "https://resqone-ai-app.vercel.app",
      category: "flagship",
      featured: true,
      badge: "Production Live"
    },
    {
      title: "Pulsevein",
      tagline: "Multimodal Deepfake Detection using rPPG",
      description: "Forensic synthetic face detection analyzing sub-visual facial blood flow changes via remote photoplethysmography (rPPG) paired with lip-audio synchronization cross-correlation networks.",
      icon: <Search className="w-6 h-6 text-purple-400" />,
      tags: ["Python", "OpenCV", "TensorFlow", "Signal Processing", "Librosa"],
      github: "https://github.com/srinivaspalnati22-png/PLUSEVEIN",
      live: null,
      category: "ai",
      featured: true,
      badge: "InnoGenesis Finalist"
    },
    {
      title: "TrustShield AI",
      tagline: "Real-Time Digital Threat & Scam Protection",
      description: "AI-powered scam detection platform scanning messages, verifying job offer letters, checking phishing URLs, and delivering threat-intelligence advisories.",
      icon: <ShieldAlert className="w-6 h-6 text-[#FF2A2A]" />,
      tags: ["Python", "Flutter", "Firebase", "Google AI SDK", "NLP Heuristics"],
      github: "https://github.com/srinivaspalnati22-png/TRUTHSHEILD-AI",
      live: null,
      category: "ai",
      featured: false,
      badge: "Shipped"
    },
    {
      title: "SmartCivic AI",
      tagline: "Multilingual Voice-Driven Civic Issue Router",
      description: "Civic complaint engine supporting voice input in English, Hindi, Telugu, and Tamil with automated geocoding categorization and routing to municipal departments.",
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
      tags: ["Flask", "React", "AI Translation", "Geocoding API"],
      github: "https://github.com/srinivaspalnati22-png/SMARTCIVIC-AI",
      live: "https://smartcivicai.vercel.app",
      category: "system",
      featured: false,
      badge: "Live App"
    },
    {
      title: "CareerSafe",
      tagline: "AI Job Scam Detector & Resume Authenticity Verifier",
      description: "Protects job seekers by analyzing suspicious job postings, verifying recruiter authenticity, cross-checking resume claims, and providing career safety advice.",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      tags: ["Node.js", "React", "NLP Model", "Capacitor", "Job Analytics"],
      github: "https://github.com/srinivaspalnati22-png/AI-POWERED-CAREER-SAFETY",
      live: "https://ai-powered-career-safety.vercel.app",
      category: "system",
      featured: false,
      badge: "Live App"
    },
    {
      title: "TruthLens AI",
      tagline: "Misinformation & Fake-News Verification Engine",
      description: "Comprehensive misinformation detection combining clickbait classification, sentiment analysis, publisher bias tracking, and source credibility scoring.",
      icon: <Search className="w-6 h-6 text-amber-400" />,
      tags: ["Python", "Transformers", "NLTK", "Flask", "Tailwind CSS"],
      github: "https://github.com/srinivaspalnati22-png/Truthlensai",
      live: "https://truthlensai-ecru.vercel.app",
      category: "ai",
      featured: false,
      badge: "Live App"
    },
    {
      title: "NexusAI",
      tagline: "Retail Predictive Demand Forecasting Platform",
      description: "Retail demand-forecasting platform incorporating predictive analytics to forecast product inventory requirements and seasonal trend patterns.",
      icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
      tags: ["Python", "Scikit-Learn", "FastAPI", "React Charts"],
      github: "https://github.com/srinivaspalnati22-png/Retaildemandai",
      live: "https://smartretailai.vercel.app",
      category: "system",
      featured: false,
      badge: "Live App"
    }
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'flagship') return p.category === 'flagship' || p.live;
    if (filter === 'ai') return p.category === 'ai';
    if (filter === 'system') return p.category === 'system';
    return true;
  });

  return (
    <section id="projects" className="relative w-full py-28 bg-[#07070a] text-white border-b border-white/5 overflow-hidden">
      {/* Background lights */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF2A2A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Builder Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 text-[11px] font-mono text-[#FF2A2A] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Systems & Open Source</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
              Featured Engineering Systems
            </h2>
            <p className="text-zinc-400 font-light text-left mt-4 leading-relaxed text-sm md:text-base max-w-2xl">
              Autonomous emergency triage platforms, deep learning computer vision pipelines, and production microservices with live deployments.
            </p>
          </div>

          {/* Builder Spotlight Persona Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group p-3.5 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-[#FF2A2A]/40 transition-all shadow-xl flex items-center gap-4 max-w-sm w-full">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-zinc-950 flex items-end justify-center p-1">
                <img 
                  src="/persona/projects_builder.png" 
                  alt="Srinivas Palnati - Building Ideas into Impact" 
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500 z-10"
                />
              </div>
              <div className="text-left space-y-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  <Star className="w-2.5 h-2.5" />
                  Building Impact
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white font-display">Systems Builder</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Translating complex AI and real-time systems into shipped, production-grade applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {[
            { label: 'All Projects (7)', id: 'all' },
            { label: 'Live Deployed Apps (5)', id: 'flagship' },
            { label: 'AI & Computer Vision (3)', id: 'ai' },
            { label: 'Distributed Systems & Web (4)', id: 'system' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer border ${
                filter === tab.id
                  ? 'bg-[#FF2A2A] text-white border-[#FF2A2A] font-bold shadow-[0_0_15px_rgba(255,42,42,0.35)]'
                  : 'bg-zinc-900/60 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={project.title}
              className={`bg-zinc-950/60 border p-8 rounded-3xl transition-all duration-500 group flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(255,42,42,0.06)] relative overflow-hidden ${
                project.featured 
                  ? 'border-[#FF2A2A]/40 hover:border-[#FF2A2A]' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2A2A]/10 rounded-full blur-2xl pointer-events-none" />
              )}

              <div>
                {/* Top Card Icon & Links */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF2A2A]/10 group-hover:border-[#FF2A2A]/30 transition-all duration-300">
                    {project.icon}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                      project.badge === 'Production Live' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : project.badge.includes('Finalist')
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : 'bg-white/10 text-zinc-300 border border-white/10'
                    }`}>
                      {project.badge}
                    </span>

                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={18} />
                    </a>

                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 rounded-xl text-zinc-400 hover:text-[#FF2A2A] hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        title="View Live App"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#FF2A2A] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 font-semibold mt-1">
                  {project.tagline}
                </p>
                <p className="mt-4 text-zinc-300 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags and Action link */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-[#FF2A2A] hover:text-white uppercase tracking-wider transition-colors pt-2"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
