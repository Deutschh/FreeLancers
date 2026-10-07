import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { navItems, whatsappUrl } from '../data/siteData'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'Tab') {
        const focusable = document.querySelectorAll('.mobile-drawer a, .mobile-drawer button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      trigger?.focus()
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell header-inner">
        <a className="brand" href="#inicio" aria-label="Top Clean, voltar ao início">
          <img src="/images/top-clean-logo.png" width="44" height="44" alt="Top Clean" />
          <span><strong>Top Clean</strong><small>Higienização de estofados</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.slice(0, 6).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp">
          <MessageCircle size={18} aria-hidden="true" />
          <span>Orçamento</span>
        </a>

        <button
          ref={triggerRef}
          type="button"
          className="menu-trigger"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer-backdrop"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => event.target === event.currentTarget && close()}
          >
            <motion.div
              id="mobile-menu"
              className="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={reduceMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="drawer-top">
                <span>Menu</span>
                <button ref={closeRef} type="button" onClick={close} aria-label="Fechar menu"><X /></button>
              </div>
              <nav aria-label="Navegação mobile">
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href} onClick={close}>
                    <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
                  </a>
                ))}
              </nav>
              <a className="drawer-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Falar com a Top Clean
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
