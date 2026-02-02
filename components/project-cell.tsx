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
      {/* TITLE STATE */}
      <motion.div
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.25 }}
        className="text-[15px] font-medium z-10 text-center px-4"
      >
        {project.title}
      </motion.div>

      {/* CARD STATE */}
      <motion.div
        variants={{
          rest: { opacity: 0, scale: 0.96 },
          hover: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.25 }}
        className="
          absolute inset-4
  rounded-3xl
  p-5
  flex flex-col gap-4
  border border-theme

  shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.06)]
  dark:shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)]
        "
        style={{
          background: "var(--bg-card)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* IMAGE */}
        <div className="w-full h-44 rounded-2xl bg-soft" />

        {/* TEXT */}
        <div>
          <h3 className="text-[16px] font-semibold text-main leading-tight">
            {project.title}
          </h3>
          <p className="text-[13px] leading-snug text-soft mt-1">
            {project.desc}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-auto flex gap-2">
          <span className="
            px-3 py-1
            text-[11px]
            rounded-full
            bg-soft text-soft
          ">
            {project.tag}
          </span>
          <span className="
            px-3 py-1
            text-[11px]
            rounded-full
            bg-soft text-soft
          ">
            {project.country}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}
