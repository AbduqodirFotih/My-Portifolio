"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { skillGroups } from "@/components/skills"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    linesOfCode: 0,
  })
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = {
      experience: 3,
      projects: 20,
      technologies: skillGroups.reduce((sum, group) => sum + group.skills.length, 0),
      linesOfCode: 100000,
    }

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        technologies: Math.floor(targets.technologies * progress),
        linesOfCode: Math.floor(targets.linesOfCode * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 text-center hover:scale-105 transition-transform">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counts.experience}+</div>
            <div className="text-muted-foreground font-medium">{t.stats.experience}</div>
          </Card>

          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-secondary/20 text-center hover:scale-105 transition-transform">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{counts.projects}+</div>
            <div className="text-muted-foreground font-medium">{t.stats.projects}</div>
          </Card>

          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 text-center hover:scale-105 transition-transform">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counts.technologies}+</div>
            <div className="text-muted-foreground font-medium">{t.stats.technologies}</div>
          </Card>

          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-secondary/20 text-center hover:scale-105 transition-transform">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{Math.round(counts.linesOfCode / 1000)}K+</div>
            <div className="text-muted-foreground font-medium">{t.stats.code}</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
