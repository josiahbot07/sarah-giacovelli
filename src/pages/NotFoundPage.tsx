import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found | Giacovelli Law'
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.desc}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/" variant="secondary">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
