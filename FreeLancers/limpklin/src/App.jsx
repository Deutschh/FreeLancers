import { useRef } from 'react'
import { Header } from './components/Header'
import { MobileCta } from './components/MobileCta'
import { useMobileCta } from './hooks/useMobileCta'
import { CareProcess, Results } from './sections/CareResults'
import { FAQ, FinalCTA, Footer, QuoteProcess } from './sections/Contact'
import { Hero, Services, TrustRibbon } from './sections/HeroServices'
import { Places, Waterproofing, WorkGallery } from './sections/ProtectionGallery'

export default function App() {
  const heroRef = useRef(null)
  const finalCtaRef = useRef(null)
  const footerRef = useRef(null)
  const showMobileCta = useMobileCta(heroRef, finalCtaRef, footerRef)

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero heroRef={heroRef} />
        <TrustRibbon />
        <Services />
        <CareProcess />
        <Results />
        <Waterproofing />
        <Places />
        <WorkGallery />
        <QuoteProcess />
        <FAQ />
        <FinalCTA finalCtaRef={finalCtaRef} />
      </main>
      <Footer footerRef={footerRef} />
      <MobileCta visible={showMobileCta} />
    </>
  )
}
