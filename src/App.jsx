import { BrowserRouter } from "react-router-dom"
import {Navbar, Hero, About, HowItWorks, Features, Contact, Footer} from './components'

function App() {

  return (
   <BrowserRouter>    
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
   </BrowserRouter>
  )
}

export default App
