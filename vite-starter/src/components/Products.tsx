import { useEffect, useRef, useState } from 'react'
import hero1     from '../assets/hero-distribucion.webp'
import hero2     from '../assets/hero-bombeo.webp'
import hero3     from '../assets/producto-fibra.webp'
import sikaLogo  from '../assets/sika.svg'
import prearsa   from '../assets/logo-prearsa.webp'
import asinca    from '../assets/logo-asinca.webp'
import bycanarias from '../assets/logo-bycanarias.webp'
import arifoma   from '../assets/logo-arifoma.webp'
import './Products.css'

interface Props { show?: boolean }

const CARDS = [
  {
    img: hero1,
    title: 'Fabricación',
    desc: 'Producimos hormigón fresco bajo norma EHE-08 en nuestras dos plantas. Control de calidad en cada amasada.',
  },
  {
    img: hero2,
    title: 'Distribución',
    desc: 'Flota propia de hormigoneras para entrega directa a pie de obra en toda Gran Canaria. Precio cerrado sin sorpresas.',
  },
  {
    img: hero3,
    title: 'Servicio de Bombeo',
    desc: 'Bombas estacionarias y de camión para vertidos en altura o acceso difícil. Cobertura en toda la isla.',
  },
]

export default function Products({ show = false }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      )
    } else {
      setVisible(false)
    }
  }, [show])

  return (
    <section ref={ref} className="products">

      <div className="products__head">
        <h2 className={`products__title${visible ? ' products__title--in' : ''}`}>
          Encuentra la solución<br />que necesitas.
        </h2>
        <p className={`products__sub${visible ? ' products__sub--in' : ''}`}>
          Fabricamos y suministramos hormigón adaptado a cada tipo de obra y proyecto.
        </p>
      </div>

      <div className="products__grid">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className={`products__card${visible ? ' products__card--in' : ''}`}
            style={{ transitionDelay: `${200 + i * 120}ms` }}
          >
            <img src={c.img} alt={c.title} className="products__card-bg" />
            <div className="products__card-overlay" />
            <div className="products__card-content">
              <h3 className="products__card-title">{c.title}</h3>
              <p className="products__card-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`products__marquee-wrap${visible ? ' products__partners--in' : ''}`}>
        <p className="products__marquee-label">Proveedores y colaboradores de confianza</p>
        <div className="products__marquee">
          <div className="products__logos">
            <img src={sikaLogo}   alt="Sika"       className="products__logo-img" />
            <img src={prearsa}    alt="Prearsa"     className="products__logo-img" />
            <img src={asinca}     alt="Asinca"      className="products__logo-img" />
            <img src={bycanarias} alt="By Canarias" className="products__logo-img" />
            <img src={arifoma}    alt="Arifoma"     className="products__logo-img" />
            <img src={sikaLogo}   alt="" className="products__logo-img" aria-hidden="true" />
            <img src={prearsa}    alt="" className="products__logo-img" aria-hidden="true" />
            <img src={asinca}     alt="" className="products__logo-img" aria-hidden="true" />
            <img src={bycanarias} alt="" className="products__logo-img" aria-hidden="true" />
            <img src={arifoma}    alt="" className="products__logo-img" aria-hidden="true" />
            <img src={sikaLogo}   alt="" className="products__logo-img" aria-hidden="true" />
            <img src={prearsa}    alt="" className="products__logo-img" aria-hidden="true" />
            <img src={asinca}     alt="" className="products__logo-img" aria-hidden="true" />
            <img src={bycanarias} alt="" className="products__logo-img" aria-hidden="true" />
            <img src={arifoma}    alt="" className="products__logo-img" aria-hidden="true" />
          </div>
        </div>
      </div>

    </section>
  )
}
