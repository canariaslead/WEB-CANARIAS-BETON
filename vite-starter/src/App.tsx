import { useState } from 'react'
import useLenis from './hooks/useLenis'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Statement from './components/Statement'
import MissionVision from './components/MissionVision'
import PhotoGrid from './components/PhotoGrid'
import DarkCTA from './components/DarkCTA'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  const [done, setDone] = useState(false)
  useLenis()
  return (
    <>
      {!done && <IntroAnimation onDone={() => setDone(true)} />}
      <Navbar />
      <Hero />
      <Statement />
      <MissionVision />
      <PhotoGrid />
      <DarkCTA />
      <Location />
      <Footer />
    </>
  )
}

export default App
