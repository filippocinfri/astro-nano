import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Black Swan Petter",
  EMAIL: "prova@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Homepage.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of provoking thoughts, beautiful stories, and my perspective.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with details and steps to replicate them.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "later",
  },
  { 
    NAME: "github",
    HREF: "later"
  },
  { 
    NAME: "linkedin",
    HREF: "later",
  }
];
