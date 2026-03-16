import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jamie Gonzalez',
  description: 'Personal site for Jamie Gonzalez, a Brooklyn-based writer, coder, and urbanism nerd.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
