import type React from "react"
import "../src/styles/global.css"

export const metadata = {
  title: "Travel Itinerary App",
  description: "A modern travel itinerary application",
    generator: 'v0.dev'
}

export default function RootLayout({
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
