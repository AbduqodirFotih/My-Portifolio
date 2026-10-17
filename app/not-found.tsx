"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import StarField from "@/components/star-field"
import { useLanguage } from "@/lib/language-context"

export default function NotFound() {
  const { t } = useLanguage()
  const [path, setPath] = useState("")

  useEffect(() => setPath(window.location.pathname), [])

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <StarField />
      <div className="relative z-10 w-full max-w-xl glass-effect rounded-2xl overflow-hidden font-mono">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted-foreground">bash</span>
        </div>
        <div className="p-6 space-y-2 text-sm md:text-base">
          <p>
            <span className="text-primary">fotih@portfolio</span>:<span className="text-secondary">~</span>$ cd{" "}
            {path}
          </p>
          <p className="text-red-400">bash: cd: {t.notFound.error}</p>
          <p className="text-7xl md:text-8xl font-bold gradient-text py-6">404</p>
          <p className="text-muted-foreground">{t.notFound.description}</p>
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-sans font-medium hover:opacity-90 transition-opacity"
          >
            {t.notFound.back}
          </Link>
        </div>
      </div>
    </main>
  )
}
