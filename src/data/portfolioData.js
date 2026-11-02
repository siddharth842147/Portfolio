/**
 * Siddharth HM — Portfolio Central Content Model
 * Synchronized with Official Resume (Full Stack Software Engineer - Fresher)
 */

export const portfolioData = {
  personal: {
    name: "Siddharth HM",
    role: "Full Stack Software Engineer (Fresher) | React.js | Node.js | REST APIs | AI & LLM Projects",
    tagline: "Full Stack Software Engineer (Fresher) | React.js | Node.js | REST APIs | AI & LLM Projects",
    location: "Bangalore, Karnataka, India",
    phone: "+91 9019983348",
    email: "siddharth.hm2@gmail.com",
    github: "https://github.com/siddharth842147",
    linkedin: "https://linkedin.com/in/siddharthhm-dev",
    resumeUrl: "/resume.pdf",
    shortBio:
      "Final-year B.E. Information Science Engineering student (CGPA 8.1/10) with hands-on experience building full-stack web applications using React.js, Node.js, Express.js and REST APIs. Delivered paid freelance projects end to end, built authentication, payment and notification features, and worked on AI-powered applications during an AI/ML internship. Strong in JavaScript, Python and SQL, with solid fundamentals and a drive to learn. Seeking a Fresher Full Stack Software Engineer role.",
    stats: [
      { label: "CGPA", value: "8.1 / 10" },
      { label: "Degree", value: "B.E. ISE (2023–2027)" },
      { label: "12th Standard", value: "87.5% (PCMC)" },
      { label: "Target Role", value: "Full Stack Engineer" },
    ],
  },

  about: {
    headline: "Engineering Scalable Full-Stack Web Applications & Intelligent Systems",
    paragraphs: [
      "Final-year B.E. Information Science Engineering student (CGPA 8.1/10) with hands-on experience building full-stack web applications using React.js, Node.js, Express.js and REST APIs. Delivered paid freelance projects end to end, built authentication, payment and notification features, and worked on AI-powered applications during an AI/ML internship.",
      "Strong in JavaScript, Python and SQL, with solid fundamentals and a relentless drive to learn. Experienced in developing secure authentication systems, designing database schemas, integrating payment gateways and third-party APIs, and leveraging modern AI-assisted workflows (Claude, Cursor, Codex, Amazon Q Developer) to deliver clean, production-ready code.",
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
          { name: "JavaScript (ES6+)", icon: "Terminal", level: "Advanced" },
          { name: "TypeScript", icon: "Code2", level: "Proficient" },
          { name: "HTML5", icon: "Layout", level: "Expert" },
          { name: "CSS3", icon: "Layout", level: "Expert" },
          { name: "Tailwind CSS", icon: "Sparkles", level: "Advanced" },
          { name: "Responsive Design", icon: "Layout", level: "Expert" },
        ],
      },
      {
        name: "Back End",
        color: "#A855F7",
        skills: [
          { name: "Node.js", icon: "Server", level: "Advanced" },
          { name: "Express.js", icon: "Network", level: "Advanced" },
          { name: "RESTful API design", icon: "Network", level: "Advanced" },
          { name: "JWT Authentication", icon: "ShieldCheck", level: "Advanced" },
          { name: "Bcrypt", icon: "Binary", level: "Advanced" },
          { name: "Mongoose", icon: "Database", level: "Advanced" },
          { name: "Nodemailer", icon: "Send", level: "Proficient" },
        ],
      },
      {
        name: "Databases",
        color: "#00F0FF",
        skills: [
          { name: "SQL", icon: "Database", level: "Advanced" },
          { name: "MySQL", icon: "Database", level: "Advanced" },
          { name: "MongoDB", icon: "Layers", level: "Advanced" },
          { name: "Supabase", icon: "Database", level: "Proficient" },
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
      type: "Paid Freelance Projects",
      description:
        "Built and delivered multiple full-stack web applications on a paid basis, handling requirements, implementation, testing and final delivery.",
      highlights: [
        "Built and delivered multiple full-stack web applications on a paid basis, handling requirements, implementation, testing and final delivery",
        "Developed REST APIs with Node.js and Express.js, designed databases, and built responsive React.js interfaces",
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
        "Built an AI-powered language translator web application using Python, Streamlit and the Deep Translator API.",
      highlights: [
        "Built an AI-powered language translator web application using Python, Streamlit and the Deep Translator API",
        "Enabled real-time translation across 100+ languages with a minimal-input, responsive interface",
        "Managed source code with Git and GitHub",
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
        "Contributed to a full-stack college library platform covering book inventory, borrowing, returns and QR-based student identification.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT & Bcrypt",
        "Razorpay & Stripe",
        "Nodemailer",
        "PDFKit",
        "Google Books API",
      ],
      features: [
        "Contributed to a full-stack college library platform covering book inventory, borrowing, returns and QR-based student identification",
        "Built secure authentication with JWT and Bcrypt, and integrated Razorpay and Stripe for online fine payments",
        "Developed REST APIs and reusable React components; automated email notifications with Nodemailer and generated fine receipts with PDFKit",
        "Integrated the Google Books API for ISBN-based book lookup",
      ],
      liveDemo: "https://digital-library-31g52wi9s-siddharth842147s-projects.vercel.app/",
      github: "https://github.com/siddharth842147/digital-library",
      accent: "cyan",
    },
    {
      id: "kartiva",
      title: "Kartiva – E-Commerce Website",
      category: "Full-Stack E-Commerce (Next.js & Supabase)",
      description:
        "Built a full-stack e-commerce storefront with product listings across five categories, using Next.js, TypeScript and Supabase.",
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
        "Built a full-stack e-commerce storefront with product listings across five categories, using Next.js, TypeScript and Supabase",
        "Created a responsive UI with Tailwind CSS and shadcn/ui components",
        "Used AI-assisted development tools (Kiro, Antigravity) to build and polish the application",
      ],
      liveDemo: "https://kartiva.netlify.app/shop",
      github: "https://github.com/siddharth842147/kartiva-ecommerce",
      accent: "pink",
    },
    {
      id: "ai-translator",
      title: "AI Translator Web App",
      category: "AI Web App (Python & Streamlit)",
      description:
        "Built a responsive web app that translates text across 100+ languages in real time.",
      technologies: [
        "Python",
        "Streamlit",
        "Deep Translator API",
        "Git",
        "GitHub",
      ],
      features: [
        "Built a responsive web app that translates text across 100+ languages in real time",
        "Used Git and GitHub for version control and documented the project for easy setup",
      ],
      liveDemo: "https://ai-translato.netlify.app/",
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
