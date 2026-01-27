"use client"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen px-8 md:px-24 py-24">
      <div className="max-w-4xl">
        
        <h1 className="text-6xl md:text-7xl font-bold">
          Low Nex
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
          Hi!
            Thanks for stopping by. I'm Rafi, a software engineer based in Semarang, Indonesia. I create websites and apps that people truly enjoy.
            What excites me? Building things that look beautiful and function smoothly. I love creating digital experiences that are easy to use and make people's lives a little easier. Whether it's a website, mobile app, or web platform, I'm always learning new ways to make it better.
            I'm good at solving problems, adapting to new challenges, and always giving my best effort. Whether I'm leading a project or working with a team, I always strive to get the job done and create something we can all be proud of.
        </p>
      </div>

        <section className="mt-32 max-w-5xl">
            <h2 className="text-4xl font-bold">
            Where I Learned
            </h2>
            <p className="text-gray-500 mt-2 mb-10">
            The foundation of my journey
            </p>

            <div className="mt-10 space-y-6">
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
                year="2020-2023"
                />
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
      glass-card
      text-black
      border border-black/5
      shadow-xl
    ">
      <div className="flex items-center gap-6">
        <div className="
          w-14 h-14
          rounded-xl
          bg-white
          text-black
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


