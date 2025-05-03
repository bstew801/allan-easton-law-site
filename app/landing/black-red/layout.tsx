import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Allan & Easton Law",
  description: "Utah Criminal Defense Attorneys",
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
