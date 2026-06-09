import { useEffect, useRef, useState } from 'react'
import hero1 from '../assets/hormigon-fresco.jpeg'
import hero2 from '../assets/hormigon-bombeado.jpeg'
import hero3 from '../assets/fibra-polipropileno.png'
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
          Fabricamos y suministramos hormigón adaptado<br />
          a cada tipo de obra y proyecto.
        </p>
      </div>

      <div className="products__grid">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className={`products__card${visible ? ' products__card--in' : ''}`}
            style={{ transitionDelay: `${200 + i * 120}ms` }}
          >
            <div className="products__card-img">
              <img src={c.img} alt={c.title} />
            </div>
            <div className="products__card-body">
              <h3 className="products__card-title">{c.title}</h3>
              <p className="products__card-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`products__actions${visible ? ' products__actions--in' : ''}`}>
        <a href="#contacto" className="products__btn products__btn--dark">Solicitar presupuesto</a>
        <a href="#" className="products__btn products__btn--outline">Ver productos</a>
      </div>

    </section>
  )
}
