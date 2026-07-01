import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldAlert, HeartHandshake, Briefcase, BarChart3, Search } from 'lucide-react';

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

export default function Projects() {
  const projects = [
    {
      title: "TrustShield AI",
      description: "An AI-powered digital trust and scam-protection platform. It scans messages in real time, detects phishing URLs, verifies job offer letters, and fact-checks suspicious content. Features a community threat-intelligence feed and interactive analytics dashboard.",
      icon: <ShieldAlert className="w-6 h-6 text-[#FF2A2A]" />,
      tags: ["Python", "Flutter", "Firebase", "Google AI SDK", "Phishing Detection"],
      github: "https://github.com/srinivaspalnati22-png/trustshield-ai"
    },
    {
      title: "SmartCivic AI",
      description: "A multilingual AI civic issue reporting platform supporting voice input in English, Hindi, Telugu, and Tamil. Categorizes complaints automatically and uses location-aware reporting to route civic issues directly to municipal departments.",
      icon: <HeartHandshake className="w-6 h-6 text-[#FF2A2A]" />,
      tags: ["Flask", "React", "AI Translation", "Geocoding API"],
      github: "https://github.com/srinivaspalnati22-png/smartcivic-ai"
    },
    {
      title: "CareerSafe",
      description: "An AI-driven platform protecting job seekers by analyzing and detecting job scams, verifying employer authenticity, cross-checking resume details, and delivering automated, personalized career safety guidance.",
      icon: <Briefcase className="w-6 h-6 text-[#FF2A2A]" />,
      tags: ["Node.js", "React", "NLP Model", "Job Market Analytics"],
      github: "https://github.com/srinivaspalnati22-png/careersafe"
    },
    {
      title: "NexusAI",
      description: "A retail demand-forecasting platform incorporating predictive analytics to forecast product demand, analyze seasonal patterns, and generate interactive inventory optimization dashboards.",
      icon: <BarChart3 className="w-6 h-6 text-[#FF2A2A]" />,
      tags: ["Python", "Scikit-Learn", "FastAPI", "React Charts"],
      github: "https://github.com/srinivaspalnati22-png/nexus-ai"
    },
    {
      title: "TruthLens AI",
      description: "A misinformation and fake-news detection platform combining clickbait classification, sentiment analysis, publisher bias tracking, and source credibility scoring to combat digital deception.",
      icon: <Search className="w-6 h-6 text-[#FF2A2A]" />,
      tags: ["Python", "NLTK", "Transformers", "React Dashboard"],
      github: "https://github.com/srinivaspalnati22-png/truthlens-ai"
    }
  ];

  return (
    <section id="projects" className="relative w-full py-24 bg-[#0a0a0a] text-white">
      
      {/* Visual background lights */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#FF2A2A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-black">
              Showcase
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase mt-2">
              Featured Work
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-md text-left mt-4 md:mt-0 leading-relaxed text-sm md:text-base">
            A handpicked selection of platforms built using machine learning models, modern web technologies, and security-centric design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={project.title}
              className="bg-zinc-950/40 border border-white/5 p-8 rounded-3xl hover:border-[#FF2A2A]/30 transition-all duration-500 group flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(255,42,42,0.04)]"
            >
              <div>
                {/* Top Card Icon & Links */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF2A2A]/10 group-hover:border-[#FF2A2A]/20 transition-all duration-300">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3 text-zinc-500">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#FF2A2A] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-4 text-zinc-400 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-400 group-hover:text-white group-hover:border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
