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
    description: "Clarinet, piano, and composition spanning over a decade.",
    image: "/assets/images/about/all-band.jpg",
    images: [
      "/assets/images/about/wind-ensemble.jpg",
      "/assets/images/about/piano.jpg",
      "/assets/images/about/clarinet-france.jpg",
      "/assets/images/about/old clarinet.jpg"
    ],
    fullDescription: "Music has been a part of my life since childhood, beginning with piano lessons and experimenting with composition at home. When I was 10 years old, I discovered the clarinet and quickly fell in love with it. Since then, it has remained my primary instrument through middle school, high school, and college. Now at 21, I continue playing as part of Santa Clara University's Wind Ensemble and hope to keep music as a meaningful part of my life long after graduation."
  },
  {
    id: "art",
    title: "Art",
    description: "Digital art, watercolor, realism, and creative expression",
    image: "/assets/images/about/sky.jpg",
    images: [
      "/assets/images/about/cartoonme.jpg",
      "/assets/images/about/christmas.png",
      "/assets/images/about/opal-digital.jpg",
      "/assets/images/about/opal-pencil.jpg",
      "/assets/images/about/rainbow.png",
      "/assets/images/about/shoes.jpg",
      "/assets/images/about/flower-water.jpg",
      "/assets/images/about/dnd.png"
    ],
    fullDescription: "Art has always been one of my biggest creative outlets. I started painting with my mom at a young age, which sparked my lifelong love for creating. Over time, I became interested in realism and eventually found my true passion in digital art, where I love experimenting with color, detail, and creative freedom. More recently, I’ve also started exploring watercolor painting and enjoy the softer, more unpredictable style it brings. I especially love creating pieces as gifts for friends and family."
  },
  {
    id: "traveling",
    title: "Traveling",
    description: "Exploring new places, cultures, and perspectives",
    image: "/assets/images/about/plane.jpg",
    images: [
      "/assets/images/about/greece2.jpg",
      "/assets/images/about/montenegro.jpg",
      "/assets/images/about/sicily.jpg",
      "/assets/images/about/turkey.jpg",
      "/assets/images/about/grand-canyon.jpg",
      "/assets/images/about/france.jpg",
      "/assets/images/about/france2.jpg",
      "/assets/images/about/gibraltar.jpg",
      "/assets/images/about/pisa.jpg",
      "/assets/images/about/rome.jpg",
      "/assets/images/about/scotland.jpg",
      "/assets/images/about/wales.jpg",
      "/assets/images/about/england.jpg",
      "/assets/images/about/spain.jpg",
      "/assets/images/about/greece.jpg",
      "/assets/images/about/mexico.jpg",
    ],
    fullDescription:
      "Growing up in California, I often traveled to Arizona and the East Coast to visit family, which sparked my love for exploring new places. Over the years, I’ve been fortunate to travel throughout the U.S. and internationally, including cruises to Canada and Alaska, Mexico, the Mediterranean, and the British Isles. I’ve also visited countries such as China, Jamaica, and the Dominican Republic. Experiencing different cultures, histories, and landscapes has broadened my perspective and continues to inspire both my creativity and curiosity about the world."
  },

  {
    id: "interests",
    title: "Interests",
    description: "Hiking, philosophy, movies, travel, and marketing",
    image: "/assets/images/about/flower.jpg",
    images: [
      "/assets/images/about/poppies.jpg",
      "/assets/images/about/bird.jpg",
      "/assets/images/about/forest.jpg",
      "/assets/images/about/skiing.jpg",
      "/assets/images/about/runoff.jpg",
      "/assets/images/about/pvsunset.jpg",
      "/assets/images/about/bench.jpg",
      "/assets/images/about/lake.jpg"
    ],
    fullDescription: "I enjoy spending time outdoors through hiking and skiing, especially when exploring scenic places and nature. Beyond that, I love diving into philosophy and analyzing movies for their deeper meanings, themes, and storytelling techniques. My marketing minor has also given me an appreciation for how creativity, psychology, and technology intersect in everyday life. Altogether, these interests continue to shape both my curiosity and creative perspective."
  }
];