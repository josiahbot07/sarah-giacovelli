import { siteConfig } from '@/config/site'

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${siteConfig.url}/#organization`,
  name: 'Giacovelli Law',
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: '+18015660500',
  faxNumber: '+18015689196',
  email: 'amy@sagesq.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6806 South 1300 East',
    addressLocality: 'Salt Lake City',
    addressRegion: 'UT',
    postalCode: '84121',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.6275,
    longitude: -111.8553,
  },
  areaServed: {
    '@type': 'City',
    name: 'Salt Lake City',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  image: `${siteConfig.url}${siteConfig.ogImage}`,
}

export const attorneySchema = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Sarah A. Giacovelli',
  jobTitle: 'Attorney',
  url: `${siteConfig.url}/about`,
  worksFor: {
    '@id': `${siteConfig.url}/#organization`,
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Willamette University' },
    { '@type': 'CollegeOrUniversity', name: 'University of Utah' },
  ],
  knowsAbout: [
    'Family Law',
    'Criminal Defense',
    'Juvenile Law',
    'Divorce',
    'Child Custody',
    'Adoptions',
  ],
  description:
    'Seasoned trial attorney licensed since 2000 with extensive experience in family law, criminal defense, and juvenile court proceedings in Salt Lake City, Utah.',
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function legalServiceSchema(area: {
  title: string
  slug: string
  metaDescription: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${area.title} - Giacovelli Law`,
    description: area.metaDescription,
    url: `${siteConfig.url}/practice/${area.slug}`,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Salt Lake City',
    },
  }
}
