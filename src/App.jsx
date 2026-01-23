import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
