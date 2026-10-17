import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Stats from "@/components/stats"
import Contact from "@/components/contact"
import StarField from "@/components/star-field"
import FloatingElements from "@/components/floating-elements"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarField />
      <FloatingElements />
      <Navbar />
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
