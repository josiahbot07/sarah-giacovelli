import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

interface Props {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'default' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button',
  onClick,
}: Props) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>
  }

  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
