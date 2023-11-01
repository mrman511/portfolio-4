import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paul Bodner Portfolio',
  description: 'Online Portfolio for Paul Bodner. A Software Delevoper based out of New Westminster, British Columbia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
