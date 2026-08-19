import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { closing, links } from '../content/site'
import styles from './ClosingCta.module.css'

export function ClosingCta() {
  return (
    <Container className={styles.section} id="get">
      <div className={styles.panel}>
        <h2 className={styles.heading}>{closing.heading}</h2>
        <p className={styles.lede}>{closing.lede}</p>
        <div className={styles.actions}>
          <Button href={links.appStore} className={styles.primary}>
            {closing.primary}
          </Button>
          <Button
            href={links.androidWaitlist}
            variant="outline"
            surface="card"
            className={styles.secondary}
          >
            {closing.secondary}
          </Button>
        </div>
        <div className={styles.fine}>{closing.fine}</div>
      </div>
    </Container>
  )
}
