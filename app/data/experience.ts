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
    fullDescription: "During this internship, I applied Agile practices to support cybersecurity initiatives across the organization. I developed and deployed PowerShell scripts via Microsoft Intune to verify endpoint security, and created automated compliance reports using Azure and PowerShell. I also designed Okta workflows to streamline user group assignments and reduce exception-related tickets. I participated in annual policy reviews, documented internal security procedures and hardware inventories, and authored security bulletins to keep staff informed of emerging threats. I contributed to external cybersecurity audits by organizing compliance documentation and led a health check of endpoint security tools, identifying non-human identities for remediation. Additionally, I mapped wireframes to illustrate the integration of security tools with core business systems.",
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
        description: "I organize and lead weekly SCU WiCyS meetings and events, managing logistics like venues, supplies, and PR coordination. I guide presentations or delegate tasks to ensure smooth execution, and collaborate with other student groups to host interdisciplinary events that expand our reach."
      },
      {
        title: "Public Relations",
        date: "Oct 2024 – May 2025",
        description: "I managed SCU WiCyS’s communication strategy, creating newsletters, flyers, and running social media campaigns on Instagram and LinkedIn. These efforts boosted event visibility and engagement, and my creative promotion significantly grew awareness of our cybersecurity initiatives."
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
    fullDescription: "As the leader of IDEAS (Inclusion, Diversity, Equity, and Advocacy in STEM), I’m guiding its transition into a fully recognized RSO that unites DEI-focused engineering groups like NSBE, SHPE, and SWE. We support underrepresented students in STEM—including BIPOC, queer, disabled, and first-gen individuals—through mentorship, advocacy, and identity-centered programming. I manage strategic planning, internal leadership, and collaborations with student government to drive lasting institutional change.",
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
        description: "I build partnerships with student orgs to co-host entrepreneurship events and organize classroom visits to raise awareness of SAB and Ciocca Center programs, helping expand campus engagement."
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
  },   {
    id: "swe-palomar",
    title: "SWE Intern",
    company: "Palomar Specialty Insurance",    
    image: "/assets/images/experience/palomar-logo.png",
    startDate: "June 2024",
    endDate: "Aug 2024",
    tags: ["Agile Development", "Full-Stack Web Development", "Testing Automation"],
    fullDescription: "During this internship, I applied Scrum and Agile to manage workflows and project tasks. I updated the corporate website using WordPress and enhanced the insured portal with modern web tools like React, TypeScript, and Sass. I also developed Java-based automation scripts using Spring Boot and Selenium, explored Pega, supported internal tools for Claims, and co-led a well-received social media campaign and tips session for over 40 employees.",
    bottomImage: "/assets/images/experience/palomar-2024.jpg"
}
];