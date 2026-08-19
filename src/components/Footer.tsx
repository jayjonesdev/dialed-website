import { Container } from '../ui/Container'
import { footer } from '../content/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.wordmark}>Dialed</div>
          <div className={styles.description}>
            {footer.description[0]}
            <br />
            {footer.description[1]}
          </div>
        </div>
        <div className={styles.spacer} />
        <div className={styles.columns}>
          {footer.columns.map((column) => (
            <nav key={column.heading} className={styles.column} aria-label={column.heading}>
              <div className={styles.columnHeading}>{column.heading}</div>
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </Container>
      <Container className={styles.copyright}>{footer.copyright}</Container>
    </footer>
  )
}
