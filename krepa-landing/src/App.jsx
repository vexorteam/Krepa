import Container from './components/ui/Container'
import Button from './components/ui/Button'
import SectionHeader from './components/ui/SectionHeader'
import Reveal from './components/motion/Reveal'

export default function App() {
  return (
    <main className="py-24 space-y-24">

      {/* Container bounds */}
      <Container>
        <div className="h-1 bg-ink-300 rounded" />
        <p className="mt-2 font-sans text-xs text-ink-500">Container · max-w-container · px-6</p>
      </Container>

      {/* Buttons */}
      <Container>
        <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-ink-500">Buttons</p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Download for iOS</Button>
          <Button variant="ghost">Learn more</Button>
        </div>
      </Container>

      {/* SectionHeader */}
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Features"
            heading="Everything you need to train smarter."
            lead="Adaptive plans, detailed analytics, and a library of 500+ exercises — all in one place."
          />
        </Reveal>
      </Container>

      {/* Reveal stagger demo */}
      <Container>
        <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-ink-500">Reveal · stagger</p>
        <div className="space-y-4">
          {['First line appears.', 'Second follows.', 'Third completes.'].map((text, i) => (
            <Reveal key={text} delay={i * 0.08}>
              <p className="font-sans text-lg text-ink-700">{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>

    </main>
  )
}
