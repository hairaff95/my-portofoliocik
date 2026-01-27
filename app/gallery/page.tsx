export default function GalleryPage() {
  return (
    <main className="min-h-screen px-8 md:px-24 py-24">
      <h1 className="text-4xl font-bold mb-12">
        Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="
              aspect-[4/3]
              rounded-2xl
              overflow-hidden
              bg-gray-200
              hover:scale-[1.02]
              transition
            "
          >
            <img
              src={`https://picsum.photos/800/600?random=${i}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
