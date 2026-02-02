"use client"
import { useState } from "react"
import ProjectCell from "./project-cell"

const projects = [
  { title: "Face Recognition", desc: "Aplikasi Face Recognition absensi menggunakan Yolo versi 11", tag: "Python", country: "Yolo" },
  { title: "Deteksi Remote dan HP", desc: "Aplikasi Pendeteksi Remote dan HP", tag: "Yolo", country: "Python" },
  { title: "Proyek Desain Poster", desc: "Membuat Poster Random", tag: "Figma", country: "Canva" },
  { title: "Template PPT", desc: "Membuat Template PPT Rapat", tag: "Canva", country: "Figma" },
  { title: "None", desc: "Tidak ada deskripsi.", tag: "None", country: "Global" },
  { title: "None", desc: "Tidak ada deskripsi.", tag: "None", country: "Global" },
  { title: "None", desc: "Tidak ada deskripsi.", tag: "None", country: "Global" },
  { title: "None", desc: "Tidak ada deskripsi.", tag: "None", country: "Global" },
]

export default function ProjectsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative bg-main pt-16 pb-32">

      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mt-24 mb-20">
        <p className="text-[12px] tracking-widest text-soft mb-2">
          Projects By Rafi
        </p>
        <h2 className="text-[24px] font-semibold
  md:text-6xl">
          My Projects
        </h2>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden overflow-x-auto">
        <div className="flex gap-6 px-2">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative shrink-0
  w-[85vw] max-w-[420px]
  h-[420px]
  border-r border-theme
  pb-12"
            >
              <ProjectCell
                project={p}
                index={i}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block max-w-[1400px] mx-auto">
        <div className="w-full h-px border-theme border-t" />

        <div className="grid grid-cols-4 grid-rows-2">
          {projects.map((p, i) => {
            const isLastCol = (i + 1) % 4 === 0
            const isLastRow = i >= projects.length - 4

            return (
              <div
                key={i}
                className={`
                  aspect-square
                  ${!isLastCol ? "border-r border-theme" : ""}
                  ${!isLastRow ? "border-b border-theme" : ""}
                `}
              >
                <ProjectCell
                  project={p}
                  index={i}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
