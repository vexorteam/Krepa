import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Container from '../ui/Container'
import Reveal from '../motion/Reveal'

/* ─── Phone shell wrapper ─────────────────────────────── */
function ShowcasePhone({ uid, children, className = '' }) {
  return (
    <svg
      viewBox="0 0 280 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Krepa app screen"
    >
      <defs>
        <clipPath id={`screen-${uid}`}>
          <rect x="8" y="8" width="264" height="556" rx="36" />
        </clipPath>
      </defs>
      {/* shell */}
      <rect width="280" height="572" rx="44" fill="#0A0A0B" />
      {/* screen bg */}
      <rect x="8" y="8" width="264" height="556" rx="36" fill="#FAFAF7" />
      {/* dynamic island */}
      <rect x="100" y="20" width="80" height="22" rx="11" fill="#0A0A0B" />
      <g clipPath={`url(#screen-${uid})`}>{children}</g>
      {/* home indicator */}
      <rect x="112" y="546" width="56" height="4" rx="2" fill="#0A0A0B" opacity="0.18" />
    </svg>
  )
}

/* ─── Screen 1: Active workout session ───────────────── */
function WorkoutScreen() {
  return (
    <ShowcasePhone uid="workout" className="w-full max-w-[300px] drop-shadow-2xl">
      {/* header */}
      <text x="28" y="66" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.07em" fill="#71717A">PUSH DAY · SET 3 OF 5</text>
      <text x="26" y="96" fontFamily="Georgia,'Times New Roman',serif" fontSize="26" fontWeight="500" fill="#0A0A0B">Bench Press</text>

      {/* timer badge */}
      <rect x="192" y="72" width="64" height="24" rx="12" fill="#FF5A1F" />
      <text x="224" y="88" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" fill="white">32:14</text>

      {/* current set card */}
      <rect x="20" y="110" width="240" height="110" rx="16" fill="#EDEDE7" />
      <text x="140" y="148" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" letterSpacing="0.06em" fill="#71717A">WEIGHT</text>
      <text x="140" y="190" textAnchor="middle" fontFamily="Georgia,serif" fontSize="44" fontWeight="500" fill="#0A0A0B">80</text>
      <text x="210" y="190" fontFamily="system-ui,sans-serif" fontSize="14" fill="#71717A">kg</text>

      {/* reps row */}
      <rect x="20" y="232" width="240" height="52" rx="14" fill="white" stroke="#D4D4D8" strokeWidth="1" />
      <text x="34" y="252" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.06em" fill="#71717A">REPS</text>
      {[8,8,8,6,0].map((done, i) => (
        <g key={i}>
          <circle cx={70 + i * 40} cy={266} r={13}
            fill={done > 0 ? '#FF5A1F' : '#F4F4EF'}
            stroke={done > 0 ? '#FF5A1F' : '#D4D4D8'}
            strokeWidth="1.5" />
          <text x={70 + i * 40} y={271} textAnchor="middle"
            fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600"
            fill={done > 0 ? 'white' : '#71717A'}>{done || '—'}</text>
        </g>
      ))}

      {/* log button */}
      <rect x="20" y="296" width="240" height="48" rx="14" fill="#0A0A0B" />
      <text x="140" y="325" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="600" fill="white">Log Set</text>

      {/* next exercise */}
      <text x="28" y="370" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.06em" fill="#71717A">UP NEXT</text>
      <rect x="20" y="380" width="240" height="52" rx="14" fill="white" stroke="#D4D4D8" strokeWidth="1" />
      <circle cx="50" cy="406" r="13" fill="#F4F4EF" />
      <circle cx="50" cy="406" r="5" fill="#D4D4D8" />
      <text x="73" y="402" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="500" fill="#0A0A0B">Incline DB Press</text>
      <text x="73" y="418" fontFamily="system-ui,sans-serif" fontSize="10.5" fill="#71717A">4 × 10 · 24 kg</text>

      {/* bottom nav */}
      <rect x="8" y="488" width="264" height="76" fill="#FAFAF7" />
      <rect x="28" y="488" width="224" height="0.75" fill="#D4D4D8" opacity="0.6" />
      <circle cx="56" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
      <circle cx="118" cy="512" r="9" stroke="#FF5A1F" strokeWidth="2" fill="none" />
      <circle cx="118" cy="512" r="3" fill="#FF5A1F" />
      <circle cx="168" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
      <circle cx="224" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
    </ShowcasePhone>
  )
}

/* ─── Screen 2: Analytics ─────────────────────────────── */
function AnalyticsScreen() {
  const bars = [52, 68, 45, 80, 72, 90, 84]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const barH = 80
  const barW = 26
  const barGap = 8
  const baseY = 250

  return (
    <ShowcasePhone uid="analytics" className="w-full max-w-[300px] drop-shadow-2xl">
      <text x="28" y="66" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.07em" fill="#71717A">THIS WEEK</text>
      <text x="26" y="96" fontFamily="Georgia,'Times New Roman',serif" fontSize="26" fontWeight="500" fill="#0A0A0B">Progress</text>

      {/* volume card */}
      <rect x="20" y="108" width="112" height="72" rx="14" fill="#EDEDE7" />
      <text x="34" y="128" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="0.06em" fill="#71717A">VOLUME</text>
      <text x="34" y="158" fontFamily="Georgia,serif" fontSize="26" fontWeight="500" fill="#0A0A0B">14.2</text>
      <text x="34" y="173" fontFamily="system-ui,sans-serif" fontSize="10" fill="#71717A">tonnes</text>

      {/* streak card */}
      <rect x="148" y="108" width="112" height="72" rx="14" fill="#FF5A1F" />
      <text x="162" y="128" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="0.06em" fill="#FFE9DF">STREAK</text>
      <text x="162" y="158" fontFamily="Georgia,serif" fontSize="26" fontWeight="500" fill="white">18</text>
      <text x="162" y="173" fontFamily="system-ui,sans-serif" fontSize="10" fill="#FFE9DF">days</text>

      {/* bar chart */}
      <text x="28" y="202" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.06em" fill="#71717A">WEEKLY LOAD</text>
      {bars.map((val, i) => {
        const h = (val / 100) * barH
        const x = 20 + i * (barW + barGap)
        return (
          <g key={i}>
            <rect x={x} y={baseY - h} width={barW} height={h} rx="6"
              fill={i === 5 ? '#FF5A1F' : '#EDEDE7'} />
            <text x={x + barW / 2} y={baseY + 14} textAnchor="middle"
              fontFamily="system-ui,sans-serif" fontSize="9" fill="#71717A">{days[i]}</text>
          </g>
        )
      })}

      {/* PRs */}
      <text x="28" y="302" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.06em" fill="#71717A">1RM ESTIMATES</text>
      {[
        { name: 'Squat', val: '142 kg', up: true },
        { name: 'Bench', val: '102 kg', up: true },
        { name: 'Deadlift', val: '176 kg', up: false },
      ].map(({ name, val, up }, i) => (
        <g key={name}>
          <rect x="20" y={316 + i * 56} width="240" height="46" rx="12" fill="white" stroke="#D4D4D8" strokeWidth="1" />
          <text x="36" y={344 + i * 56} fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="500" fill="#0A0A0B">{name}</text>
          <text x="244" y={344 + i * 56} textAnchor="end" fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="600" fill="#0A0A0B">{val}</text>
          {up && <text x="244" y={330 + i * 56} textAnchor="end" fontFamily="system-ui,sans-serif" fontSize="9" fill="#FF5A1F">↑ PR</text>}
        </g>
      ))}

      {/* bottom nav */}
      <rect x="8" y="488" width="264" height="76" fill="#FAFAF7" />
      <rect x="28" y="488" width="224" height="0.75" fill="#D4D4D8" opacity="0.6" />
      <circle cx="56" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
      <circle cx="118" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
      <circle cx="168" cy="512" r="9" stroke="#FF5A1F" strokeWidth="2" fill="none" />
      <circle cx="168" cy="512" r="3" fill="#FF5A1F" />
      <circle cx="224" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
    </ShowcasePhone>
  )
}

/* ─── Screen 3: Exercise library ─────────────────────── */
function LibraryScreen() {
  const exercises = [
    { name: 'Romanian Deadlift', tags: 'Hamstrings · Glutes', sets: '4 × 8' },
    { name: 'Bulgarian Split Squat', tags: 'Quads · Balance', sets: '3 × 10' },
    { name: 'Hip Thrust', tags: 'Glutes · Core', sets: '4 × 12' },
    { name: 'Leg Press', tags: 'Quads · Hamstrings', sets: '3 × 15' },
  ]

  return (
    <ShowcasePhone uid="library" className="w-full max-w-[300px] drop-shadow-2xl">
      <text x="28" y="66" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.07em" fill="#71717A">502 EXERCISES</text>
      <text x="26" y="96" fontFamily="Georgia,'Times New Roman',serif" fontSize="26" fontWeight="500" fill="#0A0A0B">Library</text>

      {/* search bar */}
      <rect x="20" y="108" width="240" height="38" rx="12" fill="#EDEDE7" />
      <text x="40" y="132" fontFamily="system-ui,sans-serif" fontSize="12" fill="#71717A">Search exercises…</text>

      {/* filter chips */}
      {[['All', true], ['Legs', false], ['Push', false], ['Pull', false]].map(([label, active], i) => {
        const x = 20 + i * 58
        return (
          <g key={label}>
            <rect x={x} y="158" width="50" height="24" rx="12"
              fill={active ? '#0A0A0B' : '#EDEDE7'} />
            <text x={x + 25} y="174" textAnchor="middle"
              fontFamily="system-ui,sans-serif" fontSize="10" fontWeight={active ? '600' : '400'}
              fill={active ? 'white' : '#71717A'}>{label}</text>
          </g>
        )
      })}

      {/* exercise list */}
      {exercises.map(({ name, tags, sets }, i) => (
        <g key={name}>
          <rect x="20" y={194 + i * 66} width="240" height="56" rx="14" fill="white" stroke="#D4D4D8" strokeWidth="1" />
          <rect x="32" y={206 + i * 66} width="32" height="32" rx="8" fill="#F4F4EF" />
          <text x="48" y={227 + i * 66} textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="13" fill="#D4D4D8">◈</text>
          <text x="76" y={215 + i * 66} fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="500" fill="#0A0A0B">{name}</text>
          <text x="76" y={230 + i * 66} fontFamily="system-ui,sans-serif" fontSize="10" fill="#71717A">{tags}</text>
          <text x="248" y={222 + i * 66} textAnchor="end" fontFamily="system-ui,sans-serif" fontSize="10" fill="#71717A">{sets}</text>
        </g>
      ))}

      {/* bottom nav */}
      <rect x="8" y="488" width="264" height="76" fill="#FAFAF7" />
      <rect x="28" y="488" width="224" height="0.75" fill="#D4D4D8" opacity="0.6" />
      <circle cx="56" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
      <circle cx="118" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
      <circle cx="168" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
      <circle cx="224" cy="512" r="9" stroke="#FF5A1F" strokeWidth="2" fill="none" />
      <circle cx="224" cy="512" r="3" fill="#FF5A1F" />
    </ShowcasePhone>
  )
}

/* ─── Parallax block ──────────────────────────────────── */
const showcaseItems = [
  {
    eyebrow: 'Active Session',
    heading: 'Every set, tracked in real time.',
    body: 'Krepa keeps you in the zone. Log reps and weight without interrupting your rhythm — the interface gets out of the way.',
    screen: <WorkoutScreen />,
  },
  {
    eyebrow: 'Analytics',
    heading: 'Data that tells you something.',
    body: 'Weekly load charts, 1RM estimates, and a streak counter that actually motivates. No vanity metrics, no clutter.',
    screen: <AnalyticsScreen />,
  },
  {
    eyebrow: 'Exercise Library',
    heading: '500+ exercises, one search away.',
    body: 'Filtered by muscle, equipment, and movement pattern. Add any exercise to your plan or swap it on the fly.',
    screen: <LibraryScreen />,
  },
]

function ShowcaseBlock({ item, index }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const phoneY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-24, 24])
  const isReversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24 ${
        isReversed ? 'lg:[direction:rtl]' : ''
      }`}
    >
      {/* text */}
      <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
        <Reveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-ink-500">
            {item.eyebrow}
          </p>
          <h3
            className="mb-5 font-display font-medium leading-tight tracking-display text-ink-900"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            {item.heading}
          </h3>
          <p className="font-sans text-base leading-relaxed text-ink-500 max-w-md">
            {item.body}
          </p>
        </Reveal>
      </div>

      {/* phone */}
      <div className={`flex justify-center ${isReversed ? 'lg:[direction:ltr]' : ''}`}>
        <motion.div style={{ y: phoneY }}>
          {item.screen}
        </motion.div>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section
      className="bg-paper-100"
      style={{ paddingBlock: 'clamp(96px, 12vw, 192px)' }}
    >
      <Container>
        <div className="flex flex-col gap-32 lg:gap-40">
          {showcaseItems.map((item, i) => (
            <ShowcaseBlock key={item.eyebrow} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
