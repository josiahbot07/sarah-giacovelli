import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '@/data/navigation'
import { contactInfo } from '@/data/contact'
import { MobileNav } from './MobileNav'
import styles from './Header.module.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark}>G</span>
            <span className={styles.logoText}>Giacovelli Law</span>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className={styles.dropdown}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    {item.label}
                    <svg className={styles.chevron} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </NavLink>
                  <div className={styles.dropdownPanel}>
                    <div className={styles.dropdownInner}>
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `${styles.dropdownLink} ${isActive ? styles.active : ''}`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <a href={`tel:${contactInfo.phone.replace(/\./g, '')}`} className={styles.phoneLink}>
            {contactInfo.phone}
          </a>

          <button
            ref={hamburgerRef}
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} triggerRef={hamburgerRef} />
    </>
  )
}
