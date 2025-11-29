import Menu from "@/components/Menu";
import LogoLink from "@/components/LogoLink";
import DashboardShell from "@/components/DashboardShell";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      {/* Sidebar: hidden on small and md screens, visible lg+ */}
      <div className="hidden lg:block w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white">
        <LogoLink />
        <Menu />
      </div>

      {/* Client shell contains mobile menu state and navbar */}
      <DashboardShell>
        {children}
      </DashboardShell>

      <Analytics />
      <SpeedInsights />
    </div>
  )
}