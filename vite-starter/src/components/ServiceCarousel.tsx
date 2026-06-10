import { useCallback, useEffect, useRef, useState } from 'react'
import './ServiceCarousel.css'

interface Slide { img: string; label: string }
interface Props  { slides: Slide[] }

export default function ServiceCarousel({ slides }: Props) {
  const [current, setCurrent]   = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const go = useCallback((dir: number) => {
    clearTimeout(timerRef.current)
    setCurrent(c => (c + dir + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    timerRef.current = setTimeout(() => go(1), 4000)
    return () => clearTimeout(timerRef.current)
  }, [current, go])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      setLightbox(null)
      if (e.key === 'ArrowRight')  setLightbox(i => i === null ? null : (i + 1) % slides.length)
      if (e.key === 'ArrowLeft')   setLightbox(i => i === null ? null : (i - 1 + slides.length) % slides.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, slides.length])

  return (
    <>
    <section className="sc">

      {/* imagen principal */}
      <div className="sc__main" onClick={() => setLightbox(current)}>
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.img}
            alt={s.label}
            className={`sc__img${i === current ? ' sc__img--active' : ''}`}
          />
        ))}
        <div className="sc__label">{slides[current].label}</div>
      </div>

      {/* barra de control */}
      <div className="sc__bar">
        <div className="sc__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`sc__dot${i === current ? ' sc__dot--active' : ''}`}
              onClick={() => { clearTimeout(timerRef.current); setCurrent(i) }}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
        <div className="sc__nav">
          <button className="sc__arrow" onClick={() => go(-1)} aria-label="Anterior">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <span className="sc__count">{String(current + 1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span>
          <button className="sc__arrow sc__arrow--next" onClick={() => go(1)} aria-label="Siguiente">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

    </section>

    {/* lightbox */}
    {lightbox !== null && (
      <div className="sc-lb" onClick={() => setLightbox(null)}>
        <button className="sc-lb__close" onClick={() => setLightbox(null)}>✕</button>
        <button className="sc-lb__arrow sc-lb__arrow--prev" onClick={e => { e.stopPropagation(); setLightbox(i => i === null ? null : (i - 1 + slides.length) % slides.length) }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div className="sc-lb__wrap" onClick={e => e.stopPropagation()}>
          <img src={slides[lightbox].img} alt={slides[lightbox].label} className="sc-lb__img" />
          <span className="sc-lb__label">{slides[lightbox].label}</span>
        </div>
        <button className="sc-lb__arrow sc-lb__arrow--next" onClick={e => { e.stopPropagation(); setLightbox(i => i === null ? null : (i + 1) % slides.length) }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <span className="sc-lb__count">{lightbox + 1} / {slides.length}</span>
      </div>
    )}
    </>
  )
}
