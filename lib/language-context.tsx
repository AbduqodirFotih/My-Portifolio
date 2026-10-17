"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.uz
}

const STORAGE_KEY = "language"
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function isLanguage(value: unknown): value is Language {
  return value === "uz" || value === "ru" || value === "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("uz")

  // Restore the saved language (or guess from the browser) after hydration.
  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(STORAGE_KEY)
    } catch {}
    if (isLanguage(saved)) {
      setLanguageState(saved)
      return
    }
    const browser = navigator.language.slice(0, 2)
    if (isLanguage(browser)) setLanguageState(browser)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
