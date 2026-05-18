const variants = {
  primary: [
    'bg-ink-900 text-paper border border-ink-900',
    'hover:bg-ink-700 hover:border-ink-700',
  ].join(' '),
  ghost: [
    'bg-transparent text-ink-900 border border-ink-300',
    'hover:border-ink-700',
  ].join(' '),
}

export default function Button({ variant = 'primary', children, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center gap-2',
        'rounded-full px-6 py-3',
        'font-sans text-sm font-medium',
        'transition-colors duration-150',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
