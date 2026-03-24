import styles from './PracticeAreaHero.module.css'

interface Props {
  title: string
  tagline: string
  image?: string
}

export function PracticeAreaHero({ title, tagline, image }: Props) {
  const bgStyle = image
    ? {
        backgroundImage: `linear-gradient(to right, rgba(44,62,45,0.9) 0%, rgba(44,62,45,0.75) 60%, rgba(44,62,45,0.65) 100%), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }
    : undefined

  return (
    <section className={styles.hero} style={bgStyle}>
      <div className="container">
        <span className={styles.label}>Practice Area</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.tagline}>{tagline}</p>
      </div>
    </section>
  )
}
