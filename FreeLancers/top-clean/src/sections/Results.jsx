import { BeforeAfter } from '../components/BeforeAfter'
import { Reveal } from '../components/Reveal'
import { comparisons } from '../data/siteData'

export function Results() {
  return (
    <section id="resultados" className="results-section section-pad" aria-labelledby="results-title">
      <div className="shell">
        <Reveal className="results-heading">
          <div>
            <p className="kicker">Antes × depois</p>
            <h2 id="results-title">Veja a <em>diferença.</em></h2>
          </div>
          <p>Compare como a higienização pode transformar a aparência dos estofados. As imagens abaixo são demonstrações ilustrativas.</p>
        </Reveal>
        <div className="comparison-grid">
          {comparisons.map((item, index) => (
            <Reveal key={item.title} className={index === 0 ? 'comparison-grid-featured' : ''} delay={index * 0.07}>
              <BeforeAfter item={item} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
