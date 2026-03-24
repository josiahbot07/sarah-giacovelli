import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from '@/data/navigation'
import { contactInfo } from '@/data/contact'
import styles from './MobileNav.module.css'

interface Props {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open && panelRef.current) {
      const firstLink = panelRef.current.querySelector('a')
      firstLink?.focus()
    }
  }, [open])

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className={`${styles.panel} ${open ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>Menu</span>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className={styles.navList} aria-label="Mobile navigation">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label} className={styles.group}>
                <button
                  className={styles.groupToggle}
                  onClick={() =>
                    setExpandedGroup(expandedGroup === item.label ? null : item.label)
                  }
                  aria-expanded={expandedGroup === item.label}
                >
                  {item.label}
                  <svg
                    className={`${styles.groupChevron} ${expandedGroup === item.label ? styles.expanded : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div
                  className={`${styles.groupItems} ${expandedGroup === item.label ? styles.expanded : ''}`}
                >
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `${styles.subLink} ${isActive ? styles.active : ''}`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className={styles.panelFooter}>
          <a href={`tel:${contactInfo.phone.replace(/\./g, '')}`} className={styles.phoneBtn}>
            Call {contactInfo.phone}
          </a>
        </div>
      </div>
    </>
  )
}
