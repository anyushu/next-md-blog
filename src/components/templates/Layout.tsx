import { ReactNode } from 'react'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
