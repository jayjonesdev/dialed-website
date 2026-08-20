import { Fragment } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Eyebrow } from '../ui/Eyebrow'
import { legalLastUpdated, links } from '../content/site'
import type { LegalDoc } from '../content/legal'
import styles from './LegalPage.module.css'

const FOOT_LINKS = [
  { label: 'Dialed for iPhone', href: links.appStore },
  { label: 'Privacy', href: links.privacy },
  { label: 'Terms', href: links.terms },
  { label: 'Contact', href: links.contact },
]

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <Eyebrow>LEGAL</Eyebrow>
        <h1 className={styles.title}>{doc.title}</h1>
        <p className={styles.updated}>Last updated {legalLastUpdated}</p>
        <p className={styles.intro}>{doc.intro}</p>

        {doc.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            <div className={styles.body}>{section.body}</div>
          </section>
        ))}

        <p className={styles.foot}>
          {FOOT_LINKS.map((link, i) => (
            <Fragment key={link.label}>
              {i > 0 && <span className={styles.sep}>·</span>}
              <a href={link.href}>{link.label}</a>
            </Fragment>
          ))}
        </p>
      </main>
      <Footer />
    </>
  )
}
