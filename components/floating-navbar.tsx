"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Home, User, Briefcase, Image } from "lucide-react"

export default function FloatingNavbar() {
  const router = useRouter()
  const pathname = usePathname()

  const handleProjectsClick = async () => {
    if (pathname !== "/") {
      await router.push("/#projects")
    }

    requestAnimationFrame(() => {
      const el = document.getElementById("projects")
      el?.scrollIntoView({ behavior: "smooth" })
    })
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-full
          bg-white/80
          backdrop-blur-md
          border border-black/10
          shadow-lg
          text-sm
        "
      >
        <NavLink href="/#home" icon={<Home size={16} />} label="Home" />
        <NavLink href="/about" icon={<User size={16} />} label="About" />

        {/* PROJECTS (custom handler) */}
        <button
          onClick={handleProjectsClick}
          className="
            flex items-center gap-2
            px-2 py-1.5
            md:px-3 md:py-2
            rounded-full
            hover:bg-black/10
            transition
          "
        >
          <Briefcase size={16} />
          <span className="hidden md:inline">Projects</span>
        </button>

        <NavLink href="/gallery" icon={<Image size={16} />} label="Gallery" />
      </div>
    </div>
  )
}

function NavLink({ href, icon, label }: any) {
  return (
    <Link
      href={href}
      className="
        flex items-center gap-2
        px-2 py-1.5
        md:px-3 md:py-2
        rounded-full
        hover:bg-black/10
        transition
      "
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </Link>
  )
}
