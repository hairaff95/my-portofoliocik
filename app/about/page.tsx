"use client"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen px-8 md:px-24 py-24">
      {/* GRADIENT */}
      <div className="absolute inset-0 page-top-gradient pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* ================= HEADER ================= */}
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-[#1f1f1f]">
            Muhammad Haidar Rafi
          </h1>

          <p className="mt-4 text-2xl text-[#3a3a3a]">
            Software Engineer
          </p>

          <div className="flex gap-4 mt-8">
            <Social icon={<Github />} label="GitHub" />
            <Social icon={<Linkedin />} label="LinkedIn" />
            <Social icon={<Mail />} label="Email" />
          </div>

          <p className="mt-12 text-lg leading-relaxed max-w-2xl text-[#2a2a2a]">
            Hi! Thanks for stopping by. I'm Rafi, a software engineer based in Semarang,
            Indonesia. I create websites and apps that people truly enjoy. I love
            building digital experiences that are easy to use and make people's lives
            a little easier.
          </p>
        </div>

        {/* ================= STUDIES ================= */}
        <section className="mt-32 max-w-5xl">
          <h2 className="text-4xl font-bold text-[#1f1f1f]">
            Where I Learned
          </h2>
          <p className="text-[#4a4a4a] mt-2 mb-10">
            The foundation of my journey
          </p>

          <div className="space-y-6">
            <StudyCard
              logo="/logo-udinus.svg"
              name="Universitas Dian Nuswantoro"
              major="Teknik Informatika"
              level="Bachelor's Degree"
              year="2014 - 2019"
            />

            <StudyCard
              logo="/logo-smkn5smg.svg"
              name="SMK N 5 Semarang"
              major="Teknik Komputer dan Jaringan"
              level="Senior High School"
              year="2020 - 2023"
            />
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="mt-32 max-w-4xl">
          <h2 className="text-5xl font-bold mb-16 text-[#1f1f1f]">
            Technical skills
          </h2>

          <div className="space-y-16">
            <SkillSection
              title="Perangkat Lunak"
              desc="Tools yang biasa saya gunakan untuk desain dan editing."
              items={[
                { label: "Adobe After Effect", icon: <img src="https://img.icons8.com/ios-glyphs/90/adobe-after-effects.png" /> },
                { label: "Adobe Premiere Pro", icon: <img src="https://img.icons8.com/material-rounded/96/adobe-premiere-pro.png" /> },
                { label: "Capcut", icon: <img src="https://static.cdnlogo.com/logos/c/9/capcut.svg" /> },
                { label: "Canva", icon: <img src="https://img.icons8.com/ios-filled/50/canva.png" /> },
                { label: "Figma", icon: <img src="https://img.icons8.com/ios/50/figma--v1.png" /> },
              ]}
            />

            <SkillSection
              title="Bahasa Pemrograman"
            desc="Bahasa yang saya gunakan untuk membangun aplikasi."
            items={[
              { label: "Python", icon: <img src="https://img.icons8.com/ios-filled/50/python.png" /> },
              { label: "JavaScript", icon: <img src="https://img.icons8.com/ios-filled/50/javascript.png" /> },
              { label: "Flutter", icon: <img src="https://img.icons8.com/ios-filled/50/flutter.png" /> },
              { label: "PHP", icon: <img src="https://img.icons8.com/ios-filled/50/php-logo.png" /> },
            ]}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

/* ---------------- COMPONENTS ---------------- */

function Social({ icon, label }: any) {
  return (
    <div className="
      flex items-center gap-2
      px-4 py-2
      rounded-full
      border border-black/20
      text-sm text-[#1f1f1f]
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
      bg-white/70
      border border-black/5
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-lg
    ">
      <div className="flex items-center gap-6">
        {/* LOGO */}
        <div className="
          w-14 h-14
          rounded-xl
          bg-white
          flex items-center justify-center
          shadow
          overflow-hidden
        ">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-xl font-semibold text-[#1f1f1f]">{name}</h3>
          <p className="text-[#3a3a3a]">{major}</p>
          <p className="text-[#5a5a5a] text-sm">{level}</p>
        </div>
      </div>

      <div className="text-[#5a5a5a]">
        {year}
      </div>
    </div>
  )
}


function SkillSection({ title, desc, items }: any) {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-2 text-[#1f1f1f]">{title}</h3>
      <p className="text-[#4a4a4a] mb-6">{desc}</p>

      <div className="flex flex-wrap gap-4">
        {items.map((item: any) => (
          <SkillBadge key={item.label} label={item.label} icon={item.icon} />
        ))}
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
      text-sm font-medium
      text-[#1f1f1f]
      hover:bg-black/5
      transition
      cursor-pointer
    ">
      {icon && <span className="w-5 h-5">{icon}</span>}
      {label}
    </div>
  )
}

