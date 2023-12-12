import Footer from '@/components/footer'
import GoogleAnalytics from '@/components/functional/google-analytics'
import { ThemeProvider } from '@/components/functional/theme-provider'
import Header from '@/components/header'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP as FontSans } from 'next/font/google'

export const metadata: Metadata = {
  title: process.env.SITE_NAME || 'anyushu',
  description: 'anyushuの個人ブログ',
  authors: {
    url: 'https://github.com/anyushu',
    name: 'anyushu'
  }
}

const fontSans = FontSans({ subsets: ['latin'], display: 'swap' })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={cn('relative flex min-h-screen flex-col', fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="container flex-1 py-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
