import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { plans } from '../../data/pricing'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../motion/Reveal'

function PriceDisplay({ amount, billing, highlighted }) {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    enter: (dir) => ({
      y: shouldReduceMotion ? 0 : dir * 16,
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir) => ({
      y: shouldReduceMotion ? 0 : dir * -16,
      opacity: 0,
    }),
  }

  return (
    <div className="flex items-end gap-1 mt-6 mb-1 h-14 overflow-hidden">
      {amount === 0 ? (
        <span
          className={[
            'font-display font-medium leading-none',
            highlighted ? 'text-paper' : 'text-ink-900',
          ].join(' ')}
          style={{ fontSize: 'clamp(40px, 5vw, 52px)' }}
        >
          Free
        </span>
      ) : (
        <>
          <span
            className={[
              'font-sans text-lg font-medium mb-1',
              highlighted ? 'text-paper/60' : 'text-ink-500',
            ].join(' ')}
          >
            $
          </span>
          <AnimatePresence mode="popLayout" custom={billing === 'yearly' ? -1 : 1}>
            <motion.span
              key={`${billing}-${amount}`}
              custom={billing === 'yearly' ? -1 : 1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={[
                'font-display font-medium leading-none tabular-nums',
                highlighted ? 'text-paper' : 'text-ink-900',
              ].join(' ')}
              style={{ fontSize: 'clamp(40px, 5vw, 52px)' }}
            >
              {amount}
            </motion.span>
          </AnimatePresence>
          <span
            className={[
              'font-sans text-sm mb-2',
              highlighted ? 'text-paper/60' : 'text-ink-500',
            ].join(' ')}
          >
            /mo
          </span>
        </>
      )}
    </div>
  )
}

function PlanCard({ plan, billing, index }) {
  const price = billing === 'yearly' ? plan.yearly : plan.monthly

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div
        className={[
          'relative flex flex-col h-full rounded-2xl p-8',
          plan.highlighted
            ? 'bg-ink-900 text-paper'
            : 'bg-paper border border-ink-300/60',
        ].join(' ')}
      >
        {plan.highlighted && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-accent text-paper font-sans text-xs font-semibold px-3 py-1 rounded-full">
              Most popular
            </span>
          </div>
        )}

        <div>
          <p
            className={[
              'font-sans text-sm font-semibold uppercase tracking-widest',
              plan.highlighted ? 'text-paper/50' : 'text-ink-500',
            ].join(' ')}
          >
            {plan.name}
          </p>
          <p
            className={[
              'mt-1 font-sans text-sm leading-relaxed',
              plan.highlighted ? 'text-paper/70' : 'text-ink-500',
            ].join(' ')}
          >
            {plan.description}
          </p>

          <PriceDisplay amount={price} billing={billing} highlighted={plan.highlighted} />

          {billing === 'yearly' && plan.monthly > 0 && (
            <p
              className={[
                'font-sans text-xs',
                plan.highlighted ? 'text-paper/50' : 'text-ink-500',
              ].join(' ')}
            >
              ${plan.monthly}/mo billed monthly
            </p>
          )}
          {(billing === 'monthly' || plan.monthly === 0) && (
            <p className="font-sans text-xs opacity-0 select-none">·</p>
          )}
        </div>

        <div
          className={[
            'my-7 h-px',
            plan.highlighted ? 'bg-paper/15' : 'bg-ink-300/50',
          ].join(' ')}
        />

        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check
                size={15}
                strokeWidth={2.5}
                className={[
                  'mt-0.5 shrink-0',
                  plan.highlighted ? 'text-accent' : 'text-accent',
                ].join(' ')}
              />
              <span
                className={[
                  'font-sans text-sm leading-snug',
                  plan.highlighted ? 'text-paper/85' : 'text-ink-700',
                ].join(' ')}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={[
            'mt-8 w-full rounded-full py-3 font-sans text-sm font-medium',
            'transition-colors duration-150',
            plan.highlighted
              ? 'bg-accent text-paper hover:bg-orange-600'
              : 'border border-ink-300 text-ink-900 hover:border-ink-700',
          ].join(' ')}
        >
          {plan.cta}
        </button>
      </div>
    </Reveal>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="pricing" className="bg-paper-100 border-y border-ink-300/40">
      <Container className="py-[clamp(96px,12vw,192px)]">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <SectionHeader
              eyebrow="Pricing"
              heading="Simple, honest pricing."
              lead="No hidden fees. Cancel anytime. The free plan stays free."
              className="items-center"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 inline-flex items-center gap-1 rounded-full border border-ink-300/70 bg-paper p-1">
              {['monthly', 'yearly'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  aria-pressed={billing === option}
                  className={[
                    'relative rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors duration-200',
                    billing === option
                      ? 'text-paper'
                      : 'text-ink-500 hover:text-ink-900',
                  ].join(' ')}
                >
                  {billing === option && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-ink-900"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{option}</span>
                  {option === 'yearly' && (
                    <span
                      className={[
                        'relative z-10 ml-1.5 rounded-full px-1.5 py-0.5 font-sans text-xs font-semibold',
                        billing === 'yearly'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-accent-soft text-accent',
                      ].join(' ')}
                    >
                      −25%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
