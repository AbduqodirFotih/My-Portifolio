"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, SendIcon, Phone, MapPin, Instagram, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
        return
      }

      // Telegram is not configured yet: fall back to a prefilled email.
      if (response.status === 503) {
        const subject = encodeURIComponent(`Portfolio: ${data.name}`)
        const body = encodeURIComponent(`${data.message}

${data.name} <${data.email}>`)
        window.location.href = `mailto:abduqodirjamolkhonov@gmail.com?subject=${subject}&body=${body}`
        setStatus("idle")
        return
      }
    } catch {}
    setStatus("error")
  }

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
    <section ref={sectionRef} className="relative py-32 px-4 z-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:abduqodirjamolkhonov@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abduqodirjamolkhonov@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.phone}</h3>
                    <a
                      href="tel:+998200004411"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +998 20 000 44 11
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.address}</h3>
                    <p className="text-muted-foreground">{t.contact.location}</p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/AbduqodirFotih" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 bg-transparent">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.instagram.com/Abduqodir_Fotih" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-secondary/30 hover:bg-secondary/10 bg-transparent">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                </a>
                <a href="https://t.me/Abduqodir_Fotih" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 bg-transparent">
                    <Send className="w-5 h-5 mr-2" />
                    Telegram
                  </Button>
                </a>
                <a href="mailto:abduqodirjamolkhonov@gmail.com">
                  <Button variant="outline" className="w-full border-secondary/30 hover:bg-secondary/10 bg-transparent">
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </Button>
                </a>
              </div>
            </div>

            <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    placeholder={t.contact.name}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    required
                    maxLength={200}
                    type="email"
                    placeholder={t.contact.email}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={3000}
                    placeholder={t.contact.message}
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                  disabled={status === "sending"}
                >
                  <span>{status === "sending" ? t.contact.sending : t.contact.send}</span>
                  <SendIcon className="w-4 h-4 ml-2" />
                </Button>

                {status === "success" && (
                  <p className="text-sm text-emerald-400 text-center" role="status">
                    {t.contact.success}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive text-center" role="alert">
                    {t.contact.error}
                  </p>
                )}
              </form>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} {t.name}. {t.contact.footer}.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic max-w-2xl mx-auto">
              &ldquo;{t.contact.quote}&rdquo;
              <br />
              <span className="text-primary">— {t.contact.quoteAuthor}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
