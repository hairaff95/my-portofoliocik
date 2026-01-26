import FloatingNavbar from "@/components/floating-navbar"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <FloatingNavbar />
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CTA />
    </main>
  )
}
