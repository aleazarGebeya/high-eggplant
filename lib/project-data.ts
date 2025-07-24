import React from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Designing the Future – Fintech Dashboard",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=480&h=700&fit=crop&auto=format",
    category: "UI/UX",
    client: "Bloom Investments",
    tags: ["UI/UX", "Dashboard", "Fintech"],
    description:
      "A clean, modern dashboard interface for a fintech company designed to visualize key metrics and facilitate user flows effortlessly.",
    caseStudy: {
      intro:
        "Bloom Investments needed a responsive, scalable dashboard for managing large datasets and visualizing user engagement.",
      process:
        "Conducted user research, wireframes, and Figma high-fidelity prototypes. Focused on accessibility and real-time chart integrations.",
      result:
        "Resulted in 94% positive feedback from target users and increased user retention by 28% over three months.",
    },
  },
  {
    id: 2,
    title: "Creative Studio Branding & Site",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=600&h=700&fit=crop&auto=format",
    category: "Branding",
    client: "Studio Orange",
    tags: ["Branding", "Web", "Identity"],
    description:
      "Visually rich branding project for a creative agency. Delivered impactful logo, palette, and interactive website.",
    caseStudy: {
      intro:
        "Studio Orange required cohesive branding and a visually-driven website to boost online presence and client engagement.",
      process:
        "Executed logo design, color system, and delivered modular React website using Next.js with subtle page transitions.",
      result:
        "Brand awareness increased by 63%. The interactive site won 'CSSDA Site of the Week.'",
    },
  },
  {
    id: 3,
    title: "Mobile Health App UI/UX",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop&auto=format",
    category: "App UI",
    client: "WellnessCo",
    tags: ["App", "UI/UX", "Health"],
    description:
      "Intuitive, welcoming UI for a mobile wellness application focused on daily habit tracking.",
    caseStudy: {
      intro:
        "WellnessCo wanted to reimagine their mobile UX for health tracking, enhancing stickiness and friendliness.",
      process:
        "Created new onboarding experience, color themes, and micro-interactions for habit streaks. Used React Native prototypes.",
      result:
        "Launched to 12K+ downloads in opening week, App Store feature, and average 4.8 rating.",
    },
  },
  {
    id: 4,
    title: "E-commerce Product Photography",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&h=480&fit=crop&auto=format",
    category: "Photography",
    client: "Urban Market",
    tags: ["Photography", "E-commerce"],
    description:
      "High-impact studio and lifestyle product shots for growing e-commerce brands.",
    caseStudy: {
      intro:
        "Urban Market wanted to elevate their e-commerce visuals for a multi-platform product launch.",
      process:
        "Shot and edited over 60 images, coordinated sets, facilitated creative direction. Delivered web-optimized formats.",
      result:
        "Online conversion rate increased 21%. Product shots showcased by two supplier partners.",
    },
  },
  {
    id: 5,
    title: "Brand Video Campaign",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop&auto=format",
    category: "Video",
    client: "Nova Apparel",
    tags: ["Video", "Campaign", "Branding"],
    description:
      "Directed and edited a bold, narrative-driven campaign video for a fashion label.",
    caseStudy: {
      intro:
        "Nova Apparel needed a disruptive video campaign launch to engage a younger demographic via social platforms.",
      process:
        "Led creative ideation, storyboarding, and on-set direction. Edited video using DaVinci Resolve and After Effects.",
      result:
        "The video reached 70K views in 2 weeks, led to a 2x increase in Instagram followership.",
    },
  },
];

export type ProjectCategory = "All" | "UI/UX" | "Branding" | "App UI" | "Photography" | "Video";

export function getCategories() {
  const set = new Set<string>(PROJECTS.map(p => p.category));
  return ["All", ...Array.from(set)];
}

export function getProjects(category: ProjectCategory) {
  if (category === "All") return PROJECTS;
  return PROJECTS.filter(p => p.category === category);
}

export type Project = typeof PROJECTS[0];
