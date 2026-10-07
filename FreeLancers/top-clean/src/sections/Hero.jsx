import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { AnchorButton, WhatsAppButton } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { trustItems } from '../data/siteData'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <section id="inicio" className="hero dark-section" aria-labelledby="hero-title">
        <div className="hero-grid shell">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow"><span /> Higienização e impermeabilização</p>
            <h1 id="hero-title">O resultado<br /><em>fala por si.</em></h1>
            <p className="hero-lead">Higienização e impermeabilização de sofás, poltronas, cadeiras e estofamentos automotivos em Jundiaí e região.</p>
            <div className="hero-actions">
              <WhatsAppButton />
              <AnchorButton href="#resultados">Ver resultados</AnchorButton>
            </div>
            <div className="hero-meta">
              <span><MapPin size={17} aria-hidden="true" /> Jundiaí e região</span>
              <a href="#servicos">Explorar serviços <ArrowDown size={16} aria-hidden="true" /></a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-image-split">
              <img className="hero-image-before" src="/images/compare-sofa-before.jpg" width="888" height="887" alt="Sofá ilustrativo antes da higienização" />
              <div className="hero-image-after"><img src="/images/compare-sofa-after.jpg" width="888" height="887" alt="Sofá ilustrativo depois da higienização" /></div>
              <span className="hero-split-line" aria-hidden="true"><i /></span>
              <span className="hero-image-tag">Comparativo ilustrativo</span>
            </div>
            <div className="hero-number" aria-hidden="true">01</div>
          </motion.div>
        </div>
      </section>

      <section className="transform-band" aria-labelledby="transform-title">
        <div className="shell transform-grid">
          <Reveal className="transform-title-wrap">
            <p className="kicker">Transformação em evidência</p>
            <h2 id="transform-title">Do uso diário ao aspecto renovado.</h2>
          </Reveal>
          <div className="trust-rail" role="list">
            {trustItems.map(({ label, icon: Icon }, index) => (
              <Reveal key={label} className="trust-item" delay={index * 0.07} role="listitem">
                <Icon size={22} aria-hidden="true" />
                <span>{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
