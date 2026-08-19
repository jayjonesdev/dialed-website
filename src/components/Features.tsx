import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { PhoneShot } from '../ui/PhoneShot'
import { cx } from '../ui/cx'
import {
  features,
  maintenanceStatus,
  recipeFacets,
  suggestCard,
  type FeatureExtra,
} from '../content/site'
import styles from './Features.module.css'

function Extra({ kind }: { kind: FeatureExtra }) {
  switch (kind) {
    case 'facets':
      return (
        <div className={styles.facets}>
          {recipeFacets.map((facet) => (
            <div key={facet.label} className={styles.facet}>
              <div className={styles.facetLabel}>{facet.label}</div>
              <div className={styles.facetValue}>{facet.value}</div>
            </div>
          ))}
        </div>
      )

    case 'suggest':
      return (
        <div className={styles.suggest}>
          <div className={styles.suggestHead}>
            <span className={styles.suggestLabel}>{suggestCard.label}</span>
            <span className={styles.suggestPill}>{suggestCard.pill}</span>
          </div>
          <p className={styles.suggestBody}>{suggestCard.body}</p>
        </div>
      )

    case 'maintenance':
      return (
        <div className={styles.status}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>{maintenanceStatus.text}</span>
          <span className={styles.statusLink}>{maintenanceStatus.link}</span>
        </div>
      )

    case null:
      return null
  }
}

export function Features() {
  return (
    <Container id="features">
      {features.map((feature) => (
        <section key={feature.eyebrow} className={styles.row}>
          <div>
            <Eyebrow>{feature.eyebrow}</Eyebrow>
            <h2 className={styles.heading}>{feature.heading}</h2>
            <p className={styles.body}>{feature.body}</p>
            <Extra kind={feature.extra} />
          </div>
          <PhoneShot
            src={feature.image.src}
            alt={feature.image.alt}
            className={cx(feature.imageSide === 'left' && styles.imageLeft)}
          />
        </section>
      ))}
    </Container>
  )
}
