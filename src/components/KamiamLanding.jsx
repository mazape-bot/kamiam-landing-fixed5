import Navbar       from './Navbar'
import Hero         from './Hero'
import About        from './About'
import Features     from './Features'
import Products     from './Products'
import Testimonials from './Testimonials'
import FAQ          from './FAQ'
import Contact      from './Contact'
import Footer       from './Footer'

/**
 * Smooth-scrolls to a section by id.
 * Falls back gracefully if the element doesn't exist.
 */
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function KamiamLanding() {
  return (
    <>
      <Navbar  scrollTo={scrollTo} />
      <main>
        <Hero         scrollTo={scrollTo} />
        <About />
        <Features />
        <Products />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
