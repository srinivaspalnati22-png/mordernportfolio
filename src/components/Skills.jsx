import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cpu, Wrench, ShieldCheck, Trophy, Layers, Sparkles, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export default function Skills({ onOpenResume }) {
  const skillCategories = [
    {
      title: "Languages & DSA",
      icon: <Code2 className="w-6 h-6 text-[#FF2A2A]" />,
      skills: ["Java (Core, Collections, OOP)", "Python (Async, NumPy, AI)", "Data Structures & Algorithms", "C / C++", "JavaScript (ES6+) & TypeScript", "SQL (PostgreSQL / MySQL)"]
    },
    {
      title: "Core CS & Systems",
      icon: <Layers className="w-6 h-6 text-[#FF2A2A]" />,
      skills: ["Object-Oriented Design", "Operating Systems Internals", "Database Management (DBMS)", "Computer Networks (TCP/IP)", "System Design Fundamentals", "Concurrency & Multithreading"]
    },
    {
      title: "Frameworks & AI",
      icon: <Cpu className="w-6 h-6 text-[#FF2A2A]" />,
      skills: ["React.js & Three.js", "FastAPI & Python Async", "Node.js & Express.js", "PyTorch & TensorFlow", "OpenCV & Computer Vision", "Supabase & Firebase Firestore"]
    },
    {
      title: "DevOps & Tooling",
      icon: <Wrench className="w-6 h-6 text-[#FF2A2A]" />,
      skills: ["Docker Containerization", "Git & GitHub Actions", "Linux CLI & Shell Scripting", "Postman & REST API Design", "Vite & Vercel CI/CD", "Google AI SDK & Gemini"]
    }
  ];

  const certifications = [
    {
      title: "Explore Machine Learning Using Python",
      issuer: "Infosys Springboard",
      date: "Jun 2025",
      type: "AI / ML Specialization"
    },
    {
      title: "Introduction to Deep Learning & Neural Architectures",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      type: "Deep Learning"
    },
    {
      title: "Software Engineering Principles & Methodologies",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      type: "Software Engineering"
    },
    {
      title: "Introduction to Natural Language Processing (NLP)",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      type: "NLP & Transformers"
    },
    {
      title: "Prompt Engineering & Generative AI Application Design",
      issuer: "Infosys Springboard",
      date: "Jun 2025",
      type: "GenAI & LLMs"
    },
    {
      title: "National IP Awareness & Training Program (NIPAM)",
      issuer: "IP Office of India, Ministry of Commerce & Industry",
      date: "Sep 2025",
      type: "Govt of India"
    },
    {
      title: "Full Stack & Python Acceleration Programs",
      issuer: "LetsUpgrade Learning",
      date: "2025",
      type: "Web & Python"
    }
  ];

  const hackathons = [
    { 
      title: "First Prize — 5-Hour Rapid Prototype Hackathon", 
      venue: "NRI Institute of Technology", 
      badge: "🥇 1st Place Winner", 
      desc: "Architected and deployed full-stack emergency response prototype under strict time constraints."
    },
    { 
      title: "InnoGenesis National Hackathon 2026", 
      venue: "National Level Hackathon", 
      badge: "⭐ Spotlight Finalist", 
      desc: "Engineered Pulsevein multimodal deepfake detection system using physiological rPPG signals."
    },
    { 
      title: "Techzite 2025 — 24-Hour Hackathon", 
      venue: "RGUKT IIIT Nuzvid", 
      badge: "🎯 Participant", 
      desc: "Annual national tech fest building scalable distributed civic applications."
    },
    { 
      title: "24-Hour Innovation Hackathon", 
      venue: "P.B. Siddhartha College", 
      badge: "🎯 Participant", 
      desc: "Competed in high-pressure sprint for AI-driven scam prevention tools."
    },
    { 
      title: "CREATHON — Prototype Hackathon", 
      venue: "NRI Institute of Technology", 
      badge: "🎯 Participant", 
      desc: "Designed and prototyped smart civic reporting interface with multilingual support."
    }
  ];

  return (
    <section id="skills" className="relative w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2A2A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-black flex items-center justify-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product SDE Competencies</span>
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase mt-2">
            Technical Proficiency
          </h2>
          <div className="w-16 h-[3px] bg-[#FF2A2A] mx-auto mt-4" />
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            Comprehensive foundation in algorithms, low-level design, scalable web architectures, and machine learning pipelines.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={category.title}
              className="bg-zinc-950/60 border border-white/5 p-6 md:p-8 rounded-3xl hover:border-[#FF2A2A]/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(255,42,42,0.04)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#FF2A2A]/10 group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-5 uppercase tracking-wider">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start space-x-2.5 text-zinc-400 group-hover:text-zinc-300 transition-colors text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] mt-1 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons & Certifications Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Hackathons & Competitions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <Trophy className="w-6 h-6 text-[#FF2A2A]" />
                <h3 className="text-xl md:text-2xl font-black font-display uppercase tracking-wider text-white">
                  Hackathons & Contests
                </h3>
              </div>
              <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                5+ Competitions
              </span>
            </div>
            
            <div className="space-y-3.5">
              {hackathons.map((h, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-white/15 transition-all space-y-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-white text-sm md:text-base leading-snug">{h.title}</h4>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase font-mono tracking-wider shrink-0 ${
                      h.badge.includes('1st') 
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold' 
                        : h.badge.includes('Finalist')
                        ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30 font-bold'
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                    }`}>
                      {h.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{h.desc}</p>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase">{h.venue}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications (Verified LinkedIn Credentials) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-[#FF2A2A]" />
                <h3 className="text-xl md:text-2xl font-black font-display uppercase tracking-wider text-white">
                  Verified Certifications
                </h3>
              </div>
              <a 
                href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-sky-400 hover:underline flex items-center space-x-1"
              >
                <span>LinkedIn Credentials</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="space-y-3 bg-zinc-950/60 border border-white/5 p-6 rounded-3xl">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start justify-between gap-3 py-2.5 border-b border-white/5 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-[#FF2A2A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-light mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 block mb-1">
                      {cert.type}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
