import confetti from 'canvas-confetti';
import {
  AlertCircle,
  CheckCircle2,
  Download,
  FileText,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

/**
 * ContactSection (Scene 6)
 * The Transmission Beacon: Working contact form with validation,
 * confetti celebratory burst, resume download, and direct communication links.
 */
export default function ContactSection({ onViewResume }) {
  const { personal, contactConfig } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Message should be at least 10 characters long.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const isPlaceholder = contactConfig.formspreeEndpoint.includes('placeholder');

      if (!isPlaceholder) {
        // Send real submission to Formspree
        const response = await fetch(contactConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Form submission failed. Please reach out via email directly.');
        }
      } else {
        // Simulated network delay for instant demonstration
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Trigger celebratory cyber confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#A855F7', '#38BDF8', '#FFFFFF'],
        });
      } catch (err) {
        // Confetti is decorative
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please email directly.');
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-24 z-10 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto w-full pointer-events-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>SECTOR 06 // TRANSMISSION BEACON</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            INITIATE <span className="gradient-text-cyan-violet">TRANSMISSION</span>
          </h2>
          <p className="text-sm text-slate-400 font-sans">
            Ready to contribute to full-stack engineering, scalable APIs, and intelligent web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Resume CTA */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Contact Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white mb-1">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Feel free to email me directly or explore my open-source code and professional profile.
              </p>

              {/* Email Address with One-Click Copy */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-mono text-xs text-slate-200 hover:text-cyan-300 transition-colors truncate"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 border border-cyan-400/30 transition-all shrink-0 cursor-pointer"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Phone with Direct Call & Copy */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-xs text-slate-200 hover:text-purple-300 transition-colors truncate"
                  >
                    {personal.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-purple-500/15 text-purple-300 hover:bg-purple-500/25 border border-purple-400/30 transition-all shrink-0 cursor-pointer"
                >
                  {copiedPhone ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Location Badge */}
              <div className="p-3 rounded-2xl bg-slate-900/50 border border-white/5 flex items-center gap-3 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personal.location}</span>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-heading text-xs font-semibold text-slate-300 group-hover:text-white">
                    GitHub
                  </span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-purple-400/40 hover:bg-purple-500/5 transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-300 group-hover:text-purple-400 transition-colors" />
                  <span className="font-heading text-xs font-semibold text-slate-300 group-hover:text-white">
                    LinkedIn
                  </span>
                </a>
              </div>

              {/* Resume Actions (View & Download) */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={onViewResume}
                  className="w-full py-3 px-4 rounded-2xl bg-slate-900/90 border border-cyan-400/40 hover:border-cyan-400 text-cyan-300 font-heading font-semibold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all active:scale-98 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Preview Resume (Interactive)</span>
                </button>

                <a
                  href={personal.resumeUrl}
                  download="Siddharth_HM_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-purple-400/40 hover:border-purple-400 text-white font-heading font-semibold text-xs tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all active:scale-98 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Form Setup Notice */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 text-xs text-slate-400 font-mono">
              <span className="text-cyan-300 font-bold block mb-1">
                // FORM INTEGRATION NOTE:
              </span>
              Replace <code className="text-purple-300">formspreeEndpoint</code> in <code className="text-cyan-300">src/data/portfolioData.js</code> with your Formspree ID to receive messages in your inbox.
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Send an Encrypted Dispatch
            </h3>
            <p className="text-xs text-slate-400 font-sans mb-6">
              Fill in your details below and I will get back to you within 24 hours.
            </p>

            {/* Error Banner */}
            {status === 'error' && (
              <div className="mb-4 p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2 font-mono animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Animation Banner */}
            {status === 'success' ? (
              <div className="p-8 text-center space-y-4 rounded-2xl glass-panel-cyan border border-cyan-400/40 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Transmission Delivered!
                </h4>
                <p className="text-xs text-slate-300 font-sans max-w-sm mx-auto">
                  Thank you for reaching out, Siddharth has received your signal and will respond shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 hover:bg-cyan-500/25 transition-all cursor-pointer"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                    Transmission Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let me know about your project, engineering role, or collaboration idea..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-slate-950 font-heading font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-200 active:scale-98 cursor-pointer disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Signal...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Dispatch</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
