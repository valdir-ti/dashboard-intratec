import './globals.css'
import { Inter } from 'next/font/google'

import Sidebar from "@/app/components/Sidebar";
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard Intratec',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>
          <Header>
            {children}
          </Header>
        </Sidebar>
      </body>
    </html>
  )
}
