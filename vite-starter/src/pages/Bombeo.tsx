import { useEffect } from 'react'
import heroBg from '../assets/hero-bombeo.webp'
import ServiceHero from '../components/ServiceHero'
import img1 from '../assets/edificacion-residencial.webp'
import img2 from '../assets/infraestructura-viaria.webp'
import img3 from '../assets/obra-industrial.webp'
import DarkCTA from '../components/DarkCTA'
import ServiceCarousel from '../components/ServiceCarousel'
import useInView from '../hooks/useInView'
import './ServicePage.css'

const FEATURES = [
  { n: '01', title: 'Bombas estacionarias', desc: 'Para grandes volúmenes y distancias. Ideal en obras civiles e infraestructuras.' },
  { n: '02', title: 'Bombas de camión', desc: 'Máxima flexibilidad para accesos difíciles, alturas y trabajos en zonas urbanas.' },
  { n: '03', title: 'Vertidos en altura', desc: 'Capacidad de bombeo hasta pisos altos en obras residenciales e industriales.' },
  { n: '04', title: 'Toda la isla', desc: 'Cobertura completa en Gran Canaria. Coordinación directa con tu jefe de obra.' },
]

const STEPS = [
  { n: '01', title: 'Evaluación', desc: 'Análisis del acceso, altura requerida y volumen estimado de la obra.' },
  { n: '02', title: 'Selección', desc: 'Elegimos el equipo más adecuado: bomba estacionaria o camión bomba.' },
  { n: '03', title: 'Coordinación', desc: 'Planificación conjunta con el jefe de obra para optimizar tiempos.' },
  { n: '04', title: 'Posicionamiento', desc: 'Instalación y estabilización del equipo de bombeo en la posición correcta.' },
  { n: '05', title: 'Vertido', desc: 'Bombeo continuo y controlado hasta completar el volumen del pedido.' },
]

const SPECS = [
  { equipo: 'Camión bomba', alcance: 'Hasta 42 m (pluma)', caudal: 'Medio-alto', uso: 'Edificación residencial e industrial' },
  { equipo: 'Bomba telescópica', alcance: 'Hasta 52 m', caudal: 'Alto', uso: 'Obras en altura, residencial' },
  { equipo: 'Bomba estacionaria', alcance: 'Hasta 80 m', caudal: 'Muy alto', uso: 'Infraestructuras, grandes obras civiles' },
  { equipo: 'Bomba de línea', alcance: 'Variable', caudal: 'Bajo-medio', uso: 'Accesos difíciles, sótanos' },
]

export default function Bombeo() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const desc = useInView()
  const feat = useInView()
  const proc = useInView()
  const specs = useInView()

  return (
    <main className="spage">

      <ServiceHero
        image={heroBg}
        title="Servicio de Bombeo"
        sub="Bombas estacionarias y de camión para vertidos en altura o acceso difícil."
      />

      <section ref={desc.ref as React.RefObject<HTMLElement>} className="spage__desc">
        <div className="spage__desc-inner">
          <div className="spage__desc-text">
            <span className={`sp-el spage__eyebrow spage__eyebrow--dark${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              Sobre el servicio
            </span>
            <h2 className={`sp-el spage__section-title${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '120ms' }}>
              Hormigón donde<br />otros no llegan
            </h2>
            <p className={`sp-el spage__desc-body${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '240ms' }}>
              El servicio de bombeo de Canarias Betón resuelve los casos donde el acceso directo con camión hormigonera es imposible o inviable: <strong>alturas, accesos estrechos, distancias largas o zonas urbanas</strong> con espacio reducido. Disponemos de distintos equipos para adaptarnos a cualquier condición de obra.
            </p>
            <p className={`sp-el spage__desc-body${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '360ms' }}>
              Nuestro equipo técnico evalúa cada obra de forma individualizada para seleccionar el equipo más eficiente y garantizar un <strong>vertido continuo, controlado y sin interrupciones</strong>. Coordinación directa con el jefe de obra desde el primer contacto.
            </p>
          </div>
          <div className={`sp-el${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="spage__desc-stats">
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">80 m</span>
                <span className="spage__desc-stat-label">Alcance vertical máximo</span>
              </div>
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">4</span>
                <span className="spage__desc-stat-label">Tipos de equipo de bombeo</span>
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
            <h2 className={`sp-el spage__section-title${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>Capacidades</h2>
            <p className={`sp-el spage__section-sub${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>Soluciones de bombeo para cualquier tipo de obra y condición de acceso.</p>
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
              De la evaluación al vertido, sin complicaciones.
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
              Equipos disponibles
            </h2>
            <p className={`sp-el spage__specs-sub${specs.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
              Cada obra tiene su equipo ideal. Aquí van nuestras opciones.
            </p>
          </div>
          <div className={`sp-el${specs.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <table className="spage__specs-table">
              <thead>
                <tr>
                  <th>Equipo</th>
                  <th>Alcance vertical</th>
                  <th>Caudal</th>
                  <th>Uso ideal</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map(s => (
                  <tr key={s.equipo}>
                    <td>{s.equipo}</td>
                    <td><span className="spec-tag">{s.alcance}</span></td>
                    <td>{s.caudal}</td>
                    <td>{s.uso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ServiceCarousel slides={[
        { img: img1, label: 'Edificación residencial' },
        { img: img2, label: 'Infraestructura viaria' },
        { img: img3, label: 'Obra industrial' },
      ]} />

      <DarkCTA />
    </main>
  )
}
