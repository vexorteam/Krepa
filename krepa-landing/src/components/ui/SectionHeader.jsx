export default function SectionHeader({ eyebrow, heading, lead, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink-500">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(36px,5vw,64px)] font-medium leading-tight tracking-display text-ink-900">
        {heading}
      </h2>
      {lead && (
        <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-ink-500">
          {lead}
        </p>
      )}
    </div>
  )
}
