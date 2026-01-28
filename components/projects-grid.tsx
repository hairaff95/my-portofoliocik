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
  return (
    <section id="projects" className="relative bg-white px-4 sm:px-6 md:px-20 pt-20 pb-40 lg:py-32 lg:pb-40 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto mb-20">
        <p className="text-sm tracking-widest text-gray-500 mb-4">
          Projects By Rafi
        </p>
        <h2 className="text-6xl font-bold">
          My Projects
        </h2>
      </div>

      {/* ================= MOBILE: HORIZONTAL SCROLL ================= */}
      <div className="lg:hidden overflow-x-auto">
        <div className="flex gap-6 px-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                shrink-0
                w-[85vw]
                max-w-[420px]
                aspect-square
              "
            >
              <ProjectCell project={p} />
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP: GRID ================= */}
    <div className="hidden lg:block relative max-w-[1400px] mx-auto">
      <div className="relative grid grid-cols-4 grid-rows-2">
        {projects.map((p, i) => (
          <div key={i} className="aspect-square">
            <ProjectCell project={p} />
          </div>
        ))}

        {/* Vertical lines */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-r border-black/10"
            style={{ left: `${((i + 1) / 4) * 100}%` }}
          />
        ))}

        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 border-t border-black/10" />
      </div>
    </div>
    </section>
  )
}
