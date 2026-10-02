export interface Project {
  slug: string;
  title: string;
  fullTitle: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  status?: string;
  accent: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  rank: string;
  description: string;
}

export interface Credential {
  id: string;
  provider: string;
  title: string;
  description: string;
  skills: string[];
  concepts: { title: string; description: string }[];
  file: string;
  url: string;
  previewUrl: string;
  sourceUrl?: string;
  issuedOn?: string;
  expiresOn?: string;
  credentialId?: string;
}

export interface Stat {
  label: string;
  value: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const identity = {
  name: "Harish K",
  firstName: "Harish",
  initials: "HK",
  role: "Software Engineer & AI Developer",
  tagline: "Building intelligent products. Thoughtfully engineered.",
  bio: "I build intelligent software products by combining full-stack engineering, machine learning, and scalable system design. My work connects research with practical, user-centric digital experiences.",
  philosophy:
    "Scalable, maintainable, and performant systems, built with users in mind.",
  focus:
    "AI-powered applications, privacy-preserving learning systems, and next-generation recommendation platforms.",
  email: "harish04211mw@gmail.com",
  github: "https://github.com/Harish-0412",
  linkedin: "https://www.linkedin.com/in/harish0412/",
  avatar: `${baseUrl}profile.png`,
};

export const projects: Project[] = [
  {
    slug: "odysseus-afk",
    title: "Odysseus AFK",
    fullTitle: "Cross-Vendor AFK Control Plane for AI Coding Agents",
    category: "AI Agent Infrastructure",
    description:
      "Step away from your desk. Stay in control of your AI coding agents.",
    longDescription:
      "Odysseus AFK is a vendor-neutral control plane for supervising AI coding agents from a phone, tablet, or browser. A local gateway streams agent activity to the web interface, while trust policies and approval gates keep sensitive actions under developer control. Device pairing, secret redaction, and hash-chained audit records support a local-first approach to remote supervision.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Agent Orchestration",
    ],
    features: [
      "Remote supervision with streamed agent activity",
      "Policy-based approval gates for sensitive operations",
      "Device pairing and revocation",
      "Local execution with secret redaction",
      "Tamper-evident, hash-chained audit records",
    ],
    liveUrl: "https://cross-vendor-afk-control-plane.vercel.app/",
    repositoryUrl:
      "https://github.com/Harish-0412/cross-vendor-AFK-control-plane",
    accent: "#8b91ef",
  },
  {
    slug: "recoup-b2b",
    title: "Recoup B2B",
    fullTitle: "Autonomous B2B Receivables & Promise-to-Pay Agent",
    category: "Agentic AI · B2B Fintech",
    description:
      "Smarter invoice recovery, with payment promises and business policies built in.",
    longDescription:
      "Recoup is an autonomous receivables agent that prioritizes overdue invoices by expected recovery value. Deterministic policies cap discounts and contact frequency, while a promise-to-pay watchdog pauses outreach until a commitment is due. The workflow combines Razorpay payment links, signature-verified settlement webhooks, human escalation, and hash-chained decision traces. The public demo uses simulation data and test-mode payment flows.",
    tags: ["Python", "FastAPI", "XGBoost", "Next.js", "PostgreSQL", "Razorpay"],
    features: [
      "Expected-value prioritization of overdue invoices",
      "Deterministic discount and contact-frequency guardrails",
      "Promise-to-pay tracking and deadline monitoring",
      "Signature-verified payment settlement",
      "Human review and auditable decision traces",
    ],
    liveUrl: "https://recoup-b2b.vercel.app/",
    repositoryUrl:
      "https://github.com/Harish-0412/Recoup-Autonomous-B2B-Receivables-Promise-to-Pay-Agent",
    accent: "#ff8a2c",
  },
  {
    slug: "heimdall",
    title: "Heimdall",
    fullTitle: "Secure Full-Stack Preview Environments on Kubernetes",
    category: "Developer Infrastructure",
    status: "In development",
    description:
      "Every pull request, a world of its own. Full-stack previews with security built in.",
    longDescription:
      "Heimdall is a developer infrastructure platform in development for isolated, full-stack Kubernetes previews. Its Go CLI validates project configuration and trust policies, then renders staged manifests for applications, dependencies, database initialization, and smoke tests. Dedicated namespaces, resource quotas, restricted pod security, and default-deny network policies provide secure defaults. Automated pull-request creation, deployment, and cleanup remain planned; the landing page illustrates the intended workflow.",
    tags: ["Go", "Kubernetes", "Helm", "Docker", "React", "TypeScript"],
    features: [
      "Strict configuration and trust-policy validation",
      "Staged Kubernetes manifest rendering",
      "Dedicated namespaces and security guardrails",
      "PostgreSQL, Redis, and RabbitMQ dependency support",
      "Database migration, seed, and smoke-test workflows",
    ],
    repositoryUrl: "https://github.com/Harish-0412/Heimdall",
    accent: "#8fba99",
  },
  {
    slug: "video-scene-rag",
    title: "VideoSceneRAG",
    fullTitle: "RAG-Enhanced Video Scene Understanding",
    category: "Multimodal AI · Video Understanding",
    description: "Ask a video a question. Find the moment that answers it.",
    longDescription:
      "VideoSceneRAG is a multimodal AI system that combines computer vision, speech recognition, and large language models to understand video content at a semantic level. Users can ask natural-language questions, receive timestamped answers tied to specific scenes, and retrieve clips through conceptual understanding.",
    tags: [
      "Computer Vision",
      "Speech Recognition",
      "LLMs",
      "RAG",
      "Multimodal AI",
    ],
    features: [
      "Natural-language video questions",
      "Timestamped scene answers",
      "Semantic clip retrieval",
      "Combined visual and speech understanding",
    ],
    accent: "#c8bfe0",
  },
  {
    slug: "nammaway-ai",
    title: "NammaWay AI",
    fullTitle:
      "Agentic Workflow Orchestration for Urban Relocation: A Hybrid Cloud-Edge Intelligence Framework",
    category: "Agentic AI · Urban Living",
    description: "A more personal way to find your place in a new city.",
    longDescription:
      "NammaWay AI is a hyper-personalized ecosystem designed to bridge the gap between people and everyday services. From finding a place to stay and exploring a new city to planning campus life, it respects user budgets, explains its choices, and prioritizes individual lifestyles.",
    tags: [
      "Agentic AI",
      "Personalization",
      "Cloud-Edge Intelligence",
      "Recommendations",
    ],
    features: [
      "Personalized accommodation discovery",
      "City exploration",
      "Campus life planning",
      "Budget-aware recommendations",
      "Explainable choices",
    ],
    accent: "#d4cba5",
  },
];

export const capabilities: Capability[] = [
  {
    id: "engineering",
    title: "Software engineering",
    description:
      "From thoughtful interfaces to APIs and databases, I build the systems behind the experience.",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "Node.js",
      "Express.js",
      "React.js",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "Query Optimization",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
  {
    id: "intelligence",
    title: "AI & machine learning",
    description:
      "Turning data and research into intelligent applications with contextual understanding.",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Transformer Architectures",
      "RAG",
      "Model Training",
      "Evaluation",
      "Jupyter Notebook",
    ],
  },
  {
    id: "mobile-design",
    title: "Mobile & digital experiences",
    description:
      "User-centric products across platforms, shaped through prototyping and visual design.",
    skills: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Cross-Platform Development",
      "Android Development",
      "Figma",
      "Blender",
      "UI/UX Prototyping",
      "3D Asset Design",
    ],
  },
  {
    id: "analytics",
    title: "Data & visualization",
    description:
      "Making complex information clear through analytics, dashboards, and business intelligence.",
    skills: ["Power BI", "Tableau", "Data Analysis", "Business Intelligence"],
  },
];

export const experience = {
  role: "Deep Learning Research Intern",
  organization: "National Institute of Technology Tiruchirappalli",
  duration: "1 month",
  description:
    "Worked on advanced deep learning systems involving Transformer architectures and Retrieval-Augmented Generation frameworks. Research focused on information retrieval, contextual understanding, and intelligent knowledge generation using modern AI methodologies.",
  areas: [
    "Transformer Models",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Deep Learning Research",
    "NLP Applications",
    "Experimental Evaluation",
  ],
};

export const achievements: Achievement[] = [
  {
    title: "SiteFix Competition",
    rank: "3rd place",
    description:
      "Developed innovative technical solutions and secured a podium finish among competing teams.",
  },
  {
    title: "NIT Technical Paper Presentation",
    rank: "2nd place",
    description:
      "Presented research-oriented technical concepts in a national-level academic competition.",
  },
  {
    title: "Design Thinking Project Expo",
    rank: "3rd place",
    description:
      "Recognized for innovative problem-solving and product ideation.",
  },
  {
    title: "NIT National Hackathon",
    rank: "Top 10 finalist",
    description:
      "Selected among the top-performing teams from a competitive participant pool.",
  },
  {
    title: "Amrita Vishwa Vidyapeetham Hackathon",
    rank: "Top 10 finalist",
    description:
      "Built and presented a complete technical solution under strict competition timelines.",
  },
  {
    title: "Additional Hackathons",
    rank: "5+ participations",
    description:
      "Worked on AI, software engineering, and innovation challenges in multidisciplinary teams.",
  },
];

const credentialRecords: Omit<Credential, "url" | "previewUrl">[] = [
  {
    id: "aws",
    provider: "Amazon Web Services",
    title: "AWS Certified AI Practitioner",
    description:
      "A foundational certification connecting AI and machine learning concepts with practical AWS use cases. It covers how to choose AI services, apply foundation models, and evaluate responsible, secure approaches to AI adoption.",
    skills: [
      "Generative AI Concepts",
      "AWS AI/ML Services",
      "Security and Compliance",
      "Machine Learning Foundations",
    ],
    concepts: [
      {
        title: "AI and machine learning foundations",
        description:
          "Understand training, inference, common learning approaches, and the AI/ML development lifecycle.",
      },
      {
        title: "Generative AI",
        description:
          "Explain foundation models, their capabilities and limitations, and suitable business use cases.",
      },
      {
        title: "AWS AI services",
        description:
          "Recognize the roles of Amazon Bedrock, SageMaker AI, and managed AWS AI services in a solution.",
      },
      {
        title: "Foundation model applications",
        description:
          "Compare prompt engineering, retrieval-augmented generation, and model customization approaches.",
      },
      {
        title: "Responsible AI and governance",
        description:
          "Assess fairness, transparency, privacy, access controls, and compliance considerations for AI systems.",
      },
    ],
    file: "AWS Certified AI Practitioner certificate.pdf",
    issuedOn: "July 11, 2026",
    expiresOn: "July 11, 2029",
    credentialId: "25ff54d8dbbf49ce9afb1efa05bd232b",
    sourceUrl:
      "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01.html",
  },
  {
    id: "github",
    provider: "Microsoft",
    title: "GitHub Foundations",
    description:
      "A certification in the foundations of collaborative development with Git and GitHub. It covers organizing repositories, reviewing changes, tracking work, and understanding the platform's automation and security features.",
    skills: [
      "Version Control",
      "GitHub Actions",
      "Collaboration",
      "Repository Management",
    ],
    concepts: [
      {
        title: "Git and GitHub Flow",
        description:
          "Understand commits, branches, remotes, and the workflow for proposing and merging changes.",
      },
      {
        title: "Repository organization",
        description:
          "Maintain project files, README documentation, licenses, and contribution guidelines.",
      },
      {
        title: "Collaboration and code review",
        description:
          "Use issues, pull requests, discussions, and Markdown to communicate and review work.",
      },
      {
        title: "Project management",
        description:
          "Organize tasks using GitHub Projects, labels, milestones, and assignments.",
      },
      {
        title: "Modern development tools",
        description:
          "Understand the purposes of GitHub Actions, Copilot, Codespaces, and browser-based development.",
      },
      {
        title: "Security and community",
        description:
          "Recognize account protection, repository permissions, branch protection, and open-source contribution practices.",
      },
    ],
    file: "GitHub Foundations.pdf",
    issuedOn: "June 27, 2026",
    expiresOn: "June 28, 2028",
    credentialId: "12AA427F9ED6358E",
    sourceUrl:
      "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-900",
  },
  {
    id: "ml",
    provider: "DeepLearning.AI & Stanford",
    title: "Machine Learning Specialization",
    description:
      "A three-course foundation in machine learning from DeepLearning.AI and Stanford Online. It connects the mathematics of learning algorithms with Python implementations, practical model evaluation, and recommendation and decision-making systems.",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Recommender Systems",
    ],
    concepts: [
      {
        title: "Regression and classification",
        description:
          "Build supervised models with linear and logistic regression, gradient descent, and regularization.",
      },
      {
        title: "Neural networks and tree ensembles",
        description:
          "Train neural networks for classification and apply decision trees, random forests, and boosted trees.",
      },
      {
        title: "Model evaluation",
        description:
          "Diagnose bias and variance, evaluate generalization, and use data-centric improvements.",
      },
      {
        title: "Unsupervised learning",
        description:
          "Apply clustering and anomaly detection to discover patterns in unlabeled data.",
      },
      {
        title: "Recommender systems",
        description:
          "Use collaborative filtering and content-based methods to personalize recommendations.",
      },
      {
        title: "Reinforcement learning foundations",
        description:
          "Understand rewards, state-action values, and the basics of learning a decision policy.",
      },
    ],
    file: "Machine Learning Spl.pdf",
    issuedOn: "April 3, 2026",
    sourceUrl: "https://www.deeplearning.ai/specializations/machine-learning",
  },
  {
    id: "prompt",
    provider: "Google",
    title: "Google Prompting Essentials",
    description:
      "A practical certificate in giving generative AI clear, useful instructions. It covers a repeatable prompting framework, iterative refinement, and reusable workflows for everyday tasks, data analysis, and presentations.",
    skills: [
      "Prompt Design",
      "Iterative Refinement",
      "Multimodal Prompting",
      "Prompt Chaining",
    ],
    concepts: [
      {
        title: "Structured prompt design",
        description:
          "Use a five-step framework to describe a task, provide context, and evaluate the result.",
      },
      {
        title: "Iteration and evaluation",
        description:
          "Refine instructions and assess responses to improve relevance and usefulness.",
      },
      {
        title: "Examples and multimodal inputs",
        description:
          "Guide outputs with few-shot examples and combine text with other input formats.",
      },
      {
        title: "Workplace applications",
        description:
          "Apply prompting to summarization, content creation, data analysis, and presentation planning.",
      },
      {
        title: "Reusable AI workflows",
        description:
          "Build a prompt library, chain tasks, and use meta-prompting or role-play for feedback.",
      },
    ],
    file: "Google Prompt Engineering.pdf",
    issuedOn: "June 7, 2026",
    sourceUrl: "https://grow.google/intl/en_sg/prompting-essentials/",
  },
  {
    id: "mcp",
    provider: "IBM",
    title: "Build AI Agents using MCP",
    description:
      "A hands-on course in connecting AI agents to tools, data, and services through the Model Context Protocol. It covers building MCP servers and clients while keeping context, permissions, and user approval explicit.",
    skills: [
      "Agentic AI",
      "MCP Architecture",
      "AI Workflows",
      "Tool Integration",
    ],
    concepts: [
      {
        title: "MCP architecture",
        description:
          "Understand hosts, clients, servers, and how MCP standardizes access beyond custom API integrations.",
      },
      {
        title: "FastMCP servers",
        description:
          "Expose tools, resources, and prompts that AI applications can discover and use.",
      },
      {
        title: "Client and transport integration",
        description:
          "Connect clients to single or multiple servers using STDIO and Streamable HTTP.",
      },
      {
        title: "Context-aware agent workflows",
        description:
          "Combine retrieval and tool use in structured interactions between agents and external services.",
      },
      {
        title: "Secure interactive execution",
        description:
          "Apply roots, sampling, elicitation, and permission-based approval to keep workflows controlled.",
      },
    ],
    file: "Build AI Agents using MCP.pdf",
    issuedOn: "June 16, 2026",
    sourceUrl: "https://www.coursera.org/learn/build-ai-agents-using-mcp",
  },
  {
    id: "nvidia",
    provider: "NVIDIA Deep Learning Institute",
    title: "Fundamentals of Deep Learning",
    description:
      "A certificate of competency in the fundamentals of deep learning. The hands-on curriculum covers training neural networks, improving image models with convolution and augmentation, and adapting pretrained models to new tasks.",
    skills: [
      "Neural Networks",
      "Convolutional Networks",
      "Data Augmentation",
      "Transfer Learning",
    ],
    concepts: [
      {
        title: "Neural network training",
        description:
          "Build and train networks, understand how parameters learn, and evaluate their predictions.",
      },
      {
        title: "Convolutional neural networks",
        description:
          "Apply convolutional architectures to learn visual patterns for image classification.",
      },
      {
        title: "Data augmentation",
        description:
          "Expand training variation to improve model accuracy when labeled data is limited.",
      },
      {
        title: "Transfer learning",
        description:
          "Adapt pretrained models and fine-tune learned features for a new classification task.",
      },
      {
        title: "Generalization and inference",
        description:
          "Address overfitting and use a trained model to make predictions on unseen data.",
      },
    ],
    file: "NVIDIA Fundamentals of Deep Learning.png",
    issuedOn: "August 11, 2026",
    sourceUrl: "https://github.com/NVDLI/fundamentals-of-deep-learning",
  },
  {
    id: "microsoft-sql-ai",
    provider: "Microsoft",
    title: "Microsoft Certified: SQL AI Developer Associate",
    description:
      "An associate certification in developing AI-enabled solutions across Microsoft SQL Server, Azure SQL, and SQL databases in Microsoft Fabric. It combines database engineering with security, performance, deployment practices, and AI integration.",
    skills: [
      "T-SQL",
      "Database Development",
      "SQL Security and Performance",
      "AI-enabled Databases",
    ],
    concepts: [
      {
        title: "Database design and T-SQL",
        description:
          "Design tables, constraints, indexes, views, and programmable database objects for application data.",
      },
      {
        title: "Data security",
        description:
          "Apply permissions, encryption, masking, row-level security, and auditing to protect database access.",
      },
      {
        title: "Performance and reliability",
        description:
          "Analyze query execution and manage transactions, concurrency, and performance bottlenecks.",
      },
      {
        title: "Database delivery",
        description:
          "Use SQL database projects, source control, testing, and CI/CD to deploy changes reliably.",
      },
      {
        title: "Models, embeddings, and search",
        description:
          "Integrate AI models and vector embeddings with SQL solutions for semantic and hybrid search.",
      },
      {
        title: "AI application integration",
        description:
          "Connect database data to AI-enabled applications and retrieval-augmented generation workflows.",
      },
    ],
    file: "Microsoft Certified SQL AI Developer Associate.png",
    issuedOn: "September 12, 2026",
    expiresOn: "September 13, 2027",
    credentialId: "6B83B3426C2B751E",
    sourceUrl:
      "https://learn.microsoft.com/en-us/credentials/certifications/developing-ai-enabled-database-solutions/",
  },
];

export const credentials: Credential[] = credentialRecords.map(
  (credential) => ({
    ...credential,
    url: `${baseUrl}Certificates/${encodeURIComponent(credential.file)}`,
    previewUrl: `${baseUrl}Certificates/previews/${credential.id}.png`,
  }),
);

export const stats: Stat[] = [
  { label: "Research internship", value: "01+" },
  { label: "Hackathons", value: "05+" },
  { label: "National top 10", value: "02" },
  { label: "Podium finishes", value: "03" },
  { label: "Projects built", value: "10+" },
  { label: "Expertise domains", value: "04+" },
];
