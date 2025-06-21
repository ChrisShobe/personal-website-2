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

export const projects: Project[] = [  {
    id: "text-to-test",
    title: "Text-2-Test",
    description: "Turn any PDF into a quiz-automated question generation made easy.",
    image: "/assets/images/project/text-to-test.png",
    devpost: "https://devpost.com/software/study-78q0r3",    github: "https://github.com/ChrisShobe/intel-hack",
    tags: ["Python", "React", "Educational Tech"],
    projectType: "ACM x Intel Hackathon",
    fullDescription: "We created an Automated Quiz Generator that turns large PDFs into free-response questions. Built with Python and React, it uses text chunking and keyword-based parsing to extract and format questions. I developed the Python scripts for text processing and integrated question regeneration between pages, ensuring a smooth, interactive user experience."
},
{
    id: "hearo",
    title: "Hearo",
    description: "A background safety app that listens and alerts for deaf or hard of hearing users.",
    image: "/assets/images/project/HearoLogo.png",
    devpost: "https://devpost.com/software/hearo-kcb80g",    github: "https://github.com/ChrisShobe/hack-for-humanity-2025",
    tags: ["Accessibility", "Machine Learning", "Python"],
    award: "Best Womxn in Hack Award",
    projectType: "Hack for Humanity '25",
    fullDescription: "Hearo is an AI-powered mobile app that detects fire alarms and alerts deaf or hard of hearing users via vibrations and flashlight signals. I worked on background processing, frontend UI/UX, and presentation materials. Built with Flutter and Flask, it balances accessibility and privacy by transmitting encrypted audio to a server for real-time analysis."
  },
  {
    id: "literally-cooking",
    title: "Literally Cooking",
    description: "Your AI-powered kitchen assistant for smart, personalized recipes.",
    image: "/assets/images/project/cooking.png",
    devpost: "https://devpost.com/software/recipe-app-6cx8b0",    github: "https://github.com/ChrisShobe/aws-hack-2024",
    tags: ["Claude 3", "AWS Bedrock", "Prompt Engineering"],
    projectType: "AWS x INRIX AI Hackathon",
    fullDescription: "Literally Cooking is an AI-powered assistant that generates optimized cooking plans for two dishes. I led the Figma design, backend with Python and Boto3, and prompt flows using Claude 3. The project integrates multiple APIs and prioritizes sustainability, mental wellness, and ethical AI practices."
  },
  {
    id: "countdown-to-chaos",
    title: "Countdown to Chaos",
    description: "Escape the room in time! Solve puzzles in this high-stakes Roblox game.",
    image: "/assets/images/project/countdown to chaos.jpg",    devpost: "https://devpost.com/software/countdown-to-chaos",
    tags: ["Lua Scripting", "Roblox Studio", "Game Design"],
    projectType: "Roblox Hack",
    fullDescription: "Countdown to Chaos is a timed escape room game built in Roblox Studio. Players solve science-themed puzzles under pressure while the screen blurs as time runs out. I scripted interactive elements using Lua and helped build fully functional rooms, learning game logic and Roblox formatting challenges."
  },
  {
    id: "treeid",
    title: "TreeID",
    description: "Explore local trees through an interactive, kid-friendly mobile app.",
    image: "/assets/images/project/treeid.png",
    devpost: "https://devpost.com/software/treeid",    github: "https://github.com/ChrisShobe/HackforHumanity2024",
    tags: ["Flutter", "Mobile App", "Educational Tech"],
    projectType: "Hack for Humanity '24",
    fullDescription: "TreeID is a mobile app that helps kids identify trees through an interactive dichotomous key. Built with Flutter and designed in Figma, I helped connect and build multiple pages. The app emphasizes environmental education and was designed around Yosemite National Park flora."
  },
  {
    id: "jetstream",
    title: "JetStream",
    description: "Plan your business trip seamlessly with real-time transit and flight data.",
    image: "/assets/images/project/jetstream.jpg",
    devpost: "https://devpost.com/software/jetstream-7pas4o",    github: "https://github.com/jordanmosakowski/inrix-hack-23",
    tags: ["React", "Flask", "API Integration"],
    award: "Finalist",
    projectType: "INRIX Amazon University Hack 2023",
    fullDescription: "JetStream is a travel planning app that consolidates transport, flights, and costs into one platform. I worked on backend API integrations and built the trip itinerary frontend. Despite replacing INRIX Routing mid-project, we successfully built a smooth UI with complex, real-time data mapping."
  },
  {
    id: "parking",
    title: "Parking++",
    description: "Find the best parking fast with smart filters and Street View previews.",
    image: "/assets/images/project/parking++.png",
    devpost: "https://devpost.com/software/parking-dkrpb5",    github: "https://github.com/sipneat/inrix-hack-2023",
    tags: ["Vue.js", "Flask", "Google Maps API"],
    award: "10th Place",
    projectType: "INRIX Hack 2023",
    fullDescription: "Parking++ is a Vue.js and Flask-based app that helps users find affordable, nearby parking with cost, distance, and Street View filters. I contributed UI design in Figma and coded search functionality. We tackled Google Maps integration challenges and created a consumer-focused experience."
  }
];