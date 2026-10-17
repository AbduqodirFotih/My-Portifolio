"use client"

import { useEffect, useRef } from "react"

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let width = 0
    let height = 0

    // The canvas is fixed to the viewport, so size it to the viewport
    // (not the whole document) and account for high-DPI screens.
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const starCount = width < 768 ? 90 : 160
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.2,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random(),
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 200, 255, ${star.opacity})`
        ctx.fill()
      })
    }

    let frame = 0
    const animate = () => {
      stars.forEach((star) => {
        star.x += star.vx
        star.y += star.vy

        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0

        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))
      })
      draw()
      frame = requestAnimationFrame(animate)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      if (reduceMotion) draw()
      else frame = requestAnimationFrame(animate)
    }

    // Pause the animation while the tab is hidden.
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame)
      else start()
    }

    const handleResize = () => {
      resize()
      draw()
    }

    start()
    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibility)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  )
}
