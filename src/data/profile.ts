import {
  FactoryIcon,
  BuildingIcon,
  LayersIcon,
  GlobeIcon,
  WrenchIcon,
  HeadsetIcon,
  ServerIcon,
  ShieldIcon,
  ZapIcon,
  BookOpenIcon,
  BellIcon,
  AlertTriangleIcon,
  SettingsIcon,
  CpuIcon,
  MoreHorizontalIcon,
  type LucideIcon,
} from "lucide-react";

export const technicalSkills: Record<string, string[]> = {
  "DCS Systems": [
    "Foxboro Archestra",
    "System Advisor",
    "Process Control",
    "HMI Development",
  ],
  "SIS Platforms": [
    "Triconex Tristation",
    "Safety Instrumented Systems",
    "Functional Safety",
    "Emergency Shutdown",
  ],
  "Maintenance Systems": [
    "Maximo CMMS",
    "Asset Management",
    "Preventive Maintenance",
    "Work Order Management",
  ],
  "Additional Tools": [
    "Bently Nevada",
    "Meridian",
    "SCADA Systems",
    "Alarm Management",
  ],
};

export const projects = [
  {
    title: "DCS Upgrade Project",
    description:
      "Led comprehensive upgrade of legacy Foxboro DCS system, improving process control efficiency and reducing maintenance costs.",
    technologies: ["Foxboro Archestra", "System Advisor", "HMI"],
    contributions: "System design, testing, and commissioning",
  },
  {
    title: "ESD System Implementation",
    description:
      "Designed and implemented emergency shutdown systems for critical process units, ensuring SIL-3 safety integrity.",
    technologies: ["Triconex Tristation", "Safety Systems", "Functional Safety"],
    contributions: "Safety requirements analysis and system validation",
  },
  {
    title: "Alarm Rationalization Program",
    description:
      "Successfully reduced nuisance alarms by 75% through systematic alarm analysis and optimization.",
    technologies: ["DCS Systems", "Alarm Management", "Process Analysis"],
    contributions: "Alarm philosophy development and implementation",
  },
  {
    title: "CMMS Integration",
    description:
      "Integrated Maximo CMMS with existing control systems for enhanced asset management and maintenance planning.",
    technologies: ["Maximo CMMS", "Data Integration", "Asset Management"],
    contributions: "System integration and workflow optimization",
  },
];

export const certifications: {
  title: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Certified Functional Safety Professional",
    issuer: "exida",
    year: "2022",
    icon: ShieldIcon,
  },
];

export const trainings: {
  title: string;
  issuer: string;
  year?: string;
  icon: LucideIcon;
  url?: string;
  location?: string;
}[] = [
  {
    title: "IEC 61511: Functional Safety Analysis, Design, and Operation",
    issuer: "exida",
    url: "https://www.exida.com",
    icon: ShieldIcon,
  },
  {
    title: "WinCC OA Basic Training",
    issuer: "Siemens",
    icon: SettingsIcon,
  },
  {
    title: "ISA/IEC 62443 Cybersecurity Fundamentals",
    issuer: "ISA (International Society of Automation)",
    url: "https://www.isa.org",
    icon: ZapIcon,
  },
  {
    title: "Effective Alarm Management — The Practitioners Course",
    issuer: "AHC Engineering Consultancy",
    icon: BellIcon,
  },
  {
    title: "Managing Risk, Recognizing What Can Hurt Us",
    issuer: "Paul Balmert (Master Trainer)",
    url: "http://www.balmert.com/team.html",
    icon: AlertTriangleIcon,
  },
  {
    title: "HAZWOPER Awareness Level Responder",
    issuer: "Ross A. Gourlay",
    icon: BookOpenIcon,
  },
  {
    title: "5001 — Control Software Configuration Essential",
    issuer: "Schneider Electric",
    location: "Houston, TX Learning Center",
    icon: CpuIcon,
  },
  {
    title: "8902 — TRICON System / TriStation 1131 Configuration and Implementation",
    issuer: "Schneider Electric",
    location: "Webster, TX Learning Center",
    icon: ServerIcon,
  },
  {
    title: "and many others…",
    issuer: "Continuous learning",
    icon: MoreHorizontalIcon,
  },
];

export const vantagePoints: {
  icon: LucideIcon;
  role: string;
  company: string;
  desc: string;
}[] = [
  {
    icon: FactoryIcon,
    role: "End User",
    company: "Methanex",
    desc: "Operated and maintained mission-critical control systems from the plant floor, understanding firsthand what reliability means to operations.",
  },
  {
    icon: BuildingIcon,
    role: "Global Vendor",
    company: "Schneider Electric",
    desc: "Worked inside an OEM powerhouse, mastering platforms at their source and supporting customers worldwide.",
  },
  {
    icon: LayersIcon,
    role: "System Integrator",
    company: "Advansys Intelligent Solutions",
    desc: "Designing and delivering tailored automation solutions, bridging vendor technologies with real-world client needs.",
  },
];

export const breadth: {
  icon: LucideIcon;
  title: string;
  items: string[];
  desc: string;
}[] = [
  {
    icon: GlobeIcon,
    title: "Industries Served",
    items: ["Petrochemicals", "Data Centers"],
    desc: "Delivering reliability where uptime is non-negotiable.",
  },
  {
    icon: WrenchIcon,
    title: "Project Lifecycle",
    items: ["Engineering & Design", "Maintenance & Operations"],
    desc: "From greenfield engineering to long-term plant care.",
  },
  {
    icon: HeadsetIcon,
    title: "Engagement Modes",
    items: ["On-Site Field Engineering", "Global Customer Support Expert"],
    desc: "Hands-on at the plant, and remote expert support across the globe.",
  },
  {
    icon: ServerIcon,
    title: "Specialized Teams",
    items: ["SCADA Team", "AVEVA PI Team"],
    desc: "Deep specialization in real-time control and operational data intelligence.",
  },
];

export const recommendations = [
  {
    initials: "AA",
    name: "Assem Abdou",
    title: "Electrical, Instrumentation & Control Systems Lead",
    date: "Sep 23, 2023",
    relation: "Assem managed Mohamed directly",
    body: [
      "Mohamed was part of my I&C team. He was always a reliable team member, stepping in to provide support when needed. He is a very decent person and it's always been easy to work and deal with him.",
    ],
  },
  {
    initials: "AS",
    name: "Anas Sakr",
    title:
      "Senior Instrumentation & Control Systems Engineer — Methanex Corporation",
    date: "Apr 21, 2026",
    relation: "Anas was senior to Mohamed but didn't manage directly",
    body: [
      "I had the pleasure of working with Mohamed Eissa as a colleague in the field of Instrumentation and Control Engineering in Methanex, and I can confidently say he is a highly skilled and reliable engineer.",
      "Mohamed has strong hands-on experience with Foxboro IA systems and Triconex safety systems, demonstrating solid knowledge in DCS and SIS environments. He is detail-oriented, technically sound, and always approaches challenges with a practical and structured mindset.",
      "Beyond his technical strengths, Mohamed is a great team player. He communicates effectively, supports his colleagues, and maintains a positive and professional attitude even under pressure. His willingness to learn and continuously improve truly sets him apart.",
      "I highly recommend Mohamed to any team looking for a competent and dedicated professional Instrumentation and Control Engineer.",
    ],
  },
];

export const careerJourney = [
  "Senior Application Design Engineer at Advansys Intelligent Solutions (2024-Present)",
  "Expert Customer Support Engineer at Schneider Electric (2023-2024)",
  "Instrument & Control Engineer at Methanex Corporation (2015-2023)",
  "ISA/IEC 62443 Cybersecurity Fundamentals Certified",
];
