import { useState } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

export function BeforeAfterSlider({ before, after, label }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="before-after" style={{ '--position': `${position}%` }}>
      <img src={after} alt={`${label} após a higienização — imagem ilustrativa`} draggable="false" />
      <div className="before-layer" aria-hidden="true">
        <img src={before} alt="" draggable="false" />
      </div>
      <span className="compare-label left-3">Antes</span>
      <span className="compare-label right-3">Depois</span>
      <div className="compare-line" aria-hidden="true">
        <span><ChevronsLeftRight size={20} /></span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Comparar antes e depois: ${label}`}
      />
    </div>
  )
}
