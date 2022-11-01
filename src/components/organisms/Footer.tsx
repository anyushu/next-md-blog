import Link from 'next/link'

import Container from '@/components/atoms/Container'
import { siteTitle } from '@/utils/next-seo.config'

const Footer = () => {
  return (
    <footer id="footer" className="mt-24 border-t border-slate-50 py-12">
      <Container>
        <div className="text-center">
          <h2 className="text-xl tracking-widest">
            <Link href="/" className="hover:text-cyan-300">
              {siteTitle}
            </Link>
          </h2>
          <nav className="my-6 flex justify-center text-sm">
            <Link href="/" className="hover:text-cyan-300">
              Home
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/'}
              className="ml-3 hover:text-cyan-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/'}
              className="ml-3 hover:text-cyan-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </Link>
          </nav>
          <nav className="my-6 flex justify-center text-sm">
            <Link href="/privacy-policy" className="hover:text-cyan-300">
              PrivacyPolicy
            </Link>
          </nav>
          <p className="text-xs">© 2021 {siteTitle}.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
