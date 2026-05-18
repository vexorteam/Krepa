import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Container from './components/ui/Container'
import Button from './components/ui/Button'
import SectionHeader from './components/ui/SectionHeader'
import Reveal from './components/motion/Reveal'

export default function App() {
  return (
    <>
      <Nav />

      <main className="pt-16">
        {/* Placeholder content — tall enough to test nav scroll behaviour */}
        <section className="py-40 bg-paper">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Step 3 · Nav + Footer"
                heading="Navigation is live."
                lead="Scroll down to see the nav pick up backdrop-blur. Resize to ≤ 768 px for the hamburger menu."
              />
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary">Download for iOS</Button>
              <Button variant="ghost">Learn more</Button>
            </div>
          </Container>
        </section>

        {/* Spacer sections to allow scroll testing */}
        {['Features', 'Pricing', 'FAQ', 'Reviews'].map((id) => (
          <section key={id} id={id.toLowerCase()} className="py-40 border-t border-ink-300/40">
            <Container>
              <Reveal>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-500 mb-4">
                  #{id.toLowerCase()}
                </p>
                <p className="font-display text-5xl text-ink-900 tracking-display">
                  {id}
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
