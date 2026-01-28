"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        min-h-screen
        flex items-center justify-center
        text-center
        px-8 md:px-24
        bg-white
      "
    >
      <div className="max-w-4xl">
        <h1 className="
          text-3xl
          md:text-5xl
          lg:text-10xl
          font-bold
          text-black
          leading-tight
        ">
          Hi, Saya Rafi <br />
          Saya seorang mahasiswa dari Semarang dengan passion di bidang IT.
        </h1>

        <p className="
          mt-6
          text-gray-600
          text-sm
          md:text-lg
          max-w-2xl
          mx-auto
        ">
          Frontend developer focused on clean UI and solid UX.
        </p>

        <div className="mt-10 flex justify-center">
          <a href="#projects"
            className="
              inline-flex items-center gap-2
              px-8 py-3
              rounded-full
              bg-black
              text-white
              text-sm md:text-base
              hover:bg-black/80
              transition
            "
          >
            View My Work
          </a>
        </div>
      </div>
    </motion.section>
  )
}
