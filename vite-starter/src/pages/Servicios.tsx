import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroCamiones     from '../assets/hero-camiones.webp'
import heroDistribucion from '../assets/hero-distribucion.webp'
import heroBombeo       from '../assets/hero-bombeo.webp'
import imgPlanta        from '../assets/planta-canarias-beton.webp'
import imgTransporte    from '../assets/transporte-a-obra.webp'
import imgEdificacion   from '../assets/edificacion-residencial.webp'
import ServiceHero      from '../components/ServiceHero'
import useInView        from '../hooks/useInView'
import './ServicePage.css'
import './Servicios.css'

/* ── icons ────────────────────────────────────────── */
const IconFactory = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="18" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M2 18l7-8v8M9 18l7-8v8M16 18V8h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 8V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="7" y="22" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="14" y="22" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="21" y="22" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)
const IconTruck = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M2 8h18v14H2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M20 12h5l4 5v5h-9V12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="7" cy="24" r="3" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M2 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const IconPump = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="20" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 24h6M18 24h4l6-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="28" cy="13" r="3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M7 20V14M4 14h6l-3-5-3 5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── overview cards ───────────────────────────────── */
const OVERVIEW = [
  {
    Icon:  IconFactory,
    title: 'Fabricación',
    desc:  'Producimos hormigón fresco con dosificaciones adaptadas a cada proyecto, bajo norma EHE-08 y con control de calidad en planta.',
  },
  {
    Icon:  IconTruck,
    title: 'Distribución',
    desc:  'Flota propia para entrega directa a pie de obra en menos de 90 minutos desde nuestras plantas de Jinámar y Arinaga.',
  },
  {
    Icon:  IconPump,
    title: 'Bombeo',
    desc:  'Bombas estacionarias y de camión para obras en altura o acceso difícil. Alcance vertical de hasta 80 m.',
  },
]

/* ── why us features ──────────────────────────────── */
const FEATURES = [
  { n: '01', title: 'Norma EHE-08',          desc: 'Todo nuestro hormigón se produce bajo la normativa española vigente, con control de calidad en cada amasada.' },
  { n: '02', title: 'Dos plantas propias',    desc: 'Planta Jinámar en Telde y Planta Arinaga en Agüimes. Cobertura total de Gran Canaria.' },
  { n: '03', title: 'Control de calidad',     desc: 'Laboratorio propio y ensayos continuos para garantizar la resistencia y durabilidad del hormigón.' },
  { n: '04', title: 'Hormigones especiales',  desc: 'Fabricamos hormigones de alta resistencia, autocompactantes y con fibras según los requerimientos del proyecto.' },
]

/* ── service detail sections ──────────────────────── */
const DETAILS = [
  {
    tag:   'Fabricación',
    title: 'Hormigón fabricado\na medida',
    desc:  'Canarias Betón fabrica hormigón fresco en sus dos plantas propias: Planta Jinámar en Telde y Planta Arinaga en Agüimes. Cada amasada se produce bajo la normativa EHE-08, con control de calidad continuo en laboratorio propio.',
    points: ['Hormigones estándar y de alta resistencia', 'Autocompactantes y con fibras de acero o polipropileno', '+40 años de experiencia en el sector'],
    image: imgPlanta,
    reverse: false,
  },
  {
    tag:   'Distribución',
    title: 'Entrega directa,\nsin intermediarios',
    desc:  'Contamos con flota propia de camiones hormigonera que opera desde nuestras dos plantas. Controlamos cada entrega de principio a fin, garantizando puntualidad y calidad hasta pie de obra.',
    points: ['Pedidos desde 1 m³ sin recargo', 'Precio cerrado desde la confirmación', 'Cobertura total de Gran Canaria'],
    image: imgTransporte,
    reverse: true,
  },
  {
    tag:   'Bombeo',
    title: 'Llegamos donde\notros no llegan',
    desc:  'Disponemos de bombas estacionarias y de camión para resolver accesos imposibles: alturas, zonas urbanas estrechas o grandes superficies. Operario especializado incluido en el servicio.',
    points: ['Alcance vertical hasta 80 m', 'Bombas de camión con pluma hasta 42 m', 'Coordinación directa con el jefe de obra'],
    image: imgEdificacion,
    reverse: false,
  },
]

/* ── page ─────────────────────────────────────────── */
export default function Servicios() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const overview = useInView(0.05)
  const feat    = useInView(0.1)
  const d0 = useInView(0.1)
  const d1 = useInView(0.1)
  const d2 = useInView(0.1)
  const detailRefs = [d0, d1, d2]

  const cta = useInView(0.1)

  return (
    <main className="srv-page">

      {/* HERO */}
      <ServiceHero
        image={heroCamiones}
        title="Nuestras soluciones"
        sub="Fabricación, distribución y bombeo de hormigón en Gran Canaria. Un solo proveedor, servicio completo."
      />

      {/* OVERVIEW — tag + título + 3 iconos */}
      <section ref={overview.ref as React.RefObject<HTMLElement>} className="srv-overview">
        <div className="srv-overview__head">
          <span className={`sp-el srv-overview__tag${overview.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
            Lo que ofrecemos
          </span>
          <h2 className={`sp-el srv-overview__title${overview.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
            Tres servicios, <span className="srv-overview__accent">un objetivo:</span><br />que tu obra no se detenga
          </h2>
          <p className={`sp-el srv-overview__sub${overview.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            Cada obra tiene sus exigencias. Por eso ofrecemos tres servicios que trabajan de forma coordinada para que el hormigón llegue en las condiciones exactas que tu proyecto necesita.
          </p>
        </div>
        <div className="srv-overview__cards">
          {OVERVIEW.map((item, i) => (
            <div key={item.title} className={`sp-el srv-overview__card${overview.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: `${300 + i * 100}ms` }}>
              <div className="srv-overview__icon"><item.Icon /></div>
              <h3 className="srv-overview__card-title">{item.title}</h3>
              <p className="srv-overview__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section
        className="spage__features"
        style={{ '--features-bg': `url(${heroCamiones})` } as React.CSSProperties}
      >
        <div className="spage__features-inner" ref={feat.ref as React.RefObject<HTMLDivElement>}>
          <div className="spage__features-head">
            <h2 className={`sp-el spage__section-title${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              Por qué elegirnos
            </h2>
            <p className={`sp-el spage__section-sub${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
              Calidad certificada, capacidad de producción y servicio garantizado en toda la isla.
            </p>
          </div>
          <div className="spage__features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.n} className={`sp-el spage__feature-card${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: `${200 + i * 80}ms` }}>
                <span className="spage__feature-n">{f.n}</span>
                <h3 className="spage__feature-title">{f.title}</h3>
                <p className="spage__feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETALLE — texto + foto alternados */}
      {DETAILS.map((d, i) => {
        const { ref, visible } = detailRefs[i]
        return (
          <section
            key={d.tag}
            ref={ref as React.RefObject<HTMLElement>}
            className={`srv-detail${d.reverse ? ' srv-detail--reverse' : ''}`}
          >
            <div className={`sp-el srv-detail__text${visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              <span className="srv-detail__tag">{d.tag}</span>
              <h2 className="srv-detail__title">{d.title.replace('\\n', '\n')}</h2>
              <p className="srv-detail__desc">{d.desc}</p>
              <ul className="srv-detail__points">
                {d.points.map(p => (
                  <li key={p}>
                    <span className="srv-detail__check">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`sp-el srv-detail__img-wrap${visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '160ms' }}>
              <img src={d.image} alt={d.tag} className="srv-detail__img" />
            </div>
          </section>
        )
      })}

      {/* CTA FINAL */}
      <section ref={cta.ref as React.RefObject<HTMLElement>} className="srv-cta">
        <div className={`sp-el srv-cta__inner${cta.visible ? ' sp-el--in' : ''}`}>
          <div className="srv-cta__text">
            <h3 className="srv-cta__title">¿Tienes un proyecto en mente?</h3>
            <p className="srv-cta__body">Solicita tu presupuesto sin compromiso. Nuestro equipo estudiará tu caso para ofrecerte la mejor solución.</p>
          </div>
          <div className="srv-cta__actions">
            <a href="tel:608890399" className="srv-cta__btn srv-cta__btn--primary">
              Llamar ahora · 608 89 03 99
            </a>
            <Link to="/contacto" className="srv-cta__btn srv-cta__btn--secondary">
              Contactar por formulario
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
