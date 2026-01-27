import FloatingNavbar from "@/components/floating-navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import ProjectTransition from "@/components/project-transition"
import Skills from "@/components/skills"
import ProjectsGrid from "@/components/projects-grid"

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main>
      <Hero />
      <ProjectTransition /> 
      <Skills />
    </main>
  </>
  )
}



