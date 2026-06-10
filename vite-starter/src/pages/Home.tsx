import { useState } from 'react'
import useLenis from '../hooks/useLenis'
import IntroAnimation from '../components/IntroAnimation'
import Hero from '../components/Hero'
import Statement from '../components/Statement'
import MissionVision from '../components/MissionVision'
import PhotoGrid from '../components/PhotoGrid'
import DarkCTA from '../components/DarkCTA'
import Location from '../components/Location'

export default function Home() {
  const [done, setDone] = useState(false)
  useLenis()
  return (
    <>
      {!done && <IntroAnimation onDone={() => setDone(true)} />}
      <Hero />
      <Statement />
      <MissionVision />
      <PhotoGrid />
      <DarkCTA />
      <Location />
    </>
  )
}
