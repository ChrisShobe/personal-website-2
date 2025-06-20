export interface Role {
  title: string;
  date: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  image: string;
  startDate: string;
  endDate?: string;
  tags?: string[];
  fullDescription?: string;
  bottomImage?: string;
  roles?: Role[];
}

export const experience: Experience[] = [  {
    id: "security-palomar",
    title: "CyberSecurity Intern",
    company: "Palomar Specialty Insurance",
    image: "/assets/images/experience/palomar-logo.png",
    startDate: "June 2024",
    endDate: "Present",
    tags: ["Security", "Vulnerability Assessment", "Incident Management"],
    fullDescription: "My current role as a Cyber Security Intern at Palomar Specialty Insurance involves supporting the security team in various tasks, including vulnerability assessments, incident response, and security awareness training. I am gaining hands-on experience with security tools and methodologies while contributing to the overall security posture of the organization.",
  },{
    id: "wicys",
    title: "Event Coordinator",
    company: "Women in CyberSecurity",
    image: "/assets/images/experience/wicys-logo.png",
    startDate: "Oct 2024",
    endDate: "Present",
    tags: ["Cybersecurity Outreach", "Event & Media Coordination", "Student Leadership"],
    fullDescription: "Active board member of Women in CyberSecurity (WiCyS) at SCU, progressing through multiple leadership roles from Public Relations to current Event Coordinator position.",
    bottomImage: "/assets/images/experience/wicys.jpg",
    roles: [
      {
        title: "Event Coordinator",
        date: "May 2025 – Present",
        description: "As Event Coordinator for SCU WiCyS (Women in Cybersecurity), I organize and lead weekly meetings and events, facilitating communication and collaboration within the board. I plan social and technical events by managing logistics such as venue booking, supplies, and coordination with the PR team for effective promotion. I also lead event presentations or delegate responsibilities to ensure smooth execution and frequently collaborate with other student groups to host interdisciplinary events that broaden our reach and impact."
      },
      {
        title: "Public Relations",
        date: "Oct 2024 – May 2025",
        description: "In my PR role, I managed SCU WiCyS’s communication strategy by creating and distributing weekly newsletters, flyers, and running social media campaigns on Instagram and LinkedIn. My efforts led to increased visibility and engagement across events, and I implemented creative promotional strategies that significantly boosted attendance and awareness of the chapter’s cybersecurity initiatives."
      }
    ]
  }, {
    id: "ideas",
    title: "Co-Chair",
    company: "IDEAS at SCU",
    image: "/assets/images/experience/scu-logo.png",
    startDate: "Oct 2024",
    endDate: "Present",
    tags: ["DEI in STEM", "Intersectional Advocacy", "Student Organization Leadership"],
    fullDescription: "As the leader of IDEAS (Inclusion, Diversity, Equity, and Advocacy in STEM), I have been guiding its transition from a coalition into a fully recognized Registered Student Organization (RSO) that champions intersectionality and unites DEI-focused engineering groups such as NSBE, SHPE, and SWE. Our mission is to support underrepresented students in STEM—including BIPOC, queer, disabled, and first-generation individuals—by fostering an inclusive community through mentorship, advocacy, and programming. We create events that center identity, accessibility, and justice, while also ensuring space for marginalized groups often left out of traditional structures, such as disabled and queer engineers without a dedicated organization. I manage strategic planning, internal leadership, and collaboration with student government and campus partners to drive institutional change and long-term impact.",
  },   {
    id: "sab",
    title: "Outreach Coordinator",
    company: "SCU Ciocca Center",
    image: "/assets/images/experience/sab-logo.png",
    startDate: "Nov 2023",
    endDate: "Present",
    tags: ["Entrepreneurship Programming", "Event & Outreach Coordination", "Student Marketing & Communications"],
    fullDescription: "Active board member of the student advisory board for SCU Ciocca Center, progressing through multiple leadership roles from Underclassmen Representative to current Outreach position.",
    roles: [
      {
        title: "Outreach Coordinator",
        date: "May 2025 – Present",
        description: "As Outreach Coordinator, I lead efforts to build partnerships with on-campus organizations, including clubs, fraternities, and sororities, to host collaborative events that promote entrepreneurship. I also plan and organize classroom visits to increase awareness of the Student Advisory Board (SAB) and expand engagement with the Ciocca Center's entrepreneurial programs."
      },
      {
        title: "Event Coordinator",
        date: "May 2024 – May 2025",
        description: "In this role, I collaborated with fellow Event Coordinators and Co-Chairs to design and execute interdisciplinary events that encourage entrepreneurial thinking. I documented all logistics—such as timing, location, themes, and partnerships with student clubs or external companies—to streamline event coordination and ensure smooth execution and high-impact programming."
      },
      {
        title: "Underclassmen Representative",
        date: "Nov 2023 – May 2024",
        description: "As an underclassmen rep and marketing team member, I contributed to event branding by designing flyers and merchandise for entrepreneurship-related programs. I also served as the team scribe, taking detailed meeting notes to enhance team communication, and actively supported the planning and execution of events that brought the Ciocca Center's initiatives to life."
      }
    ],
    bottomImage: "/assets/images/experience/sab board.jpg"
  },    {
    id: "acm",
    title: "Treasurer",
    company: "Association for Computing Machinery",
    image: "/assets/images/experience/acm-logo.png",
    startDate: "Oct 2023",
    endDate: "Present",
    tags: ["Student Leadership", "Event & Budget Management", "DEI Advocacy in STEM"],
    fullDescription: "Active board member of ACM at SCU, progressing through multiple leadership roles from Underclassmen Representative to current Treasurer position.",
    roles: [ 
      {
        title: "Treasurer",
        date: "Apr 2025 – Present",
        description: "As Treasurer of SCU ACM, I manage the organization's budget and ensure the responsible allocation of funds across events and initiatives. I collaborate with the Center for Student Involvement, the School of Engineering, and the Math and Computer Science Department to secure event funding. I oversee expenses for large-scale events like hackathons, ensuring cost-efficiency and compliance with university policies. Additionally, I handle reimbursements, prepare financial reports, and draft annual budgets to maintain transparency and fiscal accountability."
      },  
      {
        title: "DEI Chair",
        date: "Apr 2024 – Apr 2025",
        description: "In my role as DEI Chair, I represent ACM in IDEAS (Inclusion, Diversity, Equity, and Advocacy in STEM) meetings, advocating for inclusivity and equitable practices. I lead DEI-centered events in collaboration with student groups such as NSBE, SHPE, and SWE to foster a more inclusive STEM environment. I also analyze diversity data to evaluate ACM's progress and drive initiatives that uplift underrepresented voices within the department and broader student body."
      },
      {
        title: "Underclassmen Representative",
        date: "Oct 2023 – Apr 2024",
        description: "As the sole first-year member of the ACM board, I gained early exposure to organizational leadership by shadowing upperclassmen and participating in board decisions. I contributed to marketing efforts by designing promotional flyers and managing ACM’s Instagram to boost visibility and engagement. I also assisted in organizing events like workshops and hackathons, helping to build community and enhance member learning experiences."
      },
    ],
    bottomImage: "/assets/images/experience/acm-board.jpg"
  },   {
    id: "swe-palomar",
    title: "SWE Intern",
    company: "Palomar Specialty Insurance",    
    image: "/assets/images/experience/palomar-logo.png",
    startDate: "June 2024",
    endDate: "Aug 2024",
    tags: ["Agile Development", "Full-Stack Web Development", "Testing Automation"],
    fullDescription: "During this internship, I applied Scrum and Agile methodologies to manage project workflows and tasks efficiently. I updated the corporate website using WordPress and enhanced the insured portal with modern web technologies such as HTML, TypeScript, Sass, Bootstrap, Next.js, Node.js, and React. I developed automation scripts with Java, Spring Boot, and Selenium, using XPaths for testing, and gained exposure to Pega for automated workflows. Working closely with Scrum Masters, Business Analysts, QAs, and developers gave me insight into cross-functional team dynamics. I also optimized internal tools for the Claims department using Jira and led a \"Tips and Tricks\" session on Microsoft Teams and Outlook for over 40 employees. Additionally, I co-presented a Social Media Mascot Campaign that received positive feedback and sparked my interest in marketing.",
    bottomImage: "/assets/images/experience/palomar-2024.jpg"
}
];