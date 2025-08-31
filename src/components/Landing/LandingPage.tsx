import Footer from './Footer'
import Hero from './Hero'
import Highlights from './Highlights'
import Pricing from './Pricing'
import Usecase from './Usecase'
import Working from './Working'
import Contact from './Contact'

const LandingPage = () => {
  return (
    <>
      <section className="">
        <Hero />
      </section>

      <section className="bg-light-gray py-20">
        <Highlights />
      </section>

      <section id="working" className="bg-light-gray py-20">
        <Working />
      </section>

      <section id="usecases" className="bg-white py-20">
        <Usecase />
      </section>

      <section id="pricing" className="bg-light-gray py-20">
        <Pricing />
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-white py-20"
      >
        <Contact/>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage
