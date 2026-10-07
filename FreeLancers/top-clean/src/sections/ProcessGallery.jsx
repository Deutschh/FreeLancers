import { MapPin } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WhatsAppButton } from '../components/ButtonLink'
import { processSteps } from '../data/siteData'

export function Process() {
  return (
    <section id="processo" className="process-section section-pad" aria-labelledby="process-title">
      <div className="shell">
        <Reveal className="process-heading">
          <p className="kicker">Sem complicação</p>
          <h2 id="process-title">Como <em>funciona.</em></h2>
          <p>Da primeira foto ao atendimento, um caminho simples e direto.</p>
        </Reveal>
        <div className="process-line">
          {processSteps.map(({ number, title, text, icon: Icon }, index) => (
            <Reveal key={number} className="process-step" delay={index * 0.08}>
              <span className="process-dot"><Icon size={20} aria-hidden="true" /></span>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const gallery = [
  { image: '/images/compare-sofa-after.jpg', title: 'Aspecto renovado', className: 'gallery-wide', alt: 'Sofá limpo em imagem ilustrativa' },
  { image: '/images/auto-cleaning-process.jpg', title: 'Automotivo em processo', className: 'gallery-tall', alt: 'Processo ilustrativo de limpeza automotiva' },
  { image: '/images/compare-armchair-after.jpg', title: 'Cuidado em cada superfície', className: '', alt: 'Poltrona limpa em imagem ilustrativa' },
  { image: '/images/waterproofing-detail.jpg', title: 'Proteção complementar', className: '', alt: 'Aplicação ilustrativa de impermeabilização' },
  { image: '/images/residential-room.jpg', title: 'Conforto para a casa', className: 'gallery-wide', alt: 'Ambiente residencial ilustrativo com estofados' },
]

export function Gallery() {
  return (
    <section className="gallery-section dark-section section-pad" aria-labelledby="gallery-title">
      <div className="shell">
        <Reveal className="gallery-heading">
          <div><p className="eyebrow"><span /> Transformação em foco</p><h2 id="gallery-title">Resultados que chamam <em>atenção.</em></h2></div>
          <p>Um recorte visual de residências, veículos e detalhes do processo. Todas as imagens desta galeria são ilustrativas.</p>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <Reveal key={`${item.title}-${index}`} className={`gallery-item ${item.className}`} delay={(index % 3) * 0.06}>
              <img src={item.image} width="888" height="887" loading="lazy" alt={item.alt} />
              <div><span>{String(index + 1).padStart(2, '0')}</span><p>{item.title}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceArea() {
  return (
    <section className="area-section" aria-labelledby="area-title">
      <div className="shell area-panel">
        <Reveal className="area-copy">
          <p className="kicker">Atendimento local</p>
          <h2 id="area-title">Jundiaí <em>e região.</em></h2>
          <p>Consulte a disponibilidade de atendimento para sua localização e envie uma foto do estofado.</p>
          <WhatsAppButton>Consultar minha região</WhatsAppButton>
        </Reveal>
        <div className="area-graphic" aria-hidden="true">
          <span className="area-ring ring-one" />
          <span className="area-ring ring-two" />
          <span className="area-ring ring-three" />
          <span className="area-pin"><MapPin /></span>
          <span className="area-word">JUNDIAÍ</span>
        </div>
      </div>
    </section>
  )
}
