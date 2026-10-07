import { MessageCircleMore } from 'lucide-react'
import { whatsappUrl } from '../data/siteData'

export function WhatsAppLink({ children, variant = 'primary', className = '', icon = true }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`button button-${variant} ${className}`}
    >
      {icon && <MessageCircleMore size={19} aria-hidden="true" />}
      {children}
    </a>
  )
}
