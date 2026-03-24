import { useEffect } from 'react'
import { useRevealGroup } from '@/hooks/useIntersectionObserver'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AttorneyBio } from '@/components/about/AttorneyBio'
import { TeamMember } from '@/components/about/TeamMember'
import { team } from '@/data/team'
import styles from './AboutPage.module.css'

export function AboutPage() {
  const teamRef = useRevealGroup()

  useEffect(() => {
    document.title = 'About | Giacovelli Law'
  }, [])

  const attorney = team[0]
  const staff = team.slice(1)

  return (
    <div className={styles.page}>
      {/* Page hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>About the Firm</span>
          <h1 className={styles.heroTitle}>
            Dedicated Legal Counsel<br />
            <em>Since 2000</em>
          </h1>
        </div>
      </section>

      {/* Attorney bio */}
      <section className={`section ${styles.bioSection}`}>
        <div className="container-narrow">
          <AttorneyBio
            name={attorney.name}
            role={attorney.role}
            bio={attorney.bio}
            credentials={attorney.credentials}
            photo={attorney.photo}
          />
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <SectionHeading
            label="Our Team"
            title="The People Behind the Practice"
            subtitle="Our dedicated team brings years of experience and genuine care to every case."
          />
          <div ref={teamRef} data-reveal-stagger className={styles.teamGrid}>
            {staff.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                photo={member.photo}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
