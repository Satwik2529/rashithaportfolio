// ============================================================
// siteData.ts — Portfolio Data (Rashitha Koppurouthu)
// ============================================================

export const personalInfo = {
  name: "Rashitha Koppurouthu",
  initials: "RK",
  phone: "+91-9347684446",
  email: "rashithakoppurouthu@gmail.com",
  tagline:
    "Full-Stack Developer · AI/ML Enthusiast · MERN Stack Developer",
  location: "Andhra Pradesh, India",
  resumeUrl:
    "https://drive.google.com/file/d/YOUR_RESUME_LINK/view", // Replace

  socials: {
    github: "https://github.com/Rashithakoppurouthu",
    linkedin:
      "https://www.linkedin.com/in/koppurouthu-rashitha-71413a291",
    leetcode: "https://leetcode.com/u/Rashithakoppurouthu",
    codechef: "https://www.codechef.com/users/rashitha_k",
  },

  education: {
    institution:
      "Vignan Foundation for Science Technology and Research",
    degree:
      "Bachelor of Technology in Artificial Intelligence and Machine Learning",
    gpa: "8.34 / 10",
  },

  aboutParagraph:
    "I am an AI & Full-Stack developer passionate about building scalable real-world applications using MERN Stack, Machine Learning, and modern AI technologies. I enjoy developing intelligent platforms that solve practical problems, from healthcare assistants and business automation systems to AI-powered resume analysis tools. My focus lies in creating high-performance applications with impactful user experiences and production-ready architectures.",
};

// ── Skills ─────────────────────────────────────────────────────

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },

  {
    category: "Frontend",
    items: [
      "React.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
    ],
  },

  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },

  {
    category: "Machine Learning",
    items: [
      "Scikit-learn",
      "NLP",
      "Deep Learning",
      "Disease Prediction",
      "ATS Analysis",
    ],
  },

  {
    category: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Google Colab",
      "MERN Stack",
      "OpenAI API",
      "Gemini API",
    ],
  },

  {
    category: "Core Concepts",
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "MVC Architecture",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "Cloud Computing",
    ],
  },
];

// ── Projects ───────────────────────────────────────────────────

export interface Project {
  name: string;
  index: string;
  label: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "BizNova",
    index: "01",
    label: "AI Business Platform",

    tagline:
      "AI-powered multilingual retail and business management platform.",

    stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
    ],

    highlights: [
      "Built a full-stack AI-powered retail platform supporting multilingual voice and text interactions.",
      "Integrated Google Gemini AI to automate billing, analytics, and inventory management reducing manual effort by 90%.",
      "Implemented intelligent forecasting for revenue optimization and demand prediction using historical transaction data.",
      "Developed real-time customer-retailer workflows with automated order synchronization and bill scanning.",
    ],

    liveUrl: "https://biznova.onrender.com",

    githubUrl: "https://github.com/Rashithakoppurouthu/BIZNOVA",
  },

  {
    name: "ArogyayaVani",
    index: "02",
    label: "AI Healthcare",

    tagline:
      "Multilingual AI healthcare assistant with disease prediction.",

    stack: [
      "MERN Stack",
      "Machine Learning",
      "REST APIs",
      "MongoDB",
    ],

    highlights: [
      "Developed an AI-powered healthcare assistant delivering real-time multilingual symptom analysis.",
      "Integrated ML models through REST APIs achieving 92% disease prediction accuracy.",
      "Implemented GPS-based doctor recommendation system for emergency and high-risk conditions.",
      "Designed scalable frontend-backend architecture enabling seamless real-time interactions.",
    ],

    liveUrl: "https://swasthyavani-6.onrender.com/",

    githubUrl: "https://github.com/Rashithakoppurouthu/ArogyaVani",
  },

  {
    name: "HireSense",
    index: "03",
    label: "AI Resume Platform",

    tagline:
      "AI-powered ATS resume analyzer and career guidance platform.",

    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],

    highlights: [
      "Built a full-stack AI resume intelligence platform supporting ATS analysis and role prediction.",
      "Implemented resume parsing, skill extraction, and job-description matching using pdf-parse and Multer.",
      "Integrated OpenAI APIs for AI resume enhancement, career coaching, and roadmap generation.",
      "Developed GitHub profile analytics with secure JWT authentication and rate-limited APIs.",
    ],

    liveUrl: "https://github.com/Rashithakoppurouthu/HireSense",

    githubUrl: "https://github.com/Rashithakoppurouthu/Hiresense",
  },
];

// ── Experience ─────────────────────────────────────────────────

export interface ExperienceEntry {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Full-Stack Developer",
    company: "Personal & Academic Projects",
    dates: "2024 — Present",

    bullets: [
      "Built scalable MERN stack applications integrating AI APIs and Machine Learning models.",
      "Developed production-ready REST APIs with authentication, secure routing, and database optimization.",
      "Implemented AI-driven systems including ATS analysis, healthcare prediction, and business automation.",
    ],
  },
];

// ── Achievements ───────────────────────────────────────────────

export type AchievementSize = "large" | "normal";

export type AccentColor =
  | "accent-coral"
  | "accent-teal"
  | "accent-purple"
  | "accent-electric";

export interface Achievement {
  platform: string;
  title: string;
  badge?: string;
  rating?: string;
  stat?: string;
  progressPercent?: number;
  color: AccentColor;
  size: AchievementSize;
  description?: string;
  bigNumber?: string;
}

export const achievements: Achievement[] = [
  {
    platform: "LeetCode",

    title: "Problem Solver",

    badge: "250+ Problems",

    rating: "DSA & Competitive Programming",

    stat: "Solved 250+ algorithmic problems",

    progressPercent: 70,

    color: "accent-teal",

    size: "normal",
  },

  {
    platform: "CodeChef",

    title: "Competitive Programmer",

    badge: "1300 Rating",

    rating: "Competitive Coding",

    stat: "Consistent contest participation",

    progressPercent: 60,

    color: "accent-electric",

    size: "normal",
  },

  {
    platform: "AWS",

    title: "AWS Cloud Practitioner Essentials",

    stat: "Cloud Computing Foundations",

    color: "accent-coral",

    size: "normal",
  },

  {
    platform: "IBM",

    title: "Backend Development with Node.js & Express",

    stat: "REST APIs & Backend Engineering",

    color: "accent-purple",

    size: "normal",
  },
];

// ── Positions / Leadership ────────────────────────────────────

export interface Position {
  label: string;
  title: string;
  description: string;
}

export const positions: Position[] = [
  {
    label: "Leadership — 01",

    title: "AI & Full-Stack Developer",

    description:
      "Focused on developing scalable AI-powered applications using MERN Stack, Machine Learning, and cloud technologies.",
  },

  {
    label: "Leadership — 02",

    title: "Problem Solving & DSA",

    description:
      "Actively practicing data structures and algorithms through competitive programming and coding platforms.",
  },
];

// ── Navigation Sections ───────────────────────────────────────

export const navSections = [
  { id: "home", label: "Home", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "achievements", label: "Achievements", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
];