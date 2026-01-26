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
        px-6
        md:grid md:grid-cols-2
        md:text-left
        gap-12
      "
    >
      <div>
        <h1 className="
          text-3xl
          md:text-5xl
          lg:text-6xl
          font-bold
          text-black dark:text-white
        ">
          Hi, I'm Low Nex <br />
          I build digital products
        </h1>

        <p className="
          mt-4
          text-gray-600 dark:text-gray-400
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
        ">
          View My Work
        </button>
      </div>

      {/* <div className="
        w-40 h-40
        md:w-64 md:h-64
        bg-gray-100 dark:bg-gray-800
        rounded-full
      " /> */}
    </motion.section>
  )
}
