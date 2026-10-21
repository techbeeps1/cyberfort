/**
 * Global site configuration for CyberFort
 * Centralized metadata, branding, and navigation references.
 */
export const siteConfig = {
  name: "CyberFort",
  title: "CyberFort | Next-Gen Cybersecurity Solutions & Infrastructure Defense",
  description:
    "CyberFort delivers cutting-edge cybersecurity, threat intelligence, and enterprise-grade infrastructure defense solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://cyberfort.io",
  ogImage: "/og-image.png",
  keywords: [
    "Cybersecurity",
    "Threat Detection",
    "Infrastructure Security",
    "Enterprise Defense",
    "CyberFort",
    "Zero Trust",
    "Cloud Security",
    "Network Security",
  ],
  links: {
    twitter: "https://twitter.com/cyberfort",
    github: "https://github.com/cyberfort",
    linkedin: "https://linkedin.com/company/cyberfort",
  },
  authors: [
    {
      name: "CyberFort Team",
      url: "https://cyberfort.io",
    },
  ],
  creator: "CyberFort",
};
