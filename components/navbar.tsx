"use client"
import { useState } from "react"

export default function Navbar() {
  const [dark, setDark] = useState(false)

  return (
    <nav className="flex justify-between items-center py-8">
      <div className="font-bold text-xl">Low Nex</div>
      <div className="flex gap-6 text-sm">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <button onClick={() => {
          setDark(!dark)
        }}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  )
}
