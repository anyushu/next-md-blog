import type { InferGetStaticPropsType, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import Hero from '@/components/organisms/Hero'
import Posts from '@/components/templates/Posts'
import { getAllPosts } from '@/libs/post'
import { PER_PAGE } from '@/utils/blog-helper'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'description', 'date', 'thumbnail', 'tags'])
  return {
    props: { allPosts },
  }
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <NextSeo
        description="フロントエンドエンジニアのブログ。サッカーと映画が好きです。"
        canonical={process.env.NEXT_PUBLIC_SITE_URL}
      />
      <Hero />
      <Container>
        <Heading h={2} className="mb-6 tracking-wider">
          Latest posts
        </Heading>
        <Posts posts={allPosts} />
        {allPosts.length > PER_PAGE && (
          <div className="mt-12 text-center">
            <Button href="/page/2">Show More</Button>
          </div>
        )}
      </Container>
    </>
  )
}

export default Home
