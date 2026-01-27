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
        flex flex-col
        items-center justify-center
        text-center
        px-8 md:px-24
        md:grid md:grid-cols-2
        md:text-left
        gap-12
        bg-white
        transition-colors duration-300
      "
    >
      <div>
        <h1 className="
          text-3xl
          md:text-5xl
          lg:text-10xl
          font-bold
          text-black
        ">
          Hi, Saya Rafi <br />
          Saya seorang mahasiswa dari Semarang dengan passion di bidang IT.
        </h1>

        <p className="
          mt-4
          text-gray-600
          text-sm
          md:text-base
          max-w-xl
          mx-auto md:mx-0
        ">
          Frontend developer focused on clean UI and solid UX.
        </p>

        <button className="
          mt-6
          px-6 py-3
          bg-black text-white
          rounded-full
          text-sm md:text-base
          transition-colors
        ">
          View My Work
        </button>
      </div>
    </motion.section>
  )
}
