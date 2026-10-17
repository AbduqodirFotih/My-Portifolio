"use client"

import { useEffect, useState, useRef } from "react"

const codeSymbols = ["{ }", "< />", "=>", "λ", "∑", "π", "∞", "∆", "α", "β", "θ", "→", "⇒"]

interface FloatingElement {
  id: number
  symbol: string
  x: number
  y: number
  baseX: number
  baseY: number
  velocityX: number
  velocityY: number
}

interface MouseTrail {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [mouseTrail, setMouseTrail] = useState<MouseTrail[]>([])
  const animationFrameRef = useRef<number>()
  const trailIdRef = useRef(0)

  useEffect(() => {
    const newElements: FloatingElement[] = Array.from({ length: 20 }, (_, i) => {
      const x = Math.random() * 100
      const y = Math.random() * 100
      return {
        id: i,
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        x,
        y,
        baseX: x,
        baseY: y,
        velocityX: 0,
        velocityY: 0,
      }
    })
    setElements(newElements)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })

      if (Math.random() > 0.7) {
        const newTrail: MouseTrail = {
          id: trailIdRef.current++,
          x,
          y,
          opacity: 0.6,
          scale: 1,
        }
        setMouseTrail((prev) => [...prev.slice(-8), newTrail])
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      setElements((prevElements) =>
        prevElements.map((element) => {
          const dx = mousePos.x - element.x
          const dy = mousePos.y - element.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 20) {
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

          return element
        }),
      )

      setMouseTrail((prev) =>
        prev
          .map((trail) => ({
            ...trail,
            opacity: trail.opacity * 0.92,
            scale: trail.scale * 0.98,
          }))
          .filter((trail) => trail.opacity > 0.05),
      )

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute font-mono text-primary/30 transition-all duration-150"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${16 + Math.sin(element.id) * 8}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {element.symbol}
        </div>
      ))}

      {mouseTrail.map((trail) => (
        <div
          key={trail.id}
          className="absolute rounded-full"
          style={{
            left: `${trail.x}%`,
            top: `${trail.y}%`,
            width: `${12 * trail.scale}px`,
            height: `${12 * trail.scale}px`,
            opacity: trail.opacity,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(112, 224, 255, 0.6) 0%, rgba(168, 85, 247, 0.4) 100%)",
          }}
        />
      ))}

      <div
        className="absolute w-48 h-48 rounded-full pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(112, 224, 255, 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
