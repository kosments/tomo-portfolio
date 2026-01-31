import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import LifeInCanada from '@/components/sections/LifeInCanada'
import Activities from '@/components/sections/Activities'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="gallery">
          <Gallery />
        </div>
        
        <div id="life-in-canada">
          <LifeInCanada />
        </div>
        
        <div id="activities">
          <Activities />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}