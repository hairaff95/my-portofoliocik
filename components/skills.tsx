export default function Skills() {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        px-8 md:px-24 py-24
      "
    >
      <h2 className="text-5xl font-bold mb-16">
        Technical skills
      </h2>

      <div className="space-y-16 max-w-4xl">
        
        {/* Perangkat Lunak */}
        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Perangkat Lunak
          </h3>
          <p className="text-gray-500 mb-6">
            Tools yang biasa saya gunakan untuk desain dan editing.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Adobe After Effect",
              "Adobe Premiere Pro",
              "Capcut",
              "Canva",
              "Figma",
            ].map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>

        {/* Bahasa Pemrograman */}
        <div>
          <h3 className="text-3xl font-semibold mb-2">
            Bahasa Pemrograman
          </h3>
          <p className="text-gray-500 mb-6">
            Bahasa yang saya gunakan untuk membangun aplikasi.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "JavaScript",
              "Flutter",
              "PHP",
            ].map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function SkillBadge({ label }: { label: string }) {
  return (
    <div
      className="
        px-4 py-2
        rounded-full
        border border-black/10
        text-sm
        hover:bg-black hover:text-white
        transition
        cursor-default
      "
    >
      {label}
    </div>
  )
}
