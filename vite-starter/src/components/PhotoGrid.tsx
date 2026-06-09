import { useEffect, useRef, useState, useCallback } from 'react'
import img1  from '../assets/foto-01.jpeg'
import img2  from '../assets/foto-02.jpeg'
import img3  from '../assets/foto-03.jpeg'
import img4  from '../assets/foto-04.jpeg'
import img5  from '../assets/foto-05.jpeg'
import img6  from '../assets/foto-06.jpeg'
import img7  from '../assets/foto-07.jpeg'
import img8  from '../assets/foto-08.jpeg'
import img9  from '../assets/foto-09.jpeg'
import img10 from '../assets/foto-10.jpeg'
import img11 from '../assets/foto-11.jpeg'
import img12 from '../assets/foto-12.jpeg'
import './PhotoGrid.css'

const SLIDES = [
  { img: img1,  label: 'Planta Jinámar — Telde' },
  { img: img2,  label: 'Flota de hormigoneras' },
  { img: img3,  label: 'Suministro obra civil' },
  { img: img4,  label: 'Carga en planta' },
  { img: img5,  label: 'Entrega en obra' },
  { img: img6,  label: 'Hormigonado de losa' },
  { img: img7,  label: 'Planta Arinaga — Agüimes' },
  { img: img8,  label: 'Control de calidad' },
  { img: img9,  label: 'Transporte a obra' },
  { img: img10, label: 'Edificación residencial' },
  { img: img11, label: 'Infraestructura viaria' },
  { img: img12, label: 'Obra industrial' },
]

export default function PhotoGrid() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timerRef   = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const check = () => {
      if (!sectionRef.current) return
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.85) {
        setVisible(true)
        window.removeEventListener('scroll', check)
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  const go = useCallback((dir: number) => {
    clearTimeout(timerRef.current)
    setCurrent(c => (c + dir + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    timerRef.current = setTimeout(() => go(1), 3800)
    return () => clearTimeout(timerRef.current)
  }, [current, go])

  // lightbox keyboard
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => i === null ? null : (i + 1) % SLIDES.length)
      if (e.key === 'ArrowLeft')  setLightbox(i => i === null ? null : (i - 1 + SLIDES.length) % SLIDES.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  const lbPrev = () => setLightbox(i => i === null ? null : (i - 1 + SLIDES.length) % SLIDES.length)
  const lbNext = () => setLightbox(i => i === null ? null : (i + 1) % SLIDES.length)

  return (
    <>
    <div ref={sectionRef} className={`pgallery${visible ? ' pgallery--in' : ''}`}>

      {/* header */}
      <div className="pgallery__head">
        <div className="pgallery__head-left">
          <span className="pgallery__eyebrow">Proyectos</span>
          <h2 className="pgallery__title">Nuestro trabajo<br />en cada obra.</h2>
        </div>
        <div className="pgallery__head-right">
          <button className="pgallery__btn" onClick={() => go(-1)} aria-label="Anterior">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button className="pgallery__btn pgallery__btn--active" onClick={() => go(1)} aria-label="Siguiente">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <span className="pgallery__count">{String(current + 1).padStart(2,'0')} / {String(SLIDES.length).padStart(2,'0')}</span>
        </div>
      </div>

      {/* track */}
      <div className="pgallery__viewport">
        <div
          className="pgallery__track"
          style={{ transform: `translateX(calc(-${current} * (260px + 12px)))` }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className={`pgallery__slide${i === current ? ' pgallery__slide--active' : ''}`}
              onClick={() => {
                if (i === current) { setLightbox(i) }
                else { clearTimeout(timerRef.current); setCurrent(i) }
              }}
            >
              <div className="pgallery__img-wrap">
                <img src={s.img} alt={s.label} />
                {i === current && <span className="pgallery__zoom">⤢</span>}
              </div>
              <div className="pgallery__label">
                <span>{s.label}</span>
                <span className="pgallery__arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* lightbox */}
    {lightbox !== null && (
      <div className="lb" onClick={() => setLightbox(null)}>
        <button className="lb__close" onClick={() => setLightbox(null)}>✕</button>
        <button className="lb__arrow lb__arrow--prev" onClick={e => { e.stopPropagation(); lbPrev() }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div className="lb__img-wrap" onClick={e => e.stopPropagation()}>
          <img src={SLIDES[lightbox].img} alt={SLIDES[lightbox].label} className="lb__img" />
          <span className="lb__label">{SLIDES[lightbox].label}</span>
        </div>
        <button className="lb__arrow lb__arrow--next" onClick={e => { e.stopPropagation(); lbNext() }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <span className="lb__count">{lightbox + 1} / {SLIDES.length}</span>
      </div>
    )}
    </>
  )
}
