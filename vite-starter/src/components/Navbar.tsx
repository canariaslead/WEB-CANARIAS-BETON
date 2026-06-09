import { useEffect, useState } from 'react'
import logoSrc from '../assets/LOGO_BETON.webp'
import './Navbar.css'

const LEFT_LINKS = [
  { label: 'Servicios', dropdown: false },
  { label: 'Nosotros',  dropdown: false },
  { label: 'Contacto',  dropdown: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap${scrolled ? ' nav-wrap--scrolled' : ''}`}>
      <nav className="nav-inner">

        {/* left — links */}
        <ul className="nav-left">
          {LEFT_LINKS.map(({ label, dropdown }) => (
            <li key={label}>
              <a href="#" className="nav-link">
                {label}
                {dropdown && (
                  <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* center — logo */}
        <a href="/" className="nav-logo">
          <img src={logoSrc} alt="Canarias Beton" className="nav-logo__img" />
          <span className="nav-logo__name">CANARIAS BETON</span>
        </a>

        {/* right — CTA */}
        <div className="nav-right">
          <a href="#contacto" className="nav-cta">Solicitar presupuesto</a>
        </div>

      </nav>
    </header>
  )
}
