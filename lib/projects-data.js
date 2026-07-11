export const projects = [
  {
    slug: "fortibank",
    name: "FortiBank",
    tagline:
      "A role based cybersecurity training platform built for the banking sector, with live phishing simulations and real time risk scoring.",
    description:
      "FortiBank LMS is a full stack cybersecurity training platform designed for banks and financial institutions. It delivers role based training modules, simulates phishing attacks in a controlled environment, and tracks employee risk in real time to help institutions stay aligned with CBK compliance requirements.",
    stack: ["Next.js", "Supabase", "React", "Tailwind"],
    features: [
      "8 role based training modules",
      "Live phishing simulation engine",
      "Real time employee risk scoring",
      "Automated compliance reporting aligned with CBK regulations",
    ],
    github: "https://github.com/Navigation78/FortiBank",
    live: "",
  },
  {
    slug: "budget-bliss",
    name: "Budget Bliss",
    tagline:
      "A serverless budgeting platform that turns raw M-Pesa SMS data into categorized financial insight, fully automated.",
    description:
      "Budget Bliss automates personal expense tracking by parsing unstructured M-Pesa SMS messages and converting them into categorized financial records. Built on AWS Lambda, it runs scheduled workflows that generate budgeting insights daily, removing the need for manual financial monitoring.",
    stack: ["AWS Lambda", "AWS", "Serverless"],
    features: [
      "5 AWS Lambda functions handling expense automation",
      "Scheduled cloud workflows generating insights every 24 hours",
      "Secure user authentication",
      "Automated resource provisioning on registration using event driven AWS services",
    ],
    github: "",
    live: "",
  },
  {
    slug: "readlist",
    name: "ReadList",
    tagline:
      "A full stack reading tracker with a custom built library ledger interface.",
    description:
      "ReadList is a full stack reading and book management web application that lets users search, track, and manage their personal library. Built with a modular frontend architecture, it focuses on maintainability and a fast, responsive user experience.",
    stack: ["React", "Vite", "Supabase"],
    features: [
      "Modular, reusable component architecture",
      "Custom hooks and context based authentication",
      "Under 2 second load time",
      "Personal library search and tracking",
    ],
    github: "",
    live: "",
  },
]