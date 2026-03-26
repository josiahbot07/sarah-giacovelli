import { useParams, Navigate } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { StructuredData } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { getPracticeArea } from '@/data/practiceAreas'
import { legalServiceSchema } from '@/data/structuredData'
import { PracticeAreaHero } from '@/components/practice/PracticeAreaHero'
import { PracticeAreaContent } from '@/components/practice/PracticeAreaContent'

export function PracticeAreaPage() {
  const { slug } = useParams<{ slug: string }>()
  const area = slug ? getPracticeArea(slug) : undefined

  if (!area) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        canonical={`/practice/${area.slug}`}
      />
      <StructuredData data={legalServiceSchema(area)} />
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: area.title, path: `/practice/${area.slug}` },
          ]}
        />
      </div>
      <PracticeAreaHero title={area.title} tagline={area.tagline} image={area.heroImage} />
      <PracticeAreaContent area={area} />
    </>
  )
}
