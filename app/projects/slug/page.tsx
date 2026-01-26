export default function ProjectDetail({ params }: any) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">
        {params.slug.replace("-", " ")}
      </h1>

      <p className="text-gray-500 mb-8">
        Case study of this project.
      </p>

      <div className="grid gap-6">
        <section>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p>Describe the problem.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p>Describe your solution.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Result</h2>
          <p>What impact did it have?</p>
        </section>
      </div>
    </div>
  )
}
