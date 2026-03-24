import { useEffect } from 'react'
import { useRevealGroup } from '@/hooks/useIntersectionObserver'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ResourceCard } from '@/components/resources/ResourceCard'
import { resources } from '@/data/resources'
import styles from './ResourcesPage.module.css'

export function ResourcesPage() {
  const ref = useRevealGroup()

  useEffect(() => {
    document.title = 'Client Resources | Giacovelli Law'
  }, [])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Client Resources</span>
          <h1 className={styles.heroTitle}>
            Tools & Resources <em>for You</em>
          </h1>
          <p className={styles.heroDesc}>
            We offer online tools to help make the legal process as organized and
            efficient as possible.
          </p>
        </div>
      </section>

      <section className={`section`}>
        <div className="container">
          <SectionHeading
            label="Resources"
            title="Helpful Legal Tools"
            subtitle="Access calculators, forms, and checklists to assist you through the legal process."
          />
          <div ref={ref} data-reveal-stagger className={styles.grid}>
            {resources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
