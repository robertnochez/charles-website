import React from "react"
import type { Metadata } from 'next'
import { Arimo} from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const arimo = Arimo({subsets:["latin"], variable: "--font-arimo"})

export const metadata: Metadata = {
  title: 'Charles Lai | Filmmaker & Photographer',
  description: 'Filmmaker and photographer creating and sharing stories through the visual arts.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${arimo.variable} font-sans antialiased`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}