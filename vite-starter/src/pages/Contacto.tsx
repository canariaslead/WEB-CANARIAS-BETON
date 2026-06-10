import { useEffect } from 'react'
import heroBg from '../assets/hormigonado.webp'
import contactoImg from '../assets/planta1.jpg'
import './ServicePage.css'
import './Contacto.css'

export default function Contacto() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="spage">

      {/* HERO */}
      <section className="spage__hero spage__hero--short">
        <img src={heroBg} alt="" className="spage__hero-bg" style={{ transform: 'scaleX(-1)', objectPosition: 'right 40%' }} />
        <div className="spage__hero-overlay" style={{ background: 'rgba(0,0,0,0.45)' }} />
        <div className="spage__hero-content">
          <span className="spage__eyebrow">Estamos aquí</span>
          <h1 className="spage__hero-title">Conecta con nosotros</h1>
          <p className="spage__hero-sub">¿Tienes un proyecto en mente o necesitas ayuda de algún tipo? Escríbenos y te respondemos en menos de 24 horas.</p>
        </div>
      </section>

      {/* FORMULARIO + FOTO */}
      <section className="cpage">
        {/* izquierda — formulario */}
        <div className="cpage__form-wrap">
          <span className="cpage__tag">Contacto</span>
          <h2 className="cpage__title">¿En qué podemos<br />ayudarte?</h2>
          <p className="cpage__sub">Cuéntanos qué necesitas y te decimos cómo podemos ayudarte. Sin compromiso, sin presupuesto por sorpresa.</p>

          <form className="cpage__form" onSubmit={e => e.preventDefault()}>
            <div className="cpage__row">
              <div className="cpage__field">
                <input type="text" placeholder="Nombre" className="cpage__input" />
              </div>
              <div className="cpage__field">
                <input type="text" placeholder="Empresa (opcional)" className="cpage__input" />
              </div>
            </div>
            <div className="cpage__row">
              <div className="cpage__field">
                <input type="tel" placeholder="Teléfono" className="cpage__input" />
              </div>
              <div className="cpage__field">
                <input type="email" placeholder="Correo electrónico" className="cpage__input" />
              </div>
            </div>
            <div className="cpage__field">
              <select className="cpage__input cpage__select">
                <option value="">Tipo de servicio</option>
                <option>Fabricación</option>
                <option>Distribución</option>
                <option>Servicio de Bombeo</option>
              </select>
            </div>
            <div className="cpage__field">
              <textarea placeholder="Mensaje" className="cpage__input cpage__textarea" rows={5} />
            </div>
            <button type="submit" className="cpage__submit">Enviar consulta →</button>
          </form>

          <div className="cpage__data">
            <div className="cpage__data-item">
              <span className="cpage__data-label">Teléfono</span>
              <a href="tel:+34608890399" className="cpage__data-val">608 89 03 99</a>
            </div>
            <div className="cpage__data-item">
              <span className="cpage__data-label">Email</span>
              <a href="mailto:infocanariasbeton@gmail.com" className="cpage__data-val">infocanariasbeton@gmail.com</a>
            </div>
            <div className="cpage__data-item">
              <span className="cpage__data-label">Horario</span>
              <span className="cpage__data-val">Lunes – Viernes · 7:00 – 18:00</span>
            </div>
          </div>
        </div>

        {/* derecha — foto */}
        <div className="cpage__photo-wrap">
          <img src={contactoImg} alt="Canarias Beton" className="cpage__photo" />
        </div>
      </section>

      <div className="cpage__map">
        <iframe
          title="Planta Arinaga"
          src="https://maps.google.com/maps?q=Calle+los+Cactus+33,+Aguimes,+Las+Palmas&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  )
}
