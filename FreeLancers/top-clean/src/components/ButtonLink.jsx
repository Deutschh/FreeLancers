import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/siteData'

export function WhatsAppButton({ children = 'Solicitar orçamento', className = '', compact = false }) {
  return (
    <a
      className={`button button-primary ${compact ? 'button-compact' : ''} ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children} pelo WhatsApp`}
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span>{children}</span>
      {!compact && <ArrowRight size={18} aria-hidden="true" />}
    </a>
  )
}

export function AnchorButton({ href, children, className = '' }) {
  return (
    <a className={`button button-secondary ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  )
}
