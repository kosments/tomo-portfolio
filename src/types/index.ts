export interface Photo {
  id: string
  src: string
  title?: string
  location?: string
  category?: 'landscape' | 'activity' | 'lifestyle'
  alt: string
}

export interface Activity {
  id: string
  title: string
  description: string
  image: string
  skills?: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}