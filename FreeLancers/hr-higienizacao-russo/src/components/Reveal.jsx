import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0, y = 22, as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
