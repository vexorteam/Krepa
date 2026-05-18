import { Apple, Smartphone } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../motion/Reveal'

export default function FinalCTA() {
  return (
    <section aria-label="Download call to action" className="relative overflow-hidden bg-ink-900">

      {/* Decorative watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span
          className="font-display font-medium leading-none text-paper/[0.03] tracking-tighter"
          style={{ fontSize: 'clamp(180px, 30vw, 380px)' }}
        >
          Krepa
        </span>
      </div>

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, #FF5A1F14 0%, transparent 70%)',
        }}
      />

      <Container className="relative py-[clamp(96px,12vw,192px)]">
        <div className="flex flex-col items-center text-center">

          <Reveal>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-paper/40">
              Get started
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              className="font-display font-medium leading-tight tracking-display text-paper"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Your training,{' '}
              <span className="text-accent">distilled.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-paper/55">
              Join 500K+ athletes who train with intent. Free to start — no credit card required.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-3 font-sans text-sm font-medium text-ink-900 transition-colors duration-150 hover:bg-paper-100">
                <Apple size={16} strokeWidth={1.75} aria-hidden="true" />
                Download for iOS
              </button>
              <button className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 px-6 py-3 font-sans text-sm font-medium text-paper transition-colors duration-150 hover:border-paper/40">
                <Smartphone size={16} strokeWidth={1.75} aria-hidden="true" />
                Download for Android
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.30}>
            <p className="mt-6 font-sans text-xs text-paper/30">
              iOS 16+ · Android 10+ · Syncs across devices
            </p>
          </Reveal>

        </div>
      </Container>
    </section>
  )
}
