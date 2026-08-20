import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { cx } from '../ui/cx'
import { links, nav } from '../content/site'
import styles from './Nav.module.css'

const MOBILE_QUERY = '(max-width: 720px)'

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      {open ? (
        <path d="M2 2l14 10M16 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <path d="M0 2h18M0 7h18M0 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  )
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    // Growing past the breakpoint reveals the full nav, so the panel is redundant.
    const mobile = window.matchMedia(MOBILE_QUERY)
    const onBreakpointChange = () => {
      if (!mobile.matches) setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    mobile.addEventListener('change', onBreakpointChange)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      mobile.removeEventListener('change', onBreakpointChange)
    }
  }, [menuOpen])

  return (
    <header className={cx(styles.nav, menuOpen && styles.navOpen)}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.wordmark}>
          Dialed
        </a>
        <nav className={styles.links} aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.spacer} />
        <div className={styles.actions}>
          <Button
            href={links.login}
            variant="outline"
            size="small"
            className={styles.loginPill}
          >
            Log in
          </Button>
          <Button href={links.appStore} size="small">
            Get the app
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className={styles.menu}>
          <Container>
            <nav aria-label="Sections">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles.menuLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={links.login} className={styles.menuLink} onClick={() => setMenuOpen(false)}>
                LOG IN
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
