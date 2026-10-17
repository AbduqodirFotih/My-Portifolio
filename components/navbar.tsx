"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import LanguageSwitcher from "@/components/language-switcher"

const sections = ["about", "skills", "projects", "experience", "contact"] as const

export default function Navbar() {
  const { t } = useLanguage()
  const [active, setActive] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      setScrolled(window.scrollY > 20)

      // The active section is the last one whose top has passed the upper third of the screen.
      let current = ""
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 3) current = id
      }
      setActive(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-bold text-lg"
          aria-label={t.name}
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-black shadow-lg">
            AF
          </span>
          <span className="hidden sm:inline gradient-text">{t.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === id ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="md:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center"
            onClick={() => setOpen((value) => !value)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg font-medium ${
                active === id ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  )
}
