"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectsGrid from "./projects-grid"

gsap.registerPlugin(ScrollTrigger)

export default function ProjectTransition() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)

useLayoutEffect(() => {
  if (!sectionRef.current || !maskRef.current) return

  const ctx = gsap.context(() => {
    gsap.to(maskRef.current, {
      yPercent: -100,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })
  }, sectionRef)

  return () => {
    ctx.revert()
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
}, [])

  return (
    <section ref={sectionRef} id="projects" className="relative bg-neutral-900 min-h-screen">
      <ProjectsGrid />

      <div
        ref={maskRef}
        className="absolute inset-0 bg-black text-white flex items-center justify-center z-10"
      >
        <h2 className="text-7xl font-bold">Projects</h2>
      </div>
    </section>
  )
}
