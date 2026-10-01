import { useEffect, useState } from 'react'

export function useMobileCta(heroRef, finalCtaRef) {
  const [heroPassed, setHeroPassed] = useState(false)
  const [finalVisible, setFinalVisible] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    const finalCta = finalCtaRef.current
    if (!hero || !finalCta) return undefined

    const heroObserver = new IntersectionObserver(([entry]) => {
      setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom < 0)
    }, { threshold: 0 })
    const finalObserver = new IntersectionObserver(([entry]) => setFinalVisible(entry.isIntersecting), { threshold: 0.12 })
    heroObserver.observe(hero)
    finalObserver.observe(finalCta)
    return () => {
      heroObserver.disconnect()
      finalObserver.disconnect()
    }
  }, [heroRef, finalCtaRef])

  return heroPassed && !finalVisible
}
