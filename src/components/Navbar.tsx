"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getRole } from "@/lib/auth"

interface NavbarProps {
  onMenuClick?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [role, setRole] = useState<string | null>(() => getRole())

  useEffect(() => {
    const onAuthChange = () => setRole(getRole())
    // listen for demo auth changes in the same tab
    window.addEventListener("sma_auth_change", onAuthChange)
    return () => window.removeEventListener("sma_auth_change", onAuthChange)
  }, [])

  const roleLabel = role ? `${role.charAt(0).toUpperCase()}${role.slice(1)}` : "Admin"

  return (
    <div className="flex items-center justify-between p-4">
      {/* Menu button for small screens */}
      <button
        className="md:hidden p-2 rounded-full hover:bg-gray-100 mr-2"
        aria-label="Open menu"
        onClick={onMenuClick}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="8" x2="24" y2="8"/><line x1="4" y1="16" x2="24" y2="16"/><line x1="4" y1="24" x2="24" y2="24"/></svg>
      </button>

      {/* SEARCH BAR AND INPUT CONTAINER*/}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* USER AND ICONS MAIN CONTAINER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Patrick</span>
          <span className="text-[10px] text-gray-500 text-right">{roleLabel}</span>
        </div>
        <Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full" />
      </div>
    </div>
  )
}

export default Navbar