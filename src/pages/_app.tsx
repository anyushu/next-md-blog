import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from '@/components/templates/Layout'
import { GTM_ID } from '@/utils/gtm'
import { defaultSeo } from '@/utils/next-seo.config'
import 'dracula-ui/styles/dracula-ui.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Layout>
        {GTM_ID && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                  `,
            }}
          />
        )}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
