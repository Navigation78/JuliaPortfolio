import { Lora, Karla } from 'next/font/google'
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '600', '700'],
})

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${karla.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}