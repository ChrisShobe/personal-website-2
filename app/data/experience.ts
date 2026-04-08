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

export const experience: Experience[] = [
  {
    id: "capitalone",
    title: "Cyber Security Intern",
    company: "Capital One",
    image: "/assets/images/experience/capital-one-logo.png",
    startDate: "June 2026",
    endDate: "Aug 2026",
    tags: ["Enterprise Cybersecurity", "Security Engineering", "Threat Analysis"],
    fullDescription: "Selected through a competitive process for Capital One's Summer 2026 cybersecurity internship, where I will contribute to protecting enterprise-scale systems and security operations.",
    bottomImage: "/assets/images/experience/lifeatC1.png"
  },
  {
    id: "wicys",
    title: "Vice President",
    company: "Women in CyberSecurity",
    image: "/assets/images/experience/wicys-logo.png",
    startDate: "Oct 2024",
    endDate: "Present",
    tags: ["Cybersecurity Community Building", "Strategic Leadership", "Industry Engagement"],
    fullDescription: "Grew from Public Relations to Vice President in WiCyS, leading strategy, programming, and partnerships that expand cybersecurity opportunities and career development for members.",
    bottomImage: "/assets/images/experience/wicys.jpg",
    roles: [
      {
        title: "Vice President",
        date: "Apr 2026 – Present",
        description: "I lead organizational strategy, events, and cybersecurity-focused initiatives for members. I partner with industry organizations, such as CrowdStrike and WiCyS Silicon Valley, to host speaker events and career development sessions."
      },
      {
        title: "Event Coordinator",
        date: "May 2025 – Apr 2026",
        description: "I organized and led weekly SCU WiCyS meetings and events, managed logistics like venues, supplies, and PR coordination. I guided presentations or delegated tasks to ensure smooth execution, and collaborated with other student groups to host interdisciplinary events that expand our reach."
      },
      {
        title: "Public Relations",
        date: "Oct 2024 – May 2025",
        description: "As one of the founding members of SCU WiCyS, I managed the chapter's communication strategy by creating newsletters and flyers and running social media campaigns on Instagram and LinkedIn. These efforts boosted event visibility and engagement and significantly increased awareness of our cybersecurity initiatives."
      }
    ]
  },
  {
    id: "acm",
    title: "President",
    company: "Association for Computing Machinery",
    image: "/assets/images/experience/acm-logo.png",
    startDate: "Oct 2023",
    endDate: "Present",
    tags: ["Organization Leadership", "Technical Program Management", "Cross-Functional Collaboration"],
    fullDescription: "Progressed through multiple ACM leadership roles to President, directing strategy, operations, and programming for SCU's largest computing organization while scaling events, partnerships, and member engagement.",
    roles: [ 
      {
        title: "President",
        date: "Apr 2026 – Present",
        description: "Lead and manage SCU's largest computing organization by setting strategic direction, delegating executive board responsibilities, and overseeing workshops, hackathons, and partnerships."
      },  
      {
        title: "Treasurer",
        date: "Apr 2025 – Apr 2026",
        description: "Managed ACM's budget and event spending, coordinated funding with university stakeholders, and maintained transparent reimbursement and planning processes aligned with campus policy."
      },  
      {
        title: "DEI Chair",
        date: "Apr 2024 – Apr 2025",
        description: "Represented ACM in IDEAS and led DEI initiatives with organizations including NSBE, SHPE, and SWE to strengthen inclusion and support underrepresented students in computing."
      },
      {
        title: "Underclassmen Representative",
        date: "Oct 2023 – Apr 2024",
        description: "As ACM's sole first-year board member, supported marketing, social media, and event planning while building early leadership experience through workshops and hackathon execution."
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
    tags: ["Security Automation", "Identity & Access Management", "Vulnerability Management"],
    fullDescription: "Progressed from Software Engineering Intern to Cybersecurity Associate at Palomar, delivering automation, IAM, and security assessment work that improved internal operations and reduced manual security overhead.",
    bottomImage: "/assets/images/experience/Palomar2025.jpg",
    roles: [
      {
        title: "Security Associate",
        date: "Sept 2025 - December 2025",
        description: "Promoted from Cybersecurity Intern to Associate in recognition of strong technical execution and measurable contributions across automation and security operations."
      },
      {
        title: "Cyber Security Intern",
        date: "June 2025 - Sept 2025",
        description: "Built and deployed PowerShell automation through Intune for endpoint compliance reporting in Azure, designed Okta IAM workflows to reduce manual access tasks, and supported audits, policy reviews, and security health assessments across enterprise systems."
      },
      {
        title: "Software Engineer Intern",
        date: "June 2024 - Aug 2024",
        description: "Built and improved internal tools using React, TypeScript, and modern web workflows, and developed Java automation with Spring Boot and Selenium to streamline testing and operational tasks for cross-functional teams."
      }
    ]
  }
];