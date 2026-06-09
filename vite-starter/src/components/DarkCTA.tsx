import { useEffect, useRef, useState } from 'react'
import './DarkCTA.css'

export default function DarkCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => {
      if (!sectionRef.current) return
      const r = sectionRef.current.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.8) {
        setVisible(true)
        window.removeEventListener('scroll', check)
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  const v = visible

  return (
    <section ref={sectionRef} className="darkcta">
      <div className="darkcta__inner">

        {/* left */}
        <div className={`darkcta__left dcta-el${v ? ' dcta-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
          <span className="darkcta__eyebrow">
            <span className="darkcta__eyebrow-line" /> Canarias Beton <span className="darkcta__eyebrow-line" />
          </span>
          <h2 className="darkcta__title">
            Solicita tu<br />presupuesto en<br />
            <span className="darkcta__accent">minutos</span>
          </h2>
          <p className="darkcta__text">
            Dinos qué necesitas y te damos precio cerrado al instante.
            Sin sorpresas, sin esperas. Entrega directa a tu obra.
          </p>
          <ul className="darkcta__checks">
            <li><span className="darkcta__check">✓</span> Precio cerrado desde el primer momento</li>
            <li><span className="darkcta__check">✓</span> Entrega garantizada en toda Gran Canaria</li>
            <li><span className="darkcta__check">✓</span> Hormigón fresco fabricado el mismo día</li>
          </ul>
        </div>

        {/* right — formulario */}
        <div className={`darkcta__right dcta-el dcta-el--right${v ? ' dcta-el--in' : ''}`} style={{ transitionDelay: '220ms' }}>
          <form className="cform" onSubmit={e => e.preventDefault()}>
            <p className="cform__title">Pedir presupuesto</p>

            <div className="cform__row">
              <div className="cform__field">
                <label className="cform__label">Nombre</label>
                <input className="cform__input" type="text" placeholder="Tu nombre" />
              </div>
              <div className="cform__field">
                <label className="cform__label">Teléfono</label>
                <input className="cform__input" type="tel" placeholder="+34 600 000 000" />
              </div>
            </div>

            <div className="cform__field">
              <label className="cform__label">Email</label>
              <input className="cform__input" type="email" placeholder="correo@empresa.com" />
            </div>

            <div className="cform__row">
              <div className="cform__field">
                <label className="cform__label">Tipo de hormigón</label>
                <select className="cform__input cform__select">
                  <option value="">Seleccionar</option>
                  <option>HA-25</option>
                  <option>HA-30</option>
                  <option>HA-35</option>
                  <option>HM-20</option>
                  <option>Especial</option>
                </select>
              </div>
              <div className="cform__field">
                <label className="cform__label">Volumen (m³)</label>
                <input className="cform__input" type="number" placeholder="Ej: 40" min="1" />
              </div>
            </div>

            <div className="cform__field">
              <label className="cform__label">Dirección de obra</label>
              <input className="cform__input" type="text" placeholder="Municipio, dirección..." />
            </div>

            <button type="submit" className="cform__submit">
              Enviar solicitud →
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
