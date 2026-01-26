"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <h1 className="text-5xl font-bold">
          Hi, I'm Low Nex  
          I build digital products
        </h1>
        <p className="mt-4 text-gray-500">
          Frontend developer focused on clean UI and solid UX.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded">
          View My Work
        </button>
      </div>
      <div className="h-64 bg-gray-100 rounded-xl" />
    </motion.section>
  )
}
