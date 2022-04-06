import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from '@/utils/gtm'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Red+Hat+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-black-900 dark:text-white bg-white dark:bg-black-900">
          {GTM_ID && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
