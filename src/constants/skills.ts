import type { SkillCategoryData } from "../types";

export const LOCAL_ICONS_PATH = "/icons/tech";

export const SKILLS_DATA: readonly SkillCategoryData[] = [
  {
    title: "Frameworks & Personal Projects",
    description: "Creator and Maintainer",
    items: [
      {
        name: "Effuse",
        iconName: "effuse-logo.svg",
        isEffuse: true,
      },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "JavaScript", iconName: "javascript", hasPlainVariant: true },
      { name: "TypeScript", iconName: "typescript", hasPlainVariant: true },
      { name: "Python", iconName: "python", hasPlainVariant: true },
      { name: "C++", iconName: "cplusplus", hasPlainVariant: true },
      { name: "Java", iconName: "java", hasPlainVariant: true },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", iconName: "react" },
      {
        name: "Next.js",
        iconName: "nextjs",
        invertStrategy: "light",
        hasPlainVariant: true,
      },
      { name: "React Native", iconName: "react" },
      { name: "Vue.js", iconName: "vuejs", hasPlainVariant: true },
      { name: "Redux", iconName: "redux" },
      { name: "Tailwind CSS", iconName: "tailwindcss" },
      { name: "CSS", iconName: "css3", hasPlainVariant: true },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", iconName: "nodejs", hasPlainVariant: true },
      {
        name: "Express.js",
        iconName: "express",
        invertStrategy: "light",
      },
      { name: "Spring Boot", iconName: "spring" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", iconName: "mysql" },
      { name: "MongoDB", iconName: "mongodb", hasPlainVariant: true },
      { name: "PostgreSQL", iconName: "postgresql", hasPlainVariant: true },
      {
        name: "Prisma",
        iconName: "prisma",
        invertStrategy: "dark",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git", iconName: "git", hasPlainVariant: true },
      {
        name: "Vercel",
        iconName: "vercel",
        invertStrategy: "light",
      },
      { name: "AWS", iconName: "amazonwebservices-original-wordmark.svg" },
      { name: "Postman", iconName: "postman", hasPlainVariant: true },
      {
        name: "Electron",
        iconName: "electron",
        invertStrategy: "dark",
      },
    ],
  },
  {
    title: "Testing",
    items: [
      {
        name: "Vitest",
        iconName: "vitest",
        hasPlainVariant: true,
        invertStrategy: "dark",
      },
      { name: "Jest", iconName: "jest-plain.svg" },
      { name: "JUnit", iconName: "junit", hasPlainVariant: true },
    ],
  },
  {
    title: "3D & Visualization",
    items: [
      {
        name: "Three.js",
        iconName: "threejs",
        invertStrategy: "light",
      },
      {
        name: "WebGL",
        iconName: "webgl-original.svg",
        invertStrategy: "light",
      },
    ],
  },
  {
    title: "Personal Favorites",
    description: "— Languages I enjoy exploring",
    items: [{ name: "Haskell", iconName: "haskell", hasPlainVariant: true }],
  },
] as const;
