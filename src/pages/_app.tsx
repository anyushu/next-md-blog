import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import Layout from '@/components/templates/Layout'
import { defaultSeo } from '@/utils/next-seo.config'
import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" storageKey="anyushu-theme">
      <Layout>
        <DefaultSeo {...defaultSeo} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
