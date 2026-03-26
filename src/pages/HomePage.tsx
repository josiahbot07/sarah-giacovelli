import { SEO } from '@/components/SEO'
import { Hero } from '@/components/home/Hero'
import { Welcome } from '@/components/home/Welcome'
import { PracticeAreaCards } from '@/components/home/PracticeAreaCards'
import { ResourcesTeaser } from '@/components/home/ResourcesTeaser'

export function HomePage() {
  return (
    <>
      <SEO
        title="Giacovelli Law | Family Law & Criminal Defense | Salt Lake City"
        description="Giacovelli Law is a Salt Lake City law firm specializing in family law and criminal defense. Over 25 years of experienced advocacy and personal attention. Call 801.566.0500."
        canonical="/"
      />
      <Hero />
      <Welcome />
      <PracticeAreaCards />
      <ResourcesTeaser />
    </>
  )
}
