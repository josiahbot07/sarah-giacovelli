import type { NavItem } from '@/types'

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Practice Areas',
    path: '/practice/family-law',
    children: [
      { label: 'Family Law', path: '/practice/family-law' },
      { label: 'Divorce', path: '/practice/divorce' },
      { label: 'Child Custody', path: '/practice/child-custody' },
      { label: 'Child Support', path: '/practice/child-support' },
      { label: 'Juvenile Law', path: '/practice/juvenile-law' },
      { label: 'Adoptions', path: '/practice/adoptions' },
      { label: 'Criminal Defense', path: '/practice/criminal-defense' },
    ],
  },
  { label: 'Client Resources', path: '/client-resources' },
  { label: 'Contact', path: '/contact' },
]
