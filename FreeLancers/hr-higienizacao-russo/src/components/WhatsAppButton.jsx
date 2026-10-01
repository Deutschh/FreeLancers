import { MessageCircleMore } from 'lucide-react'
import { WHATSAPP_URL } from '../data/siteData'

export function WhatsAppButton({ children = 'Solicitar orçamento', variant = 'primary', className = '', compact = false }) {
  const variants = {
    primary: 'bg-brand text-white shadow-[0_12px_30px_rgba(25,143,207,.25)] hover:bg-brand-dark',
    light: 'bg-white text-navy hover:bg-sky-50',
    outline: 'border border-navy/15 bg-white/70 text-navy hover:border-brand/40 hover:bg-white',
  }

  const accessibleLabel = typeof children === 'string' && children.toLowerCase().includes('whatsapp')
    ? children
    : `${children} pelo WhatsApp`

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`button-base ${variants[variant]} ${compact ? 'px-4' : 'px-5'} ${className}`}
      aria-label={accessibleLabel}
    >
      <MessageCircleMore aria-hidden="true" size={19} strokeWidth={2.2} />
      <span>{children}</span>
    </a>
  )
}
