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

export default function App() {
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
