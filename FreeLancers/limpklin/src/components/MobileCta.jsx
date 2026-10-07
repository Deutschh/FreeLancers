import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MessageCircleMore } from 'lucide-react'
import { whatsappUrl } from '../data/siteData'

export function MobileCta({ visible }) {
  const reduceMotion = useReducedMotion()
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="mobile-cta"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircleMore size={20} />Solicitar orçamento</a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
