export default function Projects() {
  const projects = [
    "Portfolio Website",
    "E-learning App",
    "Dashboard UI"
  ]

  return (
    <section id="work" className="py-24">
      <h2 className="text-3xl font-bold mb-8">Selected Works</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="border rounded-xl p-6">
            <div className="h-32 bg-gray-100 mb-4 rounded" />
            <h3 className="font-semibold">{p}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
