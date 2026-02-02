"use client"
import { useEffect, useState } from "react"
import "./globals.css"
import FloatingNavbar from "@/components/floating-navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const isDark = saved === "dark"
    setDark(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-main text-main">
        <FloatingNavbar dark={dark} toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  )
}
