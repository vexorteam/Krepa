import { AtSign, Hash, Play } from 'lucide-react'
import Container from '../ui/Container'

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press kit'],
  },
  {
    heading: 'Resources',
    links: ['Help center', 'Community', 'Coaches', 'Integrations'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'Security'],
  },
]

const SOCIALS = [
  { icon: AtSign, label: 'Instagram' },
  { icon: Hash, label: 'X (Twitter)' },
  { icon: Play, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-300/60 bg-paper">
      <Container>
        <div className="py-16 grid grid-cols-2 gap-y-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
            <span className="font-display text-xl font-medium tracking-display text-ink-900">
              Krepa
            </span>
            <p className="font-sans text-sm text-ink-500 max-w-[200px] leading-relaxed">
              Your training, distilled. Available on iOS and Android.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-ink-500 hover:text-ink-900 hover:bg-paper-200 transition-colors duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-3">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ink-500">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-ink-700 hover:text-ink-900 transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-ink-300/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Krepa. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ink-500">
            Made for people who actually show up.
          </p>
        </div>
      </Container>
    </footer>
  )
}
