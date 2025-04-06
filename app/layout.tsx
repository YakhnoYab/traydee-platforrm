import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  variable: '--font-poppins',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Traydee - all about crypto trading and web3 news',
  description: 'Become a top-notch trader',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${poppins.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
