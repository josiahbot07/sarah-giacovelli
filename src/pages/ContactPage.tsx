import { useEffect } from 'react'
import { useReveal } from '@/hooks/useIntersectionObserver'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/ui/ContactInfo'
import { Map } from '@/components/contact/Map'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const formRef = useReveal<HTMLDivElement>()

  useEffect(() => {
    document.title = 'Contact | Giacovelli Law'
  }, [])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Get in Touch</span>
          <h1 className={styles.heroTitle}>
            Contact <em>Our Office</em>
          </h1>
          <p className={styles.heroDesc}>
            Ready to discuss your case? Reach out to schedule a consultation.
          </p>
        </div>
      </section>

      <section className={`section`}>
        <div className={`container ${styles.grid}`}>
          <div ref={formRef} data-reveal>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <ContactForm />
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Office Information</h3>
              <ContactInfo />
            </div>
            <Map />
          </aside>
        </div>
      </section>
    </div>
  )
}
