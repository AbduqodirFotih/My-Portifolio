"use client"

import { useEffect, useRef } from "react"

const codeSymbols = ["{ }", "< />", "=>", "λ", "∑", "π", "∞", "∆", "α", "β", "θ", "→", "⇒"]
const ELEMENT_COUNT = 20
const TRAIL_LENGTH = 8

interface FloatingElement {
  x: number
  y: number
  baseX: number
  baseY: number
  velocityX: number
  velocityY: number
}

// Positions live in refs and are written straight to the DOM, so the
// animation never re-renders React (the old version re-rendered every frame).
export default function FloatingElements() {
  const symbolRefs = useRef<(HTMLDivElement | null)[]>([])
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const hasMouse = window.matchMedia("(pointer: fine)").matches

    const elements: FloatingElement[] = symbolRefs.current.map(() => {
      const x = Math.random() * 100
      const y = Math.random() * 100
      return { x, y, baseX: x, baseY: y, velocityX: 0, velocityY: 0 }
    })
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0, opacity: 0, scale: 1 }))
    let trailIndex = 0
    const mouse = { x: -100, y: -100 }

    const render = () => {
      elements.forEach((element, i) => {
        const node = symbolRefs.current[i]
        if (node) {
          node.style.left = `${element.x}%`
          node.style.top = `${element.y}%`
          node.style.opacity = "1"
        }
      })
    }

    render()
    if (reduceMotion || !hasMouse) return

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 100
      mouse.y = (e.clientY / window.innerHeight) * 100

      if (Math.random() > 0.7) {
        trail[trailIndex] = { x: mouse.x, y: mouse.y, opacity: 0.6, scale: 1 }
        trailIndex = (trailIndex + 1) % TRAIL_LENGTH
      }
    }

    let frame = 0
    const animate = () => {
      elements.forEach((element) => {
        const dx = mouse.x - element.x
        const dy = mouse.y - element.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 20 && distance > 0) {
          const force = (20 - distance) / 20
          element.velocityX -= (dx / distance) * force * 0.3
          element.velocityY -= (dy / distance) * force * 0.3
        }

        element.x += element.velocityX
        element.y += element.velocityY
        element.velocityX *= 0.92
        element.velocityY *= 0.92

        const returnForce = 0.015
        element.velocityX += (element.baseX - element.x) * returnForce
        element.velocityY += (element.baseY - element.y) * returnForce

        element.x = Math.max(0, Math.min(100, element.x))
        element.y = Math.max(0, Math.min(100, element.y))
      })
      render()

      trail.forEach((dot, i) => {
        dot.opacity *= 0.92
        dot.scale *= 0.98
        const node = trailRefs.current[i]
        if (node) {
          node.style.left = `${dot.x}%`
          node.style.top = `${dot.y}%`
          node.style.opacity = String(dot.opacity)
          node.style.width = node.style.height = `${12 * dot.scale}px`
        }
      })

      if (glowRef.current) {
        glowRef.current.style.left = `${mouse.x}%`
        glowRef.current.style.top = `${mouse.y}%`
      }

      frame = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    frame = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: ELEMENT_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(node) => {
            symbolRefs.current[i] = node
          }}
          className="absolute font-mono text-primary/30 opacity-0"
          style={{
            fontSize: `${16 + Math.sin(i) * 8}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {codeSymbols[i % codeSymbols.length]}
        </div>
      ))}

      {Array.from({ length: TRAIL_LENGTH }, (_, i) => (
        <div
          key={i}
          ref={(node) => {
            trailRefs.current[i] = node
          }}
          className="absolute rounded-full opacity-0"
          style={{
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(112, 224, 255, 0.6) 0%, rgba(168, 85, 247, 0.4) 100%)",
          }}
        />
      ))}

      <div
        ref={glowRef}
        className="absolute w-48 h-48 rounded-full"
        style={{
          left: "-100%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(112, 224, 255, 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
