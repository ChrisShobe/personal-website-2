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
    id: "capitalone",
    title: "Cyber Security Intern",
    company: "Capital One",
    image: "/assets/images/experience/capital-one-logo.png",
    startDate: "June 2026",
    endDate: "Aug 2026",
    tags: ["Cloud Security", "Threat Detection", "Security Automation"],
    fullDescription: "After a competitive interview process, I was selected to join Capital One as a Cybersecurity Intern for Summer 2026",
    bottomImage: "/assets/images/experience/lifeatC1.png"
  },
  {
    id: "wids",
    title: "Project Coordinator",
    company: "Women in Data Science",
    image: "/assets/images/experience/wids-logo.jpg",
    startDate: "Dec 2026",
    endDate: "Present",
    tags: ["Data Analysis", "Machine Learning", "Disaster Recovery"],
    fullDescription: "Through the WiDS x Accenture Apprenticeship Pilot, I am collaborating with students and industry mentors on a data-driven project focused on economic resilience for wildfire-affected communities. The project analyzes socioeconomic and disaster-related data to identify vulnerabilities, assess recovery needs, and inform strategies that support long-term financial stability and workforce recovery after wildfires."
  },
  {
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
        description: "I organize and lead weekly SCU WiCyS meetings and events, managing logistics like venues, supplies, and PR coordination. I guide presentations or delegate tasks to ensure smooth execution, and collaborate with other student groups to host interdisciplinary events that expand our reach."
      },
      {
        title: "Public Relations",
        date: "Oct 2024 – May 2025",
        description: "I managed SCU WiCyS’s communication strategy, creating newsletters, flyers, and running social media campaigns on Instagram and LinkedIn. These efforts boosted event visibility and engagement, and my creative promotion significantly grew awareness of our cybersecurity initiatives."
      }
    ]
  },  {
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
        description: "I manage SCU ACM’s budget, oversee spending for events like hackathons, and ensure compliance with university policies. I work with school departments to secure funding, handle reimbursements, and prepare budgets to maintain fiscal transparency."
      },  
      {
        title: "DEI Chair",
        date: "Apr 2024 – Apr 2025",
        description: "I represent ACM in IDEAS meetings and lead DEI events with groups like NSBE, SHPE, and SWE. I assess diversity metrics and drive inclusive initiatives to elevate underrepresented voices within STEM at SCU."
      },
      {
        title: "Underclassmen Representative",
        date: "Oct 2023 – Apr 2024",
        description: "As ACM’s sole first-year board member, I contributed to marketing via flyer design and Instagram management. I also helped plan workshops and hackathons, gaining early leadership experience and fostering community."
      },
    ],
    bottomImage: "/assets/images/experience/acm-board.jpg"
  },
  {
    id: "palomar",
    title: "Cyber Security Associate",
    company: "Palomar Specialty Insurance",
    image: "/assets/images/experience/palomar-logo.png",
    startDate: "June 2024",
    endDate: "Dec 2025",
    tags: ["Security", "Vulnerability Assessment", "Incident Management"],
    fullDescription: "Progressed from Software Engineer Intern to Cybersecurity Associate at Palomar Specialty Insurance, contributing to web development, automation, and security initiatives, and promoted in recognition of strong technical impact.",
    bottomImage: "/assets/images/experience/Palomar2025.jpg",
    roles: [
      {
        title: "Security Associate",
        date: "Sept 2025 - December 2025",
        description: "Promoted from Cybersecurity Intern to Associate in recognition of strong performance and technical contributions."
      },
      {
        title: "Cyber Security Intern",
        date: "June 2025 - Sept 2025",
        description: "Applied Agile practices to support cybersecurity initiatives, developing and deploying PowerShell scripts via Intune for endpoint security and automated compliance reporting in Azure. Designed Okta workflows to streamline user group assignments, participated in policy reviews, documented procedures and hardware inventories, and authored security bulletins on emerging threats. Supported external audits by organizing compliance documentation, led a security health check identifying non-human identities, and created wireframes illustrating tool integration with business systems."
      },
      {
        title: "Software Engineer Intern",
        date: "June 2024 - Aug 2024",
        description: "During this internship, I applied Scrum and Agile to manage workflows and project tasks. I updated the corporate website using WordPress and enhanced the insured portal with modern web tools like React, TypeScript, and Sass. I also developed Java-based automation scripts using Spring Boot and Selenium, explored Pega, supported internal tools for Claims, and co-led a well-received social media campaign and tips session for over 40 employees."
      }
    ]
  },
  {
    id: "sab",
    title: "Outreach Coordinator",
    company: "SCU Ciocca Center",
    image: "/assets/images/experience/sab-logo.png",
    startDate: "Nov 2023",
    endDate: "Oct 2025",
    tags: ["Entrepreneurship Programming", "Event & Outreach Coordination", "Student Marketing & Communications"],
    fullDescription: "Former board member of the student advisory board for SCU Ciocca Center, progressed through multiple leadership roles from Underclassmen Representative to Outreach Coordinator.",
    roles: [
      {
        title: "Outreach Coordinator",
        date: "May 2025 – Oct 2025",
        description: "I built partnerships with student orgs to co-host entrepreneurship events and organized classroom visits to raise awareness of SAB and Ciocca Center programs, helping expand campus engagement."
      },
      {
        title: "Event Coordinator",
        date: "May 2024 – May 2025",
        description: "I collaborated with peers to design interdisciplinary events promoting entrepreneurship. I managed logistics (timing, themes, locations, and partnerships) to streamline planning and ensure impactful programming."
      },
      {
        title: "Underclassmen Representative",
        date: "Nov 2023 – May 2024",
        description: "As a first-year rep, I supported event branding by designing flyers and merchandise, documented meetings to improve team coordination, and helped plan events that advanced Ciocca Center initiatives."
      }
    ],
    bottomImage: "/assets/images/experience/sab board.jpg"
  },
  {
    id: "ideas",
    title: "Co-Chair",
    company: "IDEAS at SCU",
    image: "/assets/images/experience/scu-logo.png",
    startDate: "Oct 2024",
    endDate: "Oct 2025",
    tags: ["DEI in STEM", "Intersectional Advocacy", "Student Organization Leadership"],
    fullDescription: "IDEAS supports underrepresented students in STEM—including BIPOC, queer, disabled, and first-gen individuals—through mentorship, advocacy, and identity-centered programming. I managed strategic planning, internal leadership, and collaborations with student government to drive lasting institutional change.",
  }
];