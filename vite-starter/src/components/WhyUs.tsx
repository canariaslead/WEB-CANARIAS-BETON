import './WhyUs.css'

const ITEMS = [
  {
    label: 'Calidad certificada',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 14l-4.8 2.5.9-5.3L4.3 7.6l5.3-.8z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    label: 'Equipo especializado',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3"/>
        <path d="M5 21v-2a7 7 0 0114 0v2"/>
        <circle cx="5" cy="10" r="2"/>
        <path d="M1 21v-1a4 4 0 015-3.87"/>
        <circle cx="19" cy="10" r="2"/>
        <path d="M23 21v-1a4 4 0 00-5-3.87"/>
      </svg>
    ),
  },
  {
    label: 'Entrega garantizada',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    label: 'Cliente satisfecho',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.3a2 2 0 002-1.7l1.4-9a2 2 0 00-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="whyus__header">
        <p className="whyus__eyebrow">
          <span className="whyus__dot" />
          ¿POR QUÉ ELEGIRNOS?
          <span className="whyus__dot" />
        </p>
        <h2 className="whyus__title">El hormigón que tu obra necesita</h2>
        <p className="whyus__sub">Fabricamos con los más altos estándares para garantizar resistencia y durabilidad.</p>
      </div>

      <div className="whyus__grid">
        {ITEMS.map((item, i) => (
          <div className="whyus__item" key={i}>
            {i > 0 && <div className="whyus__divider" />}
            <div className="whyus__icon-box">
              {item.icon}
            </div>
            <p className="whyus__label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
