"use client"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center justify-center px-6 py-32"
    >
      <div className="
        w-full max-w-6xl
        rounded-3xl
        p-12 md:p-16
        text-white
        relative overflow-hidden
        bg-gradient-to-br from-[#0f0f14] via-[#111827] to-black
        shadow-2xl
      ">
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Low Nex
            </h2>
            <p className="mt-4 text-gray-400 max-w-md">
              the only way to do great work is to love what you do. – Steve Jobs
            </p>

            <div className="flex gap-4 mt-6 text-gray-300">
              <Github />
              <Linkedin />
              <Instagram />
              <Twitter />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Portfolio</li>
                <li>Guestbook</li>
                <li>Daily Uses</li>
                <li>Tools</li>
                <li>Under the Hood</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="
          absolute bottom-[-40px] left-0
          text-[120px] md:text-[160px]
          font-bold tracking-tight
          text-white/5 select-none
        ">
          hairaff.
        </div>
      </div>
    </section>
  )
}
