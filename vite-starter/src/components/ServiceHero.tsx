import { useEffect, useRef } from 'react'
import '../pages/ServicePage.css'

interface Props {
  image: string
  title: string
  sub: string
}

export default function ServiceHero({ image, title, sub }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef     = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      const img     = imgRef.current
      if (!section || !img) return
      const rect    = section.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      const offset  = -rect.top * 0.3
      img.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="spage__hero">
      <img ref={imgRef} src={image} alt={title} className="spage__hero-bg spage__hero-bg--parallax" />
      <div className="spage__hero-overlay" />
      <div className="spage__hero-content">
        <span className="spage__eyebrow">Servicios</span>
        <h1 className="spage__hero-title">{title}</h1>
        <p className="spage__hero-sub">{sub}</p>
      </div>
    </section>
  )
}
