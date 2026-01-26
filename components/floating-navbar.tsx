"use client"
import { Home, User, Briefcase, Image, Sun } from "lucide-react"

export default function FloatingNavbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="
        flex items-center gap-1
        px-3 py-2
        rounded-full
        bg-white/10 dark:bg-black/30
        backdrop-blur-md
        border border-white/10
        shadow-lg
        text-xs md:text-sm
      ">
        <NavItem icon={<Home size={16} />} label="Home" target="#hero" />
        <NavItem icon={<User size={16} />} label="About" target="#about" />
        <NavItem icon={<Briefcase size={16} />} label="Project" target="#project" />
        <NavItem icon={<Image size={16} />} label="Gallery" target="#gallery" />

        {/* sun icon tetap ada */}
        <button className="
          ml-1
          p-2
          rounded-full
          hover:bg-white/10
          transition
        ">
          <Sun size={16} />
        </button>
      </div>
    </div>
  )
}

function NavItem({ icon, label, target }: any) {
  const handleClick = () => {
    const el = document.querySelector(target)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center gap-2
        px-2 py-1.5
        md:px-3 md:py-2
        rounded-full
        hover:bg-white/10
        transition
      "
    >
      {icon}
      {/* INI KUNCI UTAMANYA */}
      <span className="hidden md:inline">
        {label}
      </span>
    </button>
  )
}
