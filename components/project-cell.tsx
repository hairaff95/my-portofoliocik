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
      {/* Title default */}
      <motion.div
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.25 }}
        className="text-xl font-semibold z-10"
      >
        {project.title}
      </motion.div>

      {/* Hover card */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.25 }}
        className="
          absolute inset-4
          rounded-2xl
          p-4
          flex flex-col gap-3
          text-black
        "
        style={{
          backgroundColor: "#95959526",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* IMAGE */}
        <div
          className="relative w-full h-32 rounded-xl overflow-hidden"
          style={{
            backgroundColor: project.image
              ? "transparent"
              : "rgba(149,149,149,0.35)",
          }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* TEXT */}
        <div>
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm opacity-70">{project.desc}</p>
        </div>

        {/* TAGS */}
        <div className="mt-auto flex gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-black/10">
            {project.tag}
          </span>
          <span className="px-2 py-1 rounded bg-black/10">
            {project.country}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
