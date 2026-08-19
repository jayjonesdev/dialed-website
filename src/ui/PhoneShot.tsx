import { cx } from './cx'
import styles from './PhoneShot.module.css'

type PhoneShotProps = {
  src: string
  alt: string
  className?: string
}

export function PhoneShot({ src, alt, className }: PhoneShotProps) {
  return (
    <div className={cx(styles.frame, className)}>
      <img src={src} alt={alt} className={styles.image} loading="lazy" decoding="async" />
    </div>
  )
}
