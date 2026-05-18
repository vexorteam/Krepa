import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Container from './components/ui/Container'
import Reveal from './components/motion/Reveal'

export default function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        {/* Placeholder sections for nav anchor testing */}
        {[
          { id: 'features', label: 'Features' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'faq', label: 'FAQ' },
          { id: 'reviews', label: 'Reviews' },
        ].map(({ id, label }) => (
          <section
            key={id}
            id={id}
            className="py-40 border-t border-ink-300/40 bg-paper"
          >
            <Container>
              <Reveal>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-500 mb-4">
                  #{id}
                </p>
                <p
                  className="font-display tracking-display text-ink-900"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                >
                  {label}
                </p>
              </Reveal>
            </Container>
          </section>
        ))}
      </main>

      <Footer />
    </>
  )
}
