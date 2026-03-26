import { Link } from 'react-router-dom'
import { useRevealGroup } from '@/hooks/useIntersectionObserver'
import { SectionHeading } from '@/components/ui/SectionHeading'
import styles from './PracticeAreaCards.module.css'

const areas = [
  {
    title: 'Family Law',
    slug: 'family-law',
    description:
      'We provide legal services in regards to divorce, separation, child custody, adoptions, juveniles, definition of parental rights, and modification or enforcement of orders.',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80',
    alt: 'Group of people together, representing family law services',
  },
  {
    title: 'Criminal Defense',
    slug: 'criminal-defense',
    description:
      'We cover cases ranging from DUI, drug charges, and theft cases to domestic violence. We know the best strategies and defenses. We know when and how to resolve a case and when to go to trial.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80',
    alt: 'Courthouse columns, representing criminal defense services',
  },
]

export function PracticeAreaCards() {
  const ref = useRevealGroup()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading
          label="What We Do"
          title="Areas of Practice"
          subtitle="Our firm focuses on two core areas where we bring decades of courtroom experience and deep legal knowledge."
        />
        <div ref={ref} data-reveal-stagger className={styles.grid}>
          {areas.map((area) => (
            <Link key={area.slug} to={`/practice/${area.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={area.image}
                  alt={area.alt}
                  className={styles.image}
                  width={800}
                  height={534}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardDesc}>{area.description}</p>
                <span className={styles.cardLink}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
