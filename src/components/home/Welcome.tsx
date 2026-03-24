import { useReveal } from '@/hooks/useIntersectionObserver'
import { SectionHeading } from '@/components/ui/SectionHeading'
import styles from './Welcome.module.css'

export function Welcome() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className={`section ${styles.welcome}`}>
      <div className="container-narrow">
        <SectionHeading
          label="Welcome"
          title="Committed to Your Best Outcome"
        />
        <div ref={ref} data-reveal className={styles.body}>
          <p>
            Giacovelli Law is a Utah-based law firm specializing in family law
            and criminal defense. Sarah Giacovelli is a seasoned trial attorney
            with extensive experience in both criminal law and domestic matters.
          </p>
          <p>
            Our family law practice covers all areas including divorce, paternity
            actions, enforcement of orders and adoption. As a former prosecutor,
            Sarah offers extensive experience and expertise in all areas of
            criminal and juvenile defense.
          </p>
          <p>
            Giacovelli Law is an effective firm working hard to negotiate and
            litigate a variety of cases, while at the same time keeping your
            interests at the forefront with costs and efficient case resolution
            always in mind.
          </p>
        </div>
      </div>
    </section>
  )
}
