import { useState } from 'react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { cx } from '../ui/cx'
import { billingPlans, links, pricing, type Billing } from '../content/site'
import styles from './Pricing.module.css'

const BILLING_OPTIONS: Billing[] = ['annual', 'monthly']

function Perks({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.perks}>
      {items.map((perk) => (
        <li key={perk} className={styles.perk}>
          <span className={styles.check} aria-hidden="true">
            ✓
          </span>
          <span>{perk}</span>
        </li>
      ))}
    </ul>
  )
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('annual')
  const plan = billingPlans[billing]

  return (
    <Container className={styles.section} id="pricing">
      <div className={styles.header}>
        <Eyebrow>{pricing.eyebrow}</Eyebrow>
        <h2 className={styles.heading}>{pricing.heading}</h2>
        <p className={styles.lede}>{pricing.lede}</p>
      </div>

      <div className={styles.toggleWrap}>
        <div className={styles.toggle} role="group" aria-label="Billing period">
          {BILLING_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setBilling(option)}
              aria-pressed={billing === option}
              className={cx(styles.toggleButton, billing === option && styles.toggleButtonActive)}
            >
              {billingPlans[option].label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.tier}>{pricing.free.label}</div>
          <div className={styles.price}>
            {pricing.free.price}
            <span className={styles.per}> {pricing.free.per}</span>
          </div>
          <p className={styles.blurb}>{pricing.free.blurb}</p>
          <Perks items={pricing.free.perks} />
          <Button
            href={links.appStore}
            variant="outline"
            surface="card"
            size="block"
            className={styles.cta}
          >
            {pricing.free.cta}
          </Button>
        </div>

        <div className={cx(styles.card, styles.cardPlus)}>
          <span className={styles.badge}>{plan.badge}</span>
          <div className={cx(styles.tier, styles.tierPlus)}>{pricing.plus.label}</div>
          <div className={styles.price}>
            {plan.price}
            <span className={styles.per}> {plan.per}</span>
          </div>
          <p className={styles.blurb}>{plan.blurb}</p>
          <Perks items={pricing.plus.perks} />
          <Button href={links.appStore} size="block" className={styles.cta}>
            {pricing.plus.cta}
          </Button>
          <div className={styles.fine}>then {plan.fine} · cancel anytime</div>
        </div>
      </div>
    </Container>
  )
}
