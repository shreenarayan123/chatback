import type { Metadata } from 'next'
import { Inter, Playfair_Display, Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import { Toaster } from '@/components/ui/sonner'
import Provider from './providers'

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Chatback',
  description:
    'Chatback is a platform for chatting with your friends and family',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${urbanist.variable} ${urbanist.className} antialiased`}
      >
        <Provider>
          <Navbar />
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
