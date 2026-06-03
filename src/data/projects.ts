export const projects = [
  {
    slug: "kai-railfinance-chatbuddy",
    title: "KAI Railfinance & Chatbuddy",
    category: "AI Enterprise",
    year: "2025",
    client: "PT Kereta Api Indonesia (PT KAI)",
    shortDesc: "Automation of financial document workflows and a dual-mode intelligent conversational assistant.",
    longDesc: "We developed a unified custom Enterprise AI solution for PT KAI integrating two intelligent systems. First, Railfinance, which automates invoice document processing, financial reconciliation, and ERP data integration using OCR/Vision AI technology. Second, Chatbuddy, a dual-mode conversational assistant (Conversational AI) connected with Railfinance as well as serving as a secure autonomous assistant for internal operations and the public.",
    strategy: "Combining high-precision document recognition based on Vision AI with intelligent LLM + RAG assistants for contextual, fast, and secure conversation handling.",
    techStack: ["TypeScript", "Python", "FastAPI", "PostgreSQL", "LLM (RAG)", "Vision OCR"],
    results: [
      "Reduced manual document processing by 70%+",
      "Achieved 95%+ accuracy in data extraction",
      "Cut approval cycles from days to hours",
      "Integrated dual-mode chatbot implementation"
    ],
    features: ["KAI Railfinance (OCR/ERP Integration)", "KAI Chatbuddy (Dual-Mode Chat)", "Security & Audit Trail"],
    gallery: [
      "/images/kai_finance_dashboard.png",
      "/images/kai_chatbuddy_ui.png",
      "/images/kai_document_ocr.png"
    ]
  },
  {
    slug: "vac-unpad-competency-assessment",
    title: "VAC UNPAD - Digital Competency Assessment",
    category: "Competency Platform",
    year: "2024",
    client: "Universitas Padjadjaran (UNPAD)",
    shortDesc: "Standardized national digital competency assessment platform with AI-based proctoring.",
    longDesc: "Universitas Padjadjaran adopted VAC (Virtual Assessment Center), a digital assessment platform built by Priventry.ai. This system hosts transparent, standardized competency exams for civil servants (ASN) and the education sector, equipped with intelligent AI proctoring to minimize fraud and automate grading fairly.",
    strategy: "Application of cutting-edge AI-based exam monitoring systems (face, voice, and behavioral verification) and integration of a smart question bank to reduce administrative workload.",
    techStack: ["Go", "React", "AWS", "Redis", "Python", "WebRTC"],
    results: [
      "AI face authentication & fraud monitoring",
      "Automated metrics/indicator-based scoring",
      "Multi-level analytics dashboard for institutions & local governments",
      "Instant generation of individual PDF evaluation reports"
    ],
    features: ["AI Proctoring (Live Alerts)", "Smart Question Bank", "Auto-Generated PDF Reports"],
    gallery: [
      "/images/unpad_proctoring_ui.png",
      "/images/unpad_assessment_dashboard.png",
      "/images/unpad_exam_interface.png"
    ]
  },
  {
    slug: "synergy-business-suite",
    title: "Synergy Engineering Group - Synergy Business Suite",
    category: "Enterprise Engineering",
    year: "2024",
    client: "Synergy Engineering Group",
    shortDesc: "Integrated modular HR platform to unify office staff and field engineers in real-time.",
    longDesc: "Synergy Business Suite is a modular HR platform designed to address the complexities of managing a dual workforce (office employees and field engineers). This system facilitates automatic user directory synchronization (Active Directory) and real-time GPS geofencing attendance tracking to generate accurate man-hour reports as a database downstream for project and financial modules.",
    strategy: "Developing a unified application with instant LDAP/Active Directory synchronization and a GPS geolocation-based attendance interface to ensure precise man-hour reporting.",
    techStack: ["React Native", "Node.js", "Express", "Active Directory", "PostgreSQL"],
    results: [
      "Instant data synchronization with LDAP/Active Directory",
      "Dual attendance (GPS Geofencing & Fingerprint)",
      "Automatic daily/weekly/monthly man-hour tracking",
      "Talent Pool module for profiling & rapid deployment"
    ],
    features: ["LDAP Sync & Authentication", "Geofenced Mobile Clock-In", "Man-Hour Reporting & Talent Pool"],
    gallery: [
      "/images/mobile_synergy.png",
      "/images/synergy_geofence_map.png",
      "/images/synergy_hr_dashboard.png"
    ]
  }
];
