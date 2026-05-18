import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faq } from '../../data/faq'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../motion/Reveal'

function FAQItem({ item, isOpen, onToggle, index }) {
  const shouldReduceMotion = useReducedMotion()
  const answerId = `faq-answer-${item.id}`

  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-ink-300/50">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="group flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="font-sans text-base font-medium leading-snug text-ink-900 transition-colors duration-150 group-hover:text-ink-700">
            {item.question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-0.5 shrink-0 text-ink-500 group-hover:text-ink-900 transition-colors duration-150"
          >
            <Plus size={18} strokeWidth={1.5} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={answerId}
              key="answer"
              role="region"
              aria-label={item.question}
              initial={{ height: 0, opacity: shouldReduceMotion ? 1 : 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: shouldReduceMotion ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-6 font-sans text-sm leading-relaxed text-ink-500">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="bg-paper border-t border-ink-300/40">
      <Container className="py-[clamp(96px,12vw,192px)]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              heading="Questions worth asking."
              lead="If something's still unclear, reach out — we read every message."
            />
          </Reveal>

          <div>
            {faq.map((item, i) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
                index={i}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
