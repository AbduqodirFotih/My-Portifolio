"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail, Instagram, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Typewriter from "@/components/typewriter"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 z-10">
      <div className="max-w-5xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-cyan-300/30">
                <span className="text-4xl font-black text-white drop-shadow-2xl tracking-tight">AF</span>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-2xl" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              {t.hero.available}
            </div>
          </div>

          <div className="inline-block mb-6 px-5 py-2 glass-effect rounded-full min-h-[2.25rem]">
            <span className="text-primary font-mono text-sm">
              {"< "}
              <Typewriter words={t.hero.roles} />
              {" />"}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-balance leading-tight">
            <span className="gradient-text">{t.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
            {t.hero.greeting}. <span className="text-foreground">{t.hero.description}</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-medium px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              {t.hero.viewProjects}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect hover:bg-primary/10 px-8 rounded-xl transition-all duration-300 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              {t.hero.contact}
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/AbduqodirFotih"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/Abduqodir_Fotih"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/Abduqodir_Fotih"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Send className="w-6 h-6" />
            </a>
            <a
              href="mailto:abduqodirjamolkhonov@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary/50" />
        </div>
      </div>
    </section>
  )
}
