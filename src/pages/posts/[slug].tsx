import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { CodeProps } from 'react-markdown/lib/ast-to-react'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark'
import remarkGfm from 'remark-gfm'
import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import PostHeader from '@/components/molecules/PostHeader'
import SocialShare from '@/components/organisms/SocialShare'
import { getAllPosts, getPostBySlug } from '@/libs/post'
import { siteTitle } from '@/utils/next-seo.config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

/**
 * get post slug
 */
export const getStaticPaths = async () => {
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
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={postUrl}
        title={postTitle}
        images={[``]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={['Anyushu']}
        publisherName="Anyushu"
        description={post.description || ''}
      />
      <Container>
        <article>
          <PostHeader post={post} />
          <ReactMarkdown
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="prose-pre:p-0 prose-pre:m-0 mt-12 w-full max-w-none tracking-wider prose-pre:leading-normal leading-relaxed prose prose-slate dark:prose-invert md:px-24 md:mt-24 lg:prose-lg md:prose-md"
            remarkPlugins={[remarkGfm]}
            components={{
              img: CustomImage,
              code: CodeBlock,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
        <div className="mt-16 md:mt-24">
          <SocialShare postUrl={postUrl} postTitle={postTitle} />
        </div>
        <div className="mt-16 tracking-widest text-center md:mt-24">
          <Button href="/">Back Home</Button>
        </div>
      </Container>
    </>
  )
}

export default Post

/**
 * CodeBlock
 */
const CodeBlock = (props: CodeProps) => {
  const match = /language-(\w+)/.exec(props.className || '')

  return (
    <SyntaxHighlighter
      style={atomOneDark}
      PreTag="div"
      language={match ? match[1] : undefined}
      showLineNumbers={true}
      customStyle={{
        padding: '1em',
      }}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}

/**
 * CustomImage
 */
const CustomImage = ({ src, alt }: { src?: string; alt?: string }) => {
  if (!src) {
    return <></>
  }
  return (
    <div className="relative pt-[56.25%] w-full h-0">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  )
}
