import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, Phone, MapPin, ArrowUpRight, FileText, Code2, 
  Copy, Check, ExternalLink, Sparkles, Send, Clock, 
  MessageSquare, Globe, Briefcase, ShieldCheck, CheckCircle2, RotateCcw 
} from 'lucide-react';

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

const LinkedinIcon = ({ size = 20, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = ({ size = 16, ...props }) => (
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
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Footer({ onOpenResume }) {
  const footerRef = useRef(null);
  const [copiedType, setCopiedType] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'Full-Time SDE Role',
    message: ''
  });

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).format(new Date());
        setCurrentTime(`${timeStr} IST (UTC+5:30)`);
      } catch {
        setCurrentTime('IST (UTC+5:30)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [0.25, 0.9]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setFormSubmitted(true);

      // Pre-fill email client transmission
      const subject = encodeURIComponent(`[SDE Inquiry - ${formState.category}] From ${formState.name}`);
      const body = encodeURIComponent(
        `Dear Srinivas,\n\n` +
        `Name: ${formState.name}\n` +
        `Email: ${formState.email}\n` +
        `Inquiry Category: ${formState.category}\n\n` +
        `Message:\n${formState.message}\n\n` +
        `Sent via Portfolio Quick Dispatch Terminal`
      );
      window.open(`mailto:srinivaspalnati22@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }, 600);
  };

  const handleResetForm = () => {
    setFormState({
      name: '',
      email: '',
      category: 'Full-Time SDE Role',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <footer 
      id="contact"
      ref={footerRef}
      className="relative w-full bg-[#060608] text-white pt-24 pb-12 overflow-hidden flex flex-col justify-between border-t border-white/10"
    >
      {/* Background ambient lighting and dark grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,42,42,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-grow flex flex-col justify-between">
        
        {/* Executive Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 text-xs uppercase tracking-widest text-[#FF2A2A] font-mono font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span>Direct Communication Terminal • SDE Hiring 2026/2027</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight max-w-4xl">
            Let's Engineer Exceptional Systems. <span className="text-[#FF2A2A]">Get in Touch.</span>
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-zinc-300 font-light max-w-2xl leading-relaxed">
            Actively interviewing for <strong className="text-white font-semibold">Software Development Engineer & Distributed AI Systems</strong> positions. Reach out directly through any verified channel or dispatch a direct inquiry below.
          </p>
        </div>

        {/* Main 2-Column Professional Communication Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column (5 Cols): Persona Profile Card & Direct Channels */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Executive Persona Spotlight Card */}
            <div className="p-5 rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-[#FF2A2A]/40 transition-all shadow-xl flex items-center gap-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-zinc-950 flex items-end justify-center p-1 relative shadow-inner">
                <img 
                  src="/persona/contact_connect.png" 
                  alt="Palnati Srinivas - Let's Connect" 
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105 z-10"
                />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for SDE Roles
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display truncate">
                  Palnati Srinivas
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  3rd Year B.Tech CSE // Java + DSA
                </p>
                {currentTime && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/5">
                    <Clock className="w-3 h-3 text-[#FF2A2A]" />
                    <span>Local Time: <strong className="text-zinc-200">{currentTime}</strong></span>
                  </div>
                )}
              </div>
            </div>

            {/* Direct Channel 1: Official Email */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-[#FF2A2A]/50 transition-all duration-300 shadow-md flex flex-col justify-between space-y-3 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF2A2A]/15 border border-[#FF2A2A]/30 text-[#FF2A2A] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      Primary Inquiries & Recruiting
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-white font-mono select-all break-all mt-0.5">
                      srinivaspalnati22@gmail.com
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#FF2A2A] bg-[#FF2A2A]/10 px-2 py-0.5 rounded-md border border-[#FF2A2A]/20">
                  Priority
                </span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <a
                  href="mailto:srinivaspalnati22@gmail.com"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#FF2A2A] hover:bg-[#ff4444] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Send Direct Email</span>
                </a>
                <button
                  onClick={() => copyToClipboard('srinivaspalnati22@gmail.com', 'email')}
                  className="py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channel 2: Phone & WhatsApp */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-md flex flex-col justify-between space-y-3 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      Direct Mobile & WhatsApp
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-white font-mono select-all mt-0.5">
                      +91 9581778571
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  Instant
                </span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <a
                  href="https://wa.me/919581778571?text=Hi%20Srinivas,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20opportunity."
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer"
                >
                  <WhatsAppIcon size={14} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+919581778571"
                  className="py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  title="Direct phone call"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Call</span>
                </a>
                <button
                  onClick={() => copyToClipboard('+919581778571', 'phone')}
                  className="py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channel 3: Location & Roles */}
            <div className="p-5 rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-md flex flex-col justify-between space-y-3 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                      Location & Relocation
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                      Andhra Pradesh, India
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Open to Bangalore, Hyderabad, Pune, NCR, and Worldwide Remote
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                  Global
                </span>
              </div>

              <div className="pt-2 border-t border-white/5">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FF2A2A]" />
                  <span>Inspect Verified ATS Resume</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Executive Quick Dispatch Terminal */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-white/15 hover:border-[#FF2A2A]/40 transition-all duration-300 shadow-2xl relative overflow-hidden text-left">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-bold flex items-center space-x-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Quick Dispatch Form</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
                    Send Direct Message
                  </h3>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Guaranteed Reply &lt; 4 hrs</span>
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Inquiry Prepared & Transmitted!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
                    Your message draft has been generated and queued for direct transmission to <strong className="text-white font-mono">srinivaspalnati22@gmail.com</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  
                  {/* Category Selector Pills */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Opportunity / Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        'Full-Time SDE Role',
                        'Internship / Co-op',
                        'AI / System Project',
                        'General Discussion'
                      ].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormState(prev => ({ ...prev, category: cat }))}
                          className={`py-2 px-2.5 rounded-xl text-[11px] font-mono transition-all text-center border cursor-pointer ${
                            formState.category === cat
                              ? 'bg-[#FF2A2A]/20 border-[#FF2A2A] text-white font-bold shadow-[0_0_12px_rgba(255,42,42,0.25)]'
                              : 'bg-zinc-900/70 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / Recruiter"
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-[#FF2A2A] focus:outline-none focus:ring-1 focus:ring-[#FF2A2A] text-sm text-white placeholder-zinc-500 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                        Work / Contact Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-[#FF2A2A] focus:outline-none focus:ring-1 focus:ring-[#FF2A2A] text-sm text-white placeholder-zinc-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Message / Role Brief *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe the team, role requirements, project scope, or opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-[#FF2A2A] focus:outline-none focus:ring-1 focus:ring-[#FF2A2A] text-sm text-white placeholder-zinc-500 transition-all resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button & Security Note */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#FF2A2A] hover:bg-[#ff4444] disabled:opacity-60 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,42,42,0.35)] hover:shadow-[0_0_35px_rgba(255,42,42,0.5)] flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSending ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Message →</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Direct Transmission • Strict Confidentiality</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Verified Profiles & Engineering Quick Links Bar */}
        <div className="p-6 rounded-2xl bg-black/60 border border-white/10 mb-12 flex flex-wrap items-center justify-between gap-6">
          
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Engineering Profiles:
            </span>
            
            <a
              href="https://www.linkedin.com/in/palnati-pushpa-naga-venkata-srinivas-661744413"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-mono font-semibold"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://github.com/srinivaspalnati22-png"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all text-xs font-mono font-semibold"
            >
              <GithubIcon size={14} />
              <span>GitHub (7+ AI Repos)</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://leetcode.com/u/srinivaspalnati22-png/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all text-xs font-mono font-semibold"
            >
              <Code2 size={14} />
              <span>LeetCode (Java & DSA)</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/srinivaspalnati1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all text-xs font-mono font-semibold"
            >
              <Code2 size={14} />
              <span>HackerRank</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/15 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:border-white transition-all cursor-pointer bg-white/5"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>

        {/* Large Watermark Name Centerpiece */}
        <div className="py-10 select-none text-center relative overflow-hidden">
          <motion.h3 
            style={{ scale: textScale, opacity: textOpacity }}
            className="text-[12vw] font-black font-display tracking-tighter text-[#1c1c1c] leading-none uppercase text-center cursor-pointer transition-colors duration-500 hover:text-white hover:drop-shadow-[0_0_50px_rgba(255,42,42,0.35)]"
            title="Palnati Srinivas"
          >
            Palnati Srinivas
          </motion.h3>
        </div>

        {/* Bottom Copyright & Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-zinc-500 font-light gap-4">
          <p>© {new Date().getFullYear()} Palnati Pushpa Naga Venkata Srinivas. All rights reserved.</p>
          <p className="font-mono text-zinc-400">
            Engineered for High Performance • Built with React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}
