import Link from 'next/link'
import Container from '@/components/atoms/Container'
import { siteTitle } from '@/utils/next-seo.config'

const Footer = () => {
  return (
    <footer id="footer" className="py-12 mt-24 bg-gray-100 dark:bg-black-800">
      <Container>
        <div className="text-center">
          <h2 className="text-xl tracking-widest">
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </h2>
          <nav className="flex justify-center my-6 text-sm">
            <Link href="/">
              <a className="hover:text-gray-700">Home</a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/'}>
              <a className="ml-3 hover:text-gray-700" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/'}>
              <a className="ml-3 hover:text-gray-700" rel="noopener noreferrer" target="_blank">
                Twitter
              </a>
            </Link>
          </nav>
          <nav className="flex justify-center my-6 text-sm">
            <Link href="/privacy-policy">
              <a className="hover:text-gray-700">PrivacyPolicy</a>
            </Link>
          </nav>
          <p className="text-xs">© 2021 {siteTitle}.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
