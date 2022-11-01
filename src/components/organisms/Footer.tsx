import Link from 'next/link'

import Container from '@/components/atoms/Container'
import { siteTitle } from '@/utils/next-seo.config'

const Footer = () => {
  return (
    <footer id="footer" className="mt-24 border-t border-slate-50 py-12">
      <Container>
        <div className="text-center">
          <h2 className="text-xl tracking-widest">
            <Link href="/">
              <a className="hover:text-cyan-300">{siteTitle}</a>
            </Link>
          </h2>
          <nav className="my-6 flex justify-center text-sm">
            <Link href="/">
              <a className="hover:text-cyan-300">Home</a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/'}>
              <a className="ml-3 hover:text-cyan-300" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/'}>
              <a className="ml-3 hover:text-cyan-300" rel="noopener noreferrer" target="_blank">
                Twitter
              </a>
            </Link>
          </nav>
          <nav className="my-6 flex justify-center text-sm">
            <Link href="/privacy-policy">
              <a className="hover:text-cyan-300">PrivacyPolicy</a>
            </Link>
          </nav>
          <p className="text-xs">© 2021 {siteTitle}.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
