import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getPracticeArea } from '@/data/practiceAreas'
import { PracticeAreaHero } from '@/components/practice/PracticeAreaHero'
import { PracticeAreaContent } from '@/components/practice/PracticeAreaContent'

export function PracticeAreaPage() {
  const { slug } = useParams<{ slug: string }>()
  const area = slug ? getPracticeArea(slug) : undefined

  useEffect(() => {
    if (area) {
      document.title = area.metaTitle
    }
  }, [area])

  if (!area) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <PracticeAreaHero title={area.title} tagline={area.tagline} image={area.heroImage} />
      <PracticeAreaContent area={area} />
    </>
  )
}
