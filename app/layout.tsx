"use client"
import "./globals.css"
import FloatingNavbar from "@/components/floating-navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans relative overflow-x-hidden">
        <FloatingNavbar />
        {children}
      </body>
    </html>
  )
}
