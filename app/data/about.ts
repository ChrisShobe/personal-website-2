export interface AboutCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  fullDescription: string;
}

export const aboutCategories: AboutCategory[] = [
  {
    id: "music",
    title: "Music",
    description: "Piano, clarinet, and composition spanning over a decade.",
    image: "/assets/images/about/all-band.jpg",
    images: [
      "/assets/images/about/wind-ensemble.jpg",
      "/assets/images/about/piano.jpg",
      "/assets/images/about/clarinet-france.jpg",
      "/assets/images/about/old clarinet.jpg"
    ],
    fullDescription: "Music has been a part of my life since childhood, sparked by a piano at home that inspired me to play and compose. After a few years of piano lessons, I discovered my love for the clarinet in 5th grade and focused on mastering it. Now, after nine years of playing, it remains my primary instrument. Currently, I am part of Santa Clara University's Wind Ensemble, and I hope to continue my musical journey post-graduation."
  },
  {
    id: "art",
    title: "Art",
    description: "Digital art, realism, and creative expression",
    image: "/assets/images/about/painting.jpg",
    images: [
      "/assets/images/about/cartoonme.jpg",
      "/assets/images/about/shoes.jpg",
      "/assets/images/about/rainbow.jpg",
      "/assets/images/about/opal-digital.jpg",
      "/assets/images/about/opal-pencil.jpg",
      "/assets/images/about/selfportrait.png"
    ],
    fullDescription: "I started painting with my mom at a young age, which sparked my lifelong love for art. Over time, I developed an interest in realism during high school, eventually finding my true love in digital art with its boundless spectrum of colors and the ease of fixing mistakes. I love creating art and enjoy making gifts for friends and family with the pieces I create."
  },
  {
  id: "traveling",
  title: "Traveling",
  description: "Exploring new places, cultures, and perspectives",
  image: "/assets/images/about/plane.jpg",
  images: [
    "/assets/images/about/england.jpg",
    "/assets/images/about/france.jpg",
    "/assets/images/about/france2.jpg",
    "/assets/images/about/gibraltar.jpg",
    "/assets/images/about/grand-canyon.jpg",
    "/assets/images/about/greece.jpg",
    "/assets/images/about/greece2.jpg",
    "/assets/images/about/mexico.jpg",
    "/assets/images/about/montenegro.jpg",
    "/assets/images/about/pisa.jpg",
    "/assets/images/about/rome.jpg",
    "/assets/images/about/scotland.jpg",
    "/assets/images/about/sicily.jpg",
    "/assets/images/about/spain.jpg",
    "/assets/images/about/turkey.jpg",
    "/assets/images/about/wales.jpg",
  ],
  fullDescription: 
    "Growing up in California, I often traveled to Arizona and the East Coast to visit family, which sparked my love for exploring new places. Beyond the U.S., I’ve been fortunate to go on cruises to Canada and Alaska, Mexico, the Mediterranean, and the British Isles. I’ve also visited the Dominican Republic, Jamaica, and China. Each experience offered a unique glimpse into different cultures, histories, and ways of life. These travels have broadened my perspective, deepened my appreciation for global diversity, and continue to inspire my curiosity and creativity."
},

  {
    id: "interests",
    title: "Interests",
    description: "Photography, hiking, philosophy, movies, travel, and marketing",
    image: "/assets/images/about/flower.jpg",
    images: [
      "/assets/images/about/poppies.jpg",
      "/assets/images/about/bird.jpg",
      "/assets/images/about/forest.jpg",
      "/assets/images/about/skiing.jpg",
      "/assets/images/about/runoff.jpg",
      "/assets/images/about/pvsunset.jpg"
    ],
    fullDescription: "I’ve always loved capturing moments through photography, which deepened when I received my first camera at 20. My passion for hiking and skiing fuels my love for nature photography. Beyond this, I enjoy exploring philosophy and analyzing movies, often diving into their deeper meanings and themes. My marketing minor helps me understand how different fields intersect with technology. This blend of interests shapes my curiosity and creativity both personally and professionally."
  }
];
