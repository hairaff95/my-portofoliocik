"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Home, User, Briefcase, Image } from "lucide-react"

export default function FloatingNavbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [hash, setHash] = useState("")

  // Track hash changes (Home & Projects)
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  const handleProjectsClick = async () => {
    if (pathname !== "/") {
      await router.push("/#projects")
    }

    requestAnimationFrame(() => {
      const el = document.getElementById("projects")
      el?.scrollIntoView({ behavior: "smooth" })
    })
  }

  // ✅ ACTIVE LOGIC (SATU SUMBER KEBENARAN)
  const isHomeActive =
    pathname === "/" && (hash === "" || hash === "#home")

  const isProjectsActive =
    pathname === "/" && hash === "#projects"

  const isAboutActive = pathname === "/about"
  const isGalleryActive = pathname === "/gallery"

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
        {/* HOME */}
        <NavLink
          href="/#home"
          label="Home"
          icon={<Home size={16} />}
          active={isHomeActive}
        />

        {/* ABOUT */}
        <NavLink
          href="/about"
          label="About"
          icon={<User size={16} />}
          active={isAboutActive}
        />

        {/* PROJECTS */}
        <button
          onClick={handleProjectsClick}
          className={`
            flex items-center gap-2
            px-2 py-1.5
            md:px-3 md:py-2
            rounded-full
            transition
            ${
              isProjectsActive
                ? "bg-black/10 text-black"
                : "hover:bg-black/10 text-black/70"
            }
          `}
        >
          <Briefcase size={16} />
          <span className="hidden md:inline">Projects</span>
        </button>

        {/* GALLERY */}
        <NavLink
          href="/gallery"
          label="Gallery"
          icon={<Image size={16} />}
          active={isGalleryActive}
        />
      </div>
    </div>
  )
}

/* ----------------------------- */
/* Reusable NavLink */
/* ----------------------------- */

function NavLink({
  href,
  icon,
  label,
  active,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-2
        px-2 py-1.5
        md:px-3 md:py-2
        rounded-full
        transition
        ${
          active
            ? "bg-black/10 text-black"
            : "hover:bg-black/10 text-black/70"
        }
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </Link>
  )
}
