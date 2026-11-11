/**
 * Schéma de plomberie dessiné en code (SVG) : aucun fichier image à télécharger.
 * Le tuyau se trace une seule fois au chargement (désactivé si l'utilisateur
 * a demandé moins d'animations dans son système).
 */
function Pipe({ d, delay = 0 }: { d: string; delay?: number }) {
  const style = { animationDelay: `${delay}ms` } as React.CSSProperties;
  return (
    <g className="pipe" style={style}>
      <path d={d} pathLength={1} className="pipe__shadow" />
      <path d={d} pathLength={1} className="pipe__body" />
      <path d={d} pathLength={1} className="pipe__shine" />
    </g>
  );
}

function Fitting({ x, y, vertical = false }: { x: number; y: number; vertical?: boolean }) {
  const w = vertical ? 22 : 10;
  const h = vertical ? 10 : 22;
  return <rect className="fitting" x={x - w / 2} y={y - h / 2} width={w} height={h} rx="1.5" />;
}

export function HeroSchematic() {
  return (
    <svg className="schematic" viewBox="0 0 520 560" aria-hidden="true" focusable="false">
      {/* Cotes et repères, façon plan d'installateur */}
      <g className="plan">
        <path d="M330 34h190M330 28v12M520 28v12" />
        <path d="M486 330v170M480 330h12M480 500h12" />
        <path d="M60 470h-36M24 470v90" strokeDasharray="4 6" />
        <circle cx="290" cy="250" r="26" strokeDasharray="3 5" />
        <path d="M316 250h40" />
        <text x="424" y="24" textAnchor="middle">arrivée</text>
        <text x="362" y="246">té</text>
      </g>

      {/* Ballon d'eau chaude, au trait */}
      <g className="plan plan--strong">
        <rect x="360" y="330" width="100" height="170" rx="46" />
        <path d="M385 500v22M435 500v22" />
        <path d="M410 395c9 10 11 16 11 22a11 11 0 0 1-22 0c0-6 2-12 11-22Z" />
      </g>

      {/* Réseau de tuyaux */}
      <Pipe d="M520 80H330a40 40 0 0 0-40 40v290a40 40 0 0 1-40 40H60v110" />
      <Pipe d="M290 250h80a40 40 0 0 1 40 40v40" delay={500} />

      {/* Vanne quart de tour */}
      <g className="valve">
        <path d="M418 66v28l24-14zM466 66v28l-24-14z" />
        <path d="M442 80V54M430 50h24" className="valve__handle" />
      </g>

      <Fitting x={330} y={80} />
      <Fitting x={290} y={120} vertical />
      <Fitting x={290} y={410} vertical />
      <Fitting x={250} y={450} />
      <Fitting x={410} y={290} vertical />
      <Fitting x={60} y={490} vertical />
    </svg>
  );
}
