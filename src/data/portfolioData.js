/**
 * Siddharth HM — Portfolio Central Content Model
 * Synchronized with Official Resume
 */

export const portfolioData = {
  personal: {
    name: "Siddharth HM",
    role: "Web Developer | React.js | Node.js | MERN Stack",
    tagline: "Web Developer | React.js | Node.js | MERN Stack",
    location: "Bangalore, Karnataka, India",
    phone: "+91 9019983348",
    email: "siddharth.hm2@gmail.com",
    github: "https://github.com/siddharth842147",
    linkedin: "https://linkedin.com/in/siddharthhm-dev",
    resumeUrl: "/resume.pdf",
    shortBio:
      "Web developer and final-year B.E. Information Science Engineering student (CGPA 8.1/10) with hands-on experience building responsive, full-stack web applications on the MERN stack. Skilled in React.js front ends, RESTful APIs with Node.js and Express.js, MongoDB and MySQL databases, JWT authentication, and payment gateway integration (Razorpay, Stripe). Delivered paid client projects end to end, from requirements to final delivery. Seeking a Web Developer / Full-Stack Developer role.",
    stats: [
      { label: "CGPA", value: "8.1 / 10" },
      { label: "Degree", value: "B.E. ISE (2023–2027)" },
      { label: "12th Standard", value: "87.5% (PCMC)" },
      { label: "Focus", value: "MERN + Next.js" },
    ],
  },

  about: {
    headline: "Engineering Scalable Web Architectures & Modern Full-Stack Systems",
    paragraphs: [
      "I am a web developer and final-year B.E. Information Science Engineering student at Jnana Vikas Institute of Technology (CGPA 8.1/10) with hands-on experience building responsive, full-stack web applications on the MERN stack. Skilled in React.js front ends, RESTful APIs with Node.js and Express.js, MongoDB and MySQL databases, JWT authentication, and payment gateway integration (Razorpay, Stripe).",
      "I have delivered paid client projects end to end, from requirements gathering to architecture, database design, API implementation, testing, and final delivery. Furthermore, I actively integrate AI-assisted development tools (Claude, Cursor, Codex, Amazon Q Developer) to accelerate delivery cycles while maintaining rigorous code quality and reliability.",
    ],
    education: [
      {
        institution: "Jnana Vikas Institute of Technology",
        degree: "B.E. in Information Science Engineering",
        period: "2023 – 2027",
        score: "CGPA: 8.1 / 10",
        coursework: "Object-Oriented Programming, Database Management Systems, Data Structures",
      },
      {
        institution: "Sri Vasavi PU College",
        degree: "12th Standard (PCMC)",
        period: "March 2023",
        score: "87.5%",
        coursework: "Physics, Chemistry, Mathematics, Computer Science",
      },
    ],
  },

  skills: {
    categories: [
      {
        name: "Front End",
        color: "#00F0FF",
        skills: [
          { name: "React.js", icon: "Boxes", level: "Advanced" },
          { name: "Next.js", icon: "Layout", level: "Advanced" },
          { name: "TypeScript", icon: "Code2", level: "Proficient" },
          { name: "JavaScript (ES6+)", icon: "Terminal", level: "Advanced" },
          { name: "HTML5 & CSS3", icon: "Layout", level: "Expert" },
          { name: "Tailwind CSS", icon: "Sparkles", level: "Advanced" },
          { name: "Responsive Web Design", icon: "Layout", level: "Expert" },
          { name: "Reusable Components", icon: "Boxes", level: "Advanced" },
        ],
      },
      {
        name: "Back End",
        color: "#A855F7",
        skills: [
          { name: "Node.js", icon: "Server", level: "Advanced" },
          { name: "Express.js", icon: "Network", level: "Advanced" },
          { name: "RESTful API Design", icon: "Network", level: "Advanced" },
          { name: "JWT Authentication", icon: "ShieldCheck", level: "Advanced" },
          { name: "Bcrypt", icon: "Binary", level: "Advanced" },
          { name: "Mongoose", icon: "Database", level: "Advanced" },
          { name: "Nodemailer", icon: "Send", level: "Proficient" },
          { name: "PDFKit", icon: "FileText", level: "Proficient" },
        ],
      },
      {
        name: "Databases",
        color: "#00F0FF",
        skills: [
          { name: "MongoDB", icon: "Layers", level: "Advanced" },
          { name: "MySQL", icon: "Database", level: "Advanced" },
          { name: "Supabase", icon: "Database", level: "Proficient" },
        ],
      },
      {
        name: "Integrations",
        color: "#F59E0B",
        skills: [
          { name: "Razorpay", icon: "CreditCard", level: "Advanced" },
          { name: "Stripe", icon: "CreditCard", level: "Advanced" },
          { name: "Google Books API", icon: "BookOpen", level: "Advanced" },
        ],
      },
      {
        name: "Languages",
        color: "#38BDF8",
        skills: [
          { name: "JavaScript", icon: "Terminal", level: "Advanced" },
          { name: "Python", icon: "Code2", level: "Advanced" },
          { name: "Java", icon: "Cpu", level: "Proficient" },
          { name: "C++", icon: "Binary", level: "Intermediate" },
          { name: "SQL", icon: "Database", level: "Advanced" },
        ],
      },
      {
        name: "Tools",
        color: "#10B981",
        skills: [
          { name: "Git", icon: "GitBranch", level: "Advanced" },
          { name: "GitHub", icon: "Github", level: "Advanced" },
          { name: "Postman", icon: "Send", level: "Advanced" },
          { name: "VS Code", icon: "Code2", level: "Expert" },
          { name: "MySQL Workbench", icon: "Database", level: "Advanced" },
        ],
      },
      {
        name: "AI-Assisted Development",
        color: "#EC4899",
        skills: [
          { name: "Claude", icon: "Bot", level: "Power User" },
          { name: "Cursor", icon: "Sparkles", level: "Power User" },
          { name: "Codex", icon: "Terminal", level: "Power User" },
          { name: "Amazon Q Developer (Kiro)", icon: "Cpu", level: "Power User" },
        ],
      },
    ],
  },

  experience: [
    {
      role: "Freelance Full-Stack Developer",
      organization: "Project-based",
      period: "2024 — Present",
      type: "Paid Client Engagements",
      description:
        "Developed and delivered multiple full-stack web projects on a paid basis, handling requirements gathering, implementation, testing, and final delivery.",
      highlights: [
        "Developed and delivered multiple full-stack web projects on a paid basis, handling requirements gathering, implementation, testing, and final delivery",
        "Built applications on the MERN stack with REST APIs, database design, and responsive React interfaces",
        "Used AI-assisted development tools to speed up coding and debugging while maintaining code quality",
      ],
      badgeColor: "#00F0FF",
    },
    {
      role: "AI/ML Intern",
      organization: "Pinnacle Labs (Remote)",
      period: "Aug 2025 — Sep 2025",
      type: "Remote Internship",
      description:
        "Developed an AI-powered language translator web application using Python, Streamlit, and the Deep Translator API.",
      highlights: [
        "Developed an AI-powered language translator web application using Python, Streamlit, and the Deep Translator API",
        "Enabled real-time translation across 100+ languages with a minimal-input, responsive user interface",
        "Managed source code with Git and GitHub with robust version control",
      ],
      badgeColor: "#A855F7",
    },
    {
      role: "B.E. in Information Science Engineering",
      organization: "Jnana Vikas Institute of Technology",
      period: "2023 — 2027",
      type: "Undergraduate Degree",
      description:
        "Final-year B.E. student maintaining an 8.1 / 10 CGPA. Core coursework in Object-Oriented Programming, Database Management Systems, and Data Structures.",
      highlights: [
        "Academic standing: 8.1 / 10 CGPA",
        "Coursework: Object-Oriented Programming, Database Management Systems, Data Structures",
      ],
      badgeColor: "#38BDF8",
    },
    {
      role: "12th Standard (PCMC) — 87.5%",
      organization: "Sri Vasavi PU College",
      period: "March 2023",
      type: "Pre-University Education",
      description:
        "Completed 12th Standard in Physics, Chemistry, Mathematics, and Computer Science with 87.5% distinction.",
      highlights: [
        "Secured 87.5% aggregate in Karnataka Pre-University Examination (PCMC stream)",
        "Strong foundation in Computer Science, Discrete Mathematics, and Problem Solving",
      ],
      badgeColor: "#EC4899",
    },
  ],

  projects: [
    {
      id: "digital-library",
      title: "Digital Library Management System",
      category: "Full-Stack Web App (MERN)",
      description:
        "Contributed to a full-stack college library platform covering book inventory, borrowing, returns, and QR-based student identification.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT & Bcrypt",
        "Razorpay",
        "Stripe",
        "Nodemailer",
        "PDFKit",
        "Google Books API",
      ],
      features: [
        "Contributed to a full-stack college library platform covering book inventory, borrowing, returns, and QR-based student identification",
        "Built secure authentication with JWT and Bcrypt, and integrated Razorpay and Stripe for online fine payments",
        "Automated email notifications with Nodemailer and generated downloadable fine receipts using PDFKit",
        "Integrated the Google Books API for ISBN-based book lookup; developed REST APIs and reusable React components",
      ],
      liveDemo: "https://library-demo.siddharthhm.dev",
      github: "https://github.com/siddharth842147/digital-library",
      accent: "cyan",
    },
    {
      id: "kartiva",
      title: "Kartiva – E-Commerce Website",
      category: "Full-Stack E-Commerce (Next.js & Supabase)",
      description:
        "Built a full-stack e-commerce storefront with product listings across five categories: Books, Clothing, Electronics, Home & Kitchen, and Sports.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "shadcn/ui",
        "Kiro",
        "Antigravity",
      ],
      features: [
        "Built a full-stack e-commerce storefront with product listings across five categories: Books, Clothing, Electronics, Home & Kitchen, and Sports",
        "Developed with Next.js, TypeScript, and Supabase, with a responsive UI styled using Tailwind CSS and shadcn/ui components",
        "Used AI-assisted development tools (Kiro, Antigravity) to build and polish the application",
        "Engineered scalable database schemas, category navigation, dynamic filtering, and modular component hierarchy",
      ],
      liveDemo: "https://kartiva.siddharthhm.dev",
      github: "https://github.com/siddharth842147/kartiva-ecommerce",
      accent: "pink",
    },
    {
      id: "ai-translator",
      title: "AI Translator Web App",
      category: "AI Web App (Python & Streamlit)",
      description:
        "Built a responsive web application that translates text across 100+ languages in real time.",
      technologies: [
        "Python",
        "Streamlit",
        "Deep Translator API",
        "Git",
        "GitHub",
        "REST APIs",
      ],
      features: [
        "Built a responsive web application that translates text across 100+ languages in real time",
        "Minimal-input, clean responsive user interface optimized for instant cross-lingual translation",
        "Used Git and GitHub for version control and documented the project for easy setup and reproducibility",
      ],
      liveDemo: "https://ai-translator.siddharthhm.dev",
      github: "https://github.com/siddharth842147/ai-translator-webapp",
      accent: "violet",
    },
  ],

  contactConfig: {
    endpoint: "https://formsubmit.co/ajax/siddharth.hm2@gmail.com",
    email: "siddharth.hm2@gmail.com",
    serviceType: "formsubmit",
  },
};
