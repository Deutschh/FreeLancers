import { Images, MoveHorizontal } from 'lucide-react'
import { BeforeAfter } from '../components/BeforeAfter'
import { Reveal } from '../components/Reveal'
import { careSteps, comparisons } from '../data/siteData'

export function CareProcess() {
  return (
    <section id="processo" className="care-section section-space">
      <div className="shell care-layout">
        <div className="care-story">
          <Reveal>
            <p className="eyebrow">Nosso cuidado no processo</p>
            <h2>Mais do que limpar, é cuidar de cada detalhe.</h2>
            <p className="care-lead">Cada estofado tem um material, um uso e uma história. O processo é conduzido com atenção à peça e ao resultado visual, sem transformar o cuidado em uma linha de montagem.</p>
          </Reveal>
          <div className="care-visual">
            <Reveal className="care-main-photo"><img src="/images/processo-poltrona.jpg" alt="Detalhe do processo de higienização em poltrona — imagem ilustrativa" width="1000" height="1500" loading="lazy" /></Reveal>
            <Reveal className="care-small-photo" delay={0.1}><img src="/images/processo-colchao.jpg" alt="Higienização de colchão em andamento — imagem ilustrativa" width="1400" height="933" loading="lazy" /></Reveal>
            <span className="care-photo-label">Processo ilustrativo</span>
          </div>
        </div>

        <div className="care-steps">
          {careSteps.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} className="care-step" delay={index * 0.07}>
              <span className="care-number">0{index + 1}</span>
              <span className="care-step-icon"><Icon size={21} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Results() {
  return (
    <section id="resultados" className="results-section section-space">
      <div className="shell">
        <Reveal className="results-head">
          <div><p className="eyebrow">Antes e depois</p><h2>A diferença aparece no resultado.</h2></div>
          <p>Compare exemplos visuais de como a higienização pode renovar a aparência do tecido.</p>
        </Reveal>

        <div className="comparison-grid">
          {comparisons.map((item, index) => <Reveal key={item.label} delay={index * 0.08}><BeforeAfter {...item} /></Reveal>)}
        </div>

        <Reveal className="illustrative-note">
          <Images size={20} aria-hidden="true" />
          <p><strong>Imagens ilustrativas.</strong> Os comparativos acima são demonstrações visuais e não representam serviços, resultados ou clientes reais da Limpklin.</p>
          <span><MoveHorizontal size={17} /> Use o controle para comparar</span>
        </Reveal>
      </div>
    </section>
  )
}
