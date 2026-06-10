import { useEffect, useState } from 'react'
import heroImg from '../assets/hero-distribucion.webp'
import './Loader.css'

interface Props { onDone: () => void }

export default function Loader({ onDone }: Props) {
  const [out, setOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setOut(true), 2600)
    const t2 = setTimeout(onDone, 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className={`loader${out ? ' loader--out' : ''}`}>

      {/* left: text */}
      <div className="loader__left">
        <p className="loader__tag">HORMIGÓN · FABRICACIÓN · DISTRIBUCIÓN</p>
        <h1 className="loader__title">
          Canarias<br />Beton
        </h1>
      </div>

      {/* right: SVG clip "CB" + HTML img inside via foreignObject */}
      <div className="loader__right">
        <svg
          viewBox="0 0 680 440"
          xmlns="http://www.w3.org/2000/svg"
          className="loader__svg"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="cb-clip">
              <text
                x="50%"
                y="80%"
                textAnchor="middle"
                fontFamily="'Arial Black', Arial, sans-serif"
                fontSize="370"
                fontWeight="900"
                letterSpacing="-10"
              >
                CB
              </text>
            </clipPath>
          </defs>

          {/* foreignObject lets us put a real <img> inside the SVG clip */}
          <foreignObject
            x="0" y="0"
            width="680" height="440"
            clipPath="url(#cb-clip)"
          >
            <div
              /* @ts-ignore */
              xmlns="http://www.w3.org/1999/xhtml"
              className="loader__fo-wrap"
            >
              <img
                src={heroImg}
                alt=""
                className="loader__clip-img"
              />
            </div>
          </foreignObject>
        </svg>
      </div>

    </div>
  )
}
