export interface ExperienceBullet {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: ExperienceBullet[];
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Team Lead / Senior Fullstack Software Engineer",
    company: "Bluebird IT Consult Co., Ltd.",
    location: "Bangkok Metropolitan Area",
    startDate: "Oct 2024",
    endDate: "Present",
    bullets: [
      {
        title: "Technical Leadership",
        description:
          "Led a team of 8, integrating AI agents (AGENTS.md) to modernize workflows and automate code reviews.",
      },
      {
        title: "VR Simulation (PTTEP)",
        description:
          "Developed an immersive oil rig training game using Unity 6, gamifying complex operational scenarios.",
      },
      {
        title: "HR Platform (PTTEP)",
        description:
          "Built a scalable employee management system using Angular and Golang.",
      },
      {
        title: "Multi-Tenant CMS",
        description:
          "Architected a game top-up platform featuring On-Demand TLS and automated transaction bots.",
      },
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Command See",
    location: "Bangkok Metropolitan Area",
    startDate: "Sep 2020",
    endDate: "Jul 2024",
    bullets: [
      {
        title: "Enterprise Solution Delivery",
        description:
          "Co-founded a software agency and served as a lead contributor, delivering tailored software solutions for enterprise clients, including True Digital Group and Maguro Group.",
      },
      {
        title: "Full-Cycle Development",
        description:
          "Managed end-to-end development lifecycles for key client projects, ensuring strict adherence to requirements, timelines, and code quality standards.",
      },
      {
        title: "Technical Versatility",
        description:
          "Adapted to diverse tech stacks and client environments to deliver scalable web and mobile applications.",
      },
    ],
  },
  {
    role: "Senior Fullstack Software Engineer",
    company: "True Digital Group",
    location: "Bangkok Metropolitan Area",
    startDate: "Feb 2021",
    endDate: "Dec 2023",
    bullets: [
      {
        title: "Full-Stack Development",
        description:
          "Built scalable applications using Java Spring Boot, Next.js, TypeScript, and PostgreSQL deployed on Kubernetes.",
      },
      {
        title: "DevOps & Quality",
        description:
          "Streamlined deployment via GitHub CI/CD and enforced code quality standards using SonarQube.",
      },
      {
        title: "Global Collaboration",
        description:
          "Collaborated within an international Agile team, utilizing English for daily operations.",
      },
    ],
  },
  {
    role: "Frontend Software Engineer",
    company: "Playbux",
    location: "Bangkok Metropolitan Area",
    startDate: "Apr 2022",
    endDate: "Mar 2023",
    bullets: [
      {
        title: "Dapp Development",
        description:
          "Built a high-performance decentralized application using Next.js and Tailwind CSS.",
      },
      {
        title: "Web3 Integration",
        description:
          "Implemented smart contracts and NFT transactions to enable blockchain interactions.",
      },
      {
        title: "Interactive Gaming",
        description:
          "Developed engaging gameplay systems using Phaser.",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Revolution of Digital Employee Experience Co., Ltd.",
    location: "Bangkok Metropolitan Area",
    startDate: "Jan 2021",
    endDate: "Apr 2022",
    bullets: [
      {
        title: "HR Platform Development",
        description:
          "Built a cross-platform solution for employee engagement using Flutter (Mobile) and Next.js (Web).",
      },
      {
        title: "Backend Architecture",
        description:
          "Designed scalable Node.js microservices (Moleculer framework) utilizing GraphQL for real-time data synchronization.",
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cochain",
    location: "Bangkok Metropolitan Area, Thailand",
    startDate: "Apr 2019",
    endDate: "Dec 2020",
    bullets: [
      {
        title: "Blockchain Solutions",
        description:
          "Developed a crypto wallet using Stellar and Firebase, and a decentralized exchange (DEX) utilizing Quorum for multisig security.",
      },
      {
        title: "Smart Contracts & DApps",
        description:
          "Authored Solidity smart contracts and built cross-platform interfaces using React.js and React Native with Web3 integration.",
      },
    ],
  },
  {
    role: "Software Engineering Team Lead",
    company: "Zanroo",
    location: "Bangkok Metropolitan Area",
    startDate: "Oct 2018",
    endDate: "Mar 2019",
    bullets: [
      {
        title: "Strategic Leadership",
        description:
          "Promoted to Team Lead to oversee CRM system architecture, ensuring scalability and cross-functional alignment.",
      },
      {
        title: "Team Management",
        description:
          "Led sprint planning and mentored developers, establishing best practices and rigorous code reviews to enhance delivery quality.",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Zanroo",
    location: "Bangkok Metropolitan Area",
    startDate: "Jun 2016",
    endDate: "Sep 2018",
    bullets: [
      {
        title: "Microservices Architecture",
        description:
          "Designed a robust system using Node.js, MongoDB, Elasticsearch, Redis, and RabbitMQ to handle massive volumes of real-time social media data (Facebook/Twitter).",
      },
      {
        title: "Intelligent Automation",
        description:
          "Engineered an automated ticketing system with advanced algorithms for efficient task distribution.",
      },
      {
        title: "Fullstack Contribution",
        description:
          "Developed an influencer analytics dashboard using Meteor.js and React.js, deployed via Docker.",
      },
    ],
  },
  {
    role: "Backend Web Developer",
    company: "GOOPA Inc.",
    location: "Bangkok Metropolitan Area",
    startDate: "Jan 2015",
    endDate: "May 2016",
    bullets: [
      {
        title: "Full Stack Development",
        description:
          "Collaborated with a Japanese team to develop 'Crowdrive' (crowdfunding platform) using ASP.NET MVC and AWS, and built mobile game web apps using PHP Laravel.",
      },
    ],
  },
  {
    role: "System Analyst",
    company: "IT One",
    location: "Bangkok Metropolitan Area",
    startDate: "Apr 2014",
    endDate: "Dec 2014",
    bullets: [
      {
        title: "CRM System Analyst",
        description:
          "Developed and maintained software for SCG using ASP.NET and ABAP, coordinating requirements with clients and internal teams.",
      },
    ],
  },
];
