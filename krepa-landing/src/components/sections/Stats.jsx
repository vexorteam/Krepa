import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import Container from '../ui/Container'
import Reveal from '../motion/Reveal'
import { stats } from '../../data/stats'

function AnimatedNumber({ value, suffix, decimal }) {
  const prefersReduced = useReducedMotion()
  const [display, setDisplay] = useState(prefersReduced ? value : 0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView || prefersReduced) {
      if (isInView && prefersReduced) setDisplay(value)
      return
    }

    const duration = 1400
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(
        decimal
          ? Math.round(value * eased * 10) / 10
          : Math.round(value * eased)
      )
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, prefersReduced, value, decimal])

  const formatted = decimal ? display.toFixed(1) : display.toLocaleString()

  return (
    <span
      ref={ref}
      className="font-display tabular-nums text-ink-900 leading-none"
      style={{ fontSize: 'clamp(52px, 6.5vw, 88px)', letterSpacing: '-0.02em' }}
    >
      {formatted}
      {suffix}
    </span>
  )
}

function getBorderClasses(i) {
  const classes = []
  // Mobile (2 cols): right border on left column, bottom border on top row
  if (i % 2 === 0) classes.push('border-r border-ink-300/40')
  if (i < 2) classes.push('border-b border-ink-300/40 md:border-b-0')
  // Desktop (4 cols): right border on all except last; override mobile border-r for i=1
  if (i < 3) classes.push('md:border-r md:border-ink-300/40')
  else classes.push('md:border-r-0')
  return classes.join(' ')
}

export default function Stats() {
  return (
    <section aria-label="Key metrics" className="bg-paper-100 border-y border-ink-300/40">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className={getBorderClasses(i)}>
              <div className="flex flex-col items-center py-12 px-4 text-center">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
                <p className="mt-3 font-sans text-sm text-ink-500 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
