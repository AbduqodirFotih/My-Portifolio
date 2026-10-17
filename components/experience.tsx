"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Trophy } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
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

  const colorClasses = {
    primary: { icon: "from-primary to-secondary", badge: "border-primary/30 text-primary" },
    secondary: { icon: "from-secondary to-primary", badge: "border-secondary/30 text-secondary" },
  } as const

  const timeline = [
    {
      ...t.experience.timeline[0],
      icon: Briefcase,
      color: "primary" as const,
    },
    {
      ...t.experience.timeline[1],
      icon: Briefcase,
      color: "secondary" as const,
    },
    {
      ...t.experience.timeline[2],
      icon: GraduationCap,
      color: "primary" as const,
    },
    {
      ...t.experience.timeline[3],
      icon: Trophy,
      color: "secondary" as const,
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-4 z-10" id="experience">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {t.experience.title}
            </span>
          </h2>

          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            {t.experience.description}
          </p>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.year}
                    className={`relative pl-20 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`absolute left-0 w-16 h-16 bg-gradient-to-br ${colorClasses[item.color].icon} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-background" />
                    </div>

                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                      <Badge variant="outline" className={`mb-3 ${colorClasses[item.color].badge}`}>
                        {item.year}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-lg text-muted-foreground mb-3">{item.organization}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
