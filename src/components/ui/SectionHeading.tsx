import { useReveal } from '@/hooks/useIntersectionObserver'
import styles from './SectionHeading.module.css'

interface Props {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({ label, title, subtitle, align = 'center', light = false }: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-reveal
      className={`${styles.heading} ${styles[align]} ${light ? styles.light : ''}`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
