"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const DEFAULT_PASSWORDS: Record<string, string> = {
  admin: "admin1",
  teacher: "teacher1",
  student: "student1",
  parent: "parent1",
}

const LoginModal = ({ open = true }: { open?: boolean }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(open)
  const [role, setRole] = useState<"admin" | "teacher" | "student" | "parent">("admin")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const simulateLogin = (expected: string) => {
    setLoading(true)
    setError("")
    // simulate async request (e.g., to backend) so loader is visible
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        const ok = password === expected
        resolve(ok)
      }, 800)
    })
  }

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault()
    const expected = DEFAULT_PASSWORDS[role]
    setError("")
    setLoading(true)
    const ok = await simulateLogin(expected)
    setLoading(false)
    if (ok) {
      setIsOpen(false)
      // small delay to let the UI update before navigation
      setTimeout(() => {
        switch (role) {
          case "admin":
            router.push("/admin")
            break
          case "teacher":
            router.push("/teacher")
            break
          case "student":
            router.push("/student")
            break
          case "parent":
            router.push("/parent")
            break
        }
      }, 120)
    } else {
      setError("Invalid password for the selected role")
      // shake animation could be added via CSS class toggle
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[92%] max-w-md">
        <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl overflow-hidden mt-32 ">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center text-white text-lg font-bold">SS</div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Welcome back</h2>
              <p className="text-sm text-gray-700">Sign in to access your dashboard. This is a demo: use the default passwords shown below.</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="mt-5 flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-700">Role</label>
            <div className="relative">
              <select value={role} onChange={e => setRole(e.target.value as any)} className="w-full border border-gray-200 rounded-md px-3 py-2 bg-white/80">
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</div>
            </div>

            <label className="text-sm font-medium text-gray-700">Password</label>
            <input disabled={loading} type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border border-gray-200 rounded-md px-3 py-2 bg-white/80" />

            {error && <div className="text-sm text-red-600">{error}</div>}

            <div className="flex items-center justify-between gap-2 mt-2">
              <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md border border-gray-200 text-sm">Cancel</button>

              <button type="submit" disabled={loading} className="relative inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm shadow">
                {loading && (
                  <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75" />
                  </svg>
                )}
                <span>{loading ? "Signing in..." : "Sign in"}</span>
              </button>
            </div>
          </form>

          {/* <div className="mt-4 text-xs text-gray-600">
            <div className="font-medium">Default passwords (demo)</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-gray-700">
              <div className="text-sm">Admin: <code className="bg-gray-100 px-2 py-0.5 rounded">admin1</code></div>
              <div className="text-sm">Teacher: <code className="bg-gray-100 px-2 py-0.5 rounded">teacher1</code></div>
              <div className="text-sm">Student: <code className="bg-gray-100 px-2 py-0.5 rounded">student1</code></div>
              <div className="text-sm">Parent: <code className="bg-gray-100 px-2 py-0.5 rounded">parent1</code></div>
            </div>
          </div>*/}

        </div>

        {/* COPYRIGHT CONTAINER */}
     <div className=" flex items-center justify-center mt-36 text-xs text-black-400 ">
       &copy; {new Date().getFullYear()} Smart Schooling All rights reserved. Developed by Patrick U. Nnodu
      </div>

        {/* decorative bottom accent */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[260px] h-6 rounded-t-full bg-gradient-to-r from-indigo-400 to-blue-300 opacity-30 blur-lg" aria-hidden />
      </div>
      
    </div>

    
  )
}

export default LoginModal
