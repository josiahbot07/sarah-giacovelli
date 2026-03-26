import { useReveal } from '@/hooks/useIntersectionObserver'
import { SEO } from '@/components/SEO'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/ui/ContactInfo'
import { Map } from '@/components/contact/Map'
import styles from './ContactPage.module.css'

export function ContactPage() {
  const formRef = useReveal<HTMLDivElement>()

  return (
    <div className={styles.page}>
      <SEO
        title="Contact | Giacovelli Law | Salt Lake City, UT"
        description="Contact Giacovelli Law at 801.566.0500 or visit our office at 6806 South 1300 East, Salt Lake City, UT 84121. Schedule a consultation for family law or criminal defense matters."
        canonical="/contact"
      />
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]} />
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
