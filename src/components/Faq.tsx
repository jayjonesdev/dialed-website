import { useState } from 'react'
import { Container } from '../ui/Container'
import { faqs } from '../content/site'
import styles from './Faq.module.css'

export function Faq() {
  // Items open independently; the first one starts open.
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true })

  const toggle = (index: number) => {
    setOpen((current) => ({ ...current, [index]: !current[index] }))
  }

  return (
    <Container narrow className={styles.section} id="faq">
      <h2 className={styles.heading}>Questions</h2>
      <div className={styles.list}>
        {faqs.map((faq, index) => {
          const isOpen = Boolean(open[index])
          const panelId = `faq-answer-${index}`

          return (
            <div key={faq.q} className={styles.item}>
              <button
                type="button"
                className={styles.trigger}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className={styles.question}>{faq.q}</span>
                <span className={styles.sign} aria-hidden="true">
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              {isOpen && (
                <p id={panelId} className={styles.answer}>
                  {faq.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </Container>
  )
}
