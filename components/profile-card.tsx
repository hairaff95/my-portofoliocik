"use client"

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-5">

      {/* PROFILE IMAGE */}
      <div className="
        w-[220px] h-[220px]
        rounded-full
        overflow-hidden
        bg-white
      ">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LOCATION */}
      <div className="flex items-center gap-2 text-lg text-black">
        <img
          width="22"
          height="22"
          src="https://img.icons8.com/ios/50/earth-planet.png"
          alt="earth-planet"
        />
        Asia/Semarang
      </div>

      {/* LANGUAGE BUTTONS */}
      <div className="flex gap-3 mt-1">
        <LangButton label="English" />
        <LangButton label="Bahasa" />
      </div>
    </div>
  )
}

/* ---------------- BUTTON ---------------- */

function LangButton({ label }: { label: string }) {
  return (
    <div
      className="
        px-5 py-2
        rounded-xl
        text-sm
        text-black/80
        border
        border-black/20
        bg-white/70
      "
    >
      {label}
    </div>
  )
}
