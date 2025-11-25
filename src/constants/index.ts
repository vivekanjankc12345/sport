// API Configuration
// Using Next.js API routes (runs on same port as Next.js - 3000)
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
  ENDPOINTS: {
    LEAD: "/api/lead",
    HEALTH: "/api/health",
  },
} as const;

// FAQ Data
export const FAQ_ITEMS = [
  {
    id: "faq-1",
    title: "FAQ",
    subtitle: "And your recent history",
    content: "Browse frequently asked questions and your recent inquiry history.",
  },
  {
    id: "faq-2",
    title: "Add One",
    content: "Submit a new question or inquiry to our support team.",
  },
  {
    id: "faq-3",
    title: "Contact Helpdesk",
    content: "Get in touch with our support team for immediate assistance.",
  },
] as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "Trips", href: "#packages", id: "trips", sectionId: "packages" },
  { label: "Packages", href: "#packages", id: "packages", sectionId: "packages" },
  { label: "Experiences", href: "#featured", id: "experiences", sectionId: "featured" },
  { label: "For Agents", href: "#why", id: "agents", sectionId: "why" },
  { label: "Contact", href: "#lead", id: "contact", sectionId: "lead" },
] as const;

// Toast Configuration
export const TOAST_CONFIG = {
  SUCCESS_DURATION: 3000,
  ERROR_DURATION: 5000,
  WARNING_DURATION: 4000,
  INFO_DURATION: 3000,
} as const;

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  PHONE_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890",
  DEFAULT_MESSAGE: "Hello, I'm interested in your sports travel packages!",
} as const;

