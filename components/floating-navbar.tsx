"use client"
import { Home, User, Briefcase, Image, Sun } from "lucide-react"

export default function FloatingNavbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-white/10
        bg-white/10 dark:bg-black/20
        backdrop-blur-md
        shadow-lg
        text-sm
      ">
        <NavItem icon={<Home size={16} />} label="Home" />
        <NavItem icon={<User size={16} />} label="About" />
        <NavItem icon={<Briefcase size={16} />} label="Work" />
        <NavItem icon={<Image size={16} />} label="Gallery" />
        <button className="
          ml-2
          p-2 rounded-full
          hover:bg-white/10
        ">
          <Sun size={16} />
        </button>
      </div>
    </div>
  )
}

function NavItem({ icon, label, href }: any) {
  return (
    <a
      href={href}
      className="
        flex items-center gap-2
        px-3 py-2
        rounded-full
        hover:bg-white/10
        transition
      "
    >
    <NavItem icon={<Home size={16} />} label="Home" href="#hero" />
    <NavItem icon={<User size={16} />} label="About" href="#about" />
    <NavItem icon={<Briefcase size={16} />} label="Work" href="#work" />
    <NavItem icon={<Image size={16} />} label="Gallery" href="#gallery" />
    </a>
  )
}

