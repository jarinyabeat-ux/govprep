/**
 * Inline vector illustration: a reader at a laptop with coffee, a notebook and
 * a checklist. Inlined rather than fetched as a file so it costs no extra
 * request, causes no layout shift, and inherits the brand palette directly.
 */
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 440"
      role="img"
      aria-labelledby="hero-illus-title hero-illus-desc"
      className="h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="hero-illus-title">
        ภาพประกอบผู้เตรียมสอบราชการนั่งอ่านหนังสือกับโน้ตบุ๊ก
      </title>
      <desc id="hero-illus-desc">
        ภาพเวกเตอร์แสดงผู้อ่านนั่งที่โต๊ะทำงาน มีโน้ตบุ๊ก แก้วกาแฟ สมุดจดบันทึก
        และรายการเช็กลิสต์เตรียมสอบที่ติ๊กเสร็จแล้วบางข้อ
      </desc>

      <defs>
        <linearGradient id="hi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient id="hi-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>

      {/* Ambient panel */}
      <rect x="24" y="20" width="512" height="400" rx="40" fill="url(#hi-bg)" />
      <circle cx="508" cy="52" r="9" fill="#F59E0B" opacity="0.55" />

      {/* Checklist card */}
      <g transform="translate(58 60)">
        <rect
          width="132"
          height="150"
          rx="16"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="2"
        />
        <rect x="18" y="18" width="60" height="8" rx="4" fill="#111827" />
        {[0, 1, 2, 3].map((row) => (
          <g key={row} transform={`translate(18 ${44 + row * 26})`}>
            <rect
              width="18"
              height="18"
              rx="6"
              fill={row < 3 ? "#1D4ED8" : "#FFFFFF"}
              stroke={row < 3 ? "#1D4ED8" : "#E5E7EB"}
              strokeWidth="2"
            />
            {row < 3 ? (
              <path
                d="M4.5 9.5l3 3 6-6.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : null}
            <rect
              x="28"
              y="5"
              width={row < 3 ? 62 : 46}
              height="8"
              rx="4"
              fill={row < 3 ? "#E5E7EB" : "#F59E0B"}
              opacity={row < 3 ? 1 : 0.85}
            />
          </g>
        ))}
      </g>

      {/* "อ่านวันละ 10 นาที" badge */}
      <g transform="translate(378 92)">
        <rect
          width="122"
          height="52"
          rx="16"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="2"
        />
        <circle
          cx="30"
          cy="26"
          r="13"
          fill="#FFFBEB"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <path
          d="M30 19v7l5 4"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="52" y="16" width="52" height="8" rx="4" fill="#111827" />
        <rect x="52" y="30" width="36" height="7" rx="3.5" fill="#E5E7EB" />
      </g>

      {/* Desk ledge */}
      <rect x="56" y="376" width="432" height="12" rx="6" fill="#E5E7EB" />

      {/* Notebook */}
      <g transform="translate(74 288)">
        <rect
          width="112"
          height="84"
          rx="12"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="2"
        />
        <rect x="0" y="0" width="10" height="84" rx="5" fill="#F59E0B" />
        <rect x="26" y="20" width="66" height="7" rx="3.5" fill="#E5E7EB" />
        <rect x="26" y="38" width="52" height="7" rx="3.5" fill="#E5E7EB" />
        <rect x="26" y="56" width="60" height="7" rx="3.5" fill="#E5E7EB" />
      </g>

      {/* Coffee cup */}
      <g transform="translate(400 300)">
        <path
          d="M8 12h56l-6 52a12 12 0 0 1-12 11H26a12 12 0 0 1-12-11z"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="2"
        />
        <path d="M10 26h52l-1.6 14H11.6z" fill="#F59E0B" opacity="0.85" />
        <path
          d="M64 24h8a12 12 0 0 1 0 24h-6"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
        />
        <path
          d="M24 0c-4 5-4 9 0 14M40 0c-4 5-4 9 0 14"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>

      {/* Person — drawn before the laptop so the laptop sits in front */}
      <g>
        {/* Hair */}
        <path
          d="M236 196c0-40 18-58 44-58s44 18 44 58c-10-24-24-32-44-32s-34 8-44 32z"
          fill="#111827"
        />
        {/* Head */}
        <rect x="240" y="150" width="80" height="88" rx="34" fill="#F7D7B5" />
        {/* Fringe */}
        <path
          d="M240 184c4-28 20-42 40-42s36 14 40 42c-10-16-24-22-40-22s-30 6-40 22z"
          fill="#111827"
        />
        {/* Face */}
        <circle cx="264" cy="200" r="3.6" fill="#111827" />
        <circle cx="296" cy="200" r="3.6" fill="#111827" />
        <path
          d="M268 218c6 6 18 6 24 0"
          fill="none"
          stroke="#111827"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Neck */}
        <rect x="266" y="226" width="28" height="36" rx="12" fill="#F0C9A4" />
        {/* Torso */}
        <path d="M224 302c0-30 25-52 56-52s56 22 56 52v74H224z" fill="#1D4ED8" />
        {/* Collar */}
        <path
          d="M280 250c-10 0-19 2-27 7l27 30 27-30c-8-5-17-7-27-7z"
          fill="#FFFFFF"
          opacity="0.2"
        />
        {/* Arms reaching around the laptop, hands resting on the desk */}
        <path
          d="M238 292c-28 14-42 44-36 72"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="17"
          strokeLinecap="round"
        />
        <path
          d="M322 292c28 14 42 44 36 72"
          fill="none"
          stroke="#1D4ED8"
          strokeWidth="17"
          strokeLinecap="round"
        />
        <circle cx="202" cy="366" r="9.5" fill="#F7D7B5" />
        <circle cx="358" cy="366" r="9.5" fill="#F7D7B5" />
      </g>

      {/* Laptop */}
      <g transform="translate(212 288)">
        <rect x="0" y="0" width="136" height="88" rx="9" fill="#111827" />
        <rect x="7" y="7" width="122" height="68" rx="5" fill="url(#hi-screen)" />
        <rect
          x="19"
          y="19"
          width="48"
          height="7"
          rx="3.5"
          fill="#FFFFFF"
          opacity="0.9"
        />
        <rect
          x="19"
          y="34"
          width="80"
          height="6"
          rx="3"
          fill="#FFFFFF"
          opacity="0.45"
        />
        <rect
          x="19"
          y="48"
          width="66"
          height="6"
          rx="3"
          fill="#FFFFFF"
          opacity="0.45"
        />
        <rect x="19" y="62" width="32" height="6" rx="3" fill="#F59E0B" />
        <rect x="52" y="79" width="32" height="4" rx="2" fill="#374151" />
      </g>
    </svg>
  );
}
