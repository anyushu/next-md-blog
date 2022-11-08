import Link from 'next/link'

import { siteTitle } from '@/utils/next-seo.config'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral mt-24">
      <div className="grid grid-flow-col gap-4">
        <Link href="/">Home</Link>
        <Link
          href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/'}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/'}
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </Link>
        <Link href="/privacy-policy">PrivacyPolicy</Link>
      </div>
      <div>
        <p>© 2022 {siteTitle}.</p>
      </div>
    </footer>
  )
}

export default Footer
