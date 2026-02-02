"use client"
import { motion } from "framer-motion"

export default function ProjectCell({
  project,
  index,
  activeIndex,
  setActiveIndex,
}: any) {
  const isActive = activeIndex === index

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center cursor-pointer text-main"
      initial="rest"
      animate={isActive ? "hover" : "rest"}
      whileHover="hover"
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => {
        if (!isActive) setActiveIndex(null)
      }}
      onClick={() =>
        setActiveIndex(isActive ? null : index)
      }
    >
      <motion.div
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.25 }}
        className="text-[14px] font-medium z-10"
      >
        {project.title}
      </motion.div>

      <motion.div
        variants={{
          rest: { opacity: 0, scale: 0.96 },
    hover: { opacity: 1, scale: 1 },
  }}
  transition={{ duration: 0.25 }}
  className="
    absolute inset-3 rounded-2xl p-3 flex flex-col gap-3
    border border-theme
    shadow-lg
    dark:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]
  "
  style={{
    background: "var(--bg-card)",
    backdropFilter: "blur(6px)",
        }}
      >
        <div className="w-full h-24 rounded-lg bg-soft" />

        <div>
          <h3 className="text-[14px] font-medium">{project.title}</h3>
          <p className="text-[12px] leading-snug text-soft">{project.desc}</p>
        </div>

        <div className="mt-auto flex gap-2 text-xs">
          <span className="px-2 py-0.5
  text-[11px]
  rounded-md
  bg-soft text-soft">
            {project.tag}
          </span>
          <span className="px-2 py-0.5
  text-[11px]
  rounded-md
  bg-soft text-soft">
            {project.country}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
