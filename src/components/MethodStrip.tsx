import { Fragment } from 'react'
import { Container } from '../ui/Container'
import { methods } from '../content/site'
import styles from './MethodStrip.module.css'

export function MethodStrip() {
  return (
    <div className={styles.strip}>
      <Container className={styles.inner}>
        {methods.map((method, i) => (
          <Fragment key={method}>
            {i > 0 && <span className={styles.separator}>·</span>}
            <span>{method}</span>
          </Fragment>
        ))}
      </Container>
    </div>
  )
}
