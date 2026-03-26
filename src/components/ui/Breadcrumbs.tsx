import { Link } from 'react-router-dom'
import { StructuredData } from '@/components/StructuredData'
import { breadcrumbSchema } from '@/data/structuredData'
import styles from './Breadcrumbs.module.css'

interface Crumb {
  label: string
  path: string
}

interface Props {
  items: Crumb[]
}

export function Breadcrumbs({ items }: Props) {
  const schemaItems = items.map((item) => ({ name: item.label, url: item.path }))

  return (
    <>
      <StructuredData data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
        <ol className={styles.list}>
          {items.map((crumb, i) => (
            <li key={crumb.path} className={styles.item}>
              {i < items.length - 1 ? (
                <Link to={crumb.path} className={styles.link}>
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className={styles.current}>
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
