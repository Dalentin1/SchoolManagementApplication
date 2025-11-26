import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pato Smart Schooling Management Web-Application",
  description: "Next.js School Management System",
  authors: [{ name: "Patrick Nnodu", url: "https://github.com/Dalentin1" }],
  applicationName: "Smart Schooling Management Application",
  keywords: ["nextjs", "react", "typescript", "school management application"],
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Prevent flash of wrong theme by applying stored preference before React hydrates */}

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var t=localStorage.getItem('sma_theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
            }}
          />

          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
