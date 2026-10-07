import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, CircleUserRound, Instagram, MapPin, Phone } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WhatsAppButton } from '../components/ButtonLink'
import { faqs, navItems } from '../data/siteData'

export function Faq() {
  const [open, setOpen] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <section id="duvidas" className="faq-section section-pad" aria-labelledby="faq-title">
      <div className="shell faq-grid">
        <Reveal className="faq-heading">
          <p className="kicker">Dúvidas frequentes</p>
          <h2 id="faq-title">Antes de solicitar seu <em>orçamento.</em></h2>
          <p>As respostas essenciais para você entender o próximo passo.</p>
        </Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const expanded = open === index
            const panelId = `faq-panel-${index}`
            return (
              <div className={`faq-item ${expanded ? 'is-open' : ''}`} key={item.question}>
                <button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? -1 : index)}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.question}</strong>
                  <ChevronDown aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      id={panelId}
                      className="faq-answer"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contato" className="contact-section dark-section" aria-labelledby="contact-title">
      <div className="shell contact-card">
        <Reveal className="contact-copy">
          <p className="eyebrow"><span /> Seu orçamento começa com uma foto</p>
          <h2 id="contact-title">Quer ver essa diferença no <em>seu estofado?</em></h2>
          <p>Envie uma foto pelo WhatsApp, informe sua região e solicite seu orçamento.</p>
          <WhatsAppButton>Falar com a Top Clean</WhatsAppButton>
        </Reveal>
        <div className="contact-visual" aria-hidden="true">
          <span className="contact-circle circle-one" />
          <span className="contact-circle circle-two" />
          <span className="contact-mark">TC</span>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer dark-section">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#inicio" aria-label="Top Clean, voltar ao início">
            <img src="/images/top-clean-logo.png" width="48" height="48" alt="Top Clean" />
            <span><strong>Top Clean</strong><small>Higienização e impermeabilização</small></span>
          </a>
          <p>Higienização e impermeabilização de estofados em Jundiaí e região.</p>
        </div>
        <nav className="footer-links" aria-label="Links do rodapé">
          <h3>Navegação</h3>
          {navItems.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-contact">
          <h3>Contato</h3>
          <a href="tel:+5511945954042"><Phone size={17} aria-hidden="true" />(11) 94595-4042</a>
          <a href="https://instagram.com/topcleaan_" target="_blank" rel="noreferrer"><Instagram size={17} aria-hidden="true" />@topcleaan_</a>
          <span><MapPin size={17} aria-hidden="true" />Jundiaí e região</span>
          <span><CircleUserRound size={17} aria-hidden="true" />Facebook: Top Clean Jundiaí</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Top Clean.</span>
        <span>Protótipo comercial visual.</span>
      </div>
    </footer>
  )
}
