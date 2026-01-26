export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8">
      <div className="font-bold text-xl">Low Nex</div>
      <div className="flex gap-6 text-sm">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
