import { motion, useReducedMotion } from 'framer-motion'
import { Apple, Smartphone } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import PhoneMockup from '../ui/PhoneMockup'
import SplitText from '../motion/SplitText'

const H1_WORDS = [
  { text: 'Train', accent: false },
  { text: 'with', accent: false },
  { text: 'intent.', accent: true },
]

function fadeUp(delay, reduced) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-center py-24 lg:py-0 overflow-hidden">

      {/* Subtle background gradient — warm, not loud */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, #FFE9DF44 0%, transparent 70%)',
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Text column ── */}
          <div className="flex flex-col gap-8 max-w-xl">

            {/* Eyebrow badge */}
            <motion.div {...fadeUp(0.1, reduced)}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-300 font-sans text-xs font-medium text-ink-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                New · v2.0
              </span>
            </motion.div>

            {/* H1 */}
            <h1
              className="font-display leading-[1.05] tracking-display text-ink-900"
              style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
            >
              <SplitText words={H1_WORDS} startDelay={0.2} stagger={0.1} />
            </h1>

            {/* Subtitle */}
            <motion.p
              className="font-sans text-lg text-ink-500 leading-relaxed"
              {...fadeUp(0.62, reduced)}
            >
              Adaptive strength, cardio, and mobility plans — built around how you actually train. No noise, just progress.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap gap-3"
              {...fadeUp(0.78, reduced)}
            >
              <Button variant="primary" className="gap-2.5">
                <Apple size={16} aria-hidden="true" />
                Download for iOS
              </Button>
              <Button variant="ghost" className="gap-2.5">
                <Smartphone size={16} aria-hidden="true" />
                Download for Android
              </Button>
            </motion.div>

            {/* Social proof micro-line */}
            <motion.p
              className="font-sans text-xs text-ink-500"
              {...fadeUp(0.92, reduced)}
            >
              500 K+ athletes · 4.9 ★ on the App Store
            </motion.p>
          </div>

          {/* ── Phone column ── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: reduced ? 0 : 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] drop-shadow-2xl" />
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
