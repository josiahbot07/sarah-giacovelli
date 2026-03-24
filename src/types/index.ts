export interface PracticeArea {
  slug: string
  title: string
  tagline: string
  description: string[]
  services: string[]
  closingCta: string
  metaTitle: string
  heroImage: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string[]
  credentials?: string[]
  photo?: string
}

export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

export interface Resource {
  title: string
  description: string
  url: string
  linkText: string
}

export interface ContactFormData {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
  altPhone: string
  preferredContact: 'phone' | 'email' | 'either'
  comments: string
}
