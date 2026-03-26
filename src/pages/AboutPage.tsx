import { useRevealGroup } from '@/hooks/useIntersectionObserver'
import { SEO } from '@/components/SEO'
import { StructuredData } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AttorneyBio } from '@/components/about/AttorneyBio'
import { TeamMember } from '@/components/about/TeamMember'
import { attorneySchema } from '@/data/structuredData'
import { team } from '@/data/team'
import styles from './AboutPage.module.css'

export function AboutPage() {
  const teamRef = useRevealGroup()

  const attorney = team[0]
  const staff = team.slice(1)

  return (
    <div className={styles.page}>
      <SEO
        title="About | Giacovelli Law | Salt Lake City Attorney"
        description="Meet Sarah Giacovelli, a seasoned trial attorney licensed since 2000 with extensive experience in family law, criminal defense, and juvenile court proceedings in Salt Lake City, Utah."
        canonical="/about"
      />
      <StructuredData data={attorneySchema} />

      {/* Page hero */}
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }]} />
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
