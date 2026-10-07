import { Header } from './components/Header'
import { MobileCta } from './components/MobileCta'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Results } from './sections/Results'
import { Automotive, Residential, Waterproofing, WhyClean } from './sections/EditorialSections'
import { Gallery, Process, ServiceArea } from './sections/ProcessGallery'
import { Contact, Faq, Footer } from './sections/ContactSections'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Results />
        <WhyClean />
        <Residential />
        <Automotive />
        <Waterproofing />
        <Process />
        <Gallery />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
