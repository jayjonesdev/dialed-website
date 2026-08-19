import type { ReactNode } from 'react'
import { cx } from './cx'
import styles from './Container.module.css'

type ContainerProps = {
  children: ReactNode
  /** Narrow measure (820px) used by the FAQ and the pricing card grid. */
  narrow?: boolean
  className?: string
  id?: string
}

export function Container({ children, narrow, className, id }: ContainerProps) {
  return (
    <div id={id} className={cx(styles.container, narrow && styles.narrow, className)}>
      {children}
    </div>
  )
}
