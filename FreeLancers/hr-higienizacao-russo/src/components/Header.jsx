import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, MessageCircleMore, X } from 'lucide-react'
import { navLinks, WHATSAPP_URL } from '../data/siteData'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    const menuTrigger = triggerRef.current
    document.body.style.overflow = 'hidden'
    const focusables = dialogRef.current?.querySelectorAll('a, button') || []
    focusables[0]?.focus()

    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'Tab' && focusables.length) {
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKey)
      menuTrigger?.focus()
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-shell flex h-[72px] items-center justify-between gap-3 lg:h-20">
        <a href="#inicio" className="brand-lockup" aria-label="HR Higienização Russo — início">
          <img src="/images/hr-logo.png" alt="" />
          <span><strong>HR Higienização</strong><small>Russo</small></span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => <a key={link.href} className="nav-link" href={link.href}>{link.label}</a>)}
        </nav>

        <div className="flex items-center gap-2">
          <a className="header-quote" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircleMore size={18} aria-hidden="true" />
            <span className="hidden min-[380px]:inline">Orçamento</span>
          </a>
          <button
            ref={triggerRef}
            type="button"
            className="menu-trigger lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-backdrop lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu principal"
              className="mobile-menu"
              initial={reduceMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold uppercase tracking-[.16em] text-brand">Menu</span>
                <button className="menu-trigger" type="button" onClick={() => setOpen(false)} aria-label="Fechar menu"><X size={22} /></button>
              </div>
              <nav className="mt-10 flex flex-col" aria-label="Navegação mobile">
                {navLinks.map((link, index) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="mobile-nav-link">
                    <span>{String(index + 1).padStart(2, '0')}</span>{link.label}
                  </a>
                ))}
              </nav>
              <a className="button-base mt-auto w-full bg-brand text-white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircleMore size={19} /> Falar no WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
