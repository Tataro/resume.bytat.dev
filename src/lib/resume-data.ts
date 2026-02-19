export const about = {
  summary:
    "Software Engineering Lead with over 10 years of experience spanning diverse domains including Web, Mobile, VR, and Blockchain. My career demonstrates a proven track record with industry giants like True Digital Group and PTTEP, as well as scaling high-growth startups like Zanroo from inception to Series-A funding. Currently leading a team of 7-10 developers, I am passionate about evolving traditional development workflows by integrating AI-driven architectures (MCP, Sub-agents) to maximize efficiency. I thrive in collaborative environments and am seeking to join a team of talented, positive-minded professionals where we can push technological boundaries together.",
};

export const skills = [
  "AI-Driven Development",
  "MCP Architecture",
  "AI Agents & Sub-agents",
  "Prompt Engineering",
  "LLM Integration",
  "RAG Pipeline",
  "Full Stack Development",
  "Microservices Architecture",
  "React & TypeScript",
  "Next.js",
  "Golang",
  "Node.js",
  "Cloud Architecture",
  "CI/CD Automation",
  "Kubernetes",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Elasticsearch",
  "RabbitMQ",
];

export const education = {
  institution: "Kasetsart University",
  degree: "Bachelor Degree in Computer Engineering",
  location: "Thailand",
  startYear: "2010",
  endYear: "2014",
  gpa: "3.17",
};

export const certifications = [
  {
    title: "TOEIC Score: 825",
    description: "Professional Working Proficiency",
  },
  {
    title: "Yamaha Music Foundation Grade 5",
    description:
      "Fundamentals & SKPC — Certified Instructor Level",
  },
];

export interface ContactLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "email" | "youtube";
}

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/kittitat-upaphong/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/Tataro",
    icon: "github",
  },
  {
    label: "Email",
    url: "mailto:tat.kittitat@gmail.com",
    icon: "email",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@tatouch5973",
    icon: "youtube",
  },
];
