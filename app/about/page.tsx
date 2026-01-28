"use client"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen px-8 md:px-24 py-24">

      {/* ================= HEADER ================= */}
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold">
          Muhammad Haidar Rafi
        </h1>

        <p className="mt-4 text-2xl text-gray-500">
          Design Engineer
        </p>

        <div className="flex gap-4 mt-8">
          <Social icon={<Github />} label="GitHub" />
          <Social icon={<Linkedin />} label="LinkedIn" />
          <Social icon={<Mail />} label="Email" />
        </div>

        <p className="mt-12 text-lg leading-relaxed max-w-2xl">
          Hi! Thanks for stopping by. I'm Rafi, a software engineer based in Semarang,
          Indonesia. I create websites and apps that people truly enjoy. I love
          building digital experiences that are easy to use and make people's lives
          a little easier.
        </p>
      </div>

      {/* ================= STUDIES ================= */}
      <section className="mt-32 max-w-5xl">
        <h2 className="text-4xl font-bold">
          Where I Learned
        </h2>
        <p className="text-gray-500 mt-2 mb-10">
          The foundation of my journey
        </p>

        <div className="space-y-6">
          <StudyCard
            logo="UDN"
            name="Universitas Dian Nuswantoro"
            major="Teknik Informatika"
            level="Bachelor's Degree"
            year="2014 - 2019"
          />

          <StudyCard
            logo="RIA"
            name="SMK N 5 Semarang"
            major="Teknik Komputer dan Jaringan"
            level="Senior High School"
            year="2020 - 2023"
          />
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="mt-32 max-w-4xl">
        <h2 className="text-5xl font-bold mb-16">
          Technical skills
        </h2>

        <div className="space-y-16">

          {/* Software */}
          <div>
            <h3 className="text-3xl font-semibold mb-2">
              Perangkat Lunak
            </h3>
            <p className="text-gray-500 mb-6">
              Tools yang biasa saya gunakan untuk desain dan editing.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "Adobe After Effect", icon: <img width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/adobe-after-effects.png" alt="adobe-after-effects"/> },
                { label: "Adobe Premiere Pro", icon: <img width="96" height="96" src="https://img.icons8.com/material-rounded/96/adobe-premiere-pro.png" alt="adobe-premiere-pro"/> },
                { label: "Capcut", icon: <img width="50" height="50" src="https://static.cdnlogo.com/logos/c/9/capcut.svg" alt="capcut"/> },
                { label: "Canva", icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/canva.png" alt="canva"/> },
                { label: "Figma", icon: <img width="50" height="50" src="https://img.icons8.com/ios/50/figma--v1.png" alt="figma--v1"/> },
              ].map((skill) => (
                <SkillBadge
                  key={skill.label}
                  label={skill.label}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

          {/* Programming */}
          <div>
            <h3 className="text-3xl font-semibold mb-2">
              Bahasa Pemrograman
            </h3>
            <p className="text-gray-500 mb-6">
              Bahasa yang saya gunakan untuk membangun aplikasi.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "Python", icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/python.png" alt="python"/> },
                { label: "JavaScript", icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/javascript.png" alt="javascript"/> },
                { label: "Flutter", icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/flutter.png" alt="flutter"/> },
                { label: "PHP", icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/php-logo.png" alt="php-logo"/> },
              ].map((skill) => (
                <SkillBadge
                  key={skill.label}
                  label={skill.label}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

function Social({ icon, label }: any) {
  return (
    <div className="
      flex items-center gap-2
      px-4 py-2
      rounded-full
      border
      text-sm
      hover:bg-black hover:text-white
      transition
      cursor-pointer
    ">
      {icon}
      {label}
    </div>
  )
}

function StudyCard({ logo, name, major, level, year }: any) {
  return (
    <div className="
      w-full
      flex items-center justify-between
      px-8 py-6
      rounded-2xl
      bg-white/60
      backdrop-blur-xl
      border border-black/5
      shadow-xl
    ">
      <div className="flex items-center gap-6">
        <div className="
          w-14 h-14
          rounded-xl
          bg-white
          flex items-center justify-center
          font-bold
          shadow
        ">
          {logo}
        </div>

        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-black/70">{major}</p>
          <p className="text-black/50 text-sm">{level}</p>
        </div>
      </div>

      <div className="text-black/50">
        {year}
      </div>
    </div>
  )
}

function SkillBadge({ label, icon }: { label: string, icon?: React.ReactNode }) {
  return (
    <div className="
      flex items-center gap-2
      px-5 py-2
      rounded-full
      border border-black/10
      text-sm
      font-medium
      text-black
      hover:bg-[#95959526] hover:text-black
      transition
      cursor-pointer
    ">
      {icon && <span className="w-4 h-4">{icon}</span>}
      {label}
    </div>
  )
}

