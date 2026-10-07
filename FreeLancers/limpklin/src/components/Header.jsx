import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, MessageCircleMore, X } from 'lucide-react'
import { navLinks, whatsappUrl } from '../data/siteData'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const firstLinkRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    const menuButton = menuButtonRef.current
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      menuButton?.focus()
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="shell header-row">
          <a href="#inicio" className="brand" aria-label="Limpklin, voltar ao início">
            <img src="/images/limpklin-logo.png" alt="" width="48" height="48" />
            <span><strong>Limpklin</strong><small>Cuidado em cada etapa</small></span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>

          <div className="header-actions">
            <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp">
              <MessageCircleMore size={18} /><span>WhatsApp</span>
            </a>
            <button ref={menuButtonRef} type="button" className="menu-button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) closeMenu() }}
          >
            <motion.aside
              id="mobile-menu"
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={reduceMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: '100%' }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu-top">
                <span className="eyebrow">Navegação</span>
                <button type="button" onClick={closeMenu} aria-label="Fechar menu"><X size={22} /></button>
              </div>
              <nav aria-label="Navegação mobile">
                {navLinks.map((link, index) => (
                  <a key={link.href} ref={index === 0 ? firstLinkRef : null} href={link.href} onClick={closeMenu}>
                    <span>0{index + 1}</span>{link.label}<ArrowUpRight size={18} />
                  </a>
                ))}
              </nav>
              <a className="menu-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircleMore size={20} /> Solicitar orçamento
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
