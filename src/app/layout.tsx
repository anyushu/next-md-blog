import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.SITE_NAME || 'OrderConnect Template',
  description: ''
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="relative flex min-h-screen flex-col">
        <Header />
        <main className="container flex-1 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
