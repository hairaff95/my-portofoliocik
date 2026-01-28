"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        min-h-screen
        flex items-center justify-center
        text-center
        px-8 md:px-24
      "
    >
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 page-top-gradient pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl">
        <h1
          className="
            text-3xl
            md:text-5xl
            lg:text-7xl
            font-bold
            text-black
            leading-tight
          "
        >
          Hai, Saya Rafi <br />
          a software engineer based in Semarang, Indonesia
        </h1>

        <p
          className="
            mt-6
            text-[#3a3a3a]
            text-sm
            md:text-lg
            max-w-2xl
            mx-auto
          "
        >
          Frontend developer focused on clean UI and solid UX.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="
              inline-flex items-center
              px-8 py-3
              rounded-full
              bg-white
              border border-black/20
              text-black
              text-sm md:text-base
              transition-all duration-300
              hover:shadow-md
            "
          >
            View My Works
          </a>
        </div>
      </div>
    </motion.section>
  )
}
