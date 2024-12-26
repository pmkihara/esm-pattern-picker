import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import '@/styles/globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ES Pattern Picker',
  description: 'Helper for choosing which patterns to craft on ES music!!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  )
}
