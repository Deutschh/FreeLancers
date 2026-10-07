import { useEffect, useState } from 'react'

export function useMobileCta(heroRef, finalCtaRef, footerRef) {
  const [pastHero, setPastHero] = useState(false)
  const [nearEnding, setNearEnding] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    const finalCta = finalCtaRef.current
    const footer = footerRef.current
    if (!hero || !finalCta || !footer) return undefined

    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.bottom < 0), { threshold: 0 })
    const endObserver = new IntersectionObserver((entries) => setNearEnding(entries.some((entry) => entry.isIntersecting)), { rootMargin: '80px 0px' })
    heroObserver.observe(hero)
    endObserver.observe(finalCta)
    endObserver.observe(footer)
    return () => { heroObserver.disconnect(); endObserver.disconnect() }
  }, [heroRef, finalCtaRef, footerRef])

  return pastHero && !nearEnding
}
