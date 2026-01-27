"use client"
import { Bricolage_Grotesque } from "next/font/google"
import { useEffect } from "react"
import "./globals.css"
import FloatingNavbar from "@/components/floating-navbar"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <FloatingNavbar />
        {children}
      </body>
    </html>
  )
}

