"use client"
import { motion } from "framer-motion"

export default function ProjectCell({ project }: any) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden"
    >
      <motion.div
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="text-xl font-semibold"
      >
        {project.title}
      </motion.div>

      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-4 rounded-2xl bg-black text-white p-6 flex flex-col justify-between"
      >
        <div>
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm opacity-70">{project.desc}</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-white/10 rounded">{project.tag}</span>
          <span className="px-2 py-1 bg-white/10 rounded">{project.country}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
