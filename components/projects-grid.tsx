import ProjectCell from "./project-cell"

const projects = [
  { title: "Airportr", desc: "Airport logistics", tag: "Logistics", country: "UK" },
  { title: "Nomupay", desc: "Payments infra", tag: "Fintech", country: "EU" },
  { title: "One Text", desc: "SMS platform", tag: "SaaS", country: "USA" },
  { title: "Shaga", desc: "Cloud gaming", tag: "Web3", country: "USA" },
  { title: "D&Stuff", desc: "Creative agency", tag: "Design", country: "Global" },
  { title: "IsoraGRC", desc: "Risk platform", tag: "Security", country: "Global" },
  { title: "Wisdom", desc: "Learning", tag: "Edtech", country: "Global" },
  { title: "Qurtuba", desc: "Academy", tag: "Education", country: "Global" },
]

export default function ProjectsGrid() {
  return (
    <section id="projects" className="bg-white px-8 md:px-24 py-24">
      <div className="max-w-[1400px] mx-auto mb-20 px-6">
        <p className="text-sm tracking-widest text-gray-500 mb-4">
          Projects By Rafi
        </p>
        <h2 className="text-6xl font-bold">
          My Projects
        </h2>
      </div>

        <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-4 grid-rows-2">
            {projects.map((p, i) => (
            <div key={i} className="aspect-square">
                <ProjectCell project={p} />
            </div>
            ))}
        </div>

        <div className="pointer-events-none absolute inset-0 grid grid-cols-4">
            {[...Array(3)].map((_, i) => (
            <div key={i} className="border-r border-black/10" />
            ))}
        </div>

        <div className="pointer-events-none absolute inset-0 grid grid-rows-2">
            <div className="border-b border-black/10 border-t border-black/10" />
        </div>
        </div>

    </section>
  )
}




