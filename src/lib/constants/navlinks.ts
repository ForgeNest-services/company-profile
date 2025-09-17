export interface Navlinks {
  label: string;
  href: string;
  description?: string;
}

export const navLinks: Navlinks[] = [
  { label: "About", href: "/about", description: "Learn about our company" },
  { label: "Services", href: "/services", description: "Our IT solutions" },
  { label: "Blogs", href: "/blogs", description: "Latest insights & trends" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
];

export const footerLinks = {
  services: [
    { label: "Custom Software Development", href: "/services/custom-software" },
    {
      label: "Web Application Development",
      href: "/services/web-applications",
    },
    { label: "Mobile App Development", href: "/services/mobile-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    {
      label: "Digital Transformation",
      href: "/services/digital-transformation",
    },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
