import { useEffect, useRef, useState } from 'react'
import plantImg   from '../assets/planta-canarias-beton.webp'
import './Statement.css'

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount]     = useState(3)
  const counterStarted             = useRef(false)

  useEffect(() => {
    let sectionDone = false

    const check = () => {
      if (!sectionDone && sectionRef.current) {
        const r = sectionRef.current.getBoundingClientRect()
        if (r.top < window.innerHeight * 0.75) {
          setVisible(true)
          sectionDone = true
          window.removeEventListener('scroll', check)
        }
      }
    }

    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  // contador arranca cuando visible llega al badge (delay 900ms)
  useEffect(() => {
    if (!visible || counterStarted.current) return
    const t = setTimeout(() => {
      counterStarted.current = true
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setCount(Math.round(3 + 37 * eased))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, 900)
    return () => clearTimeout(t)
  }, [visible])

  const v = visible

  return (
    <section ref={sectionRef} className="statement">

      <div className="statement__split">

        {/* left */}
        <div className="statement__left">
          <span className={`stmt-el${v ? ' stmt-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
            <span className="statement__eyebrow">CANARIAS BETON</span>
          </span>
          <h2 className={`stmt-el statement__title${v ? ' stmt-el--in' : ''}`} style={{ transitionDelay: '180ms' }}>
            Compromiso con la<br />
            <span className="statement__accent">Calidad</span> y el Servicio
          </h2>
          <p className={`stmt-el statement__text${v ? ' stmt-el--in' : ''}`} style={{ transitionDelay: '360ms' }}>
            Canarias Betón S.L., fundada en 2020 con base en Gran Canaria, está especializada en
            materiales para el sector de la construcción: <strong>hormigón, áridos y morteros.</strong>
          </p>
          <p className={`stmt-el statement__text${v ? ' stmt-el--in' : ''}`} style={{ transitionDelay: '520ms' }}>
            Nuestra materia prima se extrae directamente desde <strong>nuestra propia cantera de piedra
            en Juan Grande</strong>, garantizando un árido de máxima calidad y trazabilidad total
            desde el origen hasta la obra.
          </p>
          <a href="#contacto" className={`stmt-el statement__cta${v ? ' stmt-el--in' : ''}`} style={{ transitionDelay: '680ms' }}>
            SOBRE CANARIAS BETON
          </a>
        </div>

        {/* right */}
        <div className="statement__right">
          <img src={plantImg} alt="Planta Canarias Beton"
               className={`stmt-el stmt-el--right statement__img${v ? ' stmt-el--in' : ''}`}
               style={{ transitionDelay: '250ms' }} />
          <div className={`stmt-el stmt-el--pop statement__badge${v ? ' stmt-el--in' : ''}`}
               style={{ transitionDelay: '900ms' }}>
            <span className="statement__badge-value">+{count}</span>
            <span className="statement__badge-label">Años de<br/>experiencia</span>
          </div>
        </div>

      </div>

    </section>
  )
}
