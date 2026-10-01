import { useState } from 'react'
import { ArrowUpRight, MessageCircleMore } from 'lucide-react'
import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { benefits, comparisons, processSteps } from '../data/siteData'

export function Results() {
  const [active, setActive] = useState(0)
  const comparison = comparisons[active]
  return (
    <section id="resultados" className="section-pad results-section">
      <div className="site-shell results-grid">
        <Reveal className="results-copy">
          <SectionHeading eyebrow="Antes e depois" title="O resultado aparece." text="Veja a diferença que uma higienização profunda pode fazer." />
          <div className="comparison-tabs" role="tablist" aria-label="Escolher tipo de estofado">
            {comparisons.map((item, index) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? 'active' : ''}
                onClick={() => setActive(index)}
              >{item.label}</button>
            ))}
          </div>
          <div className="results-note"><MessageCircleMore size={19} /><p>Quer avaliar o seu estofado? Envie uma foto para receber os detalhes do orçamento.</p></div>
          <WhatsAppButton variant="outline" className="hidden w-fit lg:inline-flex">Enviar uma foto</WhatsAppButton>
        </Reveal>
        <Reveal className="comparison-stage" delay={0.08}>
          <BeforeAfterSlider key={comparison.label} {...comparison} />
          <div className="comparison-help"><span>Arraste para comparar</span><small>Imagens ilustrativas</small></div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhyClean() {
  return (
    <section className="why-section">
      <div className="why-sheen" aria-hidden="true" />
      <div className="site-shell why-grid">
        <Reveal>
          <SectionHeading light eyebrow="Cuidado de verdade" title="Não é só aparência." text="O uso diário deixa sinais: sujeira acumulada, resíduos e odores podem tirar o conforto do ambiente. A higienização ajuda a cuidar do tecido e da sensação de limpeza." />
        </Reveal>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} className="benefit-item" delay={index * 0.06}>
              <span><Icon size={22} /></span><div><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section id="como-funciona" className="section-pad bg-soft">
      <div className="site-shell">
        <Reveal><SectionHeading eyebrow="Como funciona" title="Do orçamento ao estofado renovado." text="Um processo simples para você resolver tudo pelo celular e receber o atendimento no local." /></Reveal>
        <div className="process-line">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} className="process-step" delay={index * 0.06}>
              <div className="process-number">{step.number}</div>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
              {index < processSteps.length - 1 && <ArrowUpRight className="process-arrow" size={20} aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
