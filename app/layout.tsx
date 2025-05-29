import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "cree_thedj - Professional DJ | Electrifying Beats for Unforgettable Nights",
  description:
    "Professional DJ blending House and Afrobeat vibes. Available for clubs, festivals, and private bookings worldwide. Based in Lagos, Nigeria.",
  keywords: "DJ, House Music, Afrobeat, Lagos DJ, Nigerian DJ, Club DJ, Festival DJ, Private Events",
  authors: [{ name: "cree_thedj" }],
  openGraph: {
    title: "cree_thedj - Professional DJ",
    description: "Electrifying Beats for Unforgettable Nights",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "cree_thedj - Professional DJ",
    description: "Electrifying Beats for Unforgettable Nights",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
