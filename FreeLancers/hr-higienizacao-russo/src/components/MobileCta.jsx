import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MessageCircleMore } from 'lucide-react'
import { WHATSAPP_URL } from '../data/siteData'

export function MobileCta({ visible }) {
  const reduceMotion = useReducedMotion()
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="mobile-cta md:hidden"
          initial={reduceMotion ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircleMore size={20} aria-hidden="true" />
            <span>Solicitar orçamento</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
