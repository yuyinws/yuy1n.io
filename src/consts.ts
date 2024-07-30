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

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/',
  },
  {
    TEXT: 'Work',
    HREF: '/work',
  },
  {
    TEXT: 'Blog',
    HREF: '/blog',
  },
  {
    TEXT: 'Projects',
    HREF: '/projects',
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'hi@yuy1n.io',
    HREF: 'mailto:hi@yuy1n.io',
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: '@Leo',
    HREF: 'https://github.com/yuyinws',
  },
  {
    NAME: 'Twitter',
    ICON: 'twitter-x',
    TEXT: '@Leo',
    HREF: 'https://x.com/yuyinws',
  },
]
