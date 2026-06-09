import { useEffect, useRef, useState } from 'react'
import heroBg from '../assets/HERO3.png'
import Products from './Products'
import './Hero.css'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [fraction, setFraction] = useState(0)

  const isMobile = window.innerWidth < 768
  const sectionHeight = isMobile ? window.innerHeight * 1.6 : window.innerHeight * 2.8

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const scrollTop = window.scrollY - section.offsetTop
      const maxScroll = section.offsetHeight - window.innerHeight
      const f = Math.min(Math.max(scrollTop / maxScroll, 0), 1)
      setFraction(f)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textY         = -fraction * 500
  const imgY          = fraction * 30
  const slideProgress = Math.max(0, (fraction - 0.6) / 0.4)
  const nextY         = (1 - slideProgress) * 100

  return (
    <section ref={sectionRef} className="hero" style={{ height: sectionHeight }}>
      <div className="hero__sticky">

        <img
          src={heroBg}
          alt="Canarias Beton"
          className="hero__bg"
          style={{ transform: `translate(-50%, calc(-50% + ${imgY}px))` }}
        />
        <div className="hero__overlay" />

        <div className="hero__content" style={{ transform: `translateX(-50%) translateY(${textY}px)` }}>
          <h1 className="hero__title">
            Avanzamos hacia un<br />futuro más sólido
          </h1>
          <p className="hero__sub">
            Fabricación y suministro de hormigón para obra civil,<br />
            construcción residencial e industrial en las Islas Canarias.
          </p>
        </div>

        <div className="next-section" style={{ transform: `translateY(${nextY}%)` }}>
          <Products show={nextY <= 60} />
        </div>

        <div className={`hero__scroll${fraction > 0.02 ? ' hero__scroll--hidden' : ''}`}>
          <div className="hero__scroll-ring"><div className="hero__scroll-dot" /></div>
          <span>Scroll</span>
        </div>

      </div>
    </section>
  )
}
