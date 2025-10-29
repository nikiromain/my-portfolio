import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CustomCursor from '@/components/CustomCursor'
import { ThemeProvider } from './ThemeContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  metadataBase: new URL('https://nikisharomain.vercel.app'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
