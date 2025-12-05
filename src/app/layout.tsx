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
    <html lang="en">
      <body className={inter.className}>
        {/* Apply stored theme preference BEFORE React hydrates to prevent flash.
            This script also hides the body briefly to prevent a visible flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  // Hide body to prevent flash while theme is being applied
                  document.body.style.visibility = 'hidden';
                  document.body.style.opacity = '0';
                  
                  var t = localStorage.getItem('sma_theme');
                  if (t === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  
                  // Show body now that theme is applied
                  document.body.style.visibility = 'visible';
                  document.body.style.opacity = '1';
                  document.body.style.transition = 'opacity 0s';
                } catch(e) {
                  // Fallback: show body anyway if error
                  document.body.style.visibility = 'visible';
                  document.body.style.opacity = '1';
                }
              })();
            `,
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
