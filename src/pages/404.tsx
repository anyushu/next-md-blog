import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'

const Custom404: NextPage = () => {
  return (
    <>
      <NextSeo noindex={true} description="JAMstack Blog with Notion API x Next.js" />

      <Container className="py-12 text-center">
        <h2 className="text-9xl text-gray-300">404</h2>
        <p className="mt-12">I am sorry, but the page you requested was not found.</p>
        <div className="mt-12">
          <Button href="/">Home</Button>
        </div>
      </Container>
    </>
  )
}

export default Custom404
