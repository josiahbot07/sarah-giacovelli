import type { Resource } from '@/types'
import styles from './ResourceCard.module.css'

interface Props {
  resource: Resource
}

export function ResourceCard({ resource }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="20" height="24" rx="2" />
          <path d="M10 10h8M10 14h8M10 18h5" />
        </svg>
      </div>
      <h3 className={styles.title}>{resource.title}</h3>
      <p className={styles.desc}>{resource.description}</p>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {resource.linkText}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 1h6v6M13 1L6 8M5 3H2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V9" />
        </svg>
      </a>
    </div>
  )
}
