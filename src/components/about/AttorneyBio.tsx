import { useReveal } from '@/hooks/useIntersectionObserver'
import styles from './AttorneyBio.module.css'

interface Props {
  name: string
  role: string
  bio: string[]
  credentials?: string[]
  photo?: string
}

export function AttorneyBio({ name, role, bio, credentials, photo }: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className={styles.bio}>
      <div className={styles.avatarWrap}>
        <div className={styles.avatar}>
          {photo ? (
            <img src={photo} alt={name} className={styles.photo} />
          ) : (
            <span className={styles.initials}>
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div className={styles.nameBlock}>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.role}>{role}</span>
        </div>
      </div>

      <div className={styles.content}>
        {bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {credentials && credentials.length > 0 && (
        <div className={styles.credentials}>
          <h4 className={styles.credTitle}>Recognition & Background</h4>
          <ul>
            {credentials.map((c, i) => (
              <li key={i}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l3.5 3.5L13 5" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
