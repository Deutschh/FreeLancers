import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Camera, ChevronDown, Globe2, Mail, Phone, Send } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { faqs, navLinks, quoteSteps } from '../data/siteData'

export function QuoteProcess() {
  return (
    <section id="orcamento" className="quote-section section-space">
      <div className="shell quote-layout">
        <Reveal className="quote-copy">
          <p className="eyebrow">Orçamento sem complicação</p>
          <h2>Uma conversa simples resolve o primeiro passo.</h2>
          <p>Envie uma foto, conte o que precisa e receba as orientações iniciais pelo WhatsApp.</p>
          <WhatsAppLink className="quote-desktop-button">Começar agora</WhatsAppLink>
        </Reveal>

        <div className="quote-chat" aria-label="Etapas para solicitar orçamento">
          <div className="chat-top"><span className="chat-status" /><span>Limpklin</span><small>Atendimento pelo WhatsApp</small></div>
          <div className="chat-body">
            {quoteSteps.map((step, index) => (
              <Reveal key={step.number} className={`chat-message ${index % 2 ? 'chat-message-right' : ''}`} delay={index * 0.08}>
                <span>{step.number}</span><div><strong>{step.title}</strong><p>{step.text}</p></div>
              </Reveal>
            ))}
          </div>
          <a href="https://wa.me/5511984654709?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Limpklin%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer" className="chat-compose">
            <span>Olá! Gostaria de um orçamento.</span><i><Send size={18} /></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <section id="duvidas" className="faq-section section-space">
      <div className="shell faq-layout">
        <Reveal className="faq-intro">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2>Antes de agendar, vale saber.</h2>
          <p>As respostas essenciais para você conversar com a Limpklin com tranquilidade.</p>
          <a href="mailto:limpklin@gmail.com"><Mail size={18} /> Prefere escrever? Envie um e-mail</a>
        </Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = index === open
            return (
              <Reveal key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`} delay={index * 0.03}>
                <h3><button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{item.question}</span><ChevronDown size={20} /></button></h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-answer-${index}`} role="region" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} className="faq-answer">
                      <p>{item.answer}</p>
                    </motion.div>
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
      <div className="shell final-cta-card">
        <div className="final-cta-photo"><img src="/images/hero-profissional.jpg" alt="Profissional cuidando de um sofá — imagem ilustrativa" width="1200" height="1508" loading="lazy" /></div>
        <Reveal className="final-cta-copy">
          <p className="eyebrow">Vamos cuidar dessa peça?</p>
          <h2>Seu estofado merece esse cuidado.</h2>
          <p>Fale com a Limpklin pelo WhatsApp e solicite um orçamento de forma rápida.</p>
          <WhatsAppLink variant="light">Falar no WhatsApp</WhatsAppLink>
          <small>Consulte atendimento para sua região.</small>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer({ footerRef }) {
  return (
    <footer ref={footerRef} className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a href="#inicio" className="brand"><img src="/images/limpklin-logo.png" alt="" width="48" height="48" /><span><strong>Limpklin</strong><small>Cuidado em cada etapa</small></span></a>
          <p>Higienização de estofados com cuidado em cada etapa.</p>
        </div>
        <nav aria-label="Links do rodapé"><h2>Navegação</h2>{navLinks.slice(1).map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <div className="footer-contact"><h2>Contato</h2><a href="tel:+5511984654709"><Phone size={17} />(11) 98465-4709</a><a href="mailto:limpklin@gmail.com"><Mail size={17} />limpklin@gmail.com</a><a href="https://instagram.com/limpklin" target="_blank" rel="noreferrer"><Camera size={17} />@limpklin</a><a href="https://www.facebook.com/limpklin/" target="_blank" rel="noreferrer"><Globe2 size={17} />Limpklin no Facebook</a></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Limpklin</span><span>Protótipo comercial</span></div>
    </footer>
  )
}
