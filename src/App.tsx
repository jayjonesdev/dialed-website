import { useEffect } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { MethodStrip } from './components/MethodStrip'
import { Features } from './components/Features'
import { AiSection } from './components/AiSection'
import { Sharing } from './components/Sharing'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { ClosingCta } from './components/ClosingCta'
import { Footer } from './components/Footer'

/*
 * Arriving from /privacy or /terms at /#pricing, the browser resolves the
 * fragment before React has rendered the section, so the jump is lost. Redo it
 * once the tree is mounted, and again after fonts settle in case they reflow.
 */
function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash || hash === '#top') return

    const jump = () => {
      const target = document.querySelector(hash)
      target?.scrollIntoView({ behavior: 'instant' })
    }

    jump()
    document.fonts?.ready.then(jump)
  }, [])
}

export default function App() {
  useHashScroll()

  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <MethodStrip />
        <Features />
        <AiSection />
        <Sharing />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  )
}
