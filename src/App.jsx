import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, About, HowItWorks, Features, Contact, Footer, Waitlist, OurPartners} from './components'

function App() {

  return (
   <BrowserRouter>    
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Waitlist />
      <Contact />
      <OurPartners />
      <Footer />
   </BrowserRouter>
  )
}

export default App
