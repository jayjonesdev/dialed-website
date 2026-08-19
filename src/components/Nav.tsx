import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { links, nav } from '../content/site'
import styles from './Nav.module.css'

export function Nav() {
  return (
    <header className={styles.nav}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.wordmark}>
          Dialed
        </a>
        <nav className={styles.links} aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.spacer} />
        <Button href={links.appStore} size="small">
          Get the app
        </Button>
      </Container>
    </header>
  )
}
