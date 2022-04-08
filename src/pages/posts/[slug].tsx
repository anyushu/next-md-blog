import { NextPage, InferGetStaticPropsType, GetStaticPropsContext, GetStaticPaths } from 'next'
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { CodeProps } from 'react-markdown/lib/ast-to-react'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import YouTube from 'react-youtube'
import remarkGfm from 'remark-gfm'
import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import PostHeader from '@/components/molecules/PostHeader'
import SocialShare from '@/components/organisms/SocialShare'
import { getAllPosts, getPostBySlug } from '@/libs/post'
import { ogpImageUrl } from '@/utils/blog-helper'
import { siteTitle } from '@/utils/next-seo.config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

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
          <ReactMarkdown
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="prose-pre:p-0 prose-pre:m-0 mt-12 w-full max-w-none prose-pre:tracking-normal tracking-wider prose-pre:leading-normal leading-relaxed prose prose-slate dark:prose-invert md:px-24 md:mt-24 lg:prose-lg md:prose-md"
            remarkPlugins={[remarkGfm]}
            components={{
              img: CustomImage,
              pre({ ...props }) {
                return <>{props.children}</>
              },
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
 * CodeBlock
 */
const CodeBlock = (props: CodeProps) => {
  const match = /language-(\w+)/.exec(props.className || '')

  if (!match) {
    return <></>
  }

  if (match[1] == 'twitter') {
    return (
      <div className="my-5">
        <TwitterTweetEmbed tweetId={String(props.children).replace(/\n$/, '')} />
      </div>
    )
  }

  if (match[1] == 'youtube') {
    return (
      <div className="relative pt-[56.25%] my-5 w-full h-0">
        <YouTube
          className="absolute top-0 left-0 w-full h-full"
          videoId={String(props.children).replace(/\n$/, '')}
        />
      </div>
    )
  }

  return (
    <pre>
      <SyntaxHighlighter
        style={atomOneDark}
        PreTag="div"
        language={match[1]}
        showLineNumbers={true}
        customStyle={{
          paddingTop: '1em',
          paddingBottom: '1em',
          lineHeight: 1.5,
        }}
        {...props}
      >
        {String(props.children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </pre>
  )
}

/**
 * CustomImage
 */
const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!props.src) {
    return <></>
  }

  if (props.alt) {
    const imageSizeIndex = props.alt.indexOf('?')
    const imageAlt = props.alt.substring(0, imageSizeIndex)
    const imageSizeStr = props.alt.substring(imageSizeIndex + 1)
    const imageWidth = imageSizeStr.substring(
      imageSizeStr.indexOf('w=') + 2,
      imageSizeStr.indexOf('&'),
    )
    const imageHeight = imageSizeStr.substring(imageSizeStr.indexOf('h=') + 2)

    return (
      <Image
        src={props.src}
        alt={imageAlt}
        width={Number(imageWidth)}
        height={Number(imageHeight)}
      />
    )
  }

  return (
    <span className="block relative pt-[56.25%] w-full h-0">
      <Image src={props.src} alt={props.alt ? props.alt : ''} layout="fill" objectFit="contain" />
    </span>
  )
}
