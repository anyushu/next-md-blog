import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/function/theme-provider'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.SITE_NAME || 'anyushu',
  description: 'anyushuの個人ブログ'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col">
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
