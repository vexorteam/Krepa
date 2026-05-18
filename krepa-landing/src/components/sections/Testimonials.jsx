import { Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import Reveal from '../motion/Reveal'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

function Avatar({ initials, avatarBg, avatarText }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-sans text-sm font-semibold ${avatarBg} ${avatarText}`}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({ quote, name, role, initials, avatarBg, avatarText, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col gap-5 rounded-2xl border border-ink-300/50 bg-paper-200 p-6 sm:p-8">
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-current stroke-none text-accent"
              aria-hidden="true"
            />
          ))}
        </div>

        <blockquote className="flex-1 font-display text-[17px] italic leading-relaxed tracking-tight text-ink-700">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <footer className="flex items-center gap-3">
          <Avatar initials={initials} avatarBg={avatarBg} avatarText={avatarText} />
          <div>
            <p className="font-sans text-sm font-semibold text-ink-900">{name}</p>
            <p className="font-sans text-xs text-ink-500">{role}</p>
          </div>
        </footer>
      </article>
    </Reveal>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-paper py-[clamp(96px,12vw,192px)]">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Reviews"
            heading="Trusted by athletes who track seriously."
            lead="From strength coaches to first-time lifters — what real users say after sticking with it."
            className="mb-12 max-w-2xl"
          />
        </Reveal>

        {/* Mobile: horizontal snap scroll · Desktop: 3-col grid */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="w-[calc(100vw-3.5rem)] shrink-0 snap-start md:w-auto"
            >
              <TestimonialCard {...t} delay={i * 0.08} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
