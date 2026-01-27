import FloatingNavbar from "@/components/floating-navbar"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FloatingNavbar />
      {children}
    </>
  )
}
