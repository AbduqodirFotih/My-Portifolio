"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Database, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function About() {
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

  return (
    <section ref={sectionRef} className="relative py-32 px-4 z-10" id="about">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-center">
            <span className="gradient-text">{t.about.title}</span>
          </h2>

          <p className="text-2xl text-muted-foreground text-center mb-20 max-w-3xl mx-auto leading-relaxed font-light">
            {t.about.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-10 glass-effect hover:bg-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Code2 className="w-10 h-10 text-background" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.about.frontend.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{t.about.frontend.description}</p>
            </Card>

            <Card className="p-10 glass-effect hover:bg-secondary/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Database className="w-10 h-10 text-background" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.about.backend.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{t.about.backend.description}</p>
            </Card>

            <Card className="p-10 glass-effect hover:bg-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-background" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.about.dataAnalysis.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{t.about.dataAnalysis.description}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
