import AboutSection from "./components/AboutSection"
import BlogSection from "./components/BlogSection"
import ContactSection  from "./components/ContactSection"


import FeaturedProperties from "./components/FeaturedProperties"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PropertyTypes from "./components/PropertyTypes"
import Testimonials from "./components/Testimonials"



function App() {
  

  return (
    <>
     <Header />
     <HeroSection />
     <PropertyTypes />
     <FeaturedProperties />
     <AboutSection />
     <Testimonials />
     <BlogSection />
     <ContactSection />
    </>
   
  )
}

export default App
