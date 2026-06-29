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
title: "Cybersecurity Intern",
company: "Capital One",
image: "/assets/images/experience/capital-one-logo.png",
startDate: "June 2026",
endDate: "Aug 2026",
tags: ["Full-Stack Engineering", "Enterprise Security", "React", "Node.js", "AWS"],
fullDescription:
"Built a production-ready enterprise application used to streamline secure operational workflows. Developed the application's architecture, implemented secure authentication and authorization, automated deployment pipelines, and engineered scalable backend services while following enterprise security best practices.",
bottomImage: "/assets/images/experience/lifeatC1.png",
roles: [
{
title: "Cybersecurity Intern",
date: "June 2026 — Aug 2026",
description:
"Engineered a full-stack enterprise application using React, Node.js, and Express. Designed the application's architecture, implemented a secure role-based workflow with SSO integration, built authenticated API services, automated CI/CD pipelines, secured cloud IAM permissions, and developed comprehensive accessibility and unit test suites."
}
]
},

{
id: "palomar",
title: "Cybersecurity Associate",
company: "Palomar Specialty Insurance",
image: "/assets/images/experience/palomar-logo.png",
startDate: "June 2024",
endDate: "Dec 2025",
tags: ["Security Automation", "Identity & Access Management", "Software Engineering"],
fullDescription:
"Advanced from Software Engineering Intern to Cybersecurity Associate, contributing across software development, endpoint automation, identity management, and enterprise security operations while improving operational efficiency through automation.",
bottomImage: "/assets/images/experience/Palomar2025.jpg",
roles: [
{
title: "Cybersecurity Associate",
date: "Sept 2025 – Dec 2025",
description:
"Promoted from intern after delivering automation and security improvements. Audited Active Directory environments, reviewed penetration testing findings, managed privileged access risks, investigated security alerts across cloud platforms, and validated evidence for compliance initiatives."
},
{
title: "Cybersecurity Intern",
date: "June 2025 – Sept 2025",
description:
"Developed PowerShell and Bash automation deployed through Microsoft Intune to monitor endpoint compliance. Designed Okta identity workflows to automate group assignments and lifecycle management while supporting enterprise security operations and cloud governance."
},
{
title: "Software Engineering Intern",
date: "June 2024 – Aug 2024",
description:
"Enhanced internal business applications using Next.js, React, TypeScript, and Node.js. Built automated testing solutions with Java, Spring Boot, Selenium, and Pega while streamlining internal workflows for the Claims organization."
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
tags: ["Leadership", "Community Building", "Technical Events"],
fullDescription:
"Progressed through four executive board positions before becoming President of Santa Clara University's ACM chapter. Lead strategy, operations, industry partnerships, and technical programming for one of the university's largest student organizations.",
bottomImage: "/assets/images/experience/acm-board.jpg",
roles: [
{
title: "President",
date: "Apr 2026 – Present",
description:
"Lead the organization's strategic direction, oversee the executive board, coordinate technical workshops and hackathons, and build partnerships with industry and campus organizations to expand opportunities for members."
},
{
title: "Treasurer",
date: "Apr 2025 – Apr 2026",
description:
"Managed budgeting, funding requests, reimbursements, and financial planning while ensuring responsible allocation of resources across technical events and initiatives."
},
{
title: "DEI Chair",
date: "Apr 2024 – Apr 2025",
description:
"Partnered with organizations including NSBE, SHPE, and SWE to organize collaborative events that promoted diversity and increased participation in computing."
},
{
title: "Underclassmen Representative",
date: "Oct 2023 – Apr 2024",
description:
"Supported event planning, outreach, and marketing while serving as the only first-year member of ACM's executive board."
}
]
},

{
id: "wicys",
title: "Vice President",
company: "Women in CyberSecurity",
image: "/assets/images/experience/wicys-logo.png",
startDate: "Oct 2024",
endDate: "Present",
tags: ["Cybersecurity Leadership", "Industry Partnerships", "Community"],
fullDescription:
"Helped establish and grow Santa Clara University's WiCyS chapter, progressing from founding Public Relations officer to Vice President while expanding professional development, technical programming, and industry engagement.",
bottomImage: "/assets/images/experience/wicys.jpg",
roles: [
{
title: "Vice President",
date: "Apr 2026 – Present",
description:
"Drive chapter strategy, coordinate executive board initiatives, and build partnerships with organizations including CrowdStrike and WiCyS Silicon Valley to deliver technical talks, networking opportunities, and career development events."
},
{
title: "Event Coordinator",
date: "May 2025 – Apr 2026",
description:
"Planned and executed weekly meetings, workshops, and speaker events while coordinating logistics, communications, and collaborations with student organizations across campus."
},
{
title: "Public Relations",
date: "Oct 2024 – May 2025",
description:
"As a founding officer, managed newsletters, social media, and marketing campaigns that increased chapter visibility and student engagement during the organization's launch."
}
]
}
];