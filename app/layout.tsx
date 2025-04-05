import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FreightFlow - Global Freight Transport Platform',
  description: 'Streamline your shipping operations with our comprehensive digital platform',
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