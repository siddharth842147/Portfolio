import {
  BookOpen,
  Briefcase,
  Check,
  CheckCircle,
  Copy,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, skills, experience, projects } = portfolioData;
  const [copiedText, setCopiedText] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyRaw = () => {
    const rawResume = `SIDDHARTH HM
Web Developer | React.js | Node.js | MERN Stack
Bangalore, Karnataka, India | +91 9019983348 | siddharth.hm2@gmail.com
linkedin.com/in/siddharthhm-dev | github.com/siddharth842147

PROFESSIONAL SUMMARY
${personal.shortBio}

TECHNICAL SKILLS
Front End: React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Reusable Components
Back End: Node.js, Express.js, RESTful API design, JWT Authentication, Bcrypt, Mongoose, Nodemailer, PDFKit
Databases: MongoDB, MySQL, Supabase
Integrations: Razorpay, Stripe, Google Books API
Languages: JavaScript, Python, Java, C++, SQL
Tools: Git, GitHub, Postman, VS Code, MySQL Workbench
AI-Assisted Development: Claude, Cursor, Codex, Amazon Q Developer (Kiro)

PROJECTS
• Digital Library Management System | React.js, Node.js, Express.js, MongoDB
  - Contributed to a full-stack college library platform covering book inventory, borrowing, returns, and QR-based student identification.
  - Built secure authentication with JWT and Bcrypt, and integrated Razorpay and Stripe for online fine payments.
  - Automated email notifications with Nodemailer and generated downloadable fine receipts using PDFKit.
  - Integrated the Google Books API for ISBN-based book lookup; developed REST APIs and reusable React components.

• Kartiva – E-Commerce Website | Next.js, TypeScript, Supabase, Tailwind CSS, shadcn/ui
  - Built a full-stack e-commerce storefront with product listings across five categories: Books, Clothing, Electronics, Home & Kitchen, and Sports.
  - Developed with Next.js, TypeScript, and Supabase, with a responsive UI styled using Tailwind CSS and shadcn/ui components.
  - Used AI-assisted development tools (Kiro, Antigravity) to build and polish the application.

• AI Translator Web App | Python, Streamlit, Deep Translator API
  - Built a responsive web application that translates text across 100+ languages in real time.
  - Used Git and GitHub for version control and documented the project for easy setup.

EXPERIENCE
• Freelance Full-Stack Developer | Project-based (2024 — Present)
  - Developed and delivered multiple full-stack web projects on a paid basis, handling requirements gathering, implementation, testing, and final delivery.
  - Built applications on the MERN stack with REST APIs, database design, and responsive React interfaces.
  - Used AI-assisted development tools to speed up coding and debugging while maintaining code quality.

• AI/ML Intern | Pinnacle Labs (Remote) (Aug 2025 – Sep 2025)
  - Developed an AI-powered language translator web application using Python, Streamlit, and the Deep Translator API.
  - Enabled real-time translation across 100+ languages with a minimal-input, responsive user interface.
  - Managed source code with Git and GitHub.

EDUCATION
• Jnana Vikas Institute of Technology – B.E. in Information Science Engineering | 2023 – 2027
  CGPA: 8.1/10 | Coursework: Object-Oriented Programming, Database Management Systems, Data Structures
• Sri Vasavi PU College – 12th Standard (PCMC), 87.5% | March 2023`;

    navigator.clipboard.writeText(rawResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090D1A] border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-300">
              OFFICIAL RESUME // SIDDHARTH HM
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyRaw}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:text-white transition-all cursor-pointer"
              title="Copy formatted text resume"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <a
              href={personal.resumeUrl}
              download="Siddharth_HM_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-heading font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-10 py-8 space-y-8 text-slate-200 font-sans selection:bg-cyan-500/30">
          {/* Header Block */}
          <div className="text-center border-b border-white/10 pb-6">
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              SIDDHARTH <span className="gradient-text-cyan-violet">HM</span>
            </h1>
            <p className="font-heading font-semibold text-sm sm:text-base text-cyan-300 mt-1">
              Web Developer | React.js | Node.js | MERN Stack
            </p>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Bangalore, Karnataka, India
              </span>
              <span className="text-white/20">•</span>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                {personal.phone}
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personal.email}
              </a>
              <span className="text-white/20">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-purple-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>linkedin.com/in/siddharthhm-dev</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>github.com/siddharth842147</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PROFESSIONAL SUMMARY</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 bg-slate-900/50 p-4 rounded-2xl border border-white/5">
              {personal.shortBio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>TECHNICAL SKILLS</span>
            </div>
            <div className="space-y-2.5">
              {skills.categories.map((cat) => (
                <div
                  key={cat.name}
                  className="p-3 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col sm:flex-row sm:items-center gap-2 text-xs"
                >
                  <span className="font-heading font-bold text-white min-w-[170px] flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    {cat.name}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-200 border border-white/5 text-[11px] font-mono"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PROJECTS</span>
            </div>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">
                        {proj.title}
                      </h3>
                      <span className="font-mono text-xs text-cyan-300">
                        {proj.technologies.slice(0, 5).join(' • ')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={proj.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/25"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-800 text-slate-300 border border-white/10 hover:text-white"
                      >
                        <GithubIcon className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {proj.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>EXPERIENCE</span>
            </div>
            <div className="space-y-4">
              {experience.slice(0, 2).map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {exp.organization}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>EDUCATION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <h4 className="font-heading font-bold text-sm text-white">
                    B.E. in Information Science Engineering
                  </h4>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Jnana Vikas Institute of Technology (2023 – 2027)
                </p>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 text-xs font-mono border border-cyan-400/30">
                  CGPA: 8.1 / 10
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  Coursework: Object-Oriented Programming, Database Management Systems, Data Structures
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  <h4 className="font-heading font-bold text-sm text-white">
                    12th Standard (PCMC)
                  </h4>
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Sri Vasavi PU College (Completed March 2023)
                </p>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-pink-500/15 text-pink-300 text-xs font-mono border border-pink-400/30">
                  Score: 87.5%
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  Focus: Physics, Chemistry, Mathematics, Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
