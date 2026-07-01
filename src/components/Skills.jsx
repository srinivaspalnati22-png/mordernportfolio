import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cpu, Wrench, ShieldCheck, Trophy } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-6 h-6 text-[#FF2A2A]" />,
      skills: ["Python", "Java", "Data Structures & Algorithms", "SQL", "JavaScript", "HTML5 & CSS3"]
    },
    {
      title: "Core Areas",
      icon: <Cpu className="w-6 h-6 text-[#FF2A2A]" />,
      skills: ["Artificial Intelligence", "Machine Learning", "Cybersecurity", "Startup Prototyping", "Natural Language Processing"]
    },
    {
      title: "Tools & Mobile",
      icon: <Wrench className="w-6 h-6 text-[#FF2A2A]" />,
      skills: ["Flutter", "Firebase Firestore", "Google AI Studio", "Cursor AI", "VS Code", "Git & GitHub"]
    }
  ];

  const certifications = [
    "Explore Machine Learning Using Python — Infosys Springboard (Jun 2025)",
    "Prompt Engineering — Infosys Springboard (Jun 2025)",
    "Introduction to Deep Learning — Infosys Springboard (Aug 2025)",
    "Software Engineering — Infosys Springboard (Aug 2025)",
    "Introduction to Natural Language Processing — Infosys Springboard (Aug 2025)",
    "IP Awareness/Training Program (NIPAM) — IP Office of India (Sep 2025)",
    "LetsUpgrade Learning Programs"
  ];

  const hackathons = [
    { title: "First Prize — 5-Hour Hackathon", venue: "NRI Institute of Technology", badge: "Winner" },
    { title: "Techzite 2025 — 24-Hour Hackathon", venue: "IIIT Nuzvid", badge: "Participant" },
    { title: "24-Hour Hackathon", venue: "P.B. Siddhartha Degree College", badge: "Participant" },
    { title: "CREATHON — Hackathon Event", venue: "NRI Institute of Technology", badge: "Participant" }
  ];

  return (
    <section id="skills" className="relative w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2A2A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-black">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase mt-2">
            Skills & Achievements
          </h2>
          <div className="w-16 h-[3px] bg-[#FF2A2A] mx-auto mt-4" />
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={category.title}
              className="bg-zinc-950/60 border border-white/5 p-8 rounded-3xl hover:border-[#FF2A2A]/30 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(255,42,42,0.03)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#FF2A2A]/10 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-6 uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-3.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
                    <span className="text-sm font-medium tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Hackathons & Certifications Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-[#FF2A2A]" />
              <h3 className="text-2xl font-black font-display uppercase tracking-wider text-white">
                Hackathons
              </h3>
            </div>
            
            <div className="space-y-4">
              {hackathons.map((h, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl bg-zinc-950/40 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-base">{h.title}</h4>
                    <p className="text-xs text-zinc-500 font-mono uppercase">{h.venue}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase font-mono tracking-wider ${
                    h.badge === 'Winner' 
                      ? 'bg-[#FF2A2A]/10 text-[#FF2A2A] border border-[#FF2A2A]/20' 
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                  }`}>
                    {h.badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-[#FF2A2A]" />
              <h3 className="text-2xl font-black font-display uppercase tracking-wider text-white">
                Credentials
              </h3>
            </div>
            
            <div className="space-y-3.5 bg-zinc-950/40 border border-white/5 p-6 rounded-3xl max-h-[350px] overflow-y-auto pr-4 no-scrollbar">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start space-x-3 py-2 border-b border-white/5 last:border-b-0">
                  <ShieldCheck className="w-5 h-5 text-[#FF2A2A] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
