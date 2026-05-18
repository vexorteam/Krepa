import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../motion/Reveal'
import { features } from '../../data/features'

function FeatureCard({ icon: Icon, title, description, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col rounded-2xl border border-ink-300/60 p-7 transition-colors duration-200 hover:border-ink-500">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-200 ease-out group-hover:-translate-y-px">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h3 className="mb-2 font-sans text-base font-semibold text-ink-900">
          {title}
        </h3>
        <p className="font-sans text-sm leading-relaxed text-ink-500">
          {description}
        </p>
      </div>
    </Reveal>
  )
}

export default function Features() {
  return (
    <section
      id="features"
      className="bg-paper"
      style={{ paddingBlock: 'clamp(96px, 12vw, 192px)' }}
    >
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Features"
            heading="Everything you need to train smarter."
            lead="Built around the way serious athletes actually work — not how fitness apps think they do."
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={i * 0.06}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
