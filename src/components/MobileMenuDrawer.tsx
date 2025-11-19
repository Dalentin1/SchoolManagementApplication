"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import Menu from "@/components/Menu"

interface Props {
  open: boolean
  onClose: () => void
}

const MobileMenuDrawer: React.FC<Props> = ({ open, onClose }) => {
  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" onClick={onClose} />
      {/* Drawer */}
      <div className="relative w-64 max-w-[80vw] h-full bg-white shadow-lg flex flex-col p-4 animate-drawer">
        {/* Logo and close button - show brand text on mobile */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="font-bold text-lg">SmartSchool</span>
          </div>
          <button onClick={onClose} aria-label="Close menu" className="p-2 rounded-full hover:bg-gray-200">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        {/* Menu with icons and text always visible */}
        <div className="flex-1 overflow-y-auto">
          <Menu showLabels={true} />
        </div>
      </div>
    </div>
  )
}

export default MobileMenuDrawer
