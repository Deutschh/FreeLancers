import { Check, Droplets, Home, LampDesk, MoonStar, Sofa } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { galleryItems } from '../data/siteData'

const protectionPoints = ['Mais praticidade no dia a dia', 'Ajuda na conservação do tecido', 'Complementa o cuidado com o estofado']
const places = [
  { icon: Home, title: 'Sala', text: 'Sofás, poltronas e cadeiras que acompanham a rotina.' },
  { icon: MoonStar, title: 'Quarto', text: 'Colchões e peças estofadas usadas todos os dias.' },
  { icon: LampDesk, title: 'Escritório', text: 'Cadeiras e assentos de uso frequente.' },
  { icon: Sofa, title: 'Outras peças', text: 'Consulte o atendimento para diferentes estofados.' },
]

export function Waterproofing() {
  return (
    <section className="protection-section section-space">
      <div className="shell protection-card">
        <Reveal className="protection-photo">
          <img src="/images/impermeabilizacao.jpg" alt="Aplicação ilustrativa de impermeabilizante em tecido de sofá" width="1400" height="933" loading="lazy" />
          <span><Droplets size={18} /> Imagem ilustrativa</span>
        </Reveal>
        <Reveal className="protection-copy" delay={0.08}>
          <p className="eyebrow">Impermeabilização</p>
          <h2>Mais proteção para o seu estofado.</h2>
          <p>Além da higienização, a impermeabilização ajuda a preservar o tecido no uso diário e torna os cuidados de rotina mais práticos.</p>
          <ul>{protectionPoints.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul>
          <WhatsAppLink className="protection-button">Quero saber mais</WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}

export function Places() {
  return (
    <section className="places-section section-space">
      <div className="shell places-layout">
        <Reveal className="places-title"><p className="eyebrow">Ambientes e peças</p><h2>Onde a Limpklin pode ajudar</h2></Reveal>
        <div className="places-list">
          {places.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} className="place-item" delay={index * 0.05}>
              <span className="place-icon"><Icon size={22} /></span><span className="place-index">0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkGallery() {
  return (
    <section className="gallery-section section-space">
      <div className="shell">
        <Reveal className="gallery-heading">
          <div><p className="eyebrow">Caderno de trabalho</p><h2>Rotina de trabalho e resultados</h2></div>
          <p>Uma leitura visual das etapas, equipamentos e peças que fazem parte desse tipo de atendimento.</p>
        </Reveal>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <Reveal key={`${item.label}-${index}`} className={`gallery-item ${item.className}`} delay={index * 0.04}>
              <img src={item.image} alt={`${item.label} — imagem ilustrativa`} width="1000" height="1000" loading="lazy" />
              <span><small>0{index + 1}</small>{item.label}</span>
            </Reveal>
          ))}
        </div>
        <p className="gallery-note">Imagens ilustrativas. Não representam atendimentos, resultados ou clientes reais da Limpklin.</p>
      </div>
    </section>
  )
}
