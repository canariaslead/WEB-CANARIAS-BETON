import { useEffect, useRef, useState } from 'react'
import './Location.css'

const PLANTS = [
  {
    name: 'Planta Jinámar',
    address: 'Calle Suiza nº 4 · P.I. Maípez · Jinámar · Telde',
    phone: '608 89 03 99',
    hours: 'L-V 7:00 – 18:00',
    mapSrc: 'https://maps.google.com/maps?q=Calle+Suiza+4,+Jinamar,+Telde,+Las+Palmas&output=embed',
    mapsUrl: 'https://maps.google.com/?q=Calle+Suiza+4,+Jinamar,+Telde',
    active: true,
  },
  {
    name: 'Planta Arinaga',
    address: 'C. los Cactus 33 · 35118 · Agüimes',
    phone: '608 89 03 99',
    hours: 'L-V 7:00 – 17:00',
    mapSrc: 'https://maps.google.com/maps?q=Calle+los+Cactus+33,+Aguimes,+Las+Palmas&output=embed',
    mapsUrl: 'https://maps.google.com/?q=Calle+los+Cactus+33,+Aguimes',
    active: false,
  },
]

export default function Location() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const check = () => {
      if (!sectionRef.current) return
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.85) {
        setVisible(true)
        window.removeEventListener('scroll', check)
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <div ref={sectionRef} className="loc">
      <div className="loc__inner">

        {/* left */}
        <div className={`loc__left loc-el${visible ? ' loc-el--in' : ''}`}>
          <span className="loc__eyebrow">// Plantas — Gran Canaria</span>
          <h2 className="loc__title">
            Hormigón fresco en Gran Canaria desde dos plantas estratégicas.
          </h2>
          <p className="loc__desc">
            Cubrimos la isla desde Jinámar (norte) y Arinaga (sur-este).
            Operamos los pedidos por proximidad para conservar las
            propiedades del hormigón fresco y bajar la huella de carbono del suministro.
          </p>

          <ul className="loc__plants">
            {PLANTS.map((p, i) => (
              <li
                key={i}
                className={`loc__plant${active === i ? ' loc__plant--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="loc__plant-dot" />
                <div className="loc__plant-info">
                  <span className="loc__plant-name">{p.name}</span>
                  <span className="loc__plant-addr">{p.address}</span>
                </div>
                <span className="loc__plant-phone">{p.phone}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* right — mapa */}
        <div className={`loc__right loc-el loc-el--right${visible ? ' loc-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
          <div className="loc__map-wrap">
            <iframe
              key={active}
              title={PLANTS[active].name}
              src={PLANTS[active].mapSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="loc__card">
            <div className="loc__card-info">
              <span className="loc__card-label">Planta activa</span>
              <span className="loc__card-name">{PLANTS[active].name}</span>
              <span className="loc__card-addr">{PLANTS[active].address}</span>
              <span className="loc__card-hours">{PLANTS[active].hours}</span>
            </div>
            <a href={PLANTS[active].mapsUrl} target="_blank" rel="noopener noreferrer" className="loc__card-btn">
              Cómo llegar ↗
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}
