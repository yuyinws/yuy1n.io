import type { Links, Page, Site, Socials } from '@types'

// Global
export const SITE: Site = {
  TITLE: 'Leo',
  DESCRIPTION: 'Leo\'s personal website',
  AUTHOR: 'Leo',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Tools Page
export const TOOLS: Page = {
  TITLE: 'Tools',
  DESCRIPTION: 'Tools I am using.',
}

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/',
  },
  // {
  //   TEXT: 'Work',
  //   HREF: '/work',
  // },
  {
    TEXT: 'Blog',
    HREF: '/blog',
  },
  {
    TEXT: 'Projects',
    HREF: '/projects',
  },
  {
    TEXT: 'Tools',
    HREF: '/tools',
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'heroicons:envelope',
    TEXT: 'hi@yuy1n.io',
    HREF: 'mailto:hi@yuy1n.io',
  },
  {
    NAME: 'Github',
    ICON: 'ri:github-fill',
    TEXT: '@Leo',
    HREF: 'https://github.com/yuyinws',
  },
  {
    NAME: 'Twitter',
    ICON: 'ri:twitter-x-line',
    TEXT: '@Leo',
    HREF: 'https://x.com/yuyinws',
  },
]

// Skills
export const SKILLS = [
  {
    text: 'TypeScript',
    icon: 'logos:typescript-icon',
    href: 'https://www.typescriptlang.org',
  },
  {
    text: 'Node.js',
    icon: 'logos:nodejs-icon',
    href: 'https://nodejs.org',
  },
  {
    text: 'Vue',
    icon: 'logos:vue',
    href: 'https://vuejs.org',
  },
  {
    text: 'Nuxt',
    icon: 'logos:nuxt-icon',
    href: 'https://nuxt.com',
  },
  {
    text: 'Astro',
    icon: 'logos:astro-icon',
    href: 'https://astro.build',
  },
  {
    text: 'UnoCSS',
    icon: 'simple-icons:unocss',
    href: 'https://unocss.dev',
  },
  {
    text: 'Tailwind',
    icon: 'logos:tailwindcss-icon',
    href: 'https://tailwindcss.com',
  },
  {
    text: 'tRPC',
    icon: 'logos:trpc',
    href: 'https://trpc.io',
  },
  {
    text: 'Vercel',
    icon: 'simple-icons:vercel',
    href: 'https://vercel.com',
  },
  {
    text: 'Docker',
    icon: 'logos:docker-icon',
    href: 'https://www.docker.com',
  },
]
