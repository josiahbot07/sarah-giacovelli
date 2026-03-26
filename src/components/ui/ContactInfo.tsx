import { contactInfo } from '@/data/contact'
import styles from './ContactInfo.module.css'

interface Props {
  variant?: 'default' | 'compact'
}

export function ContactInfo({ variant = 'default' }: Props) {
  return (
    <address className={`${styles.info} ${styles[variant]}`}>
      <div className={styles.row}>
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <div>
          <p>{contactInfo.address}</p>
          <p>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</p>
        </div>
      </div>
      <div className={styles.row}>
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <div>
          <p><a href={`tel:${contactInfo.phone.replace(/\./g, '')}`}>{contactInfo.phone}</a></p>
          <p className={styles.muted}>Fax: {contactInfo.fax}</p>
        </div>
      </div>
      <div className={styles.row}>
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
      </div>
    </address>
  )
}
