import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroBg        from '../assets/carga-en-planta.webp'
import imgParallax   from '../assets/hero-camiones.webp'
import imgPlanta     from '../assets/planta-canarias-beton.webp'
import imgCamion     from '../assets/camion-hormigonera.webp'
import imgArinaga    from '../assets/planta-arinaga.webp'
import ServiceHero   from '../components/ServiceHero'
import useInView     from '../hooks/useInView'
import './ServicePage.css'
import './Servicios.css'

/* ── icons ────────────────────────────────────────── */
const IconStar = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M16 3l3.09 6.26L26 10.27l-5 4.87 1.18 6.88L16 18.77l-6.18 3.25L11 15.14 6 10.27l6.91-1.01L16 3z"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)
const IconMap = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M16 2C11.03 2 7 6.03 7 11c0 7 9 19 9 19s9-12 9-19c0-4.97-4.03-9-9-9z"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="1.8"/>
  </svg>
)
const IconLeaf = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M6 26c0 0 4-14 14-16 6-1.3 10-2 10-2s-1 4-2 10c-2 10-16 14-16 14"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 26 L16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

/* ── overview cards ───────────────────────────────── */
const OVERVIEW = [
  {
    Icon:  IconStar,
    title: 'Raíces canarias',
    desc:  'Somos una empresa 100% canaria. Conocemos cada municipio, cada acceso difícil y cada exigencia del clima insular porque trabajamos aquí desde el primer día.',
  },
  {
    Icon:  IconMap,
    title: 'Control total del proceso',
    desc:  'Extraemos el árido de nuestra propia cantera en Juan Grande, lo procesamos en planta y lo entregamos con flota propia. Ni un eslabón externalizado, ni un punto de fallo ajeno a nosotros.',
  },
  {
    Icon:  IconLeaf,
    title: 'Trato directo',
    desc:  'Sin intermediarios ni call centers. Hablas con el equipo que fabrica y entrega tu hormigón. Precio cerrado desde la primera llamada, sin sorpresas al final de la obra.',
  },
]

/* ── valores ──────────────────────────────────────── */
const VALORES = [
  { n: '01', title: 'Calidad',        desc: 'Cada amasada pasa por laboratorio propio antes de salir de planta. No hay atajos cuando se trata de seguridad estructural.' },
  { n: '02', title: 'Puntualidad',    desc: 'El hormigón fresco no espera. Organizamos rutas y turnos para que la cuba llegue en la ventana de tiempo que necesitas.' },
  { n: '03', title: 'Proximidad',     desc: 'Nuestro equipo conoce la isla palmo a palmo. Una incidencia en obra tiene respuesta en minutos, no en días.' },
  { n: '04', title: 'Sostenibilidad', desc: 'Árido propio, rutas optimizadas y mejora continua de procesos para reducir emisiones en cada metro cúbico producido.' },
]

/* ── secciones detalle ────────────────────────────── */
const DETAILS = [
  {
    tag:    'Nuestra historia',
    title:  'Nacidos aquí,\nconstruimos aquí',
    desc:   'En 2020 detectamos una necesidad real en el mercado canario: un proveedor de hormigón que combinara calidad certificada con servicio local y trato directo. Así nació Canarias Betón — con cantera propia, plantas propias y un equipo que lleva décadas en el sector.',
    points: ['Cantera de árido propia en Juan Grande', 'Dos plantas en Telde y Agüimes desde el primer año', 'Más de 40 años de experiencia acumulada en el equipo fundador'],
    image:  imgPlanta,
    reverse: false,
  },
  {
    tag:    'Cómo trabajamos',
    title:  'Precio cerrado,\nentrega garantizada',
    desc:   'Desde que confirmas el pedido hasta que la cuba llega a pie de obra, el precio no cambia. Planificamos las rutas según la planta más cercana a tu obra para asegurar la trabajabilidad del hormigón y minimizar tiempos de espera.',
    points: ['Pedidos desde 1 m³ sin recargo mínimo', 'Confirmación de entrega en menos de 2 horas', 'Seguimiento directo con el equipo de planta'],
    image:  imgCamion,
    reverse: true,
  },
  {
    tag:    'Nuestras instalaciones',
    title:  'Dos plantas,\ncobertura total',
    desc:   'La Planta Jinámar en Telde cubre el norte y centro de la isla. La Planta Arinaga en Agüimes cubre el sur y el este. Ambas operan con equipos Schwing Stetter de última generación y laboratorio propio para el control de cada amasada.',
    points: ['Planta Jinámar — P.I. Maípez, Telde', 'Planta Arinaga — C. los Cactus, Agüimes', 'Equipos Schwing Stetter con capacidad para hormigones especiales'],
    image:  imgArinaga,
    reverse: false,
  },
]

/* ── página ───────────────────────────────────────── */
export default function Nosotros() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const overview = useInView(0.05)
  const feat     = useInView(0.1)
  const d0 = useInView(0.1)
  const d1 = useInView(0.1)
  const d2 = useInView(0.1)
  const detailRefs = [d0, d1, d2]
  const cta = useInView(0.1)

  return (
    <main className="srv-page">

      {/* HERO */}
      <ServiceHero
        image={heroBg}
        title="Quiénes somos"
        sub="Canarias Betón es una empresa 100% canaria. Árido propio, plantas propias, flota propia — y un equipo que lleva décadas construyendo la isla."
      />

      {/* OVERVIEW */}
      <section ref={overview.ref as React.RefObject<HTMLElement>} className="srv-overview">
        <div className="srv-overview__head">
          <span className={`sp-el srv-overview__tag${overview.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
            La empresa
          </span>
          <h2 className={`sp-el srv-overview__title${overview.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
            Detrás de cada obra,<br /><span className="srv-overview__accent">estamos nosotros</span>
          </h2>
          <p className={`sp-el srv-overview__sub${overview.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            Controlamos todo el proceso: extraemos el árido en Juan Grande, fabricamos el hormigón en nuestras plantas y lo entregamos con flota propia en menos de 90 minutos. Más de 20 años operando en Gran Canaria, sin depender de terceros y sin excusas.
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

      {/* VALORES */}
      <section
        className="spage__features"
        style={{ '--features-bg': `url(${imgParallax})` } as React.CSSProperties}
      >
        <div className="spage__features-inner" ref={feat.ref as React.RefObject<HTMLDivElement>}>
          <div className="spage__features-head">
            <h2 className={`sp-el spage__section-title${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              Nuestros valores
            </h2>
            <p className={`sp-el spage__section-sub${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
              Lo que nos define no son las palabras, sino las decisiones que tomamos en cada pedido, cada entrega y cada incidencia.
            </p>
          </div>
          <div className="spage__features-grid">
            {VALORES.map((v, i) => (
              <div key={v.n} className={`sp-el spage__feature-card${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: `${200 + i * 80}ms` }}>
                <span className="spage__feature-n">{v.n}</span>
                <h3 className="spage__feature-title">{v.title}</h3>
                <p className="spage__feature-desc">{v.desc}</p>
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
              <h2 className="srv-detail__title">{d.title}</h2>
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

      {/* LOCALIZACIÓN */}
      <section className="nos-map">
        <div className="nos-map__iframe-wrap">
          <iframe
            title="Planta Arinaga"
            src="https://maps.google.com/maps?q=Calle+los+Cactus+33,+Aguimes,+Las+Palmas&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="nos-map__info">
          <span className="nos-map__eyebrow">Encuéntranos</span>
          <h2 className="nos-map__title">Ven a visitarnos<br /><span className="nos-map__accent">cuando quieras</span></h2>
          <div className="nos-map__block">
            <p className="nos-map__label">Instalaciones</p>
            <p className="nos-map__value">C. los Cactus 33 · 35118 Agüimes – Las Palmas</p>
            <p className="nos-map__value">C. Suiza nº 4 · P.I. Maípez · Jinámar – Telde – Las Palmas</p>
          </div>
          <div className="nos-map__block">
            <p className="nos-map__label">Teléfono</p>
            <a href="tel:608890399" className="nos-map__value nos-map__link">608 89 03 99</a>
          </div>
          <div className="nos-map__block">
            <p className="nos-map__label">Email</p>
            <a href="mailto:info@canariasbetons.com" className="nos-map__value nos-map__link">info@canariasbetons.com</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section ref={cta.ref as React.RefObject<HTMLElement>} className="srv-cta">
        <div className={`sp-el srv-cta__inner${cta.visible ? ' sp-el--in' : ''}`}>
          <div className="srv-cta__text">
            <h3 className="srv-cta__title">¿Trabajamos juntos?</h3>
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
