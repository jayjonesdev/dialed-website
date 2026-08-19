import type { ReactNode } from 'react'
import { cx } from './cx'
import styles from './Button.module.css'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'accent' | 'outline'
  /** Which surface the button sits on — only affects the outlined variant. */
  surface?: 'page' | 'card'
  size?: 'default' | 'small' | 'block'
  className?: string
}

export function Button({
  href,
  children,
  variant = 'accent',
  surface = 'page',
  size = 'default',
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cx(
        styles.button,
        styles[variant],
        variant === 'outline' && (surface === 'page' ? styles.onPage : styles.onCard),
        size !== 'default' && styles[size],
        className,
      )}
    >
      {children}
    </a>
  )
}
