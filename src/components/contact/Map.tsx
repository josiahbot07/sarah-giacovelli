import { useState, useEffect, useRef } from 'react'
import styles from './Map.module.css'

export function Map() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={styles.mapWrap}>
      {visible && (
        <iframe
          className={styles.iframe}
          title="Giacovelli Law Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.5!2d-111.8553!3d40.6275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6806+S+1300+E%2C+Salt+Lake+City%2C+UT+84121!5e0!3m2!1sen!2sus!4v1"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  )
}
