import { ArrowDown, ArrowUpRight, Check, Droplets, MessageCircleMore } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { services, trustItems } from '../data/siteData'

export function Hero({ heroRef }) {
  return (
    <section ref={heroRef} id="inicio" className="hero-section">
      <div className="hero-grain" aria-hidden="true" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <Reveal><p className="hero-kicker"><span>Limpklin</span> Higienização de estofados</p></Reveal>
          <Reveal delay={0.06}><h1>Cuidado de verdade para os estofados da sua casa.</h1></Reveal>
          <Reveal delay={0.12}><p className="hero-lead">Higienização de sofás, colchões, poltronas e outros estofados com atendimento prático, capricho no processo e orçamento pelo WhatsApp.</p></Reveal>
          <Reveal delay={0.18} className="hero-actions">
            <WhatsAppLink>Solicitar orçamento</WhatsAppLink>
            <a href="#resultados" className="button button-ghost">Ver resultados <ArrowDown size={18} /></a>
          </Reveal>
          <Reveal delay={0.24} className="hero-tags">
            <span><Check size={15} /> Sob agendamento</span>
            <span><Droplets size={15} /> Impermeabilização disponível</span>
            <span><MessageCircleMore size={15} /> Orçamento rápido</span>
          </Reveal>
        </div>

        <div className="hero-collage">
          <Reveal className="hero-photo-main" delay={0.08} y={12}>
            <img src="/images/hero-profissional.jpg" alt="Profissional realizando higienização de sofá — imagem ilustrativa" width="1200" height="1508" fetchPriority="high" />
            <span className="photo-caption">Cuidado que dá para perceber</span>
          </Reveal>
          <Reveal className="hero-photo-detail" delay={0.18} y={10}>
            <img src="/images/processo-poltrona.jpg" alt="Detalhe de equipamento higienizando uma poltrona — imagem ilustrativa" width="1000" height="1500" />
          </Reveal>
          <Reveal className="hero-note" delay={0.24}>
            <span>Feito com</span><strong>atenção aos detalhes.</strong>
          </Reveal>
          <div className="hero-stitch" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export function TrustRibbon() {
  return (
    <section className="trust-section" aria-label="Diferenciais da Limpklin">
      <div className="trust-track shell">
        {trustItems.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} className="trust-item" delay={index * 0.04}>
            <span className="trust-icon"><Icon size={20} /></span>
            <span><strong>{title}</strong><small>{text}</small></span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="servicos" className="services-section section-space">
      <div className="shell">
        <Reveal className="section-intro services-intro">
          <p className="eyebrow">O que cuidamos</p>
          <h2>Peças diferentes pedem um olhar diferente.</h2>
          <p>O atendimento começa entendendo o uso da peça e o cuidado que ela precisa.</p>
        </Reveal>

        <div className="service-list">
          {services.map(({ number, title, description, image, icon: Icon }, index) => (
            <Reveal key={title} className={`service-row ${index % 2 ? 'service-row-reverse' : ''}`} delay={index * 0.04}>
              <div className="service-photo"><img src={image} alt="" width="900" height="720" loading="lazy" /></div>
              <div className="service-copy">
                <div className="service-heading"><span>{number}</span><Icon size={23} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#orcamento">Pedir orçamento <ArrowUpRight size={17} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
