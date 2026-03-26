import { Link } from 'react-router-dom'
import { useReveal } from '@/hooks/useIntersectionObserver'
import { Button } from '@/components/ui/Button'
import { practiceAreas } from '@/data/practiceAreas'
import type { PracticeArea } from '@/types'
import styles from './PracticeAreaContent.module.css'

interface Props {
  area: PracticeArea
}

export function PracticeAreaContent({ area }: Props) {
  const ref = useReveal<HTMLDivElement>()
  const otherAreas = practiceAreas.filter((pa) => pa.slug !== area.slug)

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        {/* Main content */}
        <div ref={ref} data-reveal className={styles.main}>
          {area.description.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}

          <div className={styles.servicesBlock}>
            <h3 className={styles.servicesTitle}>How We Can Help</h3>
            <ul className={styles.servicesList}>
              {area.services.map((s, i) => (
                <li key={i}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3.5 9l4 4L14.5 5.5" />
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cta}>
            <p>{area.closingCta}</p>
            <Button to="/contact" variant="primary" size="lg">
              Contact Us Today
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h4 className={styles.sidebarTitle}>Practice Areas</h4>
            <nav className={styles.sidebarNav}>
              {otherAreas.map((pa) => (
                <Link key={pa.slug} to={`/practice/${pa.slug}`} className={styles.sidebarLink}>
                  {pa.title}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 3l4 4-4 4" />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.contactCard}>
            <h4 className={styles.contactCardTitle}>Need Assistance?</h4>
            <p className={styles.contactCardDesc}>
              Schedule a consultation to discuss your case.
            </p>
            <Button to="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </aside>
      </div>
    </section>
  )
}
