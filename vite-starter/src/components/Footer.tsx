import logoSrc from '../assets/LOGO_BETON.PNG'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* logo + tagline */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logoSrc} alt="Canarias Beton" className="footer__logo-img" />
            <span className="footer__logo-name">CANARIAS BETON</span>
          </div>
          <p className="footer__tagline">
            Fabricación y suministro de hormigón<br />en las Islas Canarias desde 2020.
          </p>
          <div className="footer__contact">
            <a href="tel:+34608890399" className="footer__contact-link">608 89 03 99</a>
            <a href="mailto:infocanariasbeton@gmail.com" className="footer__contact-link">infocanariasbeton@gmail.com</a>
          </div>
          <div className="footer__social">
            {/* Instagram */}
            <a href="#" className="footer__social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="footer__social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="footer__social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="footer__social-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* nav */}
        <div className="footer__col">
          <span className="footer__col-title">Navegación</span>
          <ul className="footer__links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        {/* servicios */}
        <div className="footer__col">
          <span className="footer__col-title">Servicios</span>
          <ul className="footer__links">
            <li><a href="#">Fabricación</a></li>
            <li><a href="#">Distribución</a></li>
            <li><a href="#">Servicio de Bombeo</a></li>
          </ul>
        </div>

        {/* legal */}
        <div className="footer__col">
          <span className="footer__col-title">Legal</span>
          <ul className="footer__links">
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Aviso legal</a></li>
            <li><a href="#">Política de cookies</a></li>
            <li><a href="#">Documentación técnica</a></li>
            <li><a href="#">Certificaciones</a></li>
          </ul>
        </div>

      </div>

      {/* bottom bar */}
      <div className="footer__bar">
        <span>© 2026 Canarias Betón S.L. — Todos los derechos reservados</span>
        <span>CIF: B76000000 · Las Palmas de Gran Canaria</span>
      </div>
    </footer>
  )
}
