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
    description: "Turn any PDF into a quiz—automated question generation made easy.",
    image: "/assets/images/text-to-test.png",
    devpost: "https://devpost.com/software/study-78q0r3",    github: "https://github.com/ChrisShobe/intel-hack",
    tags: ["Python", "React", "Educational Tech"],
    projectType: "Intel Hack 2025",
    fullDescription: "We created an Automated Quiz Generator to save time and improve studying by automatically turning large PDFs into free-response questions. The app extracts and chunks text, identifies key concepts, and generates relevant quiz questions, helping users focus on learning instead of manual typing. Built with Python for backend processing and React with Tailwind CSS for the frontend, the app runs on an Intel Tiber GPU for performance. We faced challenges like handling diverse PDF formats, balancing AI and rule-based methods, and ensuring smooth frontend-backend communication. Through this project, we learned the importance of text chunking, user customization, and UX design in educational tools.  I developed Python scripts to extract and segment text from PDFs into smaller, searchable chunks and implemented keyword-based parsing to generate question-and-answer formats for frontend integration. Additionally, I connected the questions page to the end page by implementing button functionality, enabling dynamic regeneration of questions when navigating between these pages. This ensured a smooth and interactive user experience while supporting the core functionality of the Automated Quiz Generator."
},
{
    id: "hearo",
    title: "Hearo",
    description: "A background safety app that listens and alerts for deaf or hard of hearing users.",
    image: "/assets/images/HearoLogo.png",
    devpost: "https://devpost.com/software/hearo-kcb80g",    github: "https://github.com/ChrisShobe/hack-for-humanity-2025",
    tags: ["Accessibility", "Machine Learning", "Python"],
    award: "Best Womxn in Hack Award",
    projectType: "Hack for Humanity",
    fullDescription: "Inspired by the devastating LA fires and the urgent need for accessible emergency alerts, we created Hearo—an AI-powered app designed to help people who are deaf or hard of hearing by providing real-time visual and tactile notifications of fire alarms via smartphone vibrations and flashlight signals. Built with Flutter for cross-platform mobile functionality and Flask for backend server processing, Hearo continuously listens for fire alarm sounds using a finely tuned AI model. Due to smartphone hardware limits, audio is encrypted and securely transmitted to a remote server for fast analysis, ensuring privacy by deleting data immediately after processing. Challenges included refining AI accuracy for real-world environments, overcoming mobile background process restrictions, and implementing robust encryption. We’re proud of delivering an inclusive, user-friendly tool that enhances safety for vulnerable populations. I contributed by developing the app’s ability to run seamlessly in the background, designing key frontend UI/UX features, managing data loading processes, creating the presentation slides, and editing the Devpost to clearly communicate our project’s impact and technical details."
  },
  {
    id: "literally-cooking",
    title: "Literally Cooking",
    description: "Your AI-powered kitchen assistant for smart, personalized recipes.",
    image: "/assets/images/cooking.png",
    devpost: "https://devpost.com/software/recipe-app-6cx8b0",    github: "https://github.com/ChrisShobe/aws-hack-2024",
    tags: ["Claude 3", "AWS Bedrock", "Prompt Engineering"],
    projectType: "AWS Hackathon",
    fullDescription: "Literally Cooking is an AI-powered cooking assistant designed to help users efficiently prepare two dishes at once, ensuring everything finishes hot and on time. Inspired by the stress of coordinating meals for gatherings, the app generates a “mega recipe” by combining two separate recipes into one optimized cooking plan. Built using AWS Bedrock, Converse, Python, Flask, Firebase, Flutter, and Figma, the project integrates Spoonacular API data and a user-feedback scoring system to refine AI-generated outputs. It supports sustainability by reducing energy usage, promotes mental wellness by simplifying complex tasks, and emphasizes ethical AI principles, inclusivity, and data privacy. I led the design in Figma, engineered the backend using Python and Boto3, crafted prompt flows in the AWS playground with Claude 3 Sonnet, and developed the Devpost content, pitch deck, slogan, and logo. Through this project, I learned how to train AI models, structure knowledge bases, fine-tune prompts, and connect backend AI workflows to a frontend interface, ultimately creating a product with real-world potential for home cooks and professional kitchens alike."
  },
  {
    id: "countdown-to-chaos",
    title: "Countdown to Chaos",
    description: "Escape the room in time! Solve puzzles in this high-stakes Roblox game.",
    image: "/assets/images/countdown to chaos.jpg",    devpost: "https://devpost.com/software/countdown-to-chaos",
    tags: ["Lua Scripting", "Roblox Studio", "Game Design"],
    projectType: "Roblox Game Jam",
    fullDescription: "For the “Time is Running Out” theme, we created Countdown to Chaos, a timed escape room game built in Roblox Studio. In this single-player experience, users navigate through a science lab environment with portals to different puzzle rooms. Each room presents a unique challenge, from chemistry-based riddles to light-based code cracking and an explosion-themed puzzle, all under increasing time pressure. As the clock winds down, the screen progressively blurs, adding difficulty and urgency. Players must solve all challenges and collect keys before poisonous gas is released, signaling failure. Our team of five—four of whom actively contributed—split the work by assigning rooms and scripting responsibilities. We implemented interactive elements, such as GUIs, teleportation, and logic triggers using Lua, despite having no prior experience with Roblox Studio. Some challenges included formatting inconsistencies across devices, positioning issues with key reveals, and trouble completing our progress bar. Nevertheless, we’re proud of our fully functional puzzle rooms and what we learned along the way."
  },
  {
    id: "treeid",
    title: "TreeID",
    description: "Explore local trees through an interactive, kid-friendly mobile app.",
    image: "/assets/images/treeid.png",
    devpost: "https://devpost.com/software/treeid",    github: "https://github.com/ChrisShobe/HackforHumanity2024",
    tags: ["Flutter", "Mobile App", "Educational Tech"],
    projectType: "Hack for Humanity",
    fullDescription: "TreeID is an educational mobile app designed to spark children's interest in nature by helping them identify tree species through interactive, kid-friendly questions. Aimed at promoting environmental awareness and biodiversity education, the app addresses the lack of plant life study in elementary curricula by turning tree identification into a fun, engaging activity. Centered around Yosemite National Park, the app uses a dichotomous key based on local flora to guide users to likely species, offering fun facts and memorable features. Built using Figma for design and Flutter for development, the team overcame challenges like adapting layouts for mobile and resolving GitHub merge conflicts. Despite being all freshmen with limited hackathon experience, the team successfully developed a functional, visually appealing app. I contributed by building and connecting multiple pages in Flutter."
  },
  {
    id: "jetstream",
    title: "JetStream",
    description: "Plan your business trip seamlessly with real-time transit and flight data.",
    image: "/assets/images/jetstream.jpg",
    devpost: "https://devpost.com/software/jetstream-7pas4o",    github: "https://github.com/jordanmosakowski/inrix-hack-23",
    tags: ["React", "Flask", "API Integration"],
    award: "Finalist",
    projectType: "INRIX Hack",
    fullDescription: "JetStream is a travel planning app designed to streamline business trips by consolidating transportation, flights, and costs into a single platform. Inspired by the hassle of using multiple apps for one trip, JetStream only requires users to input start and end addresses and flight times. It then generates an interactive itinerary with selectable transport options displayed on a dynamic map. Built with a React frontend, Bulma for styling, and Deck.gl for rendering, the backend uses Flask to integrate six different APIs for parking, routing, flights, public transit, rentals, and maps. I contributed to the backend by working with the INRIX and public transit APIs, and to the frontend by building the trip itinerary and displaying flight times. Despite challenges like replacing INRIX Routing due to technical issues, we’re proud of the seamless UI and complex API integration."
  },
  {
    id: "parking",
    title: "Parking++",
    description: "Find the best parking fast with smart filters and Street View previews.",
    image: "/assets/images/parking++.png",
    devpost: "https://devpost.com/software/parking-dkrpb5",    github: "https://github.com/sipneat/inrix-hack-2023",
    tags: ["Vue.js", "Flask", "Google Maps API"],
    award: "10th Place",
    projectType: "INRIX Hack",
    fullDescription: "Parking++ is a web app designed to solve the common frustration of finding affordable and available parking. Inspired by real-life scenarios (like forgetting about a $60 parking fee near the Chase Center), the app helps users locate parking based on distance, cost, and availability, while offering a Google Street View preview for better decision-making. Built with a Vue.js frontend and a Flask backend using the INRIX Blocks API, my team overcame challenges with framework limitations and Google Maps integration. I contributed by helping design the user interface in Figma and developing the functionality of the search bar and submit button. We're proud of creating a consumer-focused experience, and along the way, we gained experience with web frameworks, API integration, and cloud hosting via AWS."
  }
];