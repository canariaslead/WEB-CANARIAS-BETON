"use client";

import { useEffect, useState } from 'react'
import './IntroAnimation.css'

interface Props { onDone: () => void }

const LINE1 = "CANARIAS"
const LINE2 = "BETON"
const DELAY = 110 // ms between letters

export default function IntroAnimation({ onDone }: Props) {
  const [count, setCount]     = useState(0) // how many letters revealed
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone]       = useState(false)

  const total = LINE1.length + LINE2.length

  useEffect(() => {
    // reveal letters one by one
    const intervals: ReturnType<typeof setTimeout>[] = []
    for (let i = 0; i <= total; i++) {
      intervals.push(setTimeout(() => setCount(i), i * DELAY))
    }
    // hold then exit
    const holdMs = total * DELAY + 700
    const t1 = setTimeout(() => setLeaving(true), holdMs)
    const t2 = setTimeout(() => { setGone(true); onDone() }, holdMs + 500)

    return () => {
      intervals.forEach(clearTimeout)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (gone) return null

  const renderLine = (word: string, offset: number) =>
    word.split('').map((char, i) => {
      const idx    = offset + i
      const state  = idx < count ? 'solid' : idx === count ? 'ghost' : 'hidden'
      return (
        <span key={idx} className={`intro__letter intro__letter--${state}`}>
          {char}
        </span>
      )
    })

  return (
    <div className={`intro${leaving ? ' intro--out' : ''}`}>
      <div className="intro__wrap">
        <div className="intro__line">{renderLine(LINE1, 0)}</div>
        <div className="intro__line">{renderLine(LINE2, LINE1.length)}</div>
      </div>
    </div>
  )
}
