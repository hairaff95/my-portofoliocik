import Link from "next/link"

export default function Projects() {
const projects = [
  {
    slug: "portfolio-website",
    title: "Personal Portfolio",
    desc: "My personal website built with Next.js",
    tech: ["Next.js", "Tailwind"]
  },
]

  return (
    <section id="work" className="py-32">
      <h2 className="text-3xl font-bold mb-12">Selected Works</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Link
            key={i}
            href={`/projects/${p.title}`}
            className="border rounded-xl p-6 transition hover:shadow-lg hover:-translate-y-1"
          >
            <div className="h-32 bg-gray-100 mb-4 rounded" />
            <h3 className="font-semibold">{p.title}</h3>
            <h3>{p.title}</h3>
            <p className="text-sm text-gray-500">{p.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
