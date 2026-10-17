import githubProjects from "@/data/github-projects.json";

export const personalInfo = {
  name: "Yugin Santhosh K",
  title: "2nd Year IT Student & Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React & Next.js Engineer",
    "Python & Java Developer",
    "AI & Cloud Explorer",
  ],
  bio: "Motivated Information Technology engineering student at Loyola ICAM College of Engineering and Technology (2024–2028 batch). Passionate about building modern, high-performance web applications, integrating AI services, and solving real-world problems with clean, efficient code.",
  email: "yuginsanthosh1263@gmail.com",
  phone: "+91 9790132826",
  location: "Chennai, Tamil Nadu, India",
  github: "https://github.com/yugindhanam",
  linkedin: "https://www.linkedin.com/in/yugin-santhosh-k-859981289",
  twitter: "https://twitter.com/yuginsanthosh43",
  resumeUrl: "/resume.pdf",
  stats: [
    { value: githubProjects.length + 3, label: "Projects & Studies" },
    { value: 6, label: "Certifications" },
    { value: 2, label: "Years Coding" },
  ],
};

export const skillGroups = [
  {
    category: "Programming Languages",
    icon: "💻",
    type: "programming",
    items: [
      { name: "Python (Advanced CSC)", level: 88 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Java (OOP & Data Structures)", level: 82 },
      { name: "C / C++", level: 78 },
    ],
  },
  {
    category: "Web & AI Technologies",
    icon: "🌐",
    type: "web",
    items: [
      { name: "React.js / Next.js 14", level: 90 },
      { name: "HTML5 / CSS3 / Tailwind CSS", level: 96 },
      { name: "LiveKit Cloud AI & AIML", level: 84 },
      { name: "REST APIs & Node.js", level: 85 },
    ],
  },
];

export const tools = [
  "Python (Advanced CSC)",
  "Full Stack (CSC)",
  "Cybersecurity (NPTEL)",
  "Unity Game Engine",
  "LiveKit AI Cloud",
  "Git & GitHub",
  "REST APIs",
  "Postman",
  "VS Code",
  "AIML",
];

export const projects = [
  ...githubProjects,
  {
    title: "Surplus Food Waste Management App",
    category: "web",
    description:
      "A full-stack application designed to minimize food waste by connecting surplus food providers directly with distribution hubs.",
    tags: ["Full Stack", "Python", "Web App", "UI/UX"],
    github: "https://github.com/yugindhanam",
    live: "#",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },
  {
    title: "Cloud AI Integration via LiveKit API",
    category: "ai",
    description:
      "Integrated real-time AI audio/video capabilities into cloud services using LiveKit API for interactive web experiences.",
    tags: ["AI / ML", "LiveKit API", "Cloud", "Python"],
    github: "https://github.com/yugindhanam",
    live: "#",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
  },
  {
    title: "Unity & Python Game Engine",
    category: "game",
    description:
      "Created 2D/3D interactive games utilizing Unity game engine physics and Python logic scripts.",
    tags: ["Unity", "C#", "Python", "Game Dev"],
    github: "https://github.com/yugindhanam",
    live: "#",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  },
];

export const experiences = [
  {
    title: "B.Tech Information Technology",
    company: "Loyola ICAM College of Engineering & Technology (LICET)",
    date: "2024 – 2028 Batch (2nd Year)",
    description:
      "Pursuing IT engineering degree with focus on Software Development, Web Technologies, AIML, and Cybersecurity.",
    type: "education",
  },
  {
    title: "Higher Secondary Education",
    company: "Holy Cross Matric Hr. Sec. School",
    date: "Completed",
    description:
      "Strong academic foundation in Mathematics, Physics, and Computer Science.",
    type: "education",
  },
  {
    title: "Certifications & Technical Courses",
    company: "CSC & NPTEL",
    date: "2025 – 2026",
    description:
      "Completed Full Stack Dev (CSC), Advanced Python (CSC), Cybersecurity & Privacy (NPTEL), and AIML Courses.",
    type: "work",
  },
];
