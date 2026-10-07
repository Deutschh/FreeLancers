import { Check, Droplets, Gauge, ShieldCheck, Sofa } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WhatsAppButton } from '../components/ButtonLink'
import { benefits } from '../data/siteData'

export function WhyClean() {
  return (
    <section className="why-section section-pad" aria-labelledby="why-title">
      <div className="shell why-grid">
        <Reveal className="why-statement">
          <span className="outline-number" aria-hidden="true">04</span>
          <p className="kicker">Manutenção que se percebe</p>
          <h2 id="why-title">Não é só <em>estética.</em></h2>
          <p>Sujeiras, resíduos e odores fazem parte do uso diário. A higienização cuida da aparência, do conforto e da conservação do tecido sem promessas exageradas.</p>
        </Reveal>
        <div className="benefit-list">
          {benefits.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} className="benefit-item" delay={index * 0.07}>
              <span><Icon size={22} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Residential() {
  return (
    <section id="residencial" className="residential-section" aria-labelledby="residential-title">
      <div className="shell residential-wrap">
        <Reveal className="residential-image">
          <img src="/images/residential-room.jpg" width="1536" height="1024" loading="lazy" alt="Sala ilustrativa com sofá, poltrona e cadeiras estofadas" />
          <span className="illustrative-pill">Imagem ilustrativa</span>
        </Reveal>
        <Reveal className="residential-copy">
          <p className="kicker">Atendimento residencial</p>
          <h2 id="residential-title">Cuidado que combina com a <em>sua casa.</em></h2>
          <p>Sofás, poltronas, cadeiras e outros estofados recebem atenção para voltar a transmitir uma sensação de ambiente bem cuidado.</p>
          <ul>
            {['Sofás e chaise', 'Poltronas', 'Cadeiras estofadas', 'Estofados em geral'].map((item) => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}
          </ul>
          <WhatsAppButton>Quero orçamento residencial</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  )
}

export function Automotive() {
  return (
    <section id="automotivo" className="auto-section dark-section section-pad" aria-labelledby="auto-title">
      <div className="auto-lines" aria-hidden="true" />
      <div className="shell auto-grid">
        <Reveal className="auto-copy">
          <p className="eyebrow"><span /> Higienização automotiva</p>
          <h2 id="auto-title">Seu carro também merece <em>esse cuidado.</em></h2>
          <p>Higienização de bancos e estofamentos automotivos para recuperar a sensação de interior bem cuidado diante das marcas do uso diário.</p>
          <div className="auto-features">
            <span><Sofa size={20} aria-hidden="true" /> Bancos e superfícies têxteis</span>
            <span><Gauge size={20} aria-hidden="true" /> Atenção ao acabamento interno</span>
          </div>
          <WhatsAppButton>Solicitar orçamento automotivo</WhatsAppButton>
        </Reveal>
        <Reveal className="auto-image" delay={0.08}>
          <img src="/images/auto-cleaning-process.jpg" width="1536" height="1024" loading="lazy" alt="Imagem ilustrativa de higienização de banco automotivo em andamento" />
          <div className="auto-image-index"><span>04</span><p>Processo em detalhe</p></div>
          <span className="illustrative-pill">Imagem ilustrativa</span>
        </Reveal>
      </div>
    </section>
  )
}

export function Waterproofing() {
  const features = [
    { icon: ShieldCheck, label: 'Ajuda na conservação' },
    { icon: Droplets, label: 'Facilita os cuidados cotidianos' },
    { icon: Sofa, label: 'Complementa a higienização' },
  ]
  return (
    <section id="impermeabilizacao" className="waterproof-section" aria-labelledby="waterproof-title">
      <div className="shell waterproof-card">
        <Reveal className="waterproof-image">
          <img src="/images/waterproofing-detail.jpg" width="1536" height="1024" loading="lazy" alt="Aplicação ilustrativa de impermeabilizante sobre tecido estofado" />
          <span className="illustrative-pill">Imagem ilustrativa</span>
        </Reveal>
        <Reveal className="waterproof-copy">
          <span className="waterproof-icon"><Droplets size={24} aria-hidden="true" /></span>
          <p className="kicker">Impermeabilização</p>
          <h2 id="waterproof-title">Proteção para o <em>uso diário.</em></h2>
          <p>A impermeabilização ajuda a preservar o tecido e facilita os cuidados de rotina. É uma camada extra de atenção, sem substituir a manutenção adequada.</p>
          <div className="waterproof-features">
            {features.map(({ icon: Icon, label }) => <span key={label}><Icon size={19} aria-hidden="true" />{label}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
