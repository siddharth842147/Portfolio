# Siddharth HM — 3D Cinematic Universe Portfolio

A scroll-driven cinematic 3D portfolio website for **Siddharth HM**, final-year B.E. Information Science Engineering student and full-stack MERN & AI engineer from Bangalore, India.

As visitors scroll, a virtual camera flies through an interconnected 3D cyberspace universe featuring glowing neon light highways, floating geometric monoliths, interactive tech constellations, and holographic project portals.

---

## 🌟 Architecture & Technology Stack

| Technology | Role | Description |
| :--- | :--- | :--- |
| **Vite + React** | Core Framework | Instant Hot Module Replacement (HMR), lightning-fast static builds, and native WebGL support without SSR hydration overhead. |
| **Three.js & React Three Fiber** | 3D Graphics Engine | Declarative 3D scene graphs, custom Catmull-Rom spline camera trajectories, instanced starfield particles, and procedural glowing geometry. |
| **`@react-three/drei`** | 3D Helpers & Motion | Floating physics (`<Float />`), ambient fog, volumetric lighting, and smooth scene hierarchy. |
| **Lenis (`lenis`)** | Inertial Smooth Scroll | Physics-based momentum scrolling synchronized 1:1 with 3D camera travel. |
| **GSAP + ScrollTrigger** | Animation Choreography | Ties Lenis scroll progress to camera translation, rotation, and lookAt coordinates. |
| **Tailwind CSS v4 & Glassmorphism** | Modern Styling | Obsidian dark theme (`#05070D`), electric cyan (`#00F0FF`), neon violet (`#A855F7`), Syne / Space Grotesk / Inter typography. |
| **Canvas Confetti** | Interactive Feedback | Celebratory particle burst upon contact form dispatch. |

---

## 🎬 Cinematic Scenes (In Scroll Order)

1. **Scene 1 — Hero: The Gateway**
   - Animated sci-fi intro boot loader (`SIDDHARTH HM` neon reveal + telemetry progress bar).
   - Tagline: *"Full-Stack Developer (MERN) | Python | AI-Integrated Web Applications"*.
   - Quick metric pills (8.1 CGPA, B.E. ISE 2023–2027, Bangalore), mouse-parallax 3D core, and smooth scroll cue.
2. **Scene 2 — About: The Core Monolith**
   - Camera curves laterally around a towering glass monolith with rotating orbital rings.
   - Educational background at Jnana Vikas Institute of Technology and core architectural pillars (Full-Stack MERN, AI integration, Database modeling).
3. **Scene 3 — Skills: Orbiting Tech Constellation**
   - 3D rotating quantum cluster with interactive category filters:
     - **Languages**: Python, JavaScript (ES6+), Java, C++, SQL, HTML5 & CSS3.
     - **Frameworks**: React.js, Node.js, Express.js, Streamlit, Mongoose.
     - **Databases**: MongoDB, MySQL.
     - **Tools**: Git, GitHub, Postman, VS Code.
     - **AI Stack**: Claude, Cursor, Codex, Amazon Q Developer (Kiro).
4. **Scene 4 — Experience: Glowing Data Highway**
   - Camera follows an energy conduit passing through career waypoints:
     - **Freelance Full-Stack Developer** (project-based paid MERN apps).
     - **AI/ML Intern at Pinnacle Labs** (100+ language real-time translator).
     - **B.E. Information Science Engineering** (2023–2027, 8.1 CGPA).
5. **Scene 5 — Projects: Holographic Floating Portals**
   - Interactive 3D tilt cards with perspective hover response:
     - **Digital Library Management System**: MERN stack, QR code verification, dual payment gateways (Razorpay + Stripe), Nodemailer, and PDF invoicing.
     - **AI Translator Web App**: Python, Streamlit, Deep Translator API, supporting 100+ languages.
6. **Scene 6 — Contact & Resume: Transmission Beacon**
   - Working contact form with live validation and confetti success animation.
   - One-click resume download (`/resume.pdf`).
   - Direct links to GitHub (`github.com/siddharth842147`), LinkedIn (`linkedin.com/in/siddharthhm-dev`), and Email (`siddharth.hm2@gmail.com`).

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18+ (tested on Node v20/v26)
- **npm**: v9+

### 2. Installation
```bash
# Clone or open the repository
cd portfolio

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Customize

### 1. Editing Personal Content & Projects
All text, bios, projects, skills, and links are decoupled from the 3D graphics in a single file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

- To update project links, edit `liveDemo` and `github` fields.
- To add or modify skills, edit the `skills.categories` array.
- To add milestones, update the `experience` array.

### 2. Updating Your Resume PDF
Replace the placeholder file located at:
👉 **[`public/resume.pdf`](public/resume.pdf)**

When users click **"Resume"** or **"Download Complete Resume"**, your updated PDF will be served directly.

### 3. Setting Up the Contact Form
The contact form is configured to work with **Formspree** or **EmailJS** without requiring any backend server.

#### Formspree Setup (Recommended — 2 minutes):
1. Sign up for free at [formspree.io](https://formspree.io).
2. Click **"+ New Form"** and name it (e.g., `Portfolio Inquiries`).
3. Copy your unique form endpoint URL (e.g., `https://formspree.io/f/mqkvrxyz`).
4. Open **[`src/data/portfolioData.js`](src/data/portfolioData.js)** and paste your URL:
   ```javascript
   contactConfig: {
     formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
     serviceType: "formspree",
   }
   ```
Submissions will immediately be routed directly to your personal inbox (`siddharth.hm2@gmail.com`).

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial 3D portfolio release"
   git remote add origin https://github.com/siddharth842147/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and import `portfolio`.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your 3D portfolio is live worldwide with free global CDN and SSL!

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Select your GitHub repository.
3. Configure settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy site"**.

---

## ⚡ Performance & Accessibility
- **Cap on DPR**: Canvas pixel ratio capped at 2.0 to eliminate GPU overheating on Retina screens.
- **Instanced Dust Particles**: Low-draw-call particle systems for consistent 60 FPS scrolling.
- **Adaptive Fallback**: Gracefully scales down particle counts and disabling heavy effects on mobile screens.
- **Reduced Motion Support**: Fully respects `prefers-reduced-motion` for accessibility.
- **Semantic Structure**: Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`), valid ARIA labels, and WCAG AA contrast compliance.

---

© 2026 Siddharth HM. Built with precision and passion.
