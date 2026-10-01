import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Camera, ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { faqs, navLinks } from '../data/siteData'

export function ServiceArea() {
  return (
    <section className="section-pad bg-white">
      <div className="site-shell area-card">
        <Reveal className="area-visual">
          <div className="area-rings" aria-hidden="true"><span /><span /><span /></div>
          <MapPin size={38} aria-hidden="true" />
          <small>São Paulo — SP</small>
        </Reveal>
        <Reveal className="area-copy" delay={0.08}>
          <SectionHeading eyebrow="Área de atendimento" title="Atendimento em São Paulo" text="A HR Higienização Russo realiza atendimento a domicílio em São Paulo e regiões próximas." />
          <p className="mt-4 font-bold text-navy">Consulte disponibilidade para sua região.</p>
          <WhatsAppButton className="mt-6 w-full sm:w-fit">Consultar minha região</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  const reduceMotion = useReducedMotion()
  return (
    <section id="duvidas" className="section-pad faq-section">
      <div className="site-shell faq-grid">
        <Reveal><SectionHeading eyebrow="Dúvidas frequentes" title="Antes de agendar, você pode querer saber." text="As informações principais para solicitar seu atendimento com tranquilidade." /></Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <Reveal key={item.question} className="faq-item" delay={index * 0.03}>
                <h3>
                  <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={`faq-${index}`}>
                    <span>{item.question}</span><ChevronDown className={isOpen ? 'rotate-180' : ''} size={20} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${index}`}
                      role="region"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    ><p>{item.answer}</p></motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA({ finalCtaRef }) {
  return (
    <section ref={finalCtaRef} id="contato" className="final-cta-section">
      <div className="site-shell">
        <Reveal className="final-cta-card">
          <div className="final-bubble one" aria-hidden="true" /><div className="final-bubble two" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow text-sky-300">Seu orçamento começa com uma foto</p>
            <h2>Que tal ver seu estofado com outra aparência?</h2>
            <p>Envie uma foto pelo WhatsApp e solicite um orçamento.</p>
            <WhatsAppButton variant="light" className="mt-7">Enviar foto pelo WhatsApp</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="site-shell footer-grid">
        <div>
          <a href="#inicio" className="brand-lockup footer-brand"><img src="/images/hr-logo.png" alt="" /><span><strong>HR Higienização</strong><small>Russo</small></span></a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Higienização residencial e automotiva com atendimento a domicílio.</p>
        </div>
        <nav aria-label="Links do rodapé"><h2>Navegação</h2>{navLinks.slice(1).map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <div className="footer-contact"><h2>Contato</h2><a href="tel:+5511984211331"><Phone size={17} />(11) 98421-1331</a><a href="mailto:hrhigienizacaorusso@gmail.com"><Mail size={17} />hrhigienizacaorusso@gmail.com</a><a href="https://instagram.com/russo.hr" target="_blank" rel="noreferrer"><Camera size={17} />@russo.hr</a><span><MapPin size={17} />São Paulo — SP</span></div>
      </div>
      <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} HR Higienização Russo</span><span>Protótipo comercial</span></div>
    </footer>
  )
}
