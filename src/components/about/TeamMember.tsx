import styles from './TeamMember.module.css'

interface Props {
  name: string
  role: string
  bio: string[]
  photo?: string
}

export function TeamMember({ name, role, bio, photo }: Props) {
  return (
    <div className={styles.member}>
      <div className={styles.avatar}>
        {photo ? (
          <img src={photo} alt={name} className={styles.photo} width={96} height={96} loading="lazy" />
        ) : (
          <span>
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        )}
      </div>
      <h4 className={styles.name}>{name}</h4>
      <span className={styles.role}>{role}</span>
      {bio.map((p, i) => (
        <p key={i} className={styles.bio}>{p}</p>
      ))}
    </div>
  )
}
