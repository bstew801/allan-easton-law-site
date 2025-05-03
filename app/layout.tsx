import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import FirmLogoHeader from "@/components/firm-logo-header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import AELIAChatPopup from "@/components/aelia-chat-popup"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Allan & Easton Law | Utah Criminal Defense Attorneys",
  description:
    "Allan & Easton defends good people facing tough legal moments in Utah. Experienced criminal defense attorneys specializing in DUI, domestic violence, and drug charges.",
  keywords:
    "Utah criminal defense, DUI defense Utah, domestic violence attorney, drug charges lawyer, Salt Lake City attorney",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`min-h-screen bg-firm-ivory font-sans flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <FirmLogoHeader />
          <main className="flex-grow">{children}</main>
          <Footer />

          {/* Chat Popup Component */}
          <AELIAChatPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}
