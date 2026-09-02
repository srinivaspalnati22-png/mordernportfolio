import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code2, Cpu, Wrench, ShieldCheck, Trophy, Layers, Sparkles, ExternalLink, Calendar, CheckCircle2, RotateCw, X, ZoomIn, Medal, Check, Eye } from 'lucide-react';

export default function Skills({ onOpenResume }) {
  const [flippedHackathons, setFlippedHackathons] = useState({});
  const [flippedCerts, setFlippedCerts] = useState({});
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleHackathonFlip = (index) => {
    setFlippedHackathons(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleCertFlip = (index) => {
    setFlippedCerts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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

  const hackathonsAndCompetitions = [
    { 
      id: "hack-creathon",
      title: "1st Place Winner — CREATHON Hackathon Event", 
      venue: "NRI Institute of Technology (Autonomous)", 
      badge: "🥇 1st Place Winner", 
      date: "March 10, 2026",
      certHeader: "CERTIFICATE OF APPRECIATION",
      desc: "Secured 1st Place with team 'Spark Builders' for outstanding innovation, rapid engineering, and problem-solving.",
      credential: "NRIIT-CREATHON-1ST-2026",
      image: "/certificates/creathon_hackathon_1st_prize.jpg",
      hasRealCert: true,
      role: "Lead Systems Architect & Full-Stack Developer"
    },
    { 
      id: "hack-techzite",
      title: "Teckzite'25 — AI & ML Hackathon (Quantum Technologies)", 
      venue: "RGUKT IIIT Nuzvid", 
      badge: "🏆 Certificate of Excellence", 
      date: "Dec 28–29, 2025",
      certHeader: "CERTIFICATE OF EXCELLENCE",
      desc: "Awarded Certificate of Excellence in the national AI & ML Quantum Technologies Hackathon organized at RGUKT Nuzvid.",
      credential: "RGUKT-TECKZITE-AIML-2025",
      image: "/certificates/techzite_25_rgukt_ai_hackathon.jpg",
      hasRealCert: true,
      role: "AI & ML Model Developer"
    },
    { 
      id: "hack-innogenesis",
      title: "InnoGenesis 5.0 — 24 Hours National Innovation Hackathon", 
      venue: "School of Computer Studies, NRIIT (Deemed Univ)", 
      badge: "⭐ National Finalist", 
      date: "August 07–08, 2026",
      certHeader: "CERTIFICATE OF PARTICIPATION",
      desc: "Selected as spotlight submission for Pulsevein rPPG multimodal deepfake detector across 24 hours of non-stop sprinting.",
      credential: "INNOGENESIS-HACK5-2026",
      image: "/certificates/innogenesis_hackathon_5.jpg",
      hasRealCert: true,
      role: "Lead Deep Learning Engineer"
    },
    { 
      id: "hack-techfusion",
      title: "TECHFUSION 2025 — National Level Technical Student Meet", 
      venue: "R.V.R. & J.C. College of Engineering (A)", 
      badge: "🌟 National Meet", 
      date: "December 26, 2025",
      certHeader: "CERTIFICATE OF PARTICIPATION",
      desc: "Participated actively in technical paper and project competition organized by RAJCSEA Dept. of CSE.",
      credential: "RVRJC-TECHFUSION-2025",
      image: "/certificates/techfusion_2025.jpg",
      hasRealCert: true,
      role: "Technical Presenter & Competitor"
    },
    { 
      id: "hack-codequest",
      title: "Code Quest — SPICES Coding Competition", 
      venue: "SPICES Club, NRI Institute of Technology", 
      badge: "🏅 Consolation Winner", 
      date: "October 15, 2025",
      certHeader: "CERTIFICATE OF APPRECIATION",
      desc: "Won prize for exceptional algorithm speed and clean code execution in competitive programming contest.",
      credential: "SPICES-CODEQUEST-OCT2025",
      image: "/certificates/codequest_spices_consolation.jpg",
      hasRealCert: true,
      role: "Competitive Programmer"
    },
    { 
      id: "hack-aignite",
      title: "AIGNITE 2.0 — AI & Data Science Symposium", 
      venue: "P.B. Siddhartha College of Arts & Science", 
      badge: "🎯 Participant", 
      date: "Jan 30–31, 2026",
      certHeader: "CERTIFICATE OF PARTICIPATION",
      desc: "Participated in state-level AI symposium held by the Department of Data Science & Artificial Intelligence.",
      credential: "PBS-AIGNITE2-JAN2026",
      image: "/certificates/aignite_2_pbsiddhartha.jpg",
      hasRealCert: true,
      role: "AI Project Exhibitor"
    },
    { 
      id: "hack-lakshya",
      title: "LAKSHYA 2026 — National Technical Fest", 
      venue: "Lakireddy Bali Reddy College of Engineering (LBRCE)", 
      badge: "🎯 Participant", 
      date: "January 03, 2026",
      certHeader: "CERTIFICATE OF APPRECIATION",
      desc: "Active participation in OJAS technical track at LAKSHYA 2026 national student conference.",
      credential: "LBRCE-LAKSHYA-JAN2026",
      image: "/certificates/lakshya_2026_lbrce.jpg",
      hasRealCert: true,
      role: "Technical Delegate"
    },
    { 
      id: "hack-gdg-wow",
      title: "GDG Wonder of Wonders (WOW 2026)", 
      venue: "Google Developer Groups on Campus @ GITAM University", 
      badge: "🌐 GDG Participant", 
      date: "July 04–05, 2026",
      certHeader: "CERTIFICATE OF PARTICIPATION",
      desc: "Participated in GDG on Campus Wonder of Wonders 2026 hack & dev conference in Visakhapatnam.",
      credential: "GDG-WOW-GITAM-2026",
      image: "/certificates/gdg_wow_2026_gitam.jpg",
      hasRealCert: true,
      role: "Community Developer"
    }
  ];

  const professionalCertifications = [
    {
      id: "cert-nipam",
      title: "National Intellectual Property Awareness Mission (NIPAM)",
      issuer: "Government of India, Ministry of Commerce & Industry",
      date: "September 09, 2025",
      type: "Govt of India",
      credId: "GOI-NIPAM-SEP2025",
      image: "/certificates/nipam_govt_cert.png",
      hasRealCert: true,
      desc: "Official government certificate of training in Intellectual Property Awareness & Patent Innovation under Office of Controller General of Patents, Designs and Trade Marks."
    },
    {
      id: "cert-letsupgrade-ai",
      title: "Build with AI: Gemini Powered YouTube Summarizer",
      issuer: "LetsUpgrade (Collab with NSDC & GDG MAD)",
      date: "April 08, 2025",
      type: "GenAI & Gemini",
      credId: "LUEBWAIMAR12548",
      image: "/certificates/letsupgrade_gemini_ai.png",
      hasRealCert: true,
      desc: "Hands-on project certification building real-world AI applications powered by Google Gemini AI SDK and LangChain summarization pipelines."
    },
    {
      id: "cert-hackerrank-python",
      title: "Python (Basic) Skill Certification Test",
      issuer: "HackerRank",
      date: "October 11, 2025",
      type: "Python & Algorithms",
      credId: "A63A050D8705",
      image: "/certificates/hackerrank_python_basic.jpg",
      hasRealCert: true,
      desc: "Passed HackerRank's rigorous skill certification assessment covering core Python data structures, comprehension, and OOP."
    },
    {
      id: "cert-hp-life-ai",
      title: "AI for Beginners Certification",
      issuer: "HP LIFE Foundation",
      date: "July 21, 2026",
      type: "AI Fundamentals",
      credId: "8568ba31-c043-43b6-a51a-17c211afb484",
      image: "/certificates/hp_life_ai_beginners.jpg",
      hasRealCert: true,
      desc: "Certified by HP Foundation in AI fundamentals, machine learning societal impact, data pipelines, and ethical AI architectures."
    },
    {
      id: "cert-infosys-prompt",
      title: "Prompt Engineering",
      issuer: "Infosys Springboard",
      date: "June 20, 2025",
      type: "GenAI & LLMs",
      credId: "INFOSYS-PE-JUN2025",
      image: "/certificates/infosys_prompt_engineering.jpg",
      hasRealCert: true,
      desc: "Certified by Infosys in structured prompting workflows, zero-shot/few-shot reasoning, LLM system architecture, and AI safety protocols."
    },
    {
      id: "cert-infosys-nlp",
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys Springboard",
      date: "August 15, 2025",
      type: "NLP & Transformers",
      credId: "INFOSYS-NLP-AUG2025",
      image: "/certificates/infosys_nlp.jpg",
      hasRealCert: true,
      desc: "Certified by Infosys in computational linguistics, tokenization, text embeddings, sentiment analysis models, and transformer architectures."
    },
    {
      id: "cert-infosys-dl",
      title: "Introduction to Deep Learning",
      issuer: "Infosys Springboard",
      date: "August 15, 2025",
      type: "Deep Learning",
      credId: "INFOSYS-DL-AUG2025",
      image: "/certificates/infosys_deep_learning.jpg",
      hasRealCert: true,
      desc: "Certified by Infosys in convolutional neural networks (CNNs), multi-layer perceptrons, backpropagation, and loss optimization."
    },
    {
      id: "cert-infosys-ml",
      title: "Explore Machine Learning Using Python",
      issuer: "Infosys Springboard",
      date: "June 20, 2025",
      type: "AI / ML Specialization",
      credId: "INFOSYS-ML-JUN2025",
      image: "/certificates/infosys_machine_learning.jpg",
      hasRealCert: true,
      desc: "Comprehensive certification in supervised & unsupervised machine learning, predictive modeling, and data preprocessing."
    },
    {
      id: "cert-infosys-se",
      title: "Software Engineering Principles & Methodologies",
      issuer: "Infosys Springboard",
      date: "August 15, 2025",
      type: "Software Engineering",
      credId: "INFOSYS-SE-AUG2025",
      image: "/certificates/infosys_software_engineering.jpg",
      hasRealCert: true,
      desc: "Software development lifecycles (SDLC), Agile Scrum methodologies, clean code practices, modular design, and unit testing."
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
            Comprehensive foundation in algorithms, scalable web architectures, machine learning pipelines, and 17+ verified credentials.
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

        {/* Interactive 3D Flip Hackathons & Certifications Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Hackathons & Competitions (8 Items) */}
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
                8 Competitions • Click to Flip ↺
              </span>
            </div>
            
            <div className="space-y-4">
              {hackathonsAndCompetitions.map((h, i) => {
                const isFlipped = !!flippedHackathons[i];
                return (
                  <div
                    key={h.id}
                    onClick={() => toggleHackathonFlip(i)}
                    className="relative [perspective:1200px] cursor-pointer group select-none min-h-[160px]"
                  >
                    <div
                      className={`relative w-full h-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] ${
                        isFlipped ? '[transform:rotateY(180deg)]' : ''
                      }`}
                    >
                      {/* FRONT OF CARD */}
                      <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 group-hover:border-[#FF2A2A]/50 transition-all space-y-2 [backface-visibility:hidden] shadow-md group-hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] flex flex-col justify-between h-full">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-white text-sm md:text-base leading-snug group-hover:text-red-100 transition-colors">
                              {h.title}
                            </h4>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase font-mono tracking-wider shrink-0 ${
                              h.badge.includes('1st') 
                                ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold' 
                                : h.badge.includes('Excellence') || h.badge.includes('Consolation')
                                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold'
                                : h.badge.includes('Finalist')
                                ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30 font-bold'
                                : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                            }`}>
                              {h.badge}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">{h.desc}</p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono">
                          <span className="text-zinc-500 uppercase">{h.venue}</span>
                          <span className="text-[#FF2A2A] font-semibold inline-flex items-center space-x-1 group-hover:underline">
                            <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                            <span>{h.hasRealCert ? 'View Real Certificate' : 'Show Certificate'}</span>
                          </span>
                        </div>
                      </div>

                      {/* BACK OF CARD: Real Certificate Image Preview */}
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-[#200a0a] border-2 border-[#FF2A2A]/60 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between overflow-hidden shadow-2xl">
                        {h.hasRealCert ? (
                          <div className="relative w-full h-full flex flex-col justify-between p-3 bg-black">
                            <div className="relative w-full h-24 rounded-lg overflow-hidden border border-white/20">
                              <img
                                src={h.image}
                                alt={h.title}
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                            </div>

                            <div className="flex items-center justify-between pt-2 text-[10px] font-mono">
                              <span className="text-white font-bold truncate max-w-[220px]">{h.title}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveModalItem(h);
                                }}
                                className="px-2.5 py-1 rounded bg-[#FF2A2A] hover:bg-[#ff4444] text-white text-[10px] font-mono font-bold uppercase flex items-center space-x-1 cursor-pointer"
                              >
                                <Eye className="w-3 h-3" />
                                <span>Inspect</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-5 flex flex-col justify-between h-full">
                            <div className="flex items-center justify-between border-b border-[#FF2A2A]/30 pb-2">
                              <div className="flex items-center space-x-2">
                                <Medal className="w-4 h-4 text-amber-400" />
                                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FF2A2A]">
                                  {h.certHeader}
                                </span>
                              </div>
                              <span className="text-[9px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                {h.date}
                              </span>
                            </div>

                            <div className="text-center py-1">
                              <div className="text-[10px] font-mono uppercase text-zinc-400">Awarded To</div>
                              <div className="text-xs sm:text-sm font-black font-display text-white tracking-wide uppercase bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent">
                                Palnati Pushpa Naga Venkata Srinivas
                              </div>
                              <div className="text-[10px] font-mono text-zinc-300 mt-0.5">
                                {h.venue} • <span className="text-amber-400 font-bold">{h.badge}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-zinc-400">
                              <div className="flex items-center space-x-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>ID: {h.credential}</span>
                              </div>
                              <span className="text-zinc-400 hover:text-white inline-flex items-center space-x-1">
                                <span>Flip ↺</span>
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Professional & Technical Certifications (9 Items) */}
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
                <span>9 Credentials</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="space-y-3.5">
              {professionalCertifications.map((cert, idx) => {
                const isFlipped = !!flippedCerts[idx];
                return (
                  <div
                    key={cert.id}
                    onClick={() => toggleCertFlip(idx)}
                    className="relative [perspective:1200px] cursor-pointer group select-none min-h-[96px]"
                  >
                    <div
                      className={`relative w-full h-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] ${
                        isFlipped ? '[transform:rotateY(180deg)]' : ''
                      }`}
                    >
                      {/* FRONT OF CARD: Certification Row */}
                      <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 group-hover:border-cyan-500/50 transition-all [backface-visibility:hidden] flex items-center justify-between gap-3 shadow-md group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] h-full">
                        <div className="flex items-start space-x-3 text-left">
                          <ShieldCheck className="w-5 h-5 text-[#FF2A2A] shrink-0 mt-0.5" />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="text-xs md:text-sm font-semibold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                                {cert.title}
                              </h4>
                              {cert.hasRealCert && (
                                <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                  Real Cert
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-zinc-400 font-light mt-0.5">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10 block mb-1">
                            {cert.type}
                          </span>
                          <span className="text-[10px] font-mono text-cyan-400 font-medium inline-flex items-center space-x-1">
                            <RotateCw className="w-2.5 h-2.5 group-hover:rotate-180 transition-transform duration-500" />
                            <span>Flip Real Cert</span>
                          </span>
                        </div>
                      </div>

                      {/* BACK OF CARD: Real Certificate Image Preview */}
                      <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-[#051c24] border-2 border-cyan-500/60 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between overflow-hidden shadow-2xl">
                        {cert.hasRealCert ? (
                          <div className="relative w-full h-full flex items-center justify-between p-3 bg-black gap-3">
                            <div className="relative w-28 h-16 rounded-lg overflow-hidden border border-white/20 shrink-0">
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover object-center"
                              />
                            </div>

                            <div className="flex-1 text-left">
                              <div className="text-xs font-bold text-white leading-tight truncate">{cert.title}</div>
                              <div className="text-[10px] font-mono text-cyan-400">{cert.issuer}</div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveModalItem(cert);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-mono font-bold uppercase flex items-center space-x-1 shadow-md cursor-pointer shrink-0"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                              <span>Inspect</span>
                            </button>
                          </div>
                        ) : (
                          <div className="p-4 flex flex-col justify-between h-full">
                            <div className="flex items-center justify-between border-b border-cyan-500/30 pb-1.5">
                              <div className="flex items-center space-x-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                                  OFFICIAL VERIFIED CERTIFICATE
                                </span>
                              </div>
                              <span className="text-[9px] font-mono text-zinc-400">{cert.date}</span>
                            </div>

                            <div className="py-1 text-left flex items-center justify-between">
                              <div>
                                <div className="text-[11px] font-bold text-white font-display leading-tight">{cert.title}</div>
                                <div className="text-[9px] font-mono text-zinc-400">Issued to: <strong className="text-zinc-200">Palnati Srinivas</strong> • {cert.issuer}</div>
                              </div>
                              <div className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold shrink-0">
                                Verified ✓
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[9px] font-mono text-zinc-400">
                              <span>Cred ID: <strong className="text-zinc-300 font-mono">{cert.credId}</strong></span>
                              <span className="text-cyan-400 hover:underline">Flip Back ↺</span>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Interactive Fullscreen 3D Certificate Inspection Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-zinc-950 border-2 border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden text-left"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF2A2A] bg-[#FF2A2A]/10 px-2.5 py-1 rounded-md">
                    Verified Credential Document
                  </span>
                  <h3 className="text-lg md:text-xl font-black font-display text-white mt-2">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {activeModalItem.issuer || activeModalItem.venue} • {activeModalItem.date}
                  </p>
                </div>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[65vh] rounded-2xl overflow-hidden border border-white/15 bg-black flex items-center justify-center shadow-inner">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 text-xs font-mono text-zinc-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Credential ID: <strong className="text-white font-bold">{activeModalItem.credId || activeModalItem.credential}</strong></span>
                </div>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
