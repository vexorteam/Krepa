export default function PhoneMockup({ className = '' }) {
  return (
    <svg
      viewBox="0 0 280 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Krepa app showing today's workout plan"
    >
      <defs>
        <clipPath id="krepa-screen">
          <rect x="8" y="8" width="264" height="556" rx="36" />
        </clipPath>
      </defs>

      {/* Phone shell */}
      <rect width="280" height="572" rx="44" fill="#0A0A0B" />

      {/* Screen background */}
      <rect x="8" y="8" width="264" height="556" rx="36" fill="#FAFAF7" />

      {/* Dynamic island */}
      <rect x="100" y="20" width="80" height="22" rx="11" fill="#0A0A0B" />

      <g clipPath="url(#krepa-screen)">

        {/* ── Date eyebrow ── */}
        <text x="28" y="68"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10.5" fontWeight="600" letterSpacing="0.06em" fill="#71717A">
          MON · 18 MAY
        </text>

        {/* ── "Today" heading ── */}
        <text x="26" y="97"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="28" fontWeight="500" fill="#0A0A0B">
          Today
        </text>

        {/* ── Progress card ── */}
        <rect x="20" y="110" width="240" height="88" rx="16" fill="#EDEDE7" />

        {/* Card: left labels */}
        <text x="34" y="134"
          fontFamily="system-ui, sans-serif"
          fontSize="10" fontWeight="600" letterSpacing="0.06em" fill="#71717A">
          WORKOUTS
        </text>
        <text x="34" y="162"
          fontFamily="system-ui, sans-serif"
          fontSize="23" fontWeight="700" fill="#0A0A0B">
          3 / 5
        </text>
        <text x="34" y="182"
          fontFamily="system-ui, sans-serif"
          fontSize="10.5" fill="#71717A">
          completed today
        </text>

        {/* Card: progress ring (cx=214, cy=154) */}
        <circle cx="214" cy="154" r="28" stroke="#D4D4D8" strokeWidth="5" />
        {/* 60 % arc  →  circumference ≈ 175.9, 60 % ≈ 105.5 */}
        <circle
          cx="214" cy="154" r="28"
          stroke="#FF5A1F" strokeWidth="5"
          strokeDasharray="105.5 70.4"
          strokeLinecap="round"
          transform="rotate(-90 214 154)"
        />
        <text x="214" y="151"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="13" fontWeight="700" fill="#0A0A0B">
          60%
        </text>
        <text x="214" y="165"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="9" fill="#71717A">
          done
        </text>

        {/* ── Item 1: completed ── */}
        <rect x="20" y="212" width="240" height="54" rx="14" fill="white" />
        <circle cx="50" cy="239" r="14" fill="#FF5A1F" />
        {/* checkmark */}
        <path d="M43 239 L48 244 L57 232"
          stroke="white" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" />
        <text x="74" y="235"
          fontFamily="system-ui, sans-serif"
          fontSize="12.5" fontWeight="500" fill="#0A0A0B">
          Strength Training
        </text>
        <text x="74" y="251"
          fontFamily="system-ui, sans-serif"
          fontSize="10.5" fill="#71717A">
          45 min · Upper body
        </text>
        <text x="248" y="235"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
          fontSize="10.5" fill="#71717A">
          Done
        </text>

        {/* ── Item 2: next ── */}
        <rect x="20" y="274" width="240" height="54" rx="14" fill="white" stroke="#FFE9DF" strokeWidth="1.5" />
        <circle cx="50" cy="301" r="14" fill="#FFE9DF" />
        {/* play triangle */}
        <polygon points="46,295 46,307 58,301" fill="#FF5A1F" />
        <text x="74" y="297"
          fontFamily="system-ui, sans-serif"
          fontSize="12.5" fontWeight="500" fill="#0A0A0B">
          Zone 2 Run
        </text>
        <text x="74" y="313"
          fontFamily="system-ui, sans-serif"
          fontSize="10.5" fill="#71717A">
          30 min · Cardio
        </text>
        <text x="248" y="297"
          textAnchor="end"
          fontFamily="system-ui, sans-serif"
          fontSize="10.5" fontWeight="600" fill="#FF5A1F">
          Next
        </text>

        {/* ── Item 3: upcoming ── */}
        <rect x="20" y="336" width="240" height="54" rx="14" fill="white" stroke="#D4D4D8" strokeWidth="1" />
        <circle cx="50" cy="363" r="14" fill="#F4F4EF" stroke="#D4D4D8" strokeWidth="1" />
        <circle cx="50" cy="363" r="5" fill="#D4D4D8" />
        <text x="74" y="359"
          fontFamily="system-ui, sans-serif"
          fontSize="12.5" fontWeight="400" fill="#71717A">
          Mobility Flow
        </text>
        <text x="74" y="375"
          fontFamily="system-ui, sans-serif"
          fontSize="10.5" fill="#71717A">
          20 min · Recovery
        </text>

        {/* ── Bottom nav bar ── */}
        <rect x="8" y="488" width="264" height="76" fill="#FAFAF7" />
        <rect x="28" y="488" width="224" height="0.75" fill="#D4D4D8" opacity="0.6" />

        {/* nav icons: 4 items at x = 56, 112, 168, 224 */}
        {/* home — active */}
        <circle cx="56" cy="512" r="9" stroke="#FF5A1F" strokeWidth="2" fill="none" />
        <circle cx="56" cy="512" r="3" fill="#FF5A1F" />
        {/* workouts */}
        <circle cx="118" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
        {/* progress */}
        <circle cx="168" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />
        {/* profile */}
        <circle cx="224" cy="512" r="9" stroke="#D4D4D8" strokeWidth="1.5" fill="none" />

        {/* iOS home indicator */}
        <rect x="112" y="546" width="56" height="4" rx="2" fill="#0A0A0B" opacity="0.18" />
      </g>
    </svg>
  )
}
