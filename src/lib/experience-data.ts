export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Team Lead / Senior Fullstack Software Engineer",
    company: "Bluebird IT Consult Co., Ltd.",
    location: "Bangkok Metropolitan Area",
    startDate: "Oct 2024",
    endDate: "Present",
    bullets: [
      "Led and mentored a team of 8 developers across multiple concurrent projects",
      "Authored AGENTS.md and Agent Skills to standardize LLM-assisted development across the team",
      "Integrated MCP servers (GitHub, Figma) into the team's AI workflow to enable context-aware, tool-augmented coding agents",
      "Built an immersive VR oil rig training simulation for PTTEP using Unity 6",
      "Developed enterprise HR platform with Angular + Golang for PTTEP",
      "Architected multi-tenant game top-up CMS with On-Demand TLS & automation bots",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Command See",
    location: "Bangkok Metropolitan Area",
    startDate: "Sep 2020",
    endDate: "Jul 2024",
    bullets: [
      "Co-founded software agency delivering enterprise solutions",
      "Served clients including True Digital Group and Maguro Group",
      "Managed end-to-end development lifecycles for multiple projects",
      "Adapted to diverse tech stacks across web and mobile platforms",
    ],
  },
  {
    role: "Senior Fullstack Software Engineer",
    company: "True Digital Group",
    location: "Bangkok Metropolitan Area",
    startDate: "Feb 2021",
    endDate: "Dec 2023",
    bullets: [
      "Built scalable apps with Java Spring Boot, Next.js, TypeScript & PostgreSQL",
      "Deployed services on Kubernetes with GitHub CI/CD pipelines",
      "Enforced code quality standards using SonarQube",
      "Collaborated in an international Agile team with English as primary language",
    ],
  },
  {
    role: "Frontend Software Engineer",
    company: "Playbux",
    location: "Bangkok Metropolitan Area",
    startDate: "Apr 2022",
    endDate: "Mar 2023",
    bullets: [
      "Built a high-performance DApp with Next.js & Tailwind CSS",
      "Integrated smart contracts and NFT transactions via Web3",
      "Developed interactive gameplay systems using Phaser",
    ],
  },
  {
    role: "Software Engineer",
    company: "Revolution of Digital Employee Experience Co., Ltd.",
    location: "Bangkok Metropolitan Area",
    startDate: "Jan 2021",
    endDate: "Apr 2022",
    bullets: [
      "Built cross-platform HR app with Flutter (Mobile) + Next.js (Web)",
      "Designed Node.js microservices using Moleculer framework",
      "Implemented GraphQL APIs for real-time data synchronization",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cochain",
    location: "Bangkok Metropolitan Area, Thailand",
    startDate: "Apr 2019",
    endDate: "Dec 2020",
    bullets: [
      "Developed crypto wallet using Stellar blockchain & Firebase",
      "Built a DEX with Quorum for multi-signature security",
      "Authored Solidity smart contracts for on-chain logic",
      "Created cross-platform interfaces with React.js & React Native",
    ],
  },
  {
    role: "Software Engineering Team Lead",
    company: "Zanroo",
    location: "Bangkok Metropolitan Area",
    startDate: "Oct 2018",
    endDate: "Mar 2019",
    bullets: [
      "Promoted to lead CRM system architecture & scalability planning",
      "Managed sprint planning and cross-functional alignment",
      "Mentored developers with code reviews and best practices",
    ],
  },
  {
    role: "Software Engineer",
    company: "Zanroo",
    location: "Bangkok Metropolitan Area",
    startDate: "Jun 2016",
    endDate: "Sep 2018",
    bullets: [
      "Designed microservices with Node.js, MongoDB, Elasticsearch, Redis & RabbitMQ",
      "Processed massive volumes of real-time social media data (Facebook/Twitter)",
      "Built automated ticketing system with intelligent task distribution",
      "Developed influencer analytics dashboard using Meteor.js + React.js",
      "Containerized services with Docker for consistent deployments",
    ],
  },
  {
    role: "Backend Web Developer",
    company: "GOOPA Inc.",
    location: "Bangkok Metropolitan Area",
    startDate: "Jan 2015",
    endDate: "May 2016",
    bullets: [
      "Built 'Crowdrive' crowdfunding platform with ASP.NET MVC on AWS",
      "Collaborated with Japanese development team",
      "Developed mobile game web apps using PHP Laravel",
    ],
  },
  {
    role: "System Analyst",
    company: "IT One",
    location: "Bangkok Metropolitan Area",
    startDate: "Apr 2014",
    endDate: "Dec 2014",
    bullets: [
      "Developed & maintained CRM software for SCG using ASP.NET",
      "Wrote backend logic with SAP ABAP",
      "Coordinated requirements between clients and internal teams",
    ],
  },
];
