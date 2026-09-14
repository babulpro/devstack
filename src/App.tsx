import { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Technologies from './component/Technology/Technology'
import type { Technology } from './types/technology'
import techData from '../public/data/technology.json'
import Footer from './component/Footer/Footer'
import TechnologiesSkeleton from './component/Technology/technologySkeleton'

function App() {
  const [data, setData] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a short fetch delay (e.g. 1 second)
    const timer = setTimeout(() => {
      setData(techData as Technology[])
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />

      {isLoading ? (
        <TechnologiesSkeleton />
      ) : (
        <Technologies data={data} />
      )}

      <Footer />
    </>
  )
}

export default App