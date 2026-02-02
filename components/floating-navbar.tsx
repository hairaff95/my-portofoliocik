"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, Image, Sun, Moon } from "lucide-react"

export default function FloatingNavbar({
  dark,
  toggleTheme,
}: {
  dark: boolean
  toggleTheme: () => void
}) {
  const pathname = usePathname()

  const isHome = pathname === "/"
  const isAbout = pathname === "/about"
  const isGallery = pathname === "/gallery"
  const projectHref = pathname === "/" ? "#projects" : "/#projects"

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          navbar-glass
          flex items-center gap-2
          px-3 py-2
          rounded-full
        "
      >
        <NavLink href="/" label="Home" icon={<Home size={18} />} active={isHome} />
        <NavLink href="/about" label="About" icon={<User size={18} />} active={isAbout} />
        <NavLink href={projectHref} label="Projects" icon={<Briefcase size={18} />} />
        <NavLink href="/gallery" label="Gallery" icon={<Image size={18} />} active={isGallery} />

        <button
          onClick={toggleTheme}
          className="
            nav-item
            p-2 rounded-full
            transition
          "
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  )
}

function NavLink({
  href,
  icon,
  label,
  active,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        nav-item
        flex items-center gap-2
        px-4 py-2
        rounded-full
        text-sm font-medium
        transition-all
        ${active ? "nav-item-active" : ""}
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </Link>
  )
}
