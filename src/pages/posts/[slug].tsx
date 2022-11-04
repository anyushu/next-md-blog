import { NextPage, InferGetStaticPropsType, GetStaticPropsContext, GetStaticPaths } from 'next'
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

import { getAllPosts, getPostBySlug } from '@/api/post'
import { Button, Container } from '@/components/atoms'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import { PostBody, PostHeader } from '@/components/molecules/Post'
import SocialShare from '@/components/organisms/SocialShare'
import { ogpImageUrl } from '@/utils/blog-helper'
import { siteTitle } from '@/utils/next-seo.config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`
  const postTitle = post.title + ' | ' + siteTitle

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          url: postUrl,
          title: postTitle,
          description: post.description,
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={postUrl}
        title={postTitle}
        images={[ogpImageUrl()]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={['Anyushu']}
        publisherName="Anyushu"
        description={post.description || ''}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'HOME',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}`,
          },
          {
            position: 2,
            name: post.title,
            item: postUrl,
          },
        ]}
      />

      <Container>
        <article>
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>
        <div className="mt-16 md:mt-24">
          <SocialShare postUrl={postUrl} postTitle={postTitle} />
        </div>
        <div className="mt-16 text-center md:mt-24">
          <Button href="/">Back Home</Button>
        </div>
        <div className="mt-16 md:mt-24">
          <Breadcrumb
            links={[
              {
                pageTitle: post.title,
                pageUrl: postUrl,
              },
            ]}
          />
        </div>
      </Container>
    </>
  )
}

export default Post

/**
 * get post slug
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

/**
 * get post content
 */
export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const post = getPostBySlug(params?.slug as string, [
    'slug',
    'content',
    'title',
    'description',
    'date',
    'thumbnail',
  ])
  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}
