/**
 * CENTRALISED PROBLEM STATEMENT DATA
 * ----------------------------------
 * Update everything here — the UI never needs to change.
 *
 * Fields: id, title, category, domain, problem, challenge, requirements[],
 *         additionalInfo, pdfUrl, track
 *
 * pdfUrl: keep "PDF_LINK_TO_BE_ADDED" until the real PDF link exists.
 * placeholder: set to false once verified SIH 2025 data is inserted.
 */

export type ProblemStatement = {
  id: string;
  title: string;
  category: string;
  domain: string;
  problem: string;
  challenge: string;
  requirements: string[];
  additionalInfo?: string;
  pdfUrl: string;
  track: string;
  placeholder?: boolean;
};

export const PS_SOURCE_URL = "https://sih.gov.in/sih2025PS";

export const problemStatements: ProblemStatement[] = [
  {
    id: "SIH25001",
    title: "Smart Community Health Monitoring & Early Warning System",
    category: "Software",
    domain: "MedTech / HealthTech",
    problem:
      "Develop a smart community health monitoring and early warning system for rural communities in North-East India to support early detection of water-borne diseases.",
    challenge:
      "Build a technology-driven system that can monitor community health indicators and identify possible water-borne disease outbreaks at an early stage.",
    requirements: [
      "Monitor relevant community health indicators.",
      "Identify patterns that may indicate water-borne disease outbreaks.",
      "Provide early warnings to relevant users or authorities.",
      "Present health information through an easy-to-use digital interface.",
    ],
    additionalInfo:
      "Ministry of Development of North Eastern Region | Software | MedTech / HealthTech",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },

  {
    id: "SIH25002",
    title: "Smart Tourist Safety Monitoring & Incident Response System",
    category: "Software",
    domain: "Travel & Tourism",
    problem:
      "Develop a smart tourist safety monitoring and incident response system using Artificial Intelligence, Geo-Fencing and Blockchain-based Digital Identity.",
    challenge:
      "Provide a reliable system for monitoring tourist safety, detecting incidents and enabling faster response while maintaining secure digital identity management.",
    requirements: [
      "Use AI-based techniques for tourist safety monitoring.",
      "Implement Geo-Fencing for location-based safety monitoring.",
      "Provide secure digital identity using Blockchain-based technology.",
      "Enable incident detection, alerts and response.",
    ],
    additionalInfo: "Ministry of Development of North Eastern Region | Software | Travel & Tourism",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },

  {
    id: "SIH25004",
    title: "Image based Breed Recognition for Cattle & Buffaloes",
    category: "Software",
    domain: "AI / Computer Vision",
    problem:
      "Develop an image-based breed recognition system for cattle and buffaloes using image processing and Machine Learning techniques.",
    challenge:
      "Accurately identify the breed of cattle or buffalo from an image and provide useful breed-related information through an automated system.",
    requirements: [
      "Accept cattle or buffalo images as input.",
      "Use image processing and Machine Learning techniques for breed recognition.",
      "Classify the animal into the appropriate breed.",
      "Provide the recognition result through a simple user interface.",
    ],
    additionalInfo: "Ministry of Fisheries, Animal Husbandry & Dairying | Software",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },

  {
    id: "SIH25040",
    title: "FloatChat: AI-Powered Conversational Interface for ARGO Ocean Data",
    category: "Software",
    domain: "AI / LLM / Data Visualization",
    problem:
      "Develop FloatChat, an AI-powered conversational interface that enables users to interact with and explore ARGO Ocean Data using natural language.",
    challenge:
      "Combine Large Language Models, conversational interfaces and data visualization to make complex oceanographic ARGO data easier to access and understand.",
    requirements: [
      "Provide a conversational interface for ARGO Ocean Data.",
      "Use AI or Large Language Model technologies for natural-language interaction.",
      "Enable users to query relevant oceanographic information.",
      "Present retrieved data through meaningful visualizations.",
    ],
    additionalInfo:
      "Ministry of Earth Sciences | Software | AI, Conversational Interface and Ocean Data",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },

  {
    id: "SIH25066",
    title: "Development of AI-driven ChatBOT for INGRES",
    category: "Software",
    domain: "AI / Chatbot / Smart Automation",
    problem:
      "Develop an AI-driven chatbot for INGRES to provide users with an intelligent conversational interface for groundwater resource-related information and assistance.",
    challenge:
      "Build an intelligent assistant that can understand user queries and provide relevant groundwater resource information through a conversational interface.",
    requirements: [
      "Develop an AI-driven conversational chatbot.",
      "Understand and process natural-language user queries.",
      "Provide relevant groundwater resource information.",
      "Design an intuitive and accessible chatbot interface.",
    ],
    additionalInfo: "Ministry of Jal Shakti | Software | Smart Automation",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },

  {
    id: "SIH25071",
    title: "AI-Based Rockfall Prediction and Alert System for Open-Pit Mines",
    category: "Software",
    domain: "AI / Disaster Management",
    problem:
      "Develop an AI-based rockfall prediction and alert system for open-pit mines to improve mine safety and provide early warnings of potential rockfall events.",
    challenge:
      "Use Machine Learning and relevant data sources to identify conditions associated with rockfall risks and provide timely alerts.",
    requirements: [
      "Analyse relevant mining and environmental data.",
      "Use AI or Machine Learning for rockfall risk prediction.",
      "Identify potentially dangerous conditions.",
      "Generate timely alerts for potential rockfall events.",
    ],
    additionalInfo: "Ministry of Mines | Software | Disaster Management",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },

  {
    id: "SIH25092",
    title: "Development of a Digital Mental Health and Psychological Support System",
    category: "Software",
    domain: "HealthTech / Mental Health",
    problem:
      "Develop a digital mental health and psychological support system that can provide accessible support and assistance to students and other users.",
    challenge:
      "Create a safe, accessible and user-friendly digital platform that helps users access appropriate mental health and psychological support.",
    requirements: [
      "Provide an accessible digital platform for psychological support.",
      "Enable users to access relevant mental health resources.",
      "Provide an easy-to-use and privacy-conscious interface.",
      "Help users connect with appropriate support when required.",
    ],
    additionalInfo: "Government of Jammu & Kashmir | Software | HealthTech",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },

  {
    id: "SIH12508",
    title: "AI-powered FRA Atlas and WebGIS-based Decision Support System",
    category: "Software",
    domain: "AI / GIS / WebGIS",
    problem:
      "Develop an AI-powered FRA Atlas and WebGIS-based Decision Support System to support visualization, analysis and decision-making related to FRA information.",
    challenge:
      "Combine Artificial Intelligence and WebGIS technologies to create a multi-state decision support platform that makes relevant geographic and FRA information easier to access and analyse.",
    requirements: [
      "Develop an interactive WebGIS-based platform.",
      "Integrate AI-powered analysis and decision-support capabilities.",
      "Provide map-based visualization of relevant FRA information.",
      "Support information and analysis across multiple states.",
    ],
    additionalInfo:
      "Ministry of Tribal Affairs | Software | Miscellaneous | Multi-state scope including Madhya Pradesh, Tripura, Odisha and Telangana.",
    pdfUrl: "PDF_LINK_TO_BE_ADDED",
    track: "Round 1 — Assigned SIH 2025 Challenges",
    placeholder: false,
  },
];

export const tracks = Array.from(new Set(problemStatements.map((p) => p.track)));
