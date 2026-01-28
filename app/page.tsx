"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import ProjectTransition from "@/components/project-transition"

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#projects") {
      const el = document.getElementById("projects")
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" })
        })
      }
    }
  }, [])

  return (
    <main>
      <Hero />
      <ProjectTransition />
    </main>
  )
}
