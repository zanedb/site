'use client'

import { useState, useEffect } from 'react'

export default function Typist({ speed = 20 }: { speed: number }) {
  const text = '@zanedb'

  const [displayText, setDisplayText] = useState(text)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // I know, I know..
      if (displayText === '@zanedb') {
        setDisplayText('zanedb')
      } else if (displayText === 'zanedb') {
        setDisplayText('zaned')
      } else if (displayText === 'zaned') {
        setDisplayText('zane')
      } else if (displayText === 'zane') {
        setDisplayText('Zane.')
      } else {
        clearTimeout(interval)
        return
      }

      setIndex((prev) => prev + 1)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, index])

  return displayText
}
