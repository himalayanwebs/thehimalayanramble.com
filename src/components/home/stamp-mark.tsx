export function StampMark() {
  return (
    <div className="stamp" aria-hidden="true">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <filter id="stampRough" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={7} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={3.2} />
          </filter>
        </defs>
        <g filter="url(#stampRough)">
          <circle cx={100} cy={100} r={92} fill="none" stroke="currentColor" strokeWidth={4} />
          <circle cx={100} cy={100} r={80} fill="none" stroke="currentColor" strokeWidth={1.5} />
          <path d="M66 58 L80 38 L92 52 L100 34 L112 52 L124 38 L134 58 Z" fill="currentColor" />
          <line x1={68} y1={112} x2={132} y2={112} stroke="currentColor" strokeWidth={1.5} />
          <text x={100} y={80} textAnchor="middle" fontSize={13} letterSpacing={0.6} fill="currentColor">
            THE HIMALAYAN
          </text>
          <text x={100} y={103} textAnchor="middle" fontSize={23} fontWeight={700} fill="currentColor">
            RAMBLE
          </text>
          <text x={100} y={128} textAnchor="middle" fontSize={13} letterSpacing={0.6} fill="currentColor">
            EST. 2000
          </text>
          <text x={100} y={145} textAnchor="middle" fontSize={10} letterSpacing={1} fill="currentColor">
            SHIMLA &middot; INDIA
          </text>
        </g>
      </svg>
    </div>
  );
}
