import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoSrc from '../assets/logo.webp'
import './Navbar.css'

const SERVICIOS = [
  { label: 'Fabricación',        href: '/fabricacion' },
  { label: 'Distribución',       href: '/distribucion' },
  { label: 'Servicio de Bombeo', href: '/bombeo' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [dropdown, setDropdown]   = useState(false)
  const dropRef                   = useRef<HTMLLIElement>(null)
  const location                  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // cerrar dropdown al cambiar de página
  useEffect(() => { setDropdown(false) }, [location])

  // cerrar al clicar fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={`nav-wrap${scrolled ? ' nav-wrap--scrolled' : ''}`}>
      <nav className="nav-inner">

        {/* left — links */}
        <ul className="nav-left">

          {/* Servicios con dropdown */}
          <li ref={dropRef as React.RefObject<HTMLLIElement>} className="nav-item--dropdown">
            <div className="nav-item--dropdown-inner">
              <Link to="/servicios" className="nav-link">Servicios</Link>
              <button
                className={`nav-link nav-link--chevron${dropdown ? ' nav-link--active' : ''}`}
                onClick={() => setDropdown(d => !d)}
                aria-label="Ver servicios"
              >
                <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{ transform: dropdown ? 'rotate(180deg)' : undefined, transition: 'transform 0.2s' }}>
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {dropdown && (
              <div className="nav-dropdown">
                {SERVICIOS.map(s => (
                  <Link key={s.href} to={s.href} className="nav-dropdown__item">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </li>

        </ul>

        {/* center — logo */}
        <Link to="/" className="nav-logo">
          <img src={logoSrc} alt="Canarias Beton" className="nav-logo__img" />
          <span className="nav-logo__name">CANARIAS BETON</span>
        </Link>

        {/* right — CTA */}
        <div className="nav-right">
          <Link to="/contacto" className="nav-cta">Solicitar presupuesto</Link>
        </div>

      </nav>
    </header>
  )
}
