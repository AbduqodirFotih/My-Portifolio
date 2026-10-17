import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Stats from "@/components/stats"
import Contact from "@/components/contact"
import StarField from "@/components/star-field"
import FloatingElements from "@/components/floating-elements"
import LanguageSwitcher from "@/components/language-switcher"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarField />
      <FloatingElements />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
