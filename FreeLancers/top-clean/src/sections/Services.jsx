import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { services } from '../data/siteData'

export function Services() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeService = services[active]

  return (
    <section id="servicos" className="services-section dark-section section-pad" aria-labelledby="services-title">
      <div className="shell">
        <Reveal className="section-intro services-intro">
          <p className="eyebrow"><span /> Soluções Top Clean</p>
          <h2 id="services-title">Cuidado preciso.<br />Impacto <em>visível.</em></h2>
          <p>Da sala ao interior do carro, cada superfície recebe uma atenção compatível com sua rotina.</p>
        </Reveal>

        <div className="service-rail">
          <div className="service-list" role="list">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <article
                  key={service.number}
                  className={`service-row ${active === index ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  tabIndex="0"
                  role="listitem"
                >
                  <div className="service-mobile-image">
                    <img src={service.image} width="888" height="887" loading="lazy" alt="" />
                  </div>
                  <span className="service-number">{service.number}</span>
                  <div className="service-text"><h3>{service.title}</h3><p>{service.text}</p></div>
                  <span className="service-icon"><Icon size={21} aria-hidden="true" /></span>
                  <ArrowUpRight className="service-arrow" aria-hidden="true" />
                </article>
              )
            })}
          </div>

          <div className="service-media" aria-live="polite">
            <motion.img
              key={activeService.image}
              src={activeService.image}
              width="888"
              height="887"
              loading="lazy"
              alt={`Imagem ilustrativa de ${activeService.title.toLowerCase()}`}
              initial={reduceMotion ? false : { opacity: 0.35, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.36 }}
            />
            <div className="service-media-caption"><span>{activeService.number}</span><p>{activeService.title}</p></div>
            <span className="illustrative-pill">Imagem ilustrativa</span>
          </div>
        </div>
      </div>
    </section>
  )
}
