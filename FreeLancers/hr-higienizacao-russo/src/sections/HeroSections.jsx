import { ArrowDown, Check, Home, MessageCircleMore, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { services, trustItems } from '../data/siteData'

export function Hero({ heroRef }) {
  return (
    <section ref={heroRef} id="inicio" className="hero-section">
      <div className="hero-orb one" aria-hidden="true" />
      <div className="hero-orb two" aria-hidden="true" />
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="hero-kicker"><Sparkles size={16} aria-hidden="true" /> Higienização residencial e automotiva</div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1>Seu estofado pode voltar a ter <span>aparência de bem cuidado.</span></h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="hero-lead">Higienização profunda de sofás, colchões, cadeiras e bancos automotivos, com atendimento a domicílio em São Paulo.</p>
          </Reveal>
          <Reveal delay={0.18} className="hero-actions">
            <WhatsAppButton>Solicitar orçamento</WhatsAppButton>
            <a href="#resultados" className="button-base border border-navy/15 bg-white/60 text-navy hover:bg-white">Ver resultados <ArrowDown size={18} /></a>
          </Reveal>
          <Reveal delay={0.24} className="hero-notes">
            <span><Home size={16} /> Atendimento a domicílio</span>
            <span><Check size={16} /> Residencial e automotivo</span>
            <span><MessageCircleMore size={16} /> Orçamento pelo WhatsApp</span>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={0.12} y={14}>
          <div className="hero-image-frame">
            <img src="/images/sofa-cleaning-hero.jpg" alt="Profissional realizando limpeza de um sofá" fetchPriority="high" />
            <div className="hero-image-card"><span>Atendimento no local</span><strong>São Paulo e regiões próximas</strong></div>
          </div>
          <div className="hero-watermark" aria-hidden="true">HR</div>
        </Reveal>
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <section className="trust-wrap" aria-label="Diferenciais do atendimento">
      <div className="site-shell trust-grid">
        {trustItems.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} className="trust-item" delay={index * 0.05}>
            <span className="trust-icon"><Icon size={21} /></span>
            <span><strong>{title}</strong><small>{text}</small></span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="servicos" className="section-pad overflow-hidden bg-white">
      <div className="site-shell">
        <Reveal>
          <SectionHeading eyebrow="Serviços" title="Cuidado certo para cada estofado." text="Do sofá onde a família se reúne ao banco usado todos os dias, cada peça recebe atenção de acordo com seu uso." />
        </Reveal>
        <div className="service-scroll mt-9 md:mt-12">
          {services.map(({ title, description, image, icon: Icon }, index) => (
            <Reveal key={title} className={`service-card service-card-${index + 1}`} delay={index * 0.05}>
              <div className="service-image"><img src={image} alt="" loading="lazy" /></div>
              <div className="service-content">
                <span className="service-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
