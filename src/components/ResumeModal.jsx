import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, Printer, Copy, Check, ExternalLink, ShieldCheck, 
  Sparkles, Award, Code2, Cpu, FileText, Trophy, Calendar, CheckCircle2 
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState('ats'); // 'ats' or 'interactive'

  if (!isOpen) return null;

  const plainTextResume = `PALNATI PUSHPA NAGA VENKATA SRINIVAS
Andhra Pradesh, India | +91 9581778571 | srinivaspalnati22@gmail.com
LinkedIn: https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413/
GitHub: https://github.com/srinivaspalnati22-png
LeetCode: https://leetcode.com/u/srinivaspalnati22-png/
HackerRank: https://www.hackerrank.com/profile/srinivaspalnati1

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Aspiring Software Development Engineer (SDE) & AI/ML Engineer with a proven track record of designing, building, and deploying 7+ production-grade AI platforms and mission-critical systems. Strong foundation in Data Structures & Algorithms (Java/Python), Object-Oriented Design, Distributed Systems fundamentals, and Full-Stack Engineering. Experienced in building high-throughput event meshes, real-time sensor fusion algorithms, and low-latency computer vision pipelines. First-prize hackathon winner with demonstrated capability to lead end-to-end product development.

================================================================================
TECHNICAL SKILLS
================================================================================
* Programming Languages: Java (Core, Collections, OOP, Concurrency), Python (AsyncIO, NumPy, Pandas, Scikit-learn), C/C++, JavaScript (ES6+), TypeScript, SQL
* Core CS Fundamentals: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Operating Systems (OS), DBMS, Computer Networks (CN), System Design Fundamentals
* Web & Backend Frameworks: React.js, FastAPI, Node.js, Express.js, Flask, Tailwind CSS, Three.js, Flutter
* AI / ML & Computer Vision: PyTorch, TensorFlow, OpenCV, NLTK, Google Gemini AI SDK, rPPG Signal Processing, Multi-Modal Deepfake Detection
* Databases & Cloud: PostgreSQL, Supabase, Firebase Firestore, MongoDB, SQLite, Redis basics
* Developer Tools & DevOps: Git, GitHub, Docker, Postman, Linux CLI, Vite, Vercel

================================================================================
FEATURED PROJECTS & SYSTEM ARCHITECTURE
================================================================================
1. RESQONE AI — Unified Emergency Triage & Autonomous Rescue Intelligence Platform
   Tech Stack: React, Three.js, FastAPI, Supabase, WebSockets, Python, Geolocation API
   Live: https://resqone-ai-app.vercel.app | Repo: https://github.com/srinivaspalnati22-png/RESQONE-AI
   * Architected an end-to-end autonomous rescue platform reducing medical dispatch latency by 40% during the critical "Golden Hour".
   * Developed an AI Pre-Crash Safety Radar using multi-sensor fusion (accelerometer G-force, gyroscope, GPS telemetry) with a 15-second multi-lingual decision window.
   * Engineered an automated 25-second SOS broadcast engine routing emergency payloads concurrently to family contacts, 108 rescue teams, and nearest trauma centers with pre-reserved ICU bays.
   * Implemented interactive 3D live ambulance GPS route tracing along designated emergency green corridors using Three.js and real-time WebSocket state synchronization.
   * Built deterministic ABO/Rh blood donor compatibility matching algorithm integrated with live hospital inventory telemetry.

2. PULSEVEIN — Multimodal Deepfake Detection System using rPPG Signals
   Tech Stack: Python, OpenCV, TensorFlow, Signal Processing, Librosa, NumPy
   Repo: https://github.com/srinivaspalnati22-png/PLUSEVEIN
   * Built a forensic deepfake detection pipeline analyzing sub-visual facial blood flow variations via remote photoplethysmography (rPPG).
   * Implemented lip-audio synchronization cross-correlation networks achieving 94%+ accuracy on synthetic facial manipulation benchmarks.
   * Engineered modular video processing pipelines capable of generating automated forensic heatmaps and confidence score breakdowns under 3.5s per video clip.
   * Recognized as a spotlight finalist submission at InnoGenesis National Hackathon 2026.

3. TRUSTSHIELD AI — Digital Threat & Multi-Vector Scam Protection Platform
   Tech Stack: Python, Flutter, Firebase, Google AI SDK, FastAPI
   Repo: https://github.com/srinivaspalnati22-png/TRUTHSHEILD-AI
   * Created a real-time cybersecurity assistant performing multi-vector heuristic analysis on phishing URLs, fraudulent job letters, and deceptive SMS text.
   * Deployed custom zero-shot NLP classification classifiers to flag high-risk anomalies with sub-200ms API response time.
   * Developed cross-platform mobile interface in Flutter with real-time community threat feeds and verified security advisories.

4. SMARTCIVIC AI — Multilingual Voice-Driven Civic Issue Routing System
   Tech Stack: Flask, React, Speech-to-Text APIs, Geocoding NLP Engine
   Live: https://smartcivicai.vercel.app | Repo: https://github.com/srinivaspalnati22-png/SMARTCIVIC-AI
   * Designed an accessible civic complaint intake engine supporting voice inputs in English, Hindi, Telugu, and Tamil.
   * Automated grievance triage and geospatial clustering, routing categorized issues directly to relevant municipal department workflows.

================================================================================
ACHIEVEMENTS, HACKATHONS & COMPETITIONS
================================================================================
* 🥇 First Prize Winner — 5-Hour Rapid Prototype Hackathon, NRI Institute of Technology. Built and deployed a full-stack emergency triage prototype in constrained time.
* ⭐ Spotlight Finalist — InnoGenesis National Hackathon 2026 for Pulsevein Multimodal Deepfake Detection using rPPG.
* 🎯 Techzite 2025 (24-Hour National Hackathon) — RGUKT IIIT Nuzvid.
* 🎯 24-Hour State-Level Innovation Hackathon — P.B. Siddhartha College.
* 🎯 CREATHON — Hackathon Event, NRI Institute of Technology.
* 🚀 7+ Production AI Systems Shipped — Independently built, containerized, and hosted real-world platforms serving civic tech, healthcare, and security domains.
* ⚔️ Competitive Programming: Solved hundreds of problems across LeetCode and HackerRank specializing in Arrays, Trees, Dynamic Programming, and Graph algorithms.

================================================================================
EDUCATION
================================================================================
Bachelor of Technology in Computer Science & Engineering (B.Tech CSE)
Expected Graduation: 2028 | Andhra Pradesh, India
Relevant Coursework: Data Structures, Analysis of Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks, Software Engineering.

================================================================================
VERIFIED CERTIFICATIONS (LINKEDIN VERIFIED)
================================================================================
* Explore Machine Learning Using Python — Infosys Springboard (Jun 2025)
* Software Engineering Principles & Methodologies — Infosys Springboard (Aug 2025)
* Introduction to Deep Learning & Neural Architectures — Infosys Springboard (Aug 2025)
* Introduction to Natural Language Processing (NLP) — Infosys Springboard (Aug 2025)
* Prompt Engineering & Generative AI Application Design — Infosys Springboard (Jun 2025)
* National Intellectual Property (IP) Awareness & Training Program (NIPAM) — IP Office of India, Ministry of Commerce & Industry (Sep 2025)
* Full Stack & Python Acceleration Programs — LetsUpgrade Learning
`;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-0 md:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto print:p-0 print:bg-white print:static print:overflow-visible">
      {/* Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl bg-[#0e0e10] border border-white/10 rounded-none md:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col my-auto max-h-screen md:max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none print:bg-white"
      >
        {/* Top Control Bar (Hidden on Print) */}
        <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#141418] border-b border-white/10 print:hidden">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 flex items-center justify-center text-[#FF2A2A]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-white font-display">ATS-Optimized Resume</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Target: Product SDE
                </span>
              </div>
              <p className="text-xs text-zinc-400">Standard single-column format optimized for Workday, Greenhouse & Taleo</p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('ats')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'ats' 
                    ? 'bg-[#FF2A2A] text-white font-bold shadow' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                ATS Clean View
              </button>
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'interactive' 
                    ? 'bg-[#FF2A2A] text-white font-bold shadow' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Visual Card View
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-white text-black text-xs font-bold font-mono uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer shadow"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            {/* Copy Plain Text */}
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border border-white/20 glass-panel text-white text-xs font-bold font-mono uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer"
              title="Copy plain text formatted for job portals"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied ATS Text!' : 'Copy ATS Text'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 text-left print:p-0 print:overflow-visible print:text-black">
          
          {viewMode === 'ats' ? (
            /* ATS Standard Document View (Clean, High Contrast, Standard Typography) */
            <div id="ats-resume-document" className="max-w-4xl mx-auto bg-white text-zinc-900 p-8 md:p-12 rounded-2xl shadow-xl font-sans text-sm leading-normal selection:bg-zinc-300 print:shadow-none print:p-0 print:rounded-none print:max-w-none">
              
              {/* Header */}
              <header className="border-b-2 border-zinc-900 pb-4 mb-5 text-center">
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-950 uppercase font-sans">
                  Palnati Pushpa Naga Venkata Srinivas
                </h1>
                <div className="text-xs font-semibold text-[#FF2A2A] tracking-wider uppercase mt-1">
                  Aspiring Software Development Engineer (SDE) & AI/ML Engineer
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-2 text-xs text-zinc-700 font-medium">
                  <span>Andhra Pradesh, India</span>
                  <span>•</span>
                  <a href="tel:+919581778571" className="hover:underline text-zinc-900">+91 9581778571</a>
                  <span>•</span>
                  <a href="mailto:srinivaspalnati22@gmail.com" className="hover:underline text-zinc-900">srinivaspalnati22@gmail.com</a>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-zinc-700">
                  <a href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413/" target="_blank" rel="noreferrer" className="text-blue-700 font-medium hover:underline">
                    linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413
                  </a>
                  <span>•</span>
                  <a href="https://github.com/srinivaspalnati22-png" target="_blank" rel="noreferrer" className="text-blue-700 font-medium hover:underline">
                    github.com/srinivaspalnati22-png
                  </a>
                  <span>•</span>
                  <a href="https://leetcode.com/u/srinivaspalnati22-png/" target="_blank" rel="noreferrer" className="text-blue-700 font-medium hover:underline">
                    leetcode.com/u/srinivaspalnati22-png
                  </a>
                  <span>•</span>
                  <a href="https://www.hackerrank.com/profile/srinivaspalnati1" target="_blank" rel="noreferrer" className="text-blue-700 font-medium hover:underline">
                    hackerrank.com/profile/srinivaspalnati1
                  </a>
                </div>
              </header>

              {/* Professional Summary */}
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-400 pb-1 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs md:text-sm text-zinc-800 leading-relaxed text-justify">
                  Aspiring Software Development Engineer (SDE) and AI/ML Engineer with deep expertise in designing, building, and deploying 7+ production-grade AI platforms and mission-critical systems. Strong foundation in <strong>Data Structures & Algorithms (Java/Python)</strong>, Object-Oriented Design, Distributed Systems fundamentals, and Full-Stack Engineering. Proven experience engineering sensor-fusion emergency response platforms, real-time WebSocket state synchronization, and sub-second computer vision inference pipelines. First-prize hackathon winner with demonstrated capability to lead end-to-end product architecture.
                </p>
              </section>

              {/* Technical Skills */}
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-400 pb-1 mb-2">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 gap-1.5 text-xs md:text-sm">
                  <p>
                    <strong className="text-zinc-950">Languages:</strong> Java (Core, Collections, OOP, Concurrency), Python (AsyncIO, NumPy, Pandas, Scikit-learn), C/C++, JavaScript (ES6+), TypeScript, SQL
                  </p>
                  <p>
                    <strong className="text-zinc-950">Core CS Fundamentals:</strong> Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Operating Systems (OS), DBMS, Computer Networks (CN), System Design Fundamentals
                  </p>
                  <p>
                    <strong className="text-zinc-950">Frameworks & Libraries:</strong> React.js, FastAPI, Node.js, Express.js, Flask, Tailwind CSS, Three.js, Flutter
                  </p>
                  <p>
                    <strong className="text-zinc-950">AI / ML & Computer Vision:</strong> PyTorch, TensorFlow, OpenCV, NLTK, Google Gemini AI SDK, rPPG Signal Processing, Multi-Modal Deepfake Detection
                  </p>
                  <p>
                    <strong className="text-zinc-950">Databases & Cloud Tools:</strong> PostgreSQL, Supabase, Firebase Firestore, MongoDB, Docker, Git, GitHub Actions, Postman, Linux CLI, Vite, Vercel
                  </p>
                </div>
              </section>

              {/* Projects & Work */}
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-400 pb-1 mb-3">
                  Key Engineering Projects & System Architecture
                </h2>

                {/* Project 1: RESQONE AI */}
                <div className="mb-4">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xs md:text-sm font-bold text-zinc-950">
                      RESQONE AI — Unified Emergency Triage & Autonomous Rescue Intelligence Platform
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-600">React, Three.js, FastAPI, Supabase, WebSockets</span>
                  </div>
                  <div className="text-[11px] text-blue-700 font-mono mb-1">
                    Live Demo: <a href="https://resqone-ai-app.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">resqone-ai-app.vercel.app</a> | GitHub: <a href="https://github.com/srinivaspalnati22-png/RESQONE-AI" target="_blank" rel="noreferrer" className="hover:underline">github.com/srinivaspalnati22-png/RESQONE-AI</a>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-800 leading-snug">
                    <li>Architected an end-to-end autonomous rescue platform reducing medical dispatch latency by 40% during critical "Golden Hour" accident windows.</li>
                    <li>Developed an AI Pre-Crash Safety Radar using multi-sensor fusion (accelerometer G-force, gyroscope, GPS telemetry) with an integrated 15-second voice cancellation window.</li>
                    <li>Engineered an automated 25-second SOS broadcast engine routing emergency payloads concurrently to family contacts, 108 rescue teams, and nearest trauma centers with pre-reserved ICU bays.</li>
                    <li>Implemented interactive 3D live ambulance GPS route tracing along designated emergency green corridors using Three.js and real-time WebSocket state synchronization.</li>
                    <li>Built deterministic ABO/Rh blood donor compatibility matching algorithm integrated with live hospital inventory telemetry.</li>
                  </ul>
                </div>

                {/* Project 2: Pulsevein */}
                <div className="mb-4">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xs md:text-sm font-bold text-zinc-950">
                      PULSEVEIN — Multimodal Deepfake Detection System using rPPG Signals
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-600">Python, OpenCV, Signal Processing, TensorFlow</span>
                  </div>
                  <div className="text-[11px] text-blue-700 font-mono mb-1">
                    GitHub: <a href="https://github.com/srinivaspalnati22-png/PLUSEVEIN" target="_blank" rel="noreferrer" className="hover:underline">github.com/srinivaspalnati22-png/PLUSEVEIN</a> | InnoGenesis Hackathon 2026 Finalist
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-800 leading-snug">
                    <li>Built a forensic deepfake detection pipeline analyzing sub-visual facial blood flow variations via remote photoplethysmography (rPPG).</li>
                    <li>Implemented lip-audio synchronization cross-correlation networks achieving 94%+ accuracy on synthetic facial manipulation benchmarks.</li>
                    <li>Engineered modular video processing pipelines capable of generating automated forensic heatmaps and confidence score breakdowns under 3.5s per video clip.</li>
                  </ul>
                </div>

                {/* Project 3: TrustShield AI */}
                <div className="mb-4">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xs md:text-sm font-bold text-zinc-950">
                      TRUSTSHIELD AI — Digital Threat & Scam Protection Platform
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-600">Python, Flutter, Firebase, Google AI SDK</span>
                  </div>
                  <div className="text-[11px] text-blue-700 font-mono mb-1">
                    GitHub: <a href="https://github.com/srinivaspalnati22-png/TRUTHSHEILD-AI" target="_blank" rel="noreferrer" className="hover:underline">github.com/srinivaspalnati22-png/TRUTHSHEILD-AI</a>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-800 leading-snug">
                    <li>Created a real-time cybersecurity assistant performing multi-vector heuristic analysis on phishing URLs, fraudulent job letters, and deceptive SMS text.</li>
                    <li>Deployed custom zero-shot NLP classification classifiers to flag high-risk anomalies with sub-200ms API response times.</li>
                  </ul>
                </div>

                {/* Project 4: SmartCivic AI & CareerSafe */}
                <div>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xs md:text-sm font-bold text-zinc-950">
                      SMARTCIVIC AI & CAREERSAFE — Civic & Career Safety Platforms
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-600">Flask, React, Node.js, NLP Geocoding</span>
                  </div>
                  <div className="text-[11px] text-blue-700 font-mono mb-1">
                    SmartCivic: <a href="https://smartcivicai.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">smartcivicai.vercel.app</a> | CareerSafe: <a href="https://ai-powered-career-safety.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">ai-powered-career-safety.vercel.app</a>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-800 leading-snug">
                    <li>Built multilingual voice-driven civic grievance routing supporting English, Hindi, Telugu, and Tamil with automated geocoding categorization.</li>
                    <li>Created AI-driven resume and employment fraud detector helping users verify recruiter authenticity and career safety.</li>
                  </ul>
                </div>
              </section>

              {/* Achievements, Competitions & Hackathons */}
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-400 pb-1 mb-2">
                  Honors, Hackathons & Competitions
                </h2>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-800 leading-snug">
                  <li><strong>First Prize Winner</strong> — 5-Hour Rapid Prototype Hackathon at NRI Institute of Technology. Built full-stack emergency triage prototype in constrained time.</li>
                  <li><strong>Spotlight Finalist</strong> — InnoGenesis National Hackathon 2026 for Pulsevein rPPG Multimodal Deepfake Detector.</li>
                  <li><strong>Techzite 2025</strong> — 24-Hour National Hackathon at RGUKT IIIT Nuzvid.</li>
                  <li><strong>24-Hour State-Level Innovation Hackathon</strong> — P.B. Siddhartha College.</li>
                  <li><strong>CREATHON</strong> — Hackathon Event at NRI Institute of Technology.</li>
                  <li><strong>Competitive Programming</strong> — Actively solving Data Structures & Algorithms problems daily on LeetCode and HackerRank in Java.</li>
                  <li><strong>7+ Deployed AI Products</strong> — Built, containerized, and hosted end-to-end production web applications.</li>
                </ul>
              </section>

              {/* Education & Certifications */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-400 pb-1 mb-2">
                      Education
                    </h2>
                    <p className="text-xs font-bold text-zinc-950">Bachelor of Technology (B.Tech) in Computer Science & Engineering</p>
                    <p className="text-xs text-zinc-700">Expected Graduation: 2028 | Andhra Pradesh, India</p>
                    <p className="text-[11px] text-zinc-600 mt-1">Coursework: Data Structures & Algorithms, OOP, Operating Systems, DBMS, Computer Networks, System Design</p>
                  </div>

                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-400 pb-1 mb-2">
                      Verified Certifications
                    </h2>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] text-zinc-800">
                      <li>Infosys Springboard: Explore Machine Learning with Python (Jun 2025)</li>
                      <li>Infosys Springboard: Introduction to Deep Learning & Neural Nets (Aug 2025)</li>
                      <li>Infosys Springboard: Software Engineering Principles (Aug 2025)</li>
                      <li>Infosys Springboard: Introduction to NLP (Aug 2025)</li>
                      <li>Infosys Springboard: Prompt Engineering & Generative AI (Jun 2025)</li>
                      <li>NIPAM IP Office of India: National Intellectual Property Training (Sep 2025)</li>
                      <li>LetsUpgrade: Full Stack & Python Acceleration Programs</li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          ) : (
            /* Visual Card Interactive Mode (Modern sleek portfolio aesthetic) */
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Profile Card Header */}
              <div className="p-6 md:p-8 rounded-3xl bg-zinc-950/60 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF2A2A]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-xs font-mono text-[#FF2A2A] uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Targeting Product-Based SDE Roles</span>
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black font-display text-white uppercase tracking-tight">
                      Palnati Srinivas
                    </h2>
                    <p className="text-sm md:text-base text-zinc-300 font-light mt-1">
                      Aspiring Software Development Engineer (SDE) & AI/ML Engineer
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <a 
                      href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-sky-400 hover:border-sky-400 transition-all flex items-center space-x-1"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="https://github.com/srinivaspalnati22-png" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white transition-all flex items-center space-x-1"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                      href="https://leetcode.com/u/srinivaspalnati22-png/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-amber-400 hover:border-amber-400 transition-all flex items-center space-x-1"
                    >
                      <span>LeetCode</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-black font-display text-white">7+</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">AI Platforms Shipped</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-black font-display text-[#FF2A2A]">1st</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Hackathon Winner</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-black font-display text-amber-400">Java</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">DSA Focus</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-black font-display text-emerald-400">7 Certs</div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Infosys & NIPAM</div>
                  </div>
                </div>
              </div>

              {/* Skills Matrix */}
              <div className="p-6 md:p-8 rounded-3xl bg-zinc-950/60 border border-white/10 space-y-4">
                <div className="flex items-center space-x-3">
                  <Code2 className="w-5 h-5 text-[#FF2A2A]" />
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                    Core Technical Matrix
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                    <div className="text-[#FF2A2A] font-bold">LANGUAGES & CORE CS</div>
                    <p className="text-zinc-300 font-sans">Java, Python, C++, JavaScript, TypeScript, SQL, Data Structures & Algorithms, OOP, Operating Systems, DBMS, Networks</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                    <div className="text-[#FF2A2A] font-bold">FRAMEWORKS & ENGINES</div>
                    <p className="text-zinc-300 font-sans">React.js, FastAPI, Node.js, Express, Flask, Three.js, PyTorch, TensorFlow, OpenCV, Tailwind CSS</p>
                  </div>
                </div>
              </div>

              {/* Verified Certifications Section in Visual Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-zinc-950/60 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-[#FF2A2A]" />
                    <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                      Verified Certifications & Licenses
                    </h3>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-sky-400 hover:underline flex items-center space-x-1"
                  >
                    <span>View LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {[
                    { title: "Explore Machine Learning Using Python", org: "Infosys Springboard", date: "Jun 2025" },
                    { title: "Software Engineering Principles & Methodologies", org: "Infosys Springboard", date: "Aug 2025" },
                    { title: "Introduction to Deep Learning & Neural Nets", org: "Infosys Springboard", date: "Aug 2025" },
                    { title: "Introduction to Natural Language Processing (NLP)", org: "Infosys Springboard", date: "Aug 2025" },
                    { title: "Prompt Engineering & Generative AI Design", org: "Infosys Springboard", date: "Jun 2025" },
                    { title: "National IP Awareness & Training (NIPAM)", org: "IP Office of India, Govt of India", date: "Sep 2025" },
                    { title: "Full Stack & Python Acceleration Programs", org: "LetsUpgrade Learning", date: "2025" }
                  ].map((c, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start space-x-3">
                      <ShieldCheck className="w-4 h-4 text-[#FF2A2A] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white leading-snug">{c.title}</div>
                        <div className="text-[11px] text-zinc-400 font-light mt-0.5">{c.org} • {c.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Hackathons & Competitions */}
              <div className="p-6 md:p-8 rounded-3xl bg-zinc-950/60 border border-white/10 space-y-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-5 h-5 text-[#FF2A2A]" />
                  <h3 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                    Hackathon Victories & Competitions
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/30 flex justify-between items-start">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 text-[10px] font-mono font-bold uppercase">
                        🥇 First Prize Winner
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">5-Hour Rapid Prototype Hackathon</h4>
                      <p className="text-xs text-zinc-300 font-light mt-1">NRI Institute of Technology — Built full-stack emergency response prototype under time constraints.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-purple-500/30 flex justify-between items-start">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-400 text-[10px] font-mono font-bold uppercase">
                        ⭐ Spotlight Finalist
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">InnoGenesis National Hackathon 2026</h4>
                      <p className="text-xs text-zinc-300 font-light mt-1">Built Pulsevein multimodal deepfake detection system with rPPG signals and lip-audio synchronization.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </motion.div>
    </div>
  );
}
