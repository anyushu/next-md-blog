import type { InferGetStaticPropsType, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Layout from '@/components/templates/Layout'
import { getAllPosts } from '@/libs/post'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags'])
  return {
    props: { allPosts },
  }
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <NextSeo title="Home Page" />
      <Layout>
        <section className="container px-3 mx-auto max-w-5xl">
          <div>
            {allPosts.map((post) => (
              <a href={`/posts/${post.slug}`} key={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </a>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
