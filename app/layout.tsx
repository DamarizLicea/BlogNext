import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog con TS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <div>
    <div className="text-center bg-slate-900 p-8 mt-3 mb-8 rounded-md">
  <Link href="/">
      <h1 className="text-3xl text-white font-bold"> Pim's Blog </h1>
    </Link>
    </div>
    </div>

  )

  const footer = (
    <div>
      <div className="border-t border-slate-500 mt-12 py-6 text-center text-slate-600"> 
      <p>Hecho por Damariz Licea </p>
      </div>
    </div>

  )



  return (
    <html lang="en">
      <body className={inter.className}>
      {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
