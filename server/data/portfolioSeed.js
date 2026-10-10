export const initialProjects = [
  {
    id: 'techcure-sih-2026',
    title: 'TechCure: AI-Powered Multilingual Patient Case-Taking System',
    subtitle: 'Smart India Hackathon 2026 · Problem Statement #26047 · Team ID 14',
    category: 'ai',
    description: 'An AI-driven clinical workflow and patient intake platform designed to streamline outpatient queues. Patients communicate their health issues in regional Indian languages by voice or touch, creating structured case sheets before the consultation.',
    bullets: [
      'Multilingual Speech-to-Text and contextual clinical NLP for intelligent symptom inquiry.',
      'Prescription & report parsing with OCR to digitize physical records.',
      'AYUSH module assessing Prakriti, Vikriti, Agni, and Ahara-Vihara with clinical red-flag detection.',
      'Built with RBAC, data encryption, and ABDM/FHIR architecture compatibility.'
    ],
    techStack: ['React', 'Node.js', 'Python', 'Speech-to-Text', 'Clinical NLP', 'OCR', 'FHIR/ABDM'],
    githubUrl: 'https://github.com/RMMOHANsundaram',
    liveUrl: '',
    isFeatured: true,
    order: 1,
  },
  {
    id: 'canteen-ordering',
    title: 'Online Food Ordering for College Canteen',
    subtitle: 'Java · Spring Boot · JPA · SQLite',
    category: 'backend',
    description: 'A robust web application engineered to eliminate cafeteria congestion. Students pre-order food, customize orders by category, choose flexible payment modes, and receive automated verification pickup tokens.',
    bullets: [
      'Admin and cafeteria owner modules for menu stock management, active orders, and revenue reporting.',
      'REST APIs built with Spring Boot, Spring Data JPA repositories, and role-based access control.'
    ],
    techStack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'SQLite', 'REST APIs', 'RBAC'],
    githubUrl: 'https://github.com/RMMOHANsundaram/Online-food-order-system-for-college-canteen',
    liveUrl: '',
    isFeatured: false,
    order: 2,
  },
  {
    id: 'tour-booking-cpp',
    title: 'Tour Booking Management System',
    subtitle: 'C++ Systems Architecture',
    category: 'systems',
    description: 'A modular system application for booking national and international vacation packages with customer authentication, passenger record management, and seat validation.',
    bullets: [
      'Engineered with Object-Oriented Programming (OOP), file persistence, and robust exception handling.',
      'Multi-tiered payment processing with automated text-file invoice generation upon booking confirmation.'
    ],
    techStack: ['C++', 'OOP Design', 'File Handling', 'Data Validation', 'Invoicing'],
    githubUrl: 'https://github.com/RMMOHANsundaram/Tour-Booking-Management-System',
    liveUrl: '',
    isFeatured: false,
    order: 3,
  },
  {
    id: 'healthtrack',
    title: 'HealthTrack',
    subtitle: 'Python Healthcare Analytics',
    category: 'ai',
    description: 'Personalized wellness and vitals tracking application with predictive metrics.',
    bullets: ['Python based analytics for daily wellness data and trends.'],
    techStack: ['Python', 'Data Analytics', 'Health Metrics'],
    githubUrl: 'https://github.com/RMMOHANsundaram/HealthTrack',
    liveUrl: '',
    isFeatured: false,
    order: 4,
  },
  {
    id: 'quizarena',
    title: 'QuizArena',
    subtitle: 'TypeScript Interactive Engine',
    category: 'fullstack',
    description: 'Real-time quiz gaming engine with timed rounds, score leaderboards, and category selection.',
    bullets: ['TypeScript, React, and modular state management.'],
    techStack: ['TypeScript', 'React', 'State Engine'],
    githubUrl: 'https://github.com/RMMOHANsundaram/quizarena',
    liveUrl: '',
    isFeatured: false,
    order: 5,
  },
  {
    id: 'devops-demo',
    title: 'DevOps CI/CD Automation Demo',
    subtitle: 'DevOps & Pipeline Automation',
    category: 'systems',
    description: 'Continuous integration and deployment workflow templates showcasing automated test & deploy stages.',
    bullets: ['GitHub Actions, automated checks, and container deployment flows.'],
    techStack: ['CI/CD', 'GitHub Actions', 'DevOps', 'Docker Basics'],
    githubUrl: 'https://github.com/RMMOHANsundaram/devops-demo',
    liveUrl: '',
    isFeatured: false,
    order: 6,
  }
];

export const initialSkills = [
  {
    category: 'languages',
    title: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'JavaScript (ES6+)', 'C', 'C++', 'Python', 'TypeScript']
  },
  {
    category: 'web',
    title: 'Web & Frameworks',
    icon: '🚀',
    skills: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'HTML5 & CSS3']
  },
  {
    category: 'databases',
    title: 'Databases & Storage',
    icon: '🗄️',
    skills: ['MongoDB', 'SQL / MySQL', 'Spring Data JPA', 'SQLite', 'DBMS & Normalization']
  },
  {
    category: 'tools',
    title: 'Tools & DevOps',
    icon: '⚙️',
    skills: ['Git & GitHub', 'Postman', 'DevOps Fundamentals', 'OOP Architecture', 'Vite / NPM']
  },
  {
    category: 'softskills',
    title: 'Professional Strengths',
    icon: '🤝',
    skills: ['Problem Solving', 'Agile Collaboration', 'Time Management', 'English (Proficient)', 'Tamil (Native)']
  }
];
