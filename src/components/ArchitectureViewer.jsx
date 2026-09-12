import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Shield, Radio, Server, Database, Zap, Cpu, 
  MapPin, CheckCircle2, ArrowRight, Play, Terminal 
} from 'lucide-react';

export default function ArchitectureViewer() {
  const [activeTab, setActiveTab] = useState('resqone');
  const [radarSimulating, setRadarSimulating] = useState(false);
  const [simLogs, setSimLogs] = useState([]);

  const runSimulation = () => {
    setRadarSimulating(true);
    setSimLogs([
      "00.00s > Initializing IMU Accelerometer + Gyroscope Sensor Stream...",
      "00.45s > [ALERT] Anomaly Detected: 7.2G Impact vector on Z-Axis.",
      "00.90s > AI Pre-Crash Radar triggered. 15-second Multilingual Voice Prompt active.",
      "01.50s > No abort signal received within safety threshold.",
      "02.10s > 25s SOS Broadcast Payload generated. Geohash: 16.5062°N, 80.6480°E.",
      "02.80s > Dispatching concurrent WebSocket telemetry to Hospital ICU, 108 Emergency Fleet & Blood Bank.",
      "03.40s > 3D Live Ambulance GPS Corridor active. Green Corridor route locked.",
      "04.00s > [SYSTEM OK] Rescue Pipeline operational. Golden Hour triage secured."
    ]);

    setTimeout(() => {
      setRadarSimulating(false);
    }, 4500);
  };

  return (
    <section className="relative w-full py-24 bg-[#070709] text-white border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF2A2A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 text-[11px] font-mono text-[#FF2A2A] uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>SDE System Design & Architecture</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white uppercase">
              System Design & Architecture
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-400 text-sm md:text-base font-light max-w-md">
            Architectural breakdown of real-time event meshes, telemetry processing, and low-latency computer vision pipelines.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex space-x-3 mb-8">
          <button
            onClick={() => setActiveTab('resqone')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
              activeTab === 'resqone'
                ? 'bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-[0_0_20px_rgba(255,42,42,0.3)]'
                : 'bg-zinc-900/80 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            🚑 RESQONE AI — Rescue Event Mesh
          </button>
          <button
            onClick={() => setActiveTab('pulsevein')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
              activeTab === 'pulsevein'
                ? 'bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-[0_0_20px_rgba(255,42,42,0.3)]'
                : 'bg-zinc-900/80 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            🧠 PULSEVEIN — rPPG Forensic Pipeline
          </button>
        </div>

        {/* Tab 1: RESQONE AI Architecture */}
        {activeTab === 'resqone' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Architecture Node Flow */}
            <div className="lg:col-span-7 bg-zinc-950/80 border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white flex items-center space-x-2">
                    <span>Autonomous Golden-Hour Event Mesh</span>
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-bold">
                    &lt; 200ms Latency
                  </span>
                </div>

                {/* Interactive Node Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-[#FF2A2A]/40 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-[#FF2A2A]/10 text-[#FF2A2A] flex items-center justify-center font-mono font-bold text-xs">
                      01
                    </div>
                    <h4 className="text-sm font-bold text-white">Sensor Radar</h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Continuous G-force & Gyroscope sensor fusion with 15s voice abort window.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-[#FF2A2A]/40 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                      02
                    </div>
                    <h4 className="text-sm font-bold text-white">WebSocket Mesh</h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      25s SOS broadcast broadcasted to 108 Emergency, nearest ICU & Family.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:border-[#FF2A2A]/40 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-mono font-bold text-xs">
                      03
                    </div>
                    <h4 className="text-sm font-bold text-white">3D Corridor Sync</h4>
                    <p className="text-[11px] text-zinc-400 leading-snug">
                      Three.js GPS navigation, green corridor traffic routing & blood match.
                    </p>
                  </div>
                </div>
              </div>

              {/* System Specs List */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Telemetry</span>
                  <span className="text-white font-bold">100Hz IMU Stream</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">State Engine</span>
                  <span className="text-white font-bold">Supabase Realtime</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">3D Engine</span>
                  <span className="text-white font-bold">Three.js / WebGL</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">API Gateway</span>
                  <span className="text-white font-bold">FastAPI / Python</span>
                </div>
              </div>
            </div>

            {/* Live Terminal / Simulation Runner */}
            <div className="lg:col-span-5 bg-black border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono text-xs shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Terminal className="w-4 h-4 text-[#FF2A2A]" />
                    <span className="font-bold text-zinc-300">resqone-telemetry-engine</span>
                  </div>
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2 min-h-[190px] text-zinc-300 overflow-y-auto no-scrollbar">
                  {simLogs.length === 0 ? (
                    <div className="text-zinc-500 italic pt-6 text-center">
                      Click below to simulate autonomous crash trigger & 25s SOS dispatch pipeline...
                    </div>
                  ) : (
                    simLogs.map((log, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        key={idx}
                        className={`${log.includes('ALERT') ? 'text-amber-400 font-bold' : log.includes('OK') ? 'text-emerald-400 font-bold' : 'text-zinc-300'}`}
                      >
                        {log}
                      </motion.div>
                    ))
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                <button
                  onClick={runSimulation}
                  disabled={radarSimulating}
                  className="px-4 py-2 rounded-xl bg-white text-black font-bold uppercase tracking-wider text-[11px] hover:bg-zinc-200 transition-all cursor-pointer flex items-center space-x-1.5 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>{radarSimulating ? 'Processing Event...' : 'Simulate Sensor Event'}</span>
                </button>

                <a 
                  href="https://resqone-ai-app.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white text-[11px] underline flex items-center space-x-1"
                >
                  <span>Open Live App</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Pulsevein Deepfake Pipeline */}
        {activeTab === 'pulsevein' && (
          <div className="bg-zinc-950/80 border border-white/10 p-6 md:p-8 rounded-3xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                  rPPG Remote Photoplethysmography & Lip-Audio Multimodal Pipeline
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  InnoGenesis Hackathon 2026 Spotlight Finalist Submission
                </p>
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 font-bold">
                94.8% Deepfake Benchmark Accuracy
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
                  Phase 1: Physiological rPPG
                </div>
                <h4 className="text-base font-bold text-white">Facial Chrominance Signals</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Extracts microscopic spatial blood pulsation across ROI face zones using CHROM/POS color space transformation to detect heartbeat frequency consistency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
                  Phase 2: Multimodal Sync
                </div>
                <h4 className="text-base font-bold text-white">Lip-Audio Cross-Correlation</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Concurrently matches phoneme-viseme temporal alignment using Librosa audio spectrograms and 68-point facial landmark velocities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
                  Phase 3: Forensic Output
                </div>
                <h4 className="text-base font-bold text-white">Automated Heatmap & Report</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Generates tamper confidence scores, artifact bounding boxes, and PDF evidence reports in &lt; 3.5s per video.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
