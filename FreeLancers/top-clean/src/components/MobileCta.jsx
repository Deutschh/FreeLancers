import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../data/siteData'
import { useMobileCta } from '../hooks/useMobileCta'

export function MobileCta() {
  const visible = useMobileCta()
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="mobile-cta"
          initial={reduceMotion ? false : { y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 22, opacity: 0 }}
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            Solicitar orçamento
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
