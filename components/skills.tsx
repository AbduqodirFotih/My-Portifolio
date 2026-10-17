"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Layout, Network, Server, Wrench, BarChart3 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export const skillGroups = [
  { category: "Backend", icon: Server, skills: ["Python", "FastAPI", "C++"] },
  { category: "Frontend", icon: Layout, skills: ["HTML/CSS", "JavaScript", "Next.js"] },
  { category: "Database", icon: Database, skills: ["MySQL"] },
  { category: "DevOps", icon: Code2, skills: ["Docker", "CI/CD", "Git", "Nginx"] },
  { category: "Networking", icon: Network, skills: ["Cisco Packet Tracer"] },
  { category: "Data Science", icon: BarChart3, skills: ["Pandas", "NumPy", "Big Data", "Google Colab"] },
  { category: "Tools", icon: Wrench, skills: ["Excel", "Google Sheets", "Word"] },
]

export default function Skills() {
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
    <section ref={sectionRef} className="relative py-32 px-4 z-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-center">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground text-center mb-16 md:mb-20 max-w-3xl mx-auto leading-relaxed font-light">
            {t.skills.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <Card
                  key={group.category}
                  className="p-6 md:p-8 glass-effect hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="glass-effect text-primary border-primary/30 px-4 py-2 text-base"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
