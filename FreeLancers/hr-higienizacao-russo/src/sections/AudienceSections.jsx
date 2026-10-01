import { Check, CarFront, Sofa } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { galleryItems } from '../data/siteData'

const residentialItems = ['Sofás', 'Colchões', 'Poltronas', 'Cadeiras', 'Estofados diversos']

export function Residential() {
  return (
    <section className="section-pad bg-white">
      <div className="site-shell residential-grid">
        <Reveal className="residential-visual">
          <img src="/images/residential-living-room.jpg" alt="Sala clara com sofá em destaque" loading="lazy" />
          <div className="residential-badge"><Sofa size={21} /><span><small>Para a sua rotina</small><strong>Conforto bem cuidado</strong></span></div>
        </Reveal>
        <Reveal className="residential-copy" delay={0.08}>
          <SectionHeading eyebrow="Residencial" title="Cuidado para os estofados que fazem parte da sua rotina." text="Uma atenção que acompanha o uso real da sua casa, da sala ao quarto, sem você precisar transportar as peças." />
          <ul className="check-list">
            {residentialItems.map((item) => <li key={item}><Check size={17} />{item}</li>)}
          </ul>
          <WhatsAppButton className="mt-7 w-full sm:w-fit">Quero higienizar meu estofado</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  )
}

export function Automotive() {
  return (
    <section className="automotive-section">
      <div className="site-shell automotive-grid">
        <Reveal className="automotive-copy">
          <div className="eyebrow text-sky-300">Automotivo</div>
          <h2 className="section-title mt-3 text-white">Seu carro também merece esse cuidado.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">Bancos e estofamentos internos acumulam marcas do uso diário. A higienização ajuda a recuperar a sensação de um interior mais cuidado e agradável.</p>
          <div className="auto-points"><span><CarFront size={18} /> Bancos e estofamento interno</span><span><Check size={18} /> Atendimento com agendamento</span></div>
          <WhatsAppButton variant="light" className="mt-7">Solicitar orçamento automotivo</WhatsAppButton>
        </Reveal>
        <Reveal className="automotive-visual" delay={0.08}>
          <img src="/images/car-seat-cleaning.jpg" alt="Higienização sendo realizada em banco automotivo" loading="lazy" />
          <span className="auto-caption">Cuidado até nos detalhes</span>
        </Reveal>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="section-pad bg-soft">
      <div className="site-shell">
        <Reveal><SectionHeading eyebrow="Galeria" title="Diferentes peças, o mesmo cuidado." text="Uma seleção visual dos tipos de estofado atendidos pela HR." /></Reveal>
        <div className="gallery-grid mt-9 md:mt-12">
          {galleryItems.map((item, index) => (
            <Reveal key={`${item.label}-${index}`} className={`gallery-item ${item.className}`} delay={index * 0.05}>
              <img src={item.image} alt={`${item.label} — imagem ilustrativa`} loading="lazy" />
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">Imagens ilustrativas. Não representam atendimentos ou clientes específicos.</p>
      </div>
    </section>
  )
}
