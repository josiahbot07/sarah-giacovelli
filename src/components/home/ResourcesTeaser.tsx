import { useReveal } from '@/hooks/useIntersectionObserver'
import { Button } from '@/components/ui/Button'
import styles from './ResourcesTeaser.module.css'

export function ResourcesTeaser() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} data-reveal className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.label}>Client Resources</span>
          <h2 className={styles.title}>Tools to Help You Navigate the Process</h2>
          <p className={styles.desc}>
            We offer many online tools to help our clients. From useful resources
            like a child support calculator, a parenting plan checklist and form,
            and financial declaration forms, we make the legal process as organized
            and efficient as possible for you.
          </p>
          <Button to="/client-resources" variant="secondary">
            View Resources
          </Button>
        </div>
        <div className={styles.decorative} aria-hidden="true">
          <div className={styles.decorBlock}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="4" width="24" height="28" rx="2" />
              <path d="M10 12h12M10 17h12M10 22h8" />
            </svg>
            <span>Child Support Calculator</span>
          </div>
          <div className={styles.decorBlock}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 4h16l4 6H4l4-6z" />
              <rect x="6" y="10" width="20" height="18" rx="1" />
              <path d="M12 16l3 3 5-6" />
            </svg>
            <span>Parenting Plan Checklist</span>
          </div>
          <div className={styles.decorBlock}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="6" width="24" height="20" rx="2" />
              <path d="M4 12h24" />
              <path d="M12 18h8" />
            </svg>
            <span>Financial Declaration Forms</span>
          </div>
        </div>
      </div>
    </section>
  )
}
