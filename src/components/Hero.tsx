import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { hero, links } from '../content/site'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <Container className={styles.hero}>
      <div>
        <Eyebrow size="hero">{hero.eyebrow}</Eyebrow>
        <h1 className={styles.heading}>{hero.heading}</h1>
        <p className={styles.lede}>{hero.lede}</p>
        <div className={styles.actions}>
          <Button href={links.appStore}>Download for iPhone</Button>
          <Button href="/#features" variant="outline">
            See how it works
          </Button>
        </div>
        <p className={styles.fine}>
          {hero.fine[0]}
          <br />
          {hero.fine[1]}
        </p>
      </div>

      <div className={styles.shots}>
        <img
          src={hero.images.back.src}
          alt={hero.images.back.alt}
          className={styles.back}
          fetchPriority="low"
          decoding="async"
        />
        <img
          src={hero.images.front.src}
          alt={hero.images.front.alt}
          className={styles.front}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </Container>
  )
}
