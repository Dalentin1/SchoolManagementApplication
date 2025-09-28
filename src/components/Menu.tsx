"use client"
import Link from "next/link";
import Image from "next/image"
import { role as demoRole } from "@/lib/data";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getRole, isAuthenticated, clearAuth } from "@/lib/auth"

/* MENU ITEM STRUCTURE */
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/Live.png",
        label: "Live Class",
        href: "/list/liveclass",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

interface MenuProps {
  showLabels?: boolean
}

const Menu: React.FC<MenuProps> = ({ showLabels = false }) => {
  const router = useRouter()
  const [currentRole, setCurrentRole] = useState<string | null>(null)

  useEffect(() => {
    // Read the persisted demo role (if any) so the menu can decide where
    // "Home" should navigate. We also listen for the custom storage event
    // 'sma_auth_change' which is emitted by the auth helper to react to
    // sign-in / sign-out in other parts of the app.
    const update = () => setCurrentRole(isAuthenticated() ? getRole() : null)
    update()
    window.addEventListener("sma_auth_change", update)
    return () => window.removeEventListener("sma_auth_change", update)
  }, [])

  return (
    /* MENU  MAIN CONTAINER*/
    <div className=" mt-4 text-sm ">
      {/* MENU STRUCTURE */}
      { menuItems.map((i) => (
        /* MENU ICON AND LABEL CONTAINER */
        <div className=" flex flex-col gap-2" key={ i.title }>
           {/* MENU TITLES */}
          <span className=" hidden lg:block text-gray-400 font-light my-4">
            { i.title }
          </span>

          {/* ICON IMAGE and  STRUCTURE CONTAINER */}
          { i.items.map((item) => {

            // check the static demo role from data.ts first, if it matches
            // the visible list. We then further allow the persisted current
            // auth role (from localStorage via getRole()) to affect Home and
            // Logout behavior at click-time.
            if(item.visible.includes(demoRole)) {

              // Special-case "Home": when the user is signed in we don't
              // want to navigate back to the public home page ("/"), which
              // in the prior implementation could act like a sign-out or
              // remove the current context. Instead, route the user to the
              // dashboard for their role.
              if (item.label === "Home") {
                const handleHome = (e: React.MouseEvent) => {
                  e.preventDefault()
                  if (currentRole) {
                    // route to the authenticated user's dashboard
                    router.push(`/${currentRole}`)
                  } else {
                    // no authenticated role: go to public homepage
                    router.push(item.href)
                  }
                }

                return (
                  <a key={item.label} onClick={handleHome} className={`flex items-center ${showLabels ? "justify-start" : "justify-center lg:justify-start"} gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer`}>
                    <Image src={item.icon} alt="" width={20} height={20}/>
                    <span className={showLabels ? "block" : "hidden lg:block"}>{item.label}</span>
                  </a>
                )
              }

              // Special-case "Logout": call clearAuth() and navigate to the
              // sign-in page. We intentionally use an anchor-like element with
              // an onClick handler because Logout must run client-side and
              // cannot be expressed as a plain Link href.
              if (item.label === "Logout") {
                const handleLogout = (e: React.MouseEvent) => {
                  e.preventDefault()
                  // clear persisted demo auth state so other components know
                  // the user is signed out
                  clearAuth()
                  // navigate to sign-in page
                  router.push("/sign-in")
                }

                return (
                  <a key={item.label} onClick={handleLogout} className={`flex items-center ${showLabels ? "justify-start" : "justify-center lg:justify-start"} gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer`}>
                    <Image src={item.icon} alt="" width={20} height={20}/>
                    <span className={showLabels ? "block" : "hidden lg:block"}>{item.label}</span>
                  </a>
                )
              }

              // Default rendering for other menu items: use Link so Next can
              // prefetch and perform client navigation.
                return (
                <Link 
                 href= { item.href }
                 key= { item.label }
                 className={`flex items-center ${showLabels ? "justify-start" : "justify-center lg:justify-start"} gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-gray-100 transition-colors`} 
                >
                  <Image src={item.icon} alt="" width={20} height={20}/>
                  <span className={showLabels ? "block" : "hidden lg:block"}>{item.label}</span>
                </Link>
              )
            };
          })}

        </div>

      ))}

    </div>
  );
};

export default Menu