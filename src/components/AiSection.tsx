import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { ai, aiCards } from '../content/site'
import styles from './AiSection.module.css'

type CardFooter = (typeof aiCards)[number]['footer']

function Footer({ footer }: { footer: CardFooter }) {
  switch (footer.kind) {
    case 'grind':
      return (
        <div className={styles.footerBox}>
          {footer.primary}
          <br />
          <span className={styles.footerBoxSecondary}>{footer.secondary}</span>
        </div>
      )

    case 'dialing':
      return (
        <>
          <div className={styles.dialing}>
            <span className={styles.dialingLabel}>{footer.label}</span>
            <span className={styles.dialingValue}>{footer.value}</span>
          </div>
          <p className={styles.note}>{footer.note}</p>
        </>
      )

    case 'chips':
      return (
        <div className={styles.chips}>
          {footer.chips.map((chip) => (
            <span key={chip} className={styles.chip}>
              {chip}
            </span>
          ))}
        </div>
      )
  }
}

export function AiSection() {
  return (
    <section className={styles.band} id="ai">
      <Container className={styles.inner}>
        <div className={styles.header}>
          <Eyebrow>{ai.eyebrow}</Eyebrow>
          <h2 className={styles.heading}>{ai.heading}</h2>
          <p className={styles.lede}>{ai.lede}</p>
        </div>

        <div className={styles.grid}>
          {aiCards.map((card) => (
            <article key={card.eyebrow} className={styles.card}>
              <div className={styles.cardEyebrow}>{card.eyebrow}</div>
              <h3 className={styles.cardHeading}>{card.heading}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <Footer footer={card.footer} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
