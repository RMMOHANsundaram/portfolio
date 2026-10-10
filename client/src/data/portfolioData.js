export const portfolioData = {
  profile: {
    name: "Mohan R",
    role: "Full Stack Developer",
    college: "National Engineering College, Kovilpatti",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "6.9",
    expectedGraduation: "2028",
    location: "Thoothukudi, Tamil Nadu, India",
    email: "r.m.mohansundaram@gmail.com",
    phone: "+91 97900 48962",
    github: "https://github.com/RMMOHANsundaram",
    linkedin: "https://www.linkedin.com/in/r-mohan-004709327/",
    leetcode: "https://leetcode.com/u/mohan2006rm/",
    hackathon: "Smart India Hackathon 2026 (TechCure)",
    leetcodeCount: 250,
  },
  rolesTypewriter: [
    "Full Stack Developer",
    "MERN Stack Architect",
    "Java & Spring Boot Builder",
    "Smart India Hackathon Finalist",
    "Problem Solver (250+ LeetCode)"
  ],
  stats: [
    { icon: "🎓", value: "6.9", label: "CGPA · B.E. CSE" },
    { icon: "⚡", value: "250+", label: "LeetCode Java Solved" },
    { icon: "🏆", value: "SIH 2026", label: "Smart India Hackathon Finalist" },
    { icon: "🥇", value: "2nd Prize", label: "SQLize Database Contest" }
  ],
  about: {
    bioParagraphs: [
      "I am a third-year Computer Science and Engineering student at National Engineering College, Kovilpatti. My core passion lies in full-stack engineering, API design, and database systems. I enjoy understanding the complete lifecycle of a software product — architecting normalized relational schemas, building scalable backend services, and crafting intuitive, responsive user experiences.",
      "Whether developing an AI-assisted multilingual patient intake platform for Smart India Hackathon 2026 or building an automated college canteen ordering ecosystem, I prioritize clean architecture, performance, and developer clarity.",
      "I actively practice algorithmic problem solving in Java on LeetCode, learn modern DevOps workflows, and look for internship opportunities where I can make meaningful contributions to production codebases."
    ],
    pillars: [
      {
        icon: "🛠️",
        title: "Backend & API Architecture",
        desc: "Designing secure REST APIs, role-based authentication (RBAC), and JPA entity models in Java, Express, and Node.js."
      },
      {
        icon: "🧠",
        title: "Data Structures & Algorithms",
        desc: "250+ solved challenges on LeetCode focusing on optimal space/time complexity in Java."
      },
      {
        icon: "🌐",
        title: "Modern React & Frontend",
        desc: "Building accessible, lightning-fast interfaces using React (JSX), state management, and modern responsive CSS."
      }
    ]
  },
  skills: [
    {
      category: "languages",
      title: "Languages",
      icon: "💻",
      skills: ["Java", "JavaScript (ES6+)", "C", "C++", "Python", "TypeScript"]
    },
    {
      category: "web",
      title: "Web & Frameworks",
      icon: "🚀",
      skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "REST APIs", "HTML5 & CSS3"]
    },
    {
      category: "databases",
      title: "Databases & Storage",
      icon: "🗄️",
      skills: ["MongoDB", "SQL / MySQL", "Spring Data JPA", "SQLite", "Database Design"]
    },
    {
      category: "tools",
      title: "Tools & DevOps",
      icon: "⚙️",
      skills: ["Git & GitHub", "Postman", "DevOps Principles", "OOP", "Vite / NPM"]
    },
    {
      category: "tools",
      title: "Professional Strengths",
      icon: "🤝",
      skills: ["Problem Solving", "Agile Collaboration", "Time Management", "English", "Tamil"]
    }
  ],
  projects: [
    {
      id: "techcure-sih-2026",
      title: "TechCure: AI-Powered Multilingual Patient Case-Taking System",
      subtitle: "Smart India Hackathon 2026 · Problem Statement #26047 · Team ID 14",
      category: "ai",
      description: "An AI-driven clinical workflow and patient intake platform designed to streamline outpatient queues. Patients communicate their health issues in regional Indian languages by voice or touch, creating structured case sheets before the consultation.",
      bullets: [
        "Multilingual Speech-to-Text and contextual clinical NLP for intelligent symptom inquiry.",
        "Prescription & report parsing with OCR to digitize physical records.",
        "AYUSH module assessing Prakriti, Vikriti, Agni, and Ahara-Vihara with clinical red-flag detection.",
        "Built with RBAC, data encryption, and ABDM/FHIR architecture compatibility."
      ],
      techStack: ["React", "Node.js", "Python", "Speech-to-Text", "Clinical NLP", "OCR", "FHIR/ABDM"],
      githubUrl: "https://github.com/RMMOHANsundaram",
      isFeatured: true,
      featuredTag: "★ Spotlight · Smart India Hackathon 2026"
    },
    {
      id: "canteen-ordering",
      title: "Online Food Ordering for College Canteen",
      subtitle: "Java · Spring Boot · JPA · SQLite",
      category: "backend",
      description: "A high-throughput web application built to streamline college cafeteria operations. Enables students to browse menu catalogs by category, order food in advance, select flexible payment methods, and receive automated pickup verification tokens.",
      techStack: ["Java", "Spring Boot", "JPA", "SQLite", "RBAC"],
      githubUrl: "https://github.com/RMMOHANsundaram/Online-food-order-system-for-college-canteen"
    },
    {
      id: "tour-booking-cpp",
      title: "Tour Booking Management System",
      subtitle: "C++ Systems Architecture",
      category: "systems",
      description: "A modular system software application for reserving domestic and international holiday packages. Includes user authentication, seat capacity validation, passenger database tracking, dynamic pricing, and automated file-based invoice generation.",
      techStack: ["C++", "OOP Design", "File Handling", "Billing Engine"],
      githubUrl: "https://github.com/RMMOHANsundaram/Tour-Booking-Management-System"
    }
  ],
  otherRepos: [
    { name: "HealthTrack", desc: "Python · Healthcare tracker & vitals", url: "https://github.com/RMMOHANsundaram/HealthTrack" },
    { name: "quizarena", desc: "TypeScript · Interactive quiz platform", url: "https://github.com/RMMOHANsundaram/quizarena" },
    { name: "devops-demo", desc: "CI/CD · Automation workflows", url: "https://github.com/RMMOHANsundaram/devops-demo" },
    { name: "Online-Food-Ordering", desc: "Java · Enterprise core edition", url: "https://github.com/RMMOHANsundaram/Online-Food-Ordering-System" }
  ],
  journey: [
    {
      date: "2024 — 2028 (Expected)",
      title: "B.E. in Computer Science and Engineering",
      desc: "National Engineering College (Autonomous), Kovilpatti. 3rd year, CGPA 6.9. Focus on Data Structures, Database Design, OS, and Software Engineering."
    },
    {
      date: "2026",
      title: "Smart India Hackathon (SIH 2026) · Finalist",
      desc: "Developed TechCure with Team ID 14 for Problem Statement 26047. Engineered an AI-driven multilingual patient case-taking pipeline."
    },
    {
      date: "2026",
      title: "AI Jailbreak · Technozarre'26",
      desc: "Participated in the AI security and prompt engineering challenge at SRM Institute of Science and Technology, Vadapalani."
    },
    {
      date: "College Event",
      title: "2nd Prize · SQLize Database Contest",
      desc: "Secured 2nd place in college-wide database architecture, complex query optimization, and schema normalization competition."
    },
    {
      date: "NPTEL",
      title: "NPTEL Certified Coursework",
      desc: "Completed certifications in Cloud Computing, Industry 4.0 and Industrial IoT, and Introduction to IoT."
    }
  ],
  certifications: [
    { title: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard · Jul 2026", icon: "🤖" },
    { title: "Introduction to Cyber Security", issuer: "Infosys Springboard · Apr 2026", icon: "🔒" },
    { title: "Database Design", issuer: "Oracle Academy · Mar 2026", icon: "🗄️" },
    { title: "Front End Web Developer Certification", issuer: "Infosys Springboard · Aug 2025", icon: "💻" },
    { title: "JavaScript Certification", issuer: "Infosys Springboard · Jul 2025", icon: "⚡" },
    { title: "HTML5 & CSS3 Modern Web", issuer: "Infosys Springboard · Jul 2025", icon: "🎨" },
    { title: "NPTEL: Cloud Computing", issuer: "IIT / NPTEL Verified", icon: "☁️" },
    { title: "NPTEL: Industry 4.0 & Industrial IoT", issuer: "IIT / NPTEL Verified", icon: "🏭" },
    { title: "NPTEL: Introduction to IoT", issuer: "IIT / NPTEL Verified", icon: "📡" }
  ]
};
