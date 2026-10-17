import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const siteUrl = "https://abduqodir-fotih.uz"
const description =
  "3+ yillik tajribaga ega FullStack dasturchi, PDP University talabasi. Python, FastAPI, Next.js, Docker va boshqa zamonaviy texnologiyalar bilan 20+ loyiha yaratilgan."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abduqodir Fotih - FullStack Developer",
  description,
  keywords: [
    "Abduqodir Fotih",
    "FullStack Developer",
    "dasturchi",
    "Python",
    "FastAPI",
    "Next.js",
    "Docker",
    "PDP University",
    "Toshkent",
    "veb-sayt yaratish",
  ],
  authors: [{ name: "Abduqodir Fotih", url: "https://github.com/AbduqodirFotih" }],
  creator: "Abduqodir Fotih",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Abduqodir Fotih",
    title: "Abduqodir Fotih - FullStack Developer",
    description,
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abduqodir Fotih - FullStack Developer",
    description,
  },
}

export const viewport: Viewport = {
  themeColor: "#03060f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
