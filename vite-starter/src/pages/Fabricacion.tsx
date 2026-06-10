import { useEffect } from 'react'
import heroBg from '../assets/hero-camiones.webp'
import img1 from '../assets/planta-canarias-beton.webp'
import img2 from '../assets/planta-cuba.webp'
import img3 from '../assets/hero-bombeo.webp'
import DarkCTA from '../components/DarkCTA'
import ServiceHero from '../components/ServiceHero'
import ServiceCarousel from '../components/ServiceCarousel'
import useInView from '../hooks/useInView'
import './ServicePage.css'

const FEATURES = [
  { n: '01', title: 'Norma EHE-08', desc: 'Todo nuestro hormigón se produce bajo la normativa española vigente, con control de calidad en cada amasada.' },
  { n: '02', title: 'Dos plantas propias', desc: 'Planta Jinámar en Telde y Planta Arinaga en Agüimes. Cobertura total de Gran Canaria.' },
  { n: '03', title: 'Control de calidad', desc: 'Laboratorio propio y ensayos continuos para garantizar la resistencia y durabilidad del hormigón.' },
  { n: '04', title: 'Hormigones especiales', desc: 'Fabricamos hormigones de alta resistencia, autocompactantes y con fibras según los requerimientos del proyecto.' },
]

const STEPS = [
  { n: '01', title: 'Solicitud', desc: 'Realiza tu pedido por teléfono, email o formulario online.' },
  { n: '02', title: 'Dosificación', desc: 'Composición exacta según normativa EHE-08 y los requisitos del proyecto.' },
  { n: '03', title: 'Amasado', desc: 'Mezclado en planta bajo control de temperatura y humedad.' },
  { n: '04', title: 'Control', desc: 'Ensayo de consistencia y toma de muestras en cada amasada.' },
  { n: '05', title: 'Carga y salida', desc: 'Camión hormigonera listo y documentado para tu obra.' },
]

const SPECS = [
  { tipo: 'HA-25/B/20/IIa', resistencia: '25 N/mm²', consistencia: 'Blanda', uso: 'Soleras, cimentaciones, muros' },
  { tipo: 'HA-30/B/20/IIa', resistencia: '30 N/mm²', consistencia: 'Blanda-Fluida', uso: 'Pilares, vigas, forjados' },
  { tipo: 'HA-35/B/20/IIa', resistencia: '35 N/mm²', consistencia: 'Fluida', uso: 'Estructuras de alta resistencia' },
  { tipo: 'HAF con fibras', resistencia: 'Variable', consistencia: 'Variable', uso: 'Pavimentos industriales, túneles' },
]

export default function Fabricacion() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const desc = useInView()
  const feat = useInView()
  const proc = useInView()
  const specs = useInView()

  return (
    <main className="spage">

      <ServiceHero
        image={heroBg}
        title="Fabricación"
        sub="Producimos hormigón fresco bajo norma EHE-08 en nuestras dos plantas de Gran Canaria."
      />

      <section ref={desc.ref as React.RefObject<HTMLElement>} className="spage__desc">
        <div className="spage__desc-inner">
          <div className="spage__desc-text">
            <span className={`sp-el spage__eyebrow spage__eyebrow--dark${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>
              Sobre el servicio
            </span>
            <h2 className={`sp-el spage__section-title${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '120ms' }}>
              Hormigón fabricado<br />con precisión
            </h2>
            <p className={`sp-el spage__desc-body${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '240ms' }}>
              Canarias Betón fabrica hormigón fresco en sus <strong>dos plantas propias en Gran Canaria</strong>: Planta Jinámar en Telde y Planta Arinaga en Agüimes. Desde ambas ubicaciones cubrimos la totalidad de la isla con tiempos de entrega competitivos y total trazabilidad del producto.
            </p>
            <p className={`sp-el spage__desc-body${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '360ms' }}>
              Cada amasada se produce bajo la <strong>normativa española EHE-08</strong>, con control de calidad continuo en laboratorio propio. Fabricamos hormigones estándar, de alta resistencia, autocompactantes y con adición de fibras de polipropileno o acero según las exigencias del proyecto.
            </p>
          </div>
          <div className={`sp-el${desc.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="spage__desc-stats">
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">2</span>
                <span className="spage__desc-stat-label">Plantas propias en Gran Canaria</span>
              </div>
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">100%</span>
                <span className="spage__desc-stat-label">Producción bajo norma EHE-08</span>
              </div>
              <div className="spage__desc-stat">
                <span className="spage__desc-stat-value">+40</span>
                <span className="spage__desc-stat-label">Años de experiencia en el sector</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spage__features" style={{ '--features-bg': `url(${heroBg})` } as React.CSSProperties}>
        <div className="spage__features-inner" ref={feat.ref as React.RefObject<HTMLDivElement>}>
          <div className="spage__features-head">
            <h2 className={`sp-el spage__section-title${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '0ms' }}>Por qué elegirnos</h2>
            <p className={`sp-el spage__section-sub${feat.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>Calidad certificada, capacidad de producción y servicio garantizado en toda la isla.</p>
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
              Desde el pedido hasta la entrega en obra, un proceso claro y sin sorpresas.
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
              Tipos de hormigón
            </h2>
            <p className={`sp-el spage__specs-sub${specs.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '100ms' }}>
              Fabricamos hormigones para cada necesidad estructural y de proyecto.
            </p>
          </div>
          <div className={`sp-el${specs.visible ? ' sp-el--in' : ''}`} style={{ transitionDelay: '200ms' }}>
            <table className="spage__specs-table">
              <thead>
                <tr>
                  <th>Designación</th>
                  <th>Resistencia</th>
                  <th>Consistencia</th>
                  <th>Aplicación típica</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map(s => (
                  <tr key={s.tipo}>
                    <td>{s.tipo}</td>
                    <td><span className="spec-tag">{s.resistencia}</span></td>
                    <td>{s.consistencia}</td>
                    <td>{s.uso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ServiceCarousel slides={[
        { img: img1, label: 'Planta Canarias Betón' },
        { img: img2, label: 'Cuba hormigonera' },
        { img: img3, label: 'Hormigón bombeado' },
      ]} />

      <DarkCTA />
    </main>
  )
}
