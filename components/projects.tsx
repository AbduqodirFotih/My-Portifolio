"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AppWindow, DoorOpen, ExternalLink, Heart, Sparkles, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Projects() {
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

  const icons = [AppWindow, DoorOpen, Heart, Sparkles, Wrench]

  const projects = t.projects.items.map((item, index) => ({
    ...item,
    icon: icons[index % icons.length],
    gradient: index % 2 === 0 ? "from-primary to-secondary" : "from-secondary to-primary",
  }))

  return (
    <section ref={sectionRef} className="relative py-32 px-4 z-10" id="projects">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-center">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground text-center mb-16 md:mb-20 max-w-3xl mx-auto leading-relaxed font-light">
            {t.projects.description}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <Card
                  key={project.title}
                  className="p-6 md:p-10 glass-effect hover:bg-primary/5 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl group"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-background" />
                    </div>
                    {"url" in project && project.url && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{project.title}</h3>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{project.description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                      {t.projects.mainFeatures}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="glass-effect text-primary border-primary/30 px-4 py-2 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {"url" in project && project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        size="lg"
                      >
                        <span>{t.projects.viewSite}</span>
                        <ExternalLink className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
