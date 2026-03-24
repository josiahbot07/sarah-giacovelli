import { useEffect } from 'react'
import { Hero } from '@/components/home/Hero'
import { Welcome } from '@/components/home/Welcome'
import { PracticeAreaCards } from '@/components/home/PracticeAreaCards'
import { ResourcesTeaser } from '@/components/home/ResourcesTeaser'

export function HomePage() {
  useEffect(() => {
    document.title = 'Giacovelli Law | Family Law & Criminal Defense | Salt Lake City'
  }, [])

  return (
    <>
      <Hero />
      <Welcome />
      <PracticeAreaCards />
      <ResourcesTeaser />
    </>
  )
}
