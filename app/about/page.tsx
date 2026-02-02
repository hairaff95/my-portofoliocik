"use client"
import { Github, Linkedin, Mail } from "lucide-react"
import ProfileCard from "@/components/profile-card"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen px-8 md:px-24 py-28 bg-main text-main">
      <div className="absolute inset-0 page-top-gradient pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <section
          className="
            grid grid-cols-1 lg:grid-cols-[1fr_280px]
            gap-16
            items-start
          "
        >
          {/* PROFILE CARD */}
          <div
            className="
              order-1
              lg:order-2
              flex justify-center lg:justify-end
            "
          >
            <ProfileCard />
          </div>

          {/* TEXT CONTENT */}
          <div className="order-2 lg:order-1">
            <h1 className="text-[28px] leading-[1.2] font-semibold
  md:text-6xl lg:text-7xl">
              Muhammad Haidar Rafi
            </h1>

            <p className="mt-2 text-[15px] md:text-2xl text-soft">
              Software Engineer
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <Social
                icon={<Github size={18} />}
                label="GitHub"
                href="https://github.com/hairaff95"
              />
              <Social
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/muhammad-haidar-rafi-k-667032386/"
              />
              <Social
                icon={<Mail size={18} />}
                label="Email"
                href="mailto:haidarrafi95@gmail.com"
              />
            </div>

            <p className="mt-6
  text-[14px] leading-[1.6]
  md:text-lg
  max-w-2xl
  text-soft">
              Hi! Thanks for stopping by. I'm Rafi, a software engineer based in
              Semarang, Indonesia. I create websites and apps that people truly enjoy.
              I love building digital experiences that are easy to use and make
              people's lives a little easier.
            </p>
          </div>
        </section>

        {/* ================= STUDIES ================= */}
        <section className="mt-32 max-w-5xl">
          <h2 className="text-[22px] font-semibold
  md:text-4xl">
            Where I Learned
          </h2>
          <p className="text-soft mt-2 mb-10">
            The foundation of my journey
          </p>

          <div className="space-y-6">
            <StudyCard
              logo="/logo-udinus.svg"
              name="Universitas Dian Nuswantoro"
              major="Teknik Informatika"
              level="Bachelor's Degree"
              year="2023 - Sekarang"
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
          <h2 className="text-[22px] font-semibold
  md:text-4xl">
            Technical skills
          </h2>

          <div className="space-y-16">
            <SkillSection
              title="Perangkat Lunak"
              desc="Tools yang biasa saya gunakan untuk desain dan editing."
              items={[
                { label: "Adobe After Effect", icon: <img src="https://img.icons8.com/color/48/adobe-after-effects--v1.png" /> },
                { label: "Adobe Premiere Pro", icon: <img src="https://img.icons8.com/color/48/adobe-premiere-pro--v1.png" /> },
                { label: "Capcut", icon: <img src="https://static.cdnlogo.com/logos/c/9/capcut.svg" /> },
                { label: "Canva", icon: <img src="https://img.icons8.com/fluency/48/canva.png" /> },
                { label: "Figma", icon: <img src="https://img.icons8.com/color/48/figma--v1.png" /> },
              ]}
            />

            <SkillSection
              title="Bahasa Pemrograman"
              desc="Bahasa yang saya gunakan untuk membangun aplikasi."
              items={[
                { label: "Python", icon: <img src="https://img.icons8.com/color/48/python--v1.png" /> },
                { label: "JavaScript", icon: <img src="https://img.icons8.com/color/48/javascript--v1.png" /> },
                { label: "Flutter", icon: <img src="https://img.icons8.com/color/48/flutter.png" /> },
                { label: "PHP", icon: <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-hypertext-preprocessor-a-widely-used-open-source-general-purpose-scripting-language-logo-color-tal-revivo.png" /> },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

/* ================= COMPONENTS ================= */

function Social({ icon, label, href }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-theme
        text-sm text-main
        hover:bg-card
        transition
      "
    >
      {icon}
      {label}
    </a>
  )
}

function StudyCard({ logo, name, major, level, year }: any) {
  return (
    <div
      className="
        w-full
        flex flex-col md:flex-row
        gap-4 md:gap-6
        md:items-center md:justify-between
        px-6 md:px-8
        py-5 md:py-6
        rounded-2xl
        bg-card
        border border-theme
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-soft shadow overflow-hidden flex items-center justify-center shrink-0">
          <img src={logo} alt={name} className="w-full h-full object-contain" />
        </div>

        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-main">
            {name}
          </h3>
          <p className="text-soft text-sm md:text-base">
            {major}
          </p>
          <p className="text-soft text-xs md:text-sm">
            {level}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="text-soft text-sm md:text-base md:text-right">
        {year}
      </div>
    </div>
  )
}

function SkillSection({ title, desc, items }: any) {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-2 text-main">{title}</h3>
      <p className="text-soft mb-6">{desc}</p>

      <div className="flex flex-wrap gap-4">
        {items.map((item: any) => (
          <SkillBadge key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  )
}

function SkillBadge({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <div
      className="
        flex items-center gap-2
        px-3 py-1.5
        rounded-full
        border border-theme
        text-[13px] font-medium
        text-main
        hover:bg-card
        transition
        dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]
      "
    >
      {icon && (
        <span
          className="
            w-5 h-5
            [&_img]:w-full [&_img]:h-full
            [&_img]:opacity-80
            dark:[&_img]:invert
            dark:[&_img]:brightness-200
            [&_img]:transition
          "
        >
          {icon}
        </span>
      )}
      {label}
    </div>
  )
}




