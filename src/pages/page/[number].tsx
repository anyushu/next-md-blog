import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import PageNavi from '@/components/molecules/PageNavi'
import Posts from '@/components/templates/Posts'
import { getAllPosts } from '@/libs/post'
import { PER_PAGE } from '@/utils/blog-helper'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts(['slug'])
  const paths = [...Array(Math.ceil(allPosts.length / PER_PAGE))].map((_, i) => ({
    params: {
      number: (i + 1).toString(),
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: GetStaticPropsContext<{ number: string }>) => {
  const allPosts = getAllPosts(['slug', 'title', 'description', 'date', 'thumbnail', 'tags'])

  const isLast = Math.ceil(allPosts.length / PER_PAGE) == Number(context.params?.number)
  const start = PER_PAGE * Number(context.params?.number) - (PER_PAGE - 1)
  const end = isLast ? allPosts.length - 1 : PER_PAGE * Number(context.params?.number)

  return {
    props: {
      allPosts: allPosts.slice(start - 1, isLast ? end + 1 : end),
      totalCount: allPosts.length,
      currentPage: Number(context.params?.number),
    },
  }
}

const PostPage: NextPage<Props> = ({ allPosts, totalCount, currentPage }) => {
  return (
    <>
      <NextSeo
        title={`All Posts - Page ${currentPage}`}
        description="フロントエンドエンジニアのブログ。サッカーと映画が好きです。"
      />
      <Container>
        <Heading h={2} className="mb-6 tracking-wider">
          Page: {currentPage} / {Math.ceil(totalCount / PER_PAGE)}
        </Heading>
        <Posts posts={allPosts} />

        <div className="mt-12">
          <PageNavi totalCount={totalCount} currentPage={currentPage} />
        </div>
      </Container>
    </>
  )
}

export default PostPage
