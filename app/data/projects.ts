export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  devpost?: string;
  github?: string;
  fullDescription: string;
  tags?: string[];
  award?: string;
  projectType?: string;
}

export const projects: Project[] = [  
  {
    id: "mitre-ectf",
    title: "SCU Red Team (2026)",
    description: "Led MITRE eCTF red team operations to exploit embedded HSM workflows and secure high-value flags.",
    image: "/assets/images/experience/mitre-logo.png",
    tags: ["Embedded Security", "Red Teaming", "Firmware Analysis"],
    projectType: "MITRE eCTF '26",
    fullDescription: "As Project Manager and Red Team Lead for SCU's MITRE eCTF team, I directed exploitation strategy across firmware analysis, attack-chain design, and vulnerability validation. I coordinated agile milestones and technical documentation while delegating rapid-response tasks across the team to capture high-value flags under strict competition constraints."
  },
  {
    id: "wildfire-recovery-ai-platform",
    github: "https://github.com/sipneat/wids-datathon-2025",
    title: "Wildfire Recovery Platform (2026)",
    description: "Built a full-stack AI recovery platform that delivers context-aware guidance for wildfire-affected users.",
    image: "/assets/images/experience/wids-logo.jpg",
    tags: ["RAG Pipeline", "Pinecone", "React + Firebase"],
    projectType: "WiDS x Accenture Pilot",
    fullDescription: "I built an end-to-end RAG system using Jina embeddings, Pinecone, and Groq LLM APIs, then integrated FEMA, insurance, Zillow, and user-intake data for personalized retrieval. I developed the React and Firebase application layer with persistent chat memory and real-time interaction, and improved response quality through embedding and prompt tuning for better accuracy and latency. This is currently hosted on https://wids.jakeesperson.com/."
  },
  {
    id: "broncoctf-2026",
    title: "BroncoCTF (2026)",
    description: "Competed in a 24-hour CTF",
    image: "/assets/images/project/BroncoCTF.png",
    tags: ["Capture The Flag", "Cybersecurity", "Team Competition"],
    award: "3rd Place",
    projectType: "BroncoCTF 2026",
    fullDescription: "I competed in BroncoCTF 2026, a 24-hour capture-the-flag competition held at the same time as Hack for Humanity at Santa Clara University. Working as part of a four-person team, we solved offensive and defensive security challenges under tight time pressure and finished in 3rd place."
  },
  {
    id: "memory-game",
    description: "Built a customizable Java Swing memory game with configurable difficulty, timing, and polished gameplay UI.",
    image: "/assets/images/project/brain.png",
    title: "Memory Game (2025)",
    github: "https://github.com/ChrisShobe/java-project",
    tags: ["Java Swing", "Event-Driven Programming", "State Management"],
    projectType: "Class Project",
    fullDescription: "For this Java class project, I built a full-screen memory game with adjustable grid size, move limits, and timer controls. I implemented core mechanics including card matching, scoring, win/loss detection, and pause or restart behavior, then designed custom Swing components to deliver a cleaner and more accessible desktop experience.",
  },
  {
    id: "text-to-test",
    title: "Text-2-Test (2025)",
    description: "Created an automated quiz generator that converts large PDFs into targeted free-response study questions.",
    image: "/assets/images/project/text-to-test.png",
    devpost: "https://devpost.com/software/study-78q0r3",    
    github: "https://github.com/ChrisShobe/intel-hack",
    tags: ["Python", "React", "PDF Parsing"],
    projectType: "ACM x Intel Hackathon",
    fullDescription: "Text-2-Test transforms long PDFs into study-ready free-response quizzes using text chunking and keyword-driven parsing. I built the Python processing pipeline, structured question generation logic, and connected regeneration flows across frontend pages to create a smooth, interactive study workflow."
},
{
    id: "hearo",
    title: "Hearo (2025)",
    description: "Built an accessibility-first mobile app that detects fire alarms and sends real-time visual and tactile alerts.",
    image: "/assets/images/project/HearoLogo.png",
    devpost: "https://devpost.com/software/hearo-kcb80g",    
    github: "https://github.com/ChrisShobe/hack-for-humanity-2025",
    tags: ["Flutter", "Flask", "Accessibility Tech"],
    award: "Best Womxn in Hack Award",
    projectType: "Hack for Humanity '25",
    fullDescription: "Hearo is a mobile safety app built for deaf and hard-of-hearing users that identifies fire alarms and triggers vibration and flashlight alerts. I contributed background execution logic, key UI and UX flows, and project communication assets, while the system used encrypted audio transfer to a Flask backend for privacy-conscious real-time classification."
  },
  {
    id: "literally-cooking",
    title: "Literally Cooking (2024)",
    description: "Developed an AI cooking assistant that merges recipes into optimized multi-dish execution plans.",
    image: "/assets/images/project/cooking.png",
    devpost: "https://devpost.com/software/recipe-app-6cx8b0",    
    github: "https://github.com/ChrisShobe/aws-hack-2024",
    tags: ["AWS Bedrock", "Prompt Engineering", "Flask"],
    projectType: "AWS x INRIX AI Hackathon",
    fullDescription: "Literally Cooking generates a unified cooking timeline for two dishes so users can serve both meals hot and on time. I led design in Figma, built backend logic with Python, Flask, and Boto3, and crafted prompt workflows in AWS Bedrock with Claude to improve output quality while integrating recipe data and user feedback loops."
  },
  {
    id: "countdown-to-chaos",
    title: "Countdown to Chaos (2024)",
    description: "Built a timed Roblox escape-room game with scripted puzzles, pressure mechanics, and interactive room logic.",
    image: "/assets/images/project/countdown to chaos.jpg",    
    devpost: "https://devpost.com/software/countdown-to-chaos",
    tags: ["Lua Scripting", "Roblox Studio", "Puzzle Game Design"],
    projectType: "Roblox Hack",
    fullDescription: "Countdown to Chaos is a single-player science-lab escape room where each puzzle room increases urgency as time runs out. I scripted gameplay interactions in Lua, including puzzle triggers and room logic, and helped implement core mechanics that made the experience functional despite a compressed hackathon timeline and limited prior Roblox experience."
  },
  {
    id: "treeid",
    title: "TreeID (2024)",
    description: "Created a kid-friendly mobile app that helps users identify tree species through guided questions.",
    image: "/assets/images/project/treeid.png",
    devpost: "https://devpost.com/software/treeid",    
    github: "https://github.com/ChrisShobe/HackforHumanity2024",
    tags: ["Flutter", "Figma", "Environmental Education"],
    projectType: "Hack for Humanity '24",
    fullDescription: "TreeID teaches biodiversity through a mobile-first, question-based identification flow tailored to Yosemite-area flora. I helped build and connect multiple Flutter screens from Figma concepts, producing a functional and visually engaging app that made environmental learning approachable for younger users."
  },
  {
    id: "jetstream",
    title: "JetStream (2023)",
    description: "Built a unified trip planner that combines flights, routing, and ground transit into one itinerary view.",
    image: "/assets/images/project/jetstream.jpg",
    devpost: "https://devpost.com/software/jetstream-7pas4o",    
    github: "https://github.com/jordanmosakowski/inrix-hack-23",
    tags: ["React", "Flask", "Multi-API Integration"],
    award: "Finalist",
    projectType: "INRIX Amazon University Hack 2023",
    fullDescription: "JetStream simplifies business travel planning by combining flight schedules, transportation options, and cost-aware routing in one interactive interface. I contributed to INRIX and transit API integration on the backend and built itinerary-focused frontend features, helping the team ship a seamless user flow despite major mid-project API changes."
  },
  {
    id: "parking",
    title: "Parking++ (2023)",
    description: "Built a parking discovery web app that ranks options by cost, distance, and real-world street context.",
    image: "/assets/images/project/parking++.png",
    devpost: "https://devpost.com/software/parking-dkrpb5",    
    github: "https://github.com/sipneat/inrix-hack-2023",
    tags: ["Vue.js", "Flask", "INRIX API"],
    award: "10th Place",
    projectType: "INRIX Hack 2023",
    fullDescription: "Parking++ helps users quickly choose affordable parking by combining INRIX availability data with distance and price filtering, plus Street View context for better decisions. I supported UI design and built search interaction logic, and our team resolved mapping and integration challenges to deliver a practical, consumer-focused tool."
  }
];