import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

interface SEOProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
}

export function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
}: SEOProps) {
  const fullCanonical = `${siteConfig.url}${canonical}`
  const fullOgImage = ogImage ?? `${siteConfig.url}${siteConfig.ogImage}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  )
}
