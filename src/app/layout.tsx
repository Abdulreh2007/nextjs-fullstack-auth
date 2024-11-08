import './globals.css'
import { Inter } from 'next/font/google'
import Responsivenav from './navbar/responsivenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TOW TRUCK BOOKING APP',
  description: 'tow truck booking app where user can book ride ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        </body>
    </html>
  )
}
