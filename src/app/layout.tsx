import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.SITE_NAME || 'OrderConnect Template',
  description: ''
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
