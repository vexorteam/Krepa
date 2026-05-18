import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollState } from '../../hooks/useScrollState'
import Container from '../ui/Container'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Reviews', href: '#reviews' },
]

function KrepaLogo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="Krepa home">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="6" fill="#0A0A0B" />
        <path d="M8 7v14M8 14l7-7M8 14l8 7" stroke="#FAFAF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-[22px] font-medium tracking-display text-ink-900 leading-none">
        Krepa
      </span>
    </a>
  )
}

export default function Nav() {
  const scrolled = useScrollState(20)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-ink-300/60'
          : 'bg-transparent',
      ].join(' ')}
    >
      <Container>
        <nav className="flex items-center h-16" aria-label="Main navigation">
          <KrepaLogo />

          {/* Desktop links — centered in remaining space */}
          <ul className="hidden md:flex flex-1 items-center justify-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-sans text-sm text-ink-700 hover:text-ink-900 transition-colors duration-150 relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-lg text-ink-900 hover:bg-paper-100 transition-colors duration-150"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Desktop CTA — outside Container, pinned to viewport right edge */}
      <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
        <Button variant="primary" className="!px-5 !py-2 !text-xs">
          Download
        </Button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-paper/95 backdrop-blur-md border-b border-ink-300/60"
          >
            <Container>
              <ul className="py-4 flex flex-col gap-1" role="list">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="block py-2.5 font-sans text-base text-ink-700 hover:text-ink-900 transition-colors duration-150"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li className="pt-3 pb-1">
                  <Button variant="primary" className="w-full justify-center">
                    Download
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
