import { useId, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

export function BeforeAfter({ item, featured = false }) {
  const [position, setPosition] = useState(50)
  const inputId = useId()

  return (
    <article className={`comparison-card ${featured ? 'comparison-featured' : ''}`}>
      <div className="comparison-heading">
        <div><span>Comparativo</span><h3>{item.title}</h3></div>
        <span className="illustrative-pill">Imagem ilustrativa</span>
      </div>
      <div className="comparison-stage" style={{ '--position': `${position}%` }}>
        <img src={item.before} width="888" height="887" loading="lazy" alt={`${item.alt}, estado antes`} />
        <div className="comparison-after">
          <img src={item.after} width="888" height="887" loading="lazy" alt={`${item.alt}, estado depois`} />
        </div>
        <span className="comparison-label before-label">Antes</span>
        <span className="comparison-label after-label">Depois</span>
        <div className="comparison-line" aria-hidden="true"><span><MoveHorizontal size={18} /></span></div>
        <label className="sr-only" htmlFor={inputId}>Comparar antes e depois de {item.title}</label>
        <input
          id={inputId}
          className="comparison-range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-valuetext={`${position}% da imagem depois visível`}
        />
      </div>
      <p className="comparison-hint"><MoveHorizontal size={17} aria-hidden="true" /> Arraste para comparar</p>
    </article>
  )
}
