import { useRef } from 'react'
import { Header } from './components/Header'
import { MobileCta } from './components/MobileCta'
import { useMobileCta } from './hooks/useMobileCta'
import { Hero, Services, TrustBar } from './sections/HeroSections'
import { Process, Results, WhyClean } from './sections/ResultsSections'
import { Automotive, Gallery, Residential } from './sections/AudienceSections'
import { FAQ, FinalCTA, Footer, ServiceArea } from './sections/ContactSections'

export default function App() {
  const heroRef = useRef(null)
  const finalCtaRef = useRef(null)
  const showMobileCta = useMobileCta(heroRef, finalCtaRef)

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero heroRef={heroRef} />
        <TrustBar />
        <Services />
        <Results />
        <WhyClean />
        <Process />
        <Residential />
        <Automotive />
        <Gallery />
        <ServiceArea />
        <FAQ />
        <FinalCTA finalCtaRef={finalCtaRef} />
      </main>
      <Footer />
      <MobileCta visible={showMobileCta} />
    </>
  )
}
