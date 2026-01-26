export default function ProjectDetail({ params }: any) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">
        {params.slug}
      </h1>
      <p className="text-gray-500 mb-8">
        This is a detailed case study of the project.
      </p>
      <div className="h-64 bg-gray-100 rounded-xl mb-8" />
      <p>
        Here you explain the problem, solution, and result.
      </p>
    </div>
  )
}
