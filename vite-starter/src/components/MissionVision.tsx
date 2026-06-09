import { useEffect, useRef, useState } from 'react'
import './MissionVision.css'

const VALUES = [
  { n: '01', title: 'Calidad',        desc: 'Producto bajo norma EHE-08 y control de laboratorio.' },
  { n: '02', title: 'Compromiso',     desc: 'Entregas puntuales y trato directo con la obra.' },
  { n: '03', title: 'Sostenibilidad', desc: 'Procesos ecoamigables y reducción de huella.' },
  { n: '04', title: 'Cercanía',       desc: 'Equipo local que conoce cada barranco de la isla.' },
]

export default function MissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => {
      if (!sectionRef.current) return
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.8) {
        setVisible(true)
        window.removeEventListener('scroll', check)
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <div ref={sectionRef} className="mv">

      {/* top — misión + visión */}
      <div className="mv__top">

        <div className={`mv__card mv__card--light mv-el${visible ? ' mv-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
          <div className="mv__card-header">
            <span className="mv__index">[ 01 ] · NUESTRA MISIÓN</span>
            <span className="mv__icon mv__icon--green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
          <h3 className="mv__card-title">Misión</h3>
          <p className="mv__card-text mv__card-text--accent">
            Proporcionar al cliente el mejor de los productos al mejor de los precios, mientras puntualizamos en las exigencias de calidad.
          </p>
        </div>

        <div className={`mv__card mv__card--dark mv-el${visible ? ' mv-el--in' : ''}`} style={{ transitionDelay: '150ms' }}>
          <div className="mv__card-header">
            <span className="mv__index mv__index--dark">[ 02 ] · NUESTRA VISIÓN</span>
            <span className="mv__icon mv__icon--green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
          <h3 className="mv__card-title mv__card-title--white">Visión</h3>
          <p className="mv__card-text mv__card-text--white">
            Liderar la industria del hormigón en Canarias siendo reconocidos por nuestra innovación, calidad y compromiso con la sostenibilidad — ofreciendo soluciones de vanguardia que superen las expectativas de cada cliente.
          </p>
        </div>

      </div>

      {/* bottom — valores */}
      <div className="mv__values">
        {VALUES.map((v, i) => (
          <div
            key={v.n}
            className={`mv__value mv-el${visible ? ' mv-el--in' : ''}`}
            style={{ transitionDelay: `${300 + i * 100}ms` }}
          >
            <span className="mv__value-n">{v.n}</span>
            <h4 className="mv__value-title">{v.title}</h4>
            <p className="mv__value-desc">{v.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
