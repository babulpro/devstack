import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Technologies from './component/Technology/Technology'
import type { Technology } from './types/technology'
import techData from "../public/data/technology.json"  // ✅ Direct import
import Footer from './component/Footer/Footer'
 

function App() {
  const data = techData as Technology[]
  
  console.log(data)

  return (
    <>
      <Navbar />
      <Hero />
      <Technologies data={data} />
      <Footer/>
    </>
  )
}

export default App