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
      <div className="flex items-center gap-2 text-lg text-main">
        <img
          width="22"
          height="22"
          src="https://img.icons8.com/color/48/earth-planet--v2.png"
          alt="earth"
          className="dark:invert"
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
        text-main
        border border-theme
        bg-soft
        hover:bg-card
        transition
      "
    >
      {label}
    </div>
  )
}
