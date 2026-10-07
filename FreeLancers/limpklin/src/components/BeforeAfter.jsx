import { useState } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

export function BeforeAfter({ before, after, alt, label }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="comparison-wrap">
      <div className="comparison" style={{ '--compare-position': `${position}%` }}>
        <img src={after} alt={alt} width="886" height="887" loading="lazy" />
        <div className="comparison-before" aria-hidden="true"><img src={before} alt="" width="886" height="887" /></div>
        <span className="comparison-label label-before">Antes</span>
        <span className="comparison-label label-after">Depois</span>
        <div className="comparison-handle" aria-hidden="true"><span><ChevronsLeftRight size={20} /></span></div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Comparar antes e depois — ${label}`}
        />
      </div>
      <div className="comparison-meta"><strong>{label}</strong><span>Arraste para comparar</span></div>
    </div>
  )
}
