"use client"
import React, { useState } from "react"
import MobileMenuDrawer from "@/components/MobileMenuDrawer"
import Navbar from "@/components/Navbar"

const DashboardShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <MobileMenuDrawer open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div className="w-full md:w-[92%] lg:w-[84%] xl:w-[86%] flex flex-col">
        <Navbar onMenuClick={() => setMobileMenuOpen(true)} />
        {children}
        <div className="flex items-center justify-center mt-6 text-xs text-gray-400 mr-32 mr-fix">
          &copy; {new Date().getFullYear()} Smart Schooling All rights reserved. Developed by Patrick U. Nnodu
        </div>
      </div>
    </>
  )
}

export default DashboardShell
