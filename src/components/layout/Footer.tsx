import { Link } from 'react-router-dom'
import { contactInfo } from '@/data/contact'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* About column */}
          <div className={styles.col}>
            <div className={styles.footerLogo}>
              <span className={styles.logoMark}>G</span>
              <span className={styles.logoText}>Giacovelli Law</span>
            </div>
            <p className={styles.about}>
              A Utah-based law firm specializing in family law and criminal defense.
              Experienced advocacy and personal attention.
            </p>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Quick Links</h4>
            <nav className={styles.footerNav}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/practice/family-law">Family Law</Link>
              <Link to="/practice/criminal-defense">Criminal Defense</Link>
              <Link to="/client-resources">Client Resources</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Practice Areas */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Practice Areas</h4>
            <nav className={styles.footerNav}>
              <Link to="/practice/divorce">Divorce</Link>
              <Link to="/practice/child-custody">Child Custody</Link>
              <Link to="/practice/child-support">Child Support</Link>
              <Link to="/practice/juvenile-law">Juvenile Law</Link>
              <Link to="/practice/adoptions">Adoptions</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact</h4>
            <address className={styles.address}>
              <p>{contactInfo.address}</p>
              <p>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</p>
              <p className={styles.spacer} />
              <p>
                <a href={`tel:${contactInfo.phone.replace(/\./g, '')}`}>
                  {contactInfo.phone}
                </a>
              </p>
              <p>Fax: {contactInfo.fax}</p>
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Giacovelli Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
