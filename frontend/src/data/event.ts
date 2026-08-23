export const REGISTRATION_URL = "REGISTRATION_URL_TO_BE_ADDED";
export const PPT_FORMAT_URL =
  "https://docs.google.com/presentation/d/1UNsiata95UnnRAcl3Ds2sdrE8eHr-XRH/edit?slide=id.p1#slide=id.p1";

export const isPlaceholder = (url?: string) =>
  !url || url.trim() === "" || url.includes("TO_BE_ADDED");

export const REGISTRATION_OPEN_ISO = "2026-08-20T00:00:00+05:30";
export const REGISTRATION_CLOSE_ISO = "2026-08-25T23:59:59+05:30";

export const REGISTRATION_PLATFORM = "Unstop";
export const REGISTRATION_FEE = "₹150 per team";

export const heroChips = [
  { label: "Round 1", value: "7–8 September 2026" },
  { label: "Round 2", value: "15 September 2026" },
  { label: "Fee", value: "₹150 / team" },
];

export const stats = [
  { value: "6", unit: "members / team", note: "Exactly 6 members" },
  { value: "1+", unit: "female member", note: "Minimum 1 female member" },
  { value: "2", unit: "selection rounds", note: "Qualification + Internal Hackathon" },
  { value: "7", unit: "hour Round 2", note: "Internal live hackathon" },
];

export const editions = [
  { edition: "v1.0", position: "Winner" },
  { edition: "v1.0", position: "1st Runner-up" },
  { edition: "v1.0", position: "2nd Runner-up" },
  { edition: "v2.0", position: "Winner" },
  { edition: "v2.0", position: "Runner-up" },
].map((e) => ({
  ...e,
  team: "TEAM NAME",
  project: "PROJECT TITLE",
  note: "PLACEHOLDER — REPLACE WITH OFFICIAL DATA",
}));

export const timeline = [
  {
    tag: "Stage 01",
    title: "Registration",
    date: "Via Unstop",
    place: "Unstop",
    body: "Teams register for TechThrive 2026 through Unstop. Registration fee is ₹150 per team.",
  },
  {
    tag: "Stage 02",
    title: "Round 1 · SIH Qualification Round",
    date: "7–8 September 2026",
    place: "Computer Centre (E310)",
    body: "Teams select and present solutions based on official SIH 2026 problem statements through scheduled time slots.",
  },
  {
    tag: "Stage 03",
    title: "Mentorship & Refinement",
    date: "After Round 1",
    place: "Quantum University",
    body: "High-potential teams identified during evaluation receive faculty mentorship to refine their concepts, technical stacks and documentation.",
  },
  {
    tag: "Stage 04",
    title: "Round 2 · TechThrive Internal Hackathon",
    date: "15 September 2026",
    place: "",
    body: "All teams selected in Round 1 advance to Round 2, an intensive 7-hour internal hackathon.",
  },
  {
    tag: "Stage 05",
    title: "SIH Nomination",
    date: "After evaluation",
    place: "Unstop / Official SIH Channels",
    body: "Top-performing teams will be finalized for official SIH nomination through Unstop/official SIH channels under university guidelines.",
  },
];

export const round2Schedule = [{ time: "7 Hours", label: "TechThrive Internal Hackathon" }];

export const rules = [
  "Each team must have exactly 6 members.",
  "Each team must include at least 1 female member.",
  "Round 1 uses official SIH 2026 problem statements.",
  "Teams will be assigned designated time slots for presentations.",
  "Teams will be organized into designated evaluation groups and called to Lab E310 according to their allotted slots.",
  "Round 1 focuses on problem understanding, technical approach, feasibility and presentation readiness.",
  "High-potential teams identified during Round 1 will receive faculty mentorship.",
  "All teams selected in Round 1 will advance to Round 2.",
  "Round 2 is an intensive 7-hour internal hackathon.",
  "Top-performing teams will proceed toward official SIH nomination.",
];

export const pptSlides = [
  "Team Name & Members",
  "Problem Statement Understanding",
  "Proposed Solution / Idea",
  "Technical Architecture & Tech Stack",
  "Feasibility & Scalability",
  "Innovation / USP",
  "Impact",
  "Thank You / Q&A",
];

export const evaluation = [
  { label: "Problem Understanding", weight: 15 },
  { label: "Innovation & Creativity", weight: 20 },
  { label: "Technical Approach", weight: 20 },
  { label: "Feasibility & Scalability", weight: 15 },
  { label: "Prototype / Proof of Concept", weight: 20 },
  { label: "Presentation & Team Coordination", weight: 10 },
];

export const prizes = [
  {
    title: "Winning Team",
    items: ["SIH Nomination Pathway", "Faculty Mentorship"],
    featured: true,
  },
  {
    title: "Selected Teams",
    items: ["Round 2 Qualification", "Faculty Guidance"],
    featured: false,
  },
  {
    title: "Every Participant",
    items: ["Participation Opportunity", "Technical Exposure"],
    featured: false,
  },
];

export const faqs = [
  {
    q: "How many members should be in a team?",
    a: "Each team must have exactly 6 members.",
  },
  {
    q: "Is there a female-member requirement?",
    a: "Yes. Each team must include at least 1 female member.",
  },
  {
    q: "What is the registration fee?",
    a: "The registration fee is ₹150 per team.",
  },
  {
    q: "Where can we register?",
    a: "Registration is conducted through Unstop.",
  },
  {
    q: "Which problem statements will be used?",
    a: "Round 1 uses official SIH 2025 problem statements.",
  },
  {
    q: "When is Round 1?",
    a: "Round 1 will be conducted on 7th and 8th September 2026.",
  },
  {
    q: "Where is Round 1?",
    a: "Round 1 will be conducted at Computer Centre (E310).",
  },
  {
    q: "What is the format of Round 1?",
    a: "Round 1 consists of scheduled time-slot presentations and problem screening.",
  },
  {
    q: "When is Round 2?",
    a: "Round 2 is scheduled for 15 September 2026.",
  },
  {
    q: "How long is Round 2?",
    a: "Round 2 is an intensive 7-hour internal hackathon.",
  },
  {
    q: "What happens after Round 1?",
    a: "Selected teams advance to Round 2 and high-potential teams receive faculty mentorship.",
  },
  {
    q: "How does SIH nomination work?",
    a: "Top-performing teams will be finalized for official SIH nomination through Unstop/official SIH channels under university guidelines.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Editions", href: "#editions" },
  { label: "Schedule", href: "#schedule" },
  { label: "Rules", href: "#rules" },
  { label: "Problem Statements", href: "#problem-statements" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
