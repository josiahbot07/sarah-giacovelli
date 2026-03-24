import { Button } from '@/components/ui/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative elements */}
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.bgGradient} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.label}>Family Law & Criminal Defense</span>
          <h1 className={styles.title}>
            Experienced Advocacy.<br />
            <em>Personal Attention.</em>
          </h1>
          <p className={styles.subtitle}>
            Giacovelli Law is a Utah-based firm providing skilled legal
            representation in family law and criminal defense matters.
            We work hard to protect your interests with efficiency and care.
          </p>
          <div className={styles.actions}>
            <Button to="/contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
            <Button to="/practice/family-law" variant="outline" size="lg">
              Our Practice Areas
            </Button>
          </div>
        </div>

        <div className={styles.decorSide} aria-hidden="true">
          <div className={styles.decorCard}>
            <div className={styles.decorAccent} />
            <span className={styles.decorStat}>25+</span>
            <span className={styles.decorStatLabel}>Years of Experience</span>
          </div>
          <div className={styles.decorCard}>
            <div className={styles.decorAccent2} />
            <span className={styles.decorStat}>Top</span>
            <span className={styles.decorStatLabel}>Utah Lawyer — Utah Business Magazine</span>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className={styles.fadeBottom} aria-hidden="true" />
    </section>
  )
}
