import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Baloo_2, Manrope } from 'next/font/google'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baloo2',
})
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'ENStars Music!! Pattern Picker',
  description: 'Helper for choosing which patterns to craft on Enstars Music!!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.variable} ${baloo2.variable} font-sans subpixel-antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
