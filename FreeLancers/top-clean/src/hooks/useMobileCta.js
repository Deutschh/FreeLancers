import { useEffect, useState } from 'react'

export function useMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#inicio')
    const ending = document.querySelector('#contato')
    if (!hero || !ending) return undefined

    let heroPassed = false
    let endingVisible = false
    const sync = () => setVisible(heroPassed && !endingVisible)

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0
        sync()
      },
      { threshold: 0 },
    )
    const endingObserver = new IntersectionObserver(
      ([entry]) => {
        endingVisible = entry.isIntersecting
        sync()
      },
      { threshold: 0.05 },
    )

    heroObserver.observe(hero)
    endingObserver.observe(ending)
    return () => {
      heroObserver.disconnect()
      endingObserver.disconnect()
    }
  }, [])

  return visible
}
