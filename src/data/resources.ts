import type { Resource } from '@/types'

export const resources: Resource[] = [
  {
    title: 'Child Support Calculator',
    description:
      'In Utah, child support is determined by a standard formula based on each parent\'s gross monthly income and the number of children they share. Use this online tool to estimate potential payments or obligations.',
    url: 'https://www.utcourts.gov/resources/calculator/',
    linkText: 'Calculate Child Support',
  },
  {
    title: 'Financial Declaration Forms',
    description:
      'This mandatory document collects comprehensive financial information required under Utah law. It supports the discovery process and helps determine alimony, child support, and property division in divorce or paternity cases.',
    url: 'https://www.utcourts.gov/resources/forms/',
    linkText: 'Access Forms',
  },
  {
    title: 'Utah Parenting Plan',
    description:
      'Required when children are involved in divorce or paternity actions, this form outlines custody arrangements and co-parenting responsibilities. The court requires submission of both the parenting plan form and an accompanying checklist.',
    url: 'https://www.utcourts.gov/resources/forms/',
    linkText: 'View Parenting Plan',
  },
]
