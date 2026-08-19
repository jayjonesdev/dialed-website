import type { ReactNode } from 'react'
import { cx } from './cx'
import styles from './Eyebrow.module.css'

type EyebrowProps = {
  children: ReactNode
  size?: 'section' | 'hero'
  onDark?: boolean
  className?: string
}

export function Eyebrow({ children, size = 'section', onDark, className }: EyebrowProps) {
  return (
    <div className={cx(styles.eyebrow, size === 'hero' && styles.hero, onDark && styles.onDark, className)}>
      {children}
    </div>
  )
}
