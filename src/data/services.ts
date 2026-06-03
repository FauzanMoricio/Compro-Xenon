import { Monitor, Smartphone, Palette, Zap } from 'lucide-astro';

export const services = [
  {
    slug: "enterprise-engineering",
    title: "IT Consulting & Enterprise Engineering",
    shortDesc: "Transforming digital enterprise architecture through robust, secure, and scalable system engineering for state-owned enterprises, government, and corporations.",
    fullDesc: "A combination of modern infrastructure audits, resilient architectural design, and high-level workflow automation for future business optimization.",
    longDesc: "In the modern era, operational stability depends on IT infrastructure resilience. We deliver comprehensive enterprise software engineering solutions—ranging from legacy system audits, digital workflow engineering, secure microservices development, to high-performance API integration. We are committed to simplifying your complex systems into an efficient, high-speed, and secure digital ecosystem compliant with international data security standards.",
    icon: Monitor,
    features: [
      "IT Architecture Modernization Strategy & Consulting",
      "Integrated System Workflow Engineering (ERP, HRIS, Procurement, Budgeting)",
      "High-Performance Custom Web & Mobile Application Development",
      "Secure API Integration, Orchestration, & Microservices Transformation",
      "Data Integration Centers (Data Lake, Analytics, & AI-Ready Infrastructure)"
    ],
    benefits: [
      "Infinite Scalability: Cloud-native architecture ready to handle traffic spikes from millions of users.",
      "Banking-Grade Security: Multi-layered data leakage protection, end-to-end encryption, and strict access governance.",
      "Seamless Integration: Connecting legacy systems, SAP, Oracle, or third-party platforms with ultra-low latency performance.",
      "Ease of Maintenance: Clean code and comprehensive documentation to ensure system longevity for decades."
    ],
    process: [
      {
        step: "01",
        title: "Scoping & Discovery",
        desc: "Mapping business needs, identifying manual workflows, and defining solution scope."
      },
      {
        step: "02",
        title: "Solution Design & Prototyping",
        desc: "Designing preliminary system architecture, creating functional mockups, and early validation models."
      },
      {
        step: "03",
        title: "Development & Integration",
        desc: "Developing platforms/modules and integrating them with backend APIs or internal systems."
      },
      {
        step: "04",
        title: "Testing & Go-Live",
        desc: "Conducting rigorous testing (functional, load, & security) before data migration and final deployment."
      },
      {
        step: "05",
        title: "Monitoring, Optimization & Scale-Up",
        desc: "Monitoring system performance in real-time, optimizing processes, and scaling capacity."
      }
    ],
    techStack: ["TypeScript", "Astro", "Node.js", "Express", "PostgreSQL", "Docker", "Kubernetes"],
    gallery: [
      "/images/engineering.png",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200",
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1200"
    ],
    faqs: [
      {
        question: "How does the integration with existing legacy systems work?",
        answer: "We perform a thorough architectural audit first without disrupting ongoing system operations, followed by designing custom API adapters/Microservices."
      },
      {
        question: "Does Priventry provide post-deployment support?",
        answer: "Yes, we provide operational support and ongoing Service Level Agreement (SLA) maintenance to monitor performance, security, and regular system updates."
      },
      {
        question: "How long does a medium-to-large scale project take?",
        answer: "Depending on the complexity of modules and integrations, it typically ranges from 3 to 6 months using transparent Agile methodologies."
      }
    ]
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI Solutions",
    shortDesc: "Revolutionize corporate productivity with secure, private, autonomous AI assistants (Agentic AI) powered by multi-modal intelligence.",
    fullDesc: "Turn stacks of documents, corporate databases, and operational interactions into highly accurate, self-managed systems with guaranteed privacy.",
    longDesc: "Priventry delivers Agentic AI that doesn't just answer questions, but actively takes autonomous actions. Built on the Priventry AI Core architecture, this solution processes multi-modal inputs (text, documents, CSV, voice, and images) using private Large Language Models (LLM) and protected vector databases (on-premise). Our AI integrates seamlessly with your internal infrastructure (such as SAP, Salesforce, Active Directory, and SQL databases) to automate document processing, contract validation, smart customer service, and deep operational analysis with full data sovereignty and zero risk of third-party leakage.",
    icon: Zap,
    features: [
      "Multi-Channel Conversational AI (Omnichannel WhatsApp, Web, IVR)",
      "Smart Voice AI (Accurate ASR, Natural TTS, and Corporate Voice Cloning)",
      "Vision AI & Enterprise OCR (Physical Document Verification & Visual Inspection)",
      "Priventry RAG Search Engine (Instant Search for SOPs, Policies, & Legal Documents)",
      "Intelligent Document Processing (Automated Data Extraction & Document Classification)",
      "Agentic Workflow Orchestrator (Autonomous Task Automation Across Systems)",
      "Secure Enterprise Knowledge Bots (Leak-Free Employee Internal Assistants)",
      "GenAI Metrics & Analytics Dashboard (Monitoring AI Performance & User Satisfaction)"
    ],
    benefits: [
      "100% Data Sovereignty (On-Premise): AI models run inside your corporate's closed servers for absolute security.",
      "10x Efficiency Boost: Automates validation processes, data searches, and system entries from hours to seconds.",
      "Dynamic System Integration: AI can autonomously read SQL databases, trigger SAP APIs, and update CRM statuses.",
      "Reduction of Human Error: Consistent, tireless, large-scale validation based on machine intelligence."
    ],
    process: [
      {
        step: "01",
        title: "Scoping & Discovery",
        desc: "Mapping business needs, identifying manual workflows, and defining solution scope."
      },
      {
        step: "02",
        title: "Solution Design & Prototyping",
        desc: "Designing preliminary system architecture, creating functional mockups, and early validation models."
      },
      {
        step: "03",
        title: "Development & Integration",
        desc: "Developing platforms/modules and integrating them with backend APIs or internal systems."
      },
      {
        step: "04",
        title: "Testing & Go-Live",
        desc: "Conducting rigorous testing (functional, load, & security) before data migration and final deployment."
      },
      {
        step: "05",
        title: "Monitoring, Optimization & Scale-Up",
        desc: "Monitoring system performance in real-time, optimizing processes, and scaling capacity."
      }
    ],
    techStack: ["Python", "FastAPI", "LangChain", "PyTorch", "Transformers", "Pinecone", "RAG Engine"],
    gallery: [
      "/images/web_design.png",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200"
    ],
    faqs: [
      {
        question: "Is our corporate data safe and free from public leakage?",
        answer: "100% secure. All AI models and vector databases run on-premise inside your local servers, ensuring sensitive company data is never sent to third-party public APIs."
      },
      {
        question: "What is the accuracy level of document processing by this AI?",
        answer: "Combining private vision-language models and RAG validation frameworks, our document reading and data extraction accuracy exceeds 98%."
      },
      {
        question: "How do we integrate this AI with WhatsApp or Phone lines?",
        answer: "We use secure API gateways to connect the AI assistant to your official WhatsApp Business Account (WABA) and phone PBX/IVR systems for automated voice assistants."
      }
    ]
  },
  {
    slug: "assessment-technology",
    title: "MACT & Assessment Technology",
    shortDesc: "National-scale digital examination & assessment ecosystem with proven biometric AI proctoring for high reliability and integrity.",
    fullDesc: "A robust Computer-Based Test (CBT) system accommodating tens of thousands of participants simultaneously, equipped with real-time AI fraud detection.",
    longDesc: "Modern Assessment & Competency Technology (MACT) is a pioneering digital assessment platform custom-designed to meet the rigorous standards of civil servant (ASN) exams, professional certifications, and national-scale higher education exams. Equipped with smart AI Proctoring that detects unusual facial movements, multiple browser tabs, and other people's presence, the platform guarantees 100% exam integrity. Supported by high-performance cloud architecture, MACT handles tens of thousands of simultaneous exam sessions lag-free and generates psychometric and socio-cultural evaluation reports instantly.",
    icon: Smartphone,
    features: [
      "Modern Computer-Based Test (CBT) (Responsive Web & Mobile Apps)",
      "Automated Psychometric Scoring Engine (Socio-Cultural & Competency Scoring)",
      "Biometric AI Authentication (Liveness Face Verification & Impersonation Detection)",
      "AI Proctoring & Anti-Cheating Suite (Live Camera Monitoring & Tab Detection)",
      "Multi-Level Analytics Dashboard (Manage Regions, Agencies, & Competency Reports)",
      "Instant Assessment Reports (Automatic Competency-Based PDF Report Downloads)"
    ],
    benefits: [
      "Uncompromised Integrity: AI proctoring suppresses fraud rates to 0.2% or less during examinations.",
      "Massive Exam Scale: Proven to handle simultaneous loads of over 50,000+ test-takers without server performance degradation.",
      "Time & Cost Efficiency: Eliminates paper needs, physical logistics, and manual grading with instant score reports.",
      "Government Regulatory Compliance: Designed in compliance with civil servant competency assessment regulations and national security standards."
    ],
    process: [
      {
        step: "01",
        title: "Scoping & Discovery",
        desc: "Mapping business needs, identifying manual workflows, and defining solution scope."
      },
      {
        step: "02",
        title: "Solution Design & Prototyping",
        desc: "Designing preliminary system architecture, creating functional mockups, and early validation models."
      },
      {
        step: "03",
        title: "Development & Integration",
        desc: "Developing platforms/modules and integrating them with backend APIs or internal systems."
      },
      {
        step: "04",
        title: "Testing & Go-Live",
        desc: "Conducting rigorous testing (functional, load, & security) before data migration and final deployment."
      },
      {
        step: "05",
        title: "Monitoring, Optimization & Scale-Up",
        desc: "Monitoring system performance in real-time, optimizing processes, and scaling capacity."
      }
    ],
    techStack: ["Go", "React", "WebRTC", "TensorFlow.js", "AWS", "Redis", "PostgreSQL"],
    gallery: [
      "/images/mobile_synergy.png",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200"
    ],
    faqs: [
      {
        question: "How does MACT handle internet connectivity issues for test-takers?",
        answer: "MACT features offline-first state management. If the connection drops during the exam, all answers are securely stored in the test-taker's local browser encryption and automatically synchronized to the central server when the connection stabilizes."
      },
      {
        question: "How does the AI Proctoring technology detect cheating attempts?",
        answer: "Our AI Proctoring technology monitors facial landmarks, detects other people on the camera screen, identifies the use of secondary electronic devices, and monitors new tab openings in the participant's browser live."
      },
      {
        question: "Can competency/psychological test results be downloaded immediately?",
        answer: "Yes, our automated scoring system processes answers in real-time and formulates psychometric assessment modules into individual PDF reports instantly after the exam is completed."
      }
    ]
  },
  {
    slug: "blockchain-traceability",
    title: "Blockchain & Traceability Systems",
    shortDesc: "Verified supply chain tracking and ESG compliance reporting built on Blockchain (Hyperledger) for global market audit standards.",
    fullDesc: "Transform logistics records, carbon emissions, and mining/industrial material provenance into trusted, tamper-proof digital assets.",
    longDesc: "For global mining, energy, and manufacturing industries, compliance with sustainability regulations and material traceability determines competitiveness. Priventry develops supply chain traceability solutions using immutable Hyperledger Fabric blockchain technology. We help enterprises create Digital Product Passports (such as EU Battery Passport & CRMA compliance), automate carbon audits from IoT sensors, and generate verified ESG reports recognized by global financial auditors.",
    icon: Palette,
    features: [
      "Cross-Border Logistics Traceability (From Raw Material to Smelter)",
      "Consortium Blockchain Architecture (Enterprise-Grade Hyperledger Fabric)",
      "Digital Product Passport (Compliance with EU Battery Passport & CRMA)",
      "Automated Carbon & ESG Accounting (Real-time Emissions Calculation via IoT Sensors)",
      "Audit Trail Ledger (Tamper-Proof Financial & Supply Chain Ledger)",
      "ESG Compliance & Carbon Emission Dashboard for External Auditors"
    ],
    benefits: [
      "Global Audit Credibility: Operational data is guaranteed secure and ready for international certification audits.",
      "Global Competitive Advantage: Simplifies exports to the EU and US with ready-to-serve ESG compliance.",
      "Logistics Fraud Prevention: Every material movement is recorded on a decentralized ledger, preventing fraudulent claims."
      + "Industrial IoT Integration (IIoT): Gathers environmental metrics (energy, emissions, waste) directly from sensors without manual entry."
    ],
    process: [
      {
        step: "01",
        title: "Scoping & Discovery",
        desc: "Mapping business needs, identifying manual workflows, and defining solution scope."
      },
      {
        step: "02",
        title: "Solution Design & Prototyping",
        desc: "Designing preliminary system architecture, creating functional mockups, and early validation models."
      },
      {
        step: "03",
        title: "Development & Integration",
        desc: "Developing platforms/modules and integrating them with backend APIs or internal systems."
      },
      {
        step: "04",
        title: "Testing & Go-Live",
        desc: "Conducting rigorous testing (functional, load, & security) before data migration and final deployment."
      },
      {
        step: "05",
        title: "Monitoring, Optimization & Scale-Up",
        desc: "Monitoring system performance in real-time, optimizing processes, and scaling capacity."
      }
    ],
    techStack: ["Hyperledger Fabric", "Node.js", "Go", "GraphQL", "Solidity", "AWS Blockchain", "IoT Gateway"],
    gallery: [
      "/images/brand_strategy.png",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200",
      "https://images.unsplash.com/photo-1507679799987-c7377ec48696?q=80&w=1200",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200"
    ],
    faqs: [
      {
        question: "Why use Hyperledger Fabric instead of a public blockchain?",
        answer: "Hyperledger Fabric is designed specifically for enterprises. It offers high transaction data privacy, authorized access restricted to consortium members, low latency, and zero public transaction fees (gas fees)."
      },
      {
        question: "How does Blockchain help with ESG & Carbon Emissions reporting?",
        answer: "Emissions and environmental data are collected directly from IoT smart devices on the ground into blockchain smart contracts. This data is stored immutably, providing absolute authenticity ready to be audited by international bodies."
      },
      {
        question: "Can this system be integrated with our company's ERP?",
        answer: "Absolutely. We design custom RESTful API middleware to synchronize blockchain logistics data with your primary ERP systems such as SAP, Oracle, or Microsoft Dynamics."
      }
    ]
  }
];
