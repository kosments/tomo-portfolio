export const SITE_CONFIG = {
  name: 'Tomo Portfolio',
  title: 'Tomo - Life in Canada',
  description: 'カナダでのアウトドアライフスタイルを写真で表現するポートフォリオサイト',
  url: 'https://tomo-portfolio.vercel.app',
  author: 'Tomo',
  keywords: 'portfolio, canada, outdoor, photography, lifestyle, adventure',
} as const

export const NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Life in Canada', href: '#life-in-canada' },
  { name: 'Activities', href: '#activities' },
  { name: 'Contact', href: '#contact' },
] as const

export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/tomo',
    icon: 'Instagram',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tomo',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:tomo@example.com',
    icon: 'Mail',
  },
] as const

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  slideInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
} as const