import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// words: Array<{ text: string, accent?: boolean }>
export default function SplitText({ words, startDelay = 0, stagger = 0.08 }) {
  const reduced = useReducedMotion()

  return (
    <>
      {words.map(({ text, accent }, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={['inline-block', accent ? 'text-accent' : ''].join(' ')}
              initial={{ y: reduced ? 0 : '110%', opacity: reduced ? 0 : 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: startDelay + i * stagger,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {text}
            </motion.span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  )
}
