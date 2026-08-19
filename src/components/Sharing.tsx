import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { sharing } from '../content/site'
import styles from './Sharing.module.css'

export function Sharing() {
  const { card } = sharing

  return (
    <section className={styles.band} id="sharing">
      <Container className={styles.inner}>
        <div>
          <Eyebrow onDark>{sharing.eyebrow}</Eyebrow>
          <h2 className={styles.heading}>{sharing.heading}</h2>
          <p className={styles.lede}>{sharing.lede}</p>
          <div className={styles.formats}>
            {sharing.formats.map((format) => (
              <div key={format.title} className={styles.format}>
                <div className={styles.formatTitle}>{format.title}</div>
                <div className={styles.formatBody}>{format.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <span>{card.brand}</span>
              <span>{card.method}</span>
            </div>
            <div className={styles.recipeName}>{card.name}</div>
            <div className={styles.origin}>{card.origin}</div>
            <dl className={styles.params}>
              {card.params.map((param) => (
                <div key={param.label} className={styles.param}>
                  <dt className={styles.paramLabel}>{param.label}</dt>
                  <dd>{param.value}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.url}>{card.url}</div>
          </div>

          <div className={styles.metrics}>
            {sharing.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>

          <p className={styles.caption}>{sharing.caption}</p>
        </div>
      </Container>
    </section>
  )
}
