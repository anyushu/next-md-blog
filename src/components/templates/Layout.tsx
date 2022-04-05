import { FC, ReactNode } from 'react'
import CookieConsent from 'react-cookie-consent'
import colors from 'tailwindcss/colors'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {process.env.NEXT_PUBLIC_APP_ENV === 'production' && (
        <CookieConsent
          cookieName="AnyushuGDPR"
          style={{ background: colors.slate[500] }}
          buttonStyle={{ background: colors.slate[900], color: colors.white }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      )}
    </>
  )
}

export default Layout
