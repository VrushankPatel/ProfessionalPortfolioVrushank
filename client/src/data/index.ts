export const profileData = {
  name: "Vrushank Patel",
  title: "Senior Software Developer",
  company: "NASDAQ",
  profilePic: "https://vrushankpatel.github.io/img/profile-pic.jpg",
  cspoBadge: "https://vrushankpatel.github.io/img/sa-cspo-600.png",
  summary: "Hi! I'm a passionate Software developer with 5+ years of experience, specialized in high performance trading systems, capital markets, and payment platforms. Skilled in Java, Python, Apache Kafka, Reactive programming, and cloud-native technologies. Certified Scrum Product Owner (CSPO), focusing on agile development and modernization.",
  
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/vrushank-patel-69b682180/",
    github: "https://github.com/VrushankPatel",
    email: "vrushankpatel5@gmail.com",
    codersrank: "https://profile.codersrank.io/user/vrushankpatel"
  },
  
  professionalContributions: [
    {
      title: "MME",
      description: "A lightning fast and automatic orders matching and trade execution engine.",
      link: "https://www.nasdaq.com/solutions/fintech/marketplace-technology/exchange-matching"
    },
    {
      title: "Zeus-GPI",
      description: "Middleware for seamless message brokering (Swift MX, ISO 20022)",
      link: "https://www.capsys.hu/Zeus_GPI"
    },
    {
      title: "CMS",
      description: "Modernizing of the legacy card management systems from ACI",
      link: "https://capsys-europe.com/Card_Management_System"
    }
  ],
  
  projects: [
    {
      id: "APEX",
      title: "APEX",
      shortDescription: "A sophisticated system for detecting arbitrage opportunities across cryptocurrency exchanges in real-time.",
      description: "APEX is a sophisticated Go-based system for detecting arbitrage opportunities across cryptocurrency exchanges in real-time. It provides a comprehensive solution for monitoring price differences and identifying profitable trading opportunities across multiple exchanges.",
      primaryTech: "Go",
      techColor: "blue",
      technologies: ["WebSocket", "Cryptocurrency", "Real-time Analysis", "Web Interface"],
      links: {
        docs: "https://apex-docs.readthedocs.io/en/latest/",
        github: "https://github.com/VrushankPatel/apex"
      }
    },
    {
      id: "Bluelink",
      title: "Bluelink",
      shortDescription: "A secure terminal-based chat application with real-time communication and cross-platform support.",
      description: "Bluelink is a secure terminal-based chat application built with Go and Firebase Realtime Database. It provides a clean, intuitive terminal interface for real-time communication across different platforms.",
      primaryTech: "Go",
      techColor: "blue",
      technologies: ["Firebase", "Terminal UI", "Real-time Communication", "Cross-platform"],
      links: {
        docs: "https://bluelink.readthedocs.io/",
        github: "https://github.com/VrushankPatel/bluelink"
      }
    },
    {
      id: "Marketron",
      title: "Marketron",
      shortDescription: "A trading simulator designed to onboard non-trading individuals with hands-on trading experience.",
      description: "Marketron is a trading simulator designed to onboard non-trading individuals by providing hands-on experience with trading concepts and tools. It offers a risk-free environment to practice trading strategies and understand market dynamics.",
      primaryTech: "React",
      techColor: "orange",
      technologies: ["Firebase", "JavaScript", "Trading APIs", "Data Visualization"],
      links: {
        demo: "https://marketron-x.web.app/",
        github: "https://github.com/VrushankPatel/marketron"
      }
    },
    {
      id: "iBoard",
      title: "iBoard",
      shortDescription: "A collaborative editor platform that enables real-time collaboration for code interviews and document sharing.",
      description: "iBoard is a collaborative editor platform that enables real-time collaboration for code interviews, document sharing, and team collaboration. It leverages Firebase and P2P networks to provide seamless communication between users.",
      primaryTech: "JavaScript",
      techColor: "yellow",
      technologies: ["Firebase", "P2P Networking", "Real-time Collaboration", "Encryption"],
      links: {
        demo: "https://iboard-x.web.app/"
      }
    },
    {
      id: "Maxine",
      title: "Maxine",
      shortDescription: "A Service Registry and Discovery (SRD) server that automatically detects and registers network services.",
      description: "Maxine is a Service Registry and Discovery (SRD) server that automatically detects and registers each service and device in a network, functioning as a reverse proxy to make services available by their names rather than hardcoded URLs.",
      primaryTech: "Java",
      techColor: "red",
      technologies: ["Microservices", "Service Discovery", "REST APIs", "Network Automation"],
      links: {
        docs: "https://github.com/VrushankPatel/Maxine-SRD",
        github: "https://github.com/VrushankPatel/Maxine-SRD"
      }
    },
    {
      id: "Complexica",
      title: "Complexica",
      shortDescription: "An application that transforms black-and-white images into fully colored versions using machine learning.",
      description: "Complexica-Server is a Flask-based application that utilizes machine learning models for image colorization. Leveraging Intel OpenVINO for optimized inference, the server takes grayscale images as input and outputs fully colorized images.",
      primaryTech: "Python",
      techColor: "green",
      technologies: ["Flask", "Machine Learning", "Intel OpenVINO", "Docker"],
      links: {
        github: "https://github.com/VrushankPatel/Complexica-Server",
        dockerhub: "https://hub.docker.com/r/vrushankpatel/complexica-server"
      }
    },
    {
      id: "Weathermon",
      title: "Weathermon",
      shortDescription: "A comprehensive weather monitoring application providing detailed weather information for locations worldwide.",
      description: "Weathermon is a comprehensive weather monitoring application that provides detailed weather information for locations worldwide. The application offers current conditions, forecasts, and historical weather data in a user-friendly interface.",
      primaryTech: "JavaScript",
      techColor: "yellow",
      technologies: ["Weather APIs", "Responsive Design", "Firebase Hosting"],
      links: {
        demo: "https://weathermon-x.web.app/",
        github: "https://github.com/VrushankPatel/weathermon"
      }
    }
  ],
  
  skills: [
    {
      category: "Languages",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", // Code icon path
      bgColor: "bg-primary-100 dark:bg-primary-900/30",
      textColor: "text-primary-600 dark:text-primary-400",
      items: [
        { name: "Java", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "Python", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
        { name: "Go", bgColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" },
        { name: "JavaScript", bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
        { name: "SQL", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Package icon
      bgColor: "bg-secondary-100 dark:bg-secondary-900/30",
      textColor: "text-secondary-600 dark:text-secondary-400",
      items: [
        { name: "Spring Boot", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "React", bgColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
        { name: "Apache Kafka", bgColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
        { name: "TensorFlow", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "Flask", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.5M13 8.5a4 4 0 114 0M4.5 12.5a4 4 0 110-8 4 4 0 010 8z", // Cloud icon
      bgColor: "bg-accent-100 dark:bg-accent-900/30",
      textColor: "text-accent-600 dark:text-accent-400",
      items: [
        { name: "AWS", bgColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
        { name: "Docker", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "Kubernetes", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "GitLab CI/CD", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
        { name: "Firebase", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" }
      ]
    },
    {
      category: "Databases",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", // Database icon
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      items: [
        { name: "PostgreSQL", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "MongoDB", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
        { name: "Redis", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
        { name: "MySQL", bgColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" }
      ]
    },
    {
      category: "Methodologies",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", // Clipboard icon
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      textColor: "text-indigo-600 dark:text-indigo-400",
      items: [
        { name: "Agile/Scrum", bgColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
        { name: "Microservices", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "TDD", bgColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" },
        { name: "CI/CD", bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
        { name: "DevOps", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" }
      ]
    },
    {
      category: "Other Skills",
      icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning bolt icon
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
      items: [
        { name: "Reactive Programming", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "Machine Learning", bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
        { name: "UI/UX Design", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "System Architecture", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" }
      ]
    }
  ],
  
  certifications: [
    {
      title: "Scrum Alliance CSPO",
      description: "Certified Scrum Product Owner with focus on agile product development.",
      icon: "fas fa-tasks",
      link: "https://bcert.me/sefawhitn",
      color: "primary"
    },
    {
      title: "IBM Blockchain",
      description: "IBM Blockchain Essentials certification covering distributed ledger technology.",
      icon: "fa-brands fa-btc",
      link: "https://courses.cognitiveclass.ai/certificates/e73685d94f344d92b329712d7dceac5c",
      color: "blue"
    },
    {
      title: "Nutanix Hybrid Cloud",
      description: "Cloud infrastructure management and virtualization on Nutanix platform.",
      icon: "fas fa-cloud",
      link: "https://drive.google.com/file/d/1rgkx3sx-quvh7SUVxVdWT5iELAWM5b4y/view?usp=sharing",
      color: "purple"
    },
    {
      title: "AWS Data Analytics",
      description: "Amazon Web Services data analytics tools and methodologies.",
      icon: "fab fa-aws",
      link: "https://drive.google.com/file/d/1-ory7-vSeIpgnFXzP_oDQGzHQf8yJiV5/view?usp=sharing",
      color: "orange"
    },
    {
      title: "Deep Learning Nanodegree",
      description: "Advanced neural networks and deep learning architectures from Udacity.",
      icon: "fas fa-robot",
      link: "https://graduation.udacity.com/confirm/EL966DFN",
      color: "red"
    },
    {
      title: "Intel AI Edge",
      description: "Edge computing AI solutions using Intel hardware and software.",
      icon: "fas fa-microchip",
      link: "https://drive.google.com/file/d/1r7c2GWMveQTFBI2w0Vbt-LC2LRHth3o6/view?usp=sharing",
      color: "blue"
    },
    {
      title: "DataCamp SQL",
      description: "Advanced SQL programming and database management techniques.",
      icon: "fas fa-database",
      link: "https://drive.google.com/file/d/1TzKFISnjLmGeKfQdo9sHVjuA41PDmwNk/view?usp=sharing",
      color: "green"
    },
    {
      title: "IBM Python for Data Science",
      description: "Python programming for data analysis and scientific computing.",
      icon: "fab fa-python",
      link: "https://www.coursera.org/account/accomplishments/certificate/2BDBFSVA8APC",
      color: "blue"
    }
  ],

  professionalExperience: [
    {
      company: "NASDAQ",
      title: "Senior Software Developer",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Develop and maintain high-performance trading systems supporting millions of transactions per day",
        "Optimize market data processing algorithms reducing latency by 35%",
        "Lead implementation of new regulatory compliance features",
        "Collaborate with cross-functional teams to design resilient microservice architectures",
        "Mentor junior developers and conduct code reviews to ensure quality standards"
      ]
    },
    {
      company: "Capsys Technologies",
      title: "Software Engineer",
      period: "Jun 2019 - Dec 2021",
      responsibilities: [
        "Led modernization of legacy card management systems to microservice architecture",
        "Developed middleware solutions for financial message brokering (Swift MX, ISO 20022)",
        "Implemented robust error handling and monitoring for mission-critical payment systems",
        "Collaborated with banking clients to design custom integration solutions",
        "Reduced system downtime by 75% through improved fault tolerance and automated recovery"
      ]
    },
    {
      company: "Tech Innovations Inc.",
      title: "Junior Developer",
      period: "Aug 2018 - May 2019",
      responsibilities: [
        "Assisted in development of web applications using React and Java Spring Boot",
        "Created automated test suites improving code coverage by 40%",
        "Participated in daily stand-ups and sprint planning meetings",
        "Implemented UI components following design specifications",
        "Fixed bugs and performance issues in existing applications"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Gujarat Technological University",
      year: "2018"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sardar Patel University",
      year: "2015"
    }
  ]
};
