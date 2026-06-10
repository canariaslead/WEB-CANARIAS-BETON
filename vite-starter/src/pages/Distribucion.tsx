import { useEffect } from 'react'
import heroBg from '../assets/hero-distribucion.webp'
import ServiceHero from '../components/ServiceHero'
import img1 from '../assets/planta-arinaga.webp'
import img2 from '../assets/control-calidad.webp'
import img3 from '../assets/transporte-a-obra.webp'
import DarkCTA from '../components/DarkCTA'
import ServiceCarousel from '../components/ServiceCarousel'
import useInView from '../hooks/useInView'
import './ServicePage.css'

const FEATURES = [
  { n: '01', title: 'Flota propia', desc: 'Camiones hormigonera propios para entrega directa a pie de obra. Sin intermediarios, sin demoras.' },
  { n: '02', title: 'Cobertura total', desc: 'Servicio en toda Gran Canaria. Llegamos a cualquier punto de la isla en el tiempo comprometido.' },
  { n: '03', title: 'Precio cerrado', desc: 'Presupuesto fijo sin sorpresas. El precio acordado es el precio final, sin costes ocultos.' },
  { n: '04', title: 'Pedidos flexibles', desc: 'Aceptamos pedidos desde 1 m³. Adaptamos la entrega al ritmo de tu obra.' },
]

const STEPS = [
  { n: '01', title: 'Solicitud', desc: 'Contacta con nuestro equipo para calcular cantidad y fecha de entrega.' },
  { n: '02', title: 'Presupuesto', desc: 'Precio cerrado confirmado en menos de 24 horas, sin costes ocultos.' },
  { n: '03', title: 'Fabricación', desc: 'Producción en la planta más próxima a tu obra en el horario acordado.' },
  { n: '04', title: 'Transporte', desc: 'Salida del camión hormigonera con albarán y documentación de calidad.' },
  { n: '05', title: 'Entrega', desc: 'Descarga directa a pie de obra en la fecha y hora acordadas.' },
]

const SPECS = [
  { campo: 'Capacidad por camión', detalle: '6, 8 o 10 m³' },
  { campo: 'Pedido mínimo', detalle: '1 m³' },
  { campo: 'Cobertura', detalle: 'Gran Canaria completa' },
  { campo: 'Tiempo de respuesta', detalle: '60–90 min desde planta' },
  { campo: 'Horario de servicio', detalle: 'Lunes a sábado, 6:00–20:00 h' },
]

export default function Distribucion() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const desc = useInView()
  const feat = useInView()
  const proc = useInView()
  const specs = useInView()

  return (
    <main className="spage">

      <ServiceHero
        image={heroBg}
        title="Distribución"
        sub="Flota propia de hormigoneras para entrega directa a pie de obra en toda Gran Canaria."
      />

      <section ref={desc.ref as React.RefObject<HTMLElement>} className="spage__desc">
        <div className="spage__desc-inner">
          <div className="spage__desc-text">
            <span className={`sp-el spage__eyebrow spage__eyebrow--dark${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              Sobre el servicio
            </span>
            <h2 className={`sp-el spage__section-title${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '120ms' }}>
              Entrega directa,<br />sin intermediarios
            </h2>
            <p className={`sp-el spage__desc-body${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '240ms' }}>
              Contamos con una <strong>flota propia de camiones hormigonera</strong> que opera desde nuestras dos plantas en Gran Canaria. Al no depender de terceros para el transporte, controlamos cada entrega de principio a fin, garantizando puntualidad y calidad del producto hasta pie de obra.
            </p>
            <p className={`sp-el spage__desc-body${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '360ms' }}>
              Aceptamos <strong>pedidos desde 1 m³</strong> y adaptamos los horarios de entrega al ritmo de tu obra. Precio cerrado desde la confirmación del pedido: lo que acordamos es lo que pagas, sin costes adicionales por espera o distancia.
            </p>
          </div>
          <div className={`sp-el${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="spage__desc-stats">
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">1 m³</span>
                <span className="spage__desc-stat-label">Pedido mínimo sin recargo</span>
              </div>
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">0</span>
                <span className="spage__desc-stat-label">Intermediarios — flota 100% propia</span>
              </div>
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">GC</span>
                <span className="spage__desc-stat-label">Cobertura total de Gran Canaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spage__features" style={{ '--features-bg': `url(${heroBg})` } as React.CSSProperties}>
        <div className="spage__features-inner" ref={feat.ref as React.RefObject<HTMLDivElement>}>
          <div className="spage__features-head">
            <h2 className={`sp-el spage__section-title${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>Nuestro servicio</h2>
            <p className={`sp-el spage__section-sub${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>Entrega puntual, precio cerrado y cobertura en toda la isla.</p>
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

      <section ref={proc.ref as React.RefObject<HTMLElement>} className="spage__process">
        <div className="spage__process-inner">
          <div className="spage__process-head">
            <h2 className={`sp-el spage__section-title${proc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              Cómo funciona
            </h2>
            <p className={`sp-el spage__section-sub${proc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
              Cinco pasos desde tu llamada hasta el hormigón en obra.
            </p>
          </div>
          <div className="spage__process-steps">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`sp-el spage__step${proc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: `${i * 250}ms` }}>
                <div className="spage__step-n">{s.n}</div>
                <h3 className="spage__step-title">{s.title}</h3>
                <p className="spage__step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={specs.ref as React.RefObject<HTMLElement>} className="spage__specs">
        <div className="spage__specs-inner">
          <div className="spage__specs-head">
            <h2 className={`sp-el spage__specs-title${specs.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              Datos del servicio
            </h2>
            <p className={`sp-el spage__specs-sub${specs.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
              Todo lo que necesitas saber antes de hacer tu pedido.
            </p>
          </div>
          <div className={`sp-el${specs.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <table className="spage__specs-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Detalle</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map(s => (
                  <tr key={s.campo}>
                    <td>{s.campo}</td>
                    <td><span className="spec-tag">{s.detalle}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ServiceCarousel slides={[
        { img: img1, label: 'Planta Arinaga' },
        { img: img2, label: 'Control de calidad' },
        { img: img3, label: 'Transporte a obra' },
      ]} />

      <DarkCTA />
    </main>
  )
}
